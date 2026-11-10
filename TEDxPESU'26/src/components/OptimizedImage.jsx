import React from 'react';
import imageManifest from '../data/image-manifest.json';

const UNSPLASH_HOSTS = ['images.unsplash.com', 'plus.unsplash.com'];
const UNSPLASH_WIDTHS = [320, 480, 640, 800, 1000, 1200, 1600];

/**
 * Builds a responsive srcSet for Unsplash URLs. Unsplash resizes on its CDN,
 * so requesting the exact rendered width avoids shipping multi-megabyte
 * originals to phones.
 */
function buildUnsplashSrcSet(src) {
  let url;
  try {
    url = new URL(src);
  } catch {
    return null;
  }
  if (!UNSPLASH_HOSTS.includes(url.hostname)) return null;

  return UNSPLASH_WIDTHS.map((width) => {
    const variant = new URL(src);
    variant.searchParams.set('auto', 'format');
    variant.searchParams.set('fit', 'crop');
    variant.searchParams.set('q', '72');
    variant.searchParams.set('w', String(width));
    return `${variant.toString()} ${width}w`;
  }).join(', ');
}

/**
 * Drop-in replacement for <img> that:
 *  - lazy-loads and async-decodes anything that is not explicitly a priority
 *  - serves AVIF/WebP responsive variants for local /assets images
 *  - requests correctly sized Unsplash images
 *  - reserves intrinsic dimensions to prevent layout shift
 */
export default function OptimizedImage({
  src,
  alt = '',
  className = '',
  style,
  sizes = '100vw',
  priority = false,
  loading,
  decoding = 'async',
  fetchPriority,
  width,
  height,
  fallbackSrc,
  onError,
  onLoad,
  pictureClassName = 'optimized-image-picture',
  ...rest
}) {
  const isPriority = priority || loading === 'eager';
  const resolvedLoading = loading ?? (isPriority ? 'eager' : 'lazy');
  const resolvedPriority = fetchPriority ?? (isPriority ? 'high' : 'low');
  const manifestEntry = imageManifest[src];
  const unsplashSrcSet = buildUnsplashSrcSet(src);

  const handleError = (event) => {
    const image = event.currentTarget;
    if (image.dataset.fallbackApplied === 'true') {
      onError?.(event);
      return;
    }

    // If a generated AVIF/WebP variant is missing, drop the <source> elements so
    // the browser renders the original JPEG/PNG instead of showing a blank box.
    if (manifestEntry) {
      image.closest('picture')?.querySelectorAll('source').forEach((source) => source.remove());
    }

    const nextSrc = fallbackSrc || (manifestEntry ? src : null);
    if (nextSrc && image.getAttribute('src') !== nextSrc) {
      image.dataset.fallbackApplied = 'true';
      image.src = nextSrc;
    }

    onError?.(event);
  };

  const sharedProps = {
    alt,
    className,
    style,
    loading: resolvedLoading,
    decoding,
    sizes,
    onError: manifestEntry || fallbackSrc || onError ? handleError : undefined,
    onLoad,
    width,
    height,
    ...rest,
    // React passes unknown lowercase attributes straight through to the DOM.
    fetchpriority: resolvedPriority,
  };

  if (manifestEntry) {
    const { avif, webp, width: intrinsicWidth, height: intrinsicHeight } = manifestEntry;
    const toSrcSet = (variants) => variants.map((v) => `${v.src} ${v.w}w`).join(', ');

    return (
      <picture className={pictureClassName}>
        {avif?.length > 0 && <source type="image/avif" srcSet={toSrcSet(avif)} sizes={sizes} />}
        {webp?.length > 0 && <source type="image/webp" srcSet={toSrcSet(webp)} sizes={sizes} />}
        <img
          {...sharedProps}
          src={src}
          width={width ?? intrinsicWidth}
          height={height ?? intrinsicHeight}
        />
      </picture>
    );
  }

  return <img {...sharedProps} src={src} srcSet={unsplashSrcSet ?? rest.srcSet} />;
}
