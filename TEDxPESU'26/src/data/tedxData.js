export const EVENT_DETAILS = {
  edition: "2026",
  theme: "CONTRAST IN CONVERGENCE",
  themeTagline: "Where opposing perspectives meet, collide, and create new possibilities.",
  themeDescription: "A day of ideas, stories, and perspectives where opposing worlds meet to create a larger, shared picture. Join us as visionaries from technology, the arts, human biology, and environmental stewardship converge to uncover truths hidden in contrasts.",
  date: "Feb 14, 2026",
  day: "Saturday",
  time: "09:30 AM – 06:00 PM IST",
  venue: "PES University, Bengaluru",
  fullAddress: "PES University Campus, 100 Feet Ring Road, BSK III Stage, Bengaluru, Karnataka 560085",
  type: "In-Person Event",
  experience: "Live Talks · Performances · Ideas · Community · Networking",
  stats: {
    talksCount: "12+",
    attendees: "1,500+",
    performances: "3",
    editions: "5th"
  },
  registrationOpen: true,
  registrationDeadline: "Feb 10, 2026"
};

export const CDN_BASE = "https://ted-x-pesu-2025.vercel.app/";

export const SPEAKERS = [
  {
    id: "ananya-rao",
    name: "Ananya Rao",
    role: "Social Entrepreneur",
    company: "EcoSphere Ventures",
    category: "2026",
    topic: "Regenerating the Commons: When Grassroots Meets Deep Tech",
    image: "/assets/speaker-ananya-avatar.jpg",
    bio: "Ananya Rao is a social entrepreneur whose work bridges indigenous ecological knowledge with scalable circular supply chains. As the founder of EcoSphere Ventures, she has empowered over 40 rural craft cooperatives across South India to access global ethical markets while maintaining zero-waste production cycles. Her mission is to prove that economic resilience and ecological regeneration are not conflicting ideals, but intertwined imperatives.",
    highlights: ["Forbes 30 Under 30 Asia (Social Impact)", "UN Young Environmental Champion Fellow", "Keynote at Global Circular Economy Summit"],
    talkSummary: "In this talk, Ananya breaks down why true sustainability cannot exist in isolation. She demonstrates how contrasting models—ancient community resource pooling and autonomous distributed logistics—can converge to repair fragile ecosystems without leaving human livelihoods behind.",
    quote: "True innovation begins when we stop treating community traditions and modern technology as mortal rivals."
  },
  {
    id: "karan-mehta",
    name: "Karan Mehta",
    role: "AI Researcher",
    company: "NeuralBound AI Labs",
    category: "2026",
    topic: "The Ghost in the Machine: Neuro-Symbolic Harmony and Human Agency",
    image: "/assets/speaker-karan-avatar.jpg",
    bio: "Karan Mehta is an AI scientist and cognitive engineer specializing in neuro-symbolic reasoning architectures and cooperative multi-agent intelligences. Having trained at IIT Madras and CMU, Karan leads breakthrough research into explainable generative systems that harmonize deterministic mathematical logic with statistical neural intuition.",
    highlights: ["Author of 14 peer-reviewed NeurIPS & ICML papers", "Adviser to National AI Ethics Taskforce", "Pioneer of verifiable reasoning in autonomous agents"],
    talkSummary: "Can an algorithm truly 'understand' what it creates? Karan guides us into the colliding worlds of black-box statistical learning and crystal-clear deductive reasoning, showing how the contrast between neural unpredictability and mathematical proof creates the next frontier of human-AI collaboration.",
    quote: "Intelligence is not a solitary monolith; it is an electric dialogue between chaotic intuition and structured reason."
  },
  {
    id: "ira-sen",
    name: "Ira Sen",
    role: "Filmmaker",
    company: "Studio Kalpana",
    category: "2026",
    topic: "Framing the Invisible: Cinema at the Collision of Myth and Modernity",
    image: "/assets/speaker-ira-avatar.jpg",
    bio: "Ira Sen is an internationally acclaimed documentary director and narrative filmmaker whose films explore how urbanization disrupts ancestral storytelling traditions. Her work has screened at the International Film Festival of Rotterdam, Sundance, and Mumbai Film Festival. Ira fuses tactile 16mm celluloid textures with algorithmic volumetric lighting to tell poignant tales of human dislocation and resilience.",
    highlights: ["Golden Conch Winner at MIFF", "National Film Award Nominee", "Member of the International Documentary Association"],
    talkSummary: "Ira explores the visual tension between age-old oral folklore and high-speed synthetic imagery. Through clips from her upcoming film, she reveals how embracing cultural dissonance on screen allows storytellers to capture emotional truths that polished fiction cannot touch.",
    quote: "When a camera looks at conflicting worlds, it should not seek harmony—it should capture the friction where sparks fly."
  },
  {
    id: "rishi-varma",
    name: "Rishi Varma",
    role: "Sustainability Advocate",
    company: "TerraRevive Materials",
    category: "2026",
    topic: "Bio-Constructs: Turning Agricultural Ash into Architectural Gold",
    image: "/assets/speaker-rishi-avatar.jpg",
    bio: "Rishi Varma is an environmental engineer and materials scientist pioneering carbon-negative composites derived from agricultural waste. His startup TerraRevive converts rice husk ash and stubble byproducts into lightweight structural concrete alternatives, actively combating northern India's seasonal air pollution crisis while radically decarbonizing urban construction.",
    highlights: ["Earthshot Prize Finalist (Clean Our Air category)", "TED Global Fellow 2024", "Patented 3 Bio-Composite Material Formulations"],
    talkSummary: "Rishi demonstrates how India's agricultural burning dilemma and booming urban infrastructure appetite can be transformed into complementary solutions. By confronting waste with advanced chemical engineering, he presents a tangible blueprint for living architecture.",
    quote: "The earth does not produce waste; human imagination produces waste when it refuses to connect opposite dots."
  },
  {
    id: "dr-deepti-navaratna",
    name: "Dr. Deepti Navaratna",
    role: "Neuroscientist & Musician",
    company: "National Institute of Advanced Studies (NIAS)",
    category: "2025",
    topic: "The Neural Symphony: How the Brain Decodes Meaning, Rhythm, and Mind",
    image: `${CDN_BASE}static/media/Deepti.4d29908563819e0a28ac.png`,
    bio: "Dr. Deepti Navaratna is a neuroscientist and musician whose research bridges cognitive neuroscience, music cognition, and the humanities, exploring how the brain encodes sound, rhythm, and meaning. She earned her Ph.D. in Neuroscience from the University of New Mexico (2008) and served as an Assistant Neuroscientist at Harvard Medical School and Massachusetts General Hospital (2008–2013). Currently, as the T.V. Raman Pai Chair Professor at the National Institute of Advanced Studies, her work focuses on neurohumanities. Formerly Executive and Regional Director of IGNCA Bengaluru, she is recognized globally with honors including the Clore International Fellowship.",
    highlights: ["Harvard Medical School & Mass General Fellow", "T.V. Raman Pai Chair Professor at NIAS", "Clore International Fellowship Recipient", "Former Executive Director, IGNCA Bengaluru"],
    talkSummary: "Dr. Deepti explores the profound neurobiology of musical perception. She reveals how neurological architecture and ancient modal scales intertwine to cultivate empathy, regulate cognitive states, and preserve memory in neurological trauma.",
    quote: "Music is not merely sound; it is the brain's earliest language for translating sensory chaos into emotional architecture."
  },
  {
    id: "vivek-vijayakumaran",
    name: "Vivek Vijayakumaran",
    role: "Theatre Director & Actor Trainer",
    company: "Our Theatre Collective",
    category: "2025",
    topic: "The Architecture of Silence: Radical Presence on the Contemporary Stage",
    image: `${CDN_BASE}static/media/Vivek.69974d3e33e1f7138ff9.png`,
    bio: "Vivek Vijayakumaran is a multifaceted theatre artist with over 15 years of experience in acting, directing, training, and creating innovative performances. He has trained under legends like Padma Bhushan Heisnam Kanhailal and Guru G. Venu, as well as Italy’s famed Workcenter of Jerzy Grotowski and Thomas Richards. He is the recipient of the INLAKS India Theatre Award (2012) and was featured among Forbes India’s '12 boundary-pushing theatre innovators' (2015). As director, Vivek has helmed productions like 'Imagine a Room', 'Just Hiss', and the non-verbal masterpiece 'IT IS YOU'. He leads Our Theatre Collective and Our Theatre Studio.",
    highlights: ["Forbes India 12 Boundary-Pushing Theatre Innovators", "INLAKS India Theatre Award Winner", "Trained at Workcenter of Jerzy Grotowski, Italy", "Director of Internationally Acclaimed 'BHIMA' & 'IT IS YOU'"],
    talkSummary: "In an era saturated with verbal chatter, what does silence communicate? Vivek illustrates the physical discipline and emotional vulnerability needed to hold an audience through stillness and breath alone.",
    quote: "The moment an actor stops pretending to speak and dares to listen to the room's emptiness, theatre becomes sacred."
  },
  {
    id: "virupakshappa-hovale",
    name: "Virupakshappa K. Hovale",
    role: "Industrial Automation & Robotics Segment Head",
    company: "Larsen & Toubro",
    category: "2025",
    topic: "Unboxing Creativity: The RID Formula in the Age of Intelligent Automation",
    image: `${CDN_BASE}static/media/Virupakshappa.4137a1062e3126ce6ae1.png`,
    bio: "Virupakshappa K. Hovale holds a Bachelor’s degree in Electrical and Electronics Engineering from Mysore University and has completed management and innovation programs from XIM Bhubaneswar, IIM Kashipur, and EMERITUS. He is currently pursuing his Doctorate at Golden Gate University, San Francisco. With over 30 years of experience across industrial automation, robotics, IoT, and energy systems, he has driven growth across India, South Asia, and the APAC region. Author of the bestseller 'Unboxing Creativity', he champions the 'RID Formula' (Reinvention, Innovation, and Design Thinking) and leads Industrial Robotics & Automation at Larsen & Toubro.",
    highlights: ["Author of Bestseller 'Unboxing Creativity'", "30+ Years Leadership in Robotics & Industrial IoT", "Doctoral Researcher at Golden Gate University", "L&T Industrial Automation Segment Lead"],
    talkSummary: "Virupakshappa unpacks why robotics without human-centered design thinking leads to sterile mechanics. He shares the RID formula to unleash disruptive reinvention across factories, smart cities, and human workspaces.",
    quote: "Automation should never replace human wonder; it must liberate human beings to ask more daring questions."
  },
  {
    id: "nidhi-srivatsa",
    name: "Nidhi Srivatsa",
    role: "Assistant Professor of Law & National Yoga Referee",
    company: "PES University",
    category: "2025",
    topic: "Guardians of Heritage: Bridging Intellectual Property, Mindfulness, and Living Traditions",
    image: `${CDN_BASE}static/media/Nidhi.a232914757b7414347ca.png`,
    bio: "Nidhi Srivatsa is an Assistant Professor of Law at PES University whose work elegantly bridges intellectual property, cultural heritage, and wellness practices. She holds a B.A. LL.B and an LL.M in Intellectual Property & Trade Law from Christ (Deemed to be University) and is pursuing her Ph.D. in Law. Recognized as Best Paper Presenter at IIT Kharagpur, HNLU Raipur, and MNLU Aurangabad, she actively speaks on IP rights, culture, and legal education reform. A certified yoga instructor from SVYASA Yoga University with over a decade of experience and a National Level Yoga Referee, Nidhi blends jurisprudence and mindfulness.",
    highlights: ["Assistant Professor of Law at PES University", "Best Paper Presenter at IIT Kharagpur & HNLU", "Certified SVYASA Yoga Master & National Level Referee", "Doctoral Researcher in Cultural IP & Bio-Piracy"],
    talkSummary: "How do modern patents protect or exploit centuries-old indigenous wisdom? Nidhi demystifies traditional knowledge digital libraries, biopiracy cases, and why legal reform requires a mindful ethical grounding.",
    quote: "The law is not a cold parchment of rules; it is a shield forged to protect the soul of collective human ingenuity."
  },
  {
    id: "pooja-salwan",
    name: "Pooja Maheshwari Salwan",
    role: "Executive Education Strategist & Leadership Coach",
    company: "Executive Education Impact",
    category: "2025",
    topic: "The Couture of Conviction: From Fashion Runways to Corporate Boardrooms",
    image: `${CDN_BASE}static/media/Pooja.9de4feab9984f7e4b32f.png`,
    bio: "Pooja Maheshwari Salwan’s career is an inspiring story of transformation, spanning from the world of fashion to the world of executive education. At first glance they seem worlds apart, but for her, both are fundamentally about shaping personality and evoking genuine inner confidence. In fashion, she helped people express their identity through what they wore; in education, she works with corporate leaders to upskill, empower teams, and lead with purpose. A lifelong learner with alumni credentials from SRCC, ISB, NYU, and Imperial College London, she blends creativity with strategic acumen.",
    highlights: ["Alumna of SRCC, ISB, NYU & Imperial College London", "Strategic Advisor to Fortune 500 Leadership Programs", "Pioneer in Cognitive Personal Branding", "Executive Coach for Emerging Tech Leaders"],
    talkSummary: "Pooja shares how superficial perception gives way to authentic leadership presence. She shares principles forged in high-fashion couture applied to transform high-stakes corporate negotiation and board decisions.",
    quote: "Confidence is not the armor you put on to hide fear; it is the clarity you radiate when your purpose and presence align."
  },
  {
    id: "dr-vijaygovindarajan",
    name: "Dr. D. VijayaGovindarajan",
    role: "ENT Surgeon & Healthcare Innovator",
    company: "Govt Vellore Medical College / Mother India ENT Clinic",
    category: "2025",
    topic: "Healing Hands and Hand-Drawn Models: Demystifying Medicine for Rural India",
    image: `${CDN_BASE}static/media/Vijay.4d39fec17006057dc94e.png`,
    bio: "Dr. D. VijayaGovindarajan completed his undergraduate and E.N.T. post-graduate education at Sri Devaraj Urs Medical College, Kolar. He currently serves as an honorary doctor at Government Vellore Medical College and is a consultant at Mother India ENT Clinic, Vellore. Renowned for simplifying complex subjects of E.N.T. using intuitive sketch diagrams and physical hand models, he travels nationally and internationally lecturing to young surgeons. Furthermore, hailing from a family with a 30-year legacy of community service, he conducts free outreach clinics in remote villages across South India.",
    highlights: ["Renowned Consultant ENT Surgeon", "Creator of Intuitive Anatomical Sketch Teaching Systems", "30-Year Public Transport Family Community Legacy", "Pioneer of Free Village ENT Diagnostic Camps"],
    talkSummary: "Dr. Vijay reveals how simple handmade tactile models and whiteboard sketches solve fear and misunderstandings in rural operating rooms far faster than multi-million dollar tech, proving compassion and simplicity can revolutionize healthcare.",
    quote: "A doctor's sharpest surgical scalpel is useless if their tongue cannot comfort a terrified human heart."
  },
  {
    id: "sanchit-batra",
    name: "Sanchit Batra",
    role: "Mentalist & Comedy Illusionist",
    company: "The Art of Wonder",
    category: "Past",
    topic: "The Psychology of Illusion: Why the Brain Wants to Believe",
    image: `${CDN_BASE}static/media/speaker-1.774b239a8f1cd75ade41.png`,
    bio: "Sanchit Batra is an award-winning entertainer renowned for his dynamic blend of comedy, psychology, and mentalism. Crowned the Funniest Comic Magician in Singapore in 2018, his versatile performances have garnered widespread acclaim on Hotstar, NDTV, and News24. He investigates the boundaries of perception and cognitive bias through astonishing interactive deceptions.",
    highlights: ["Singapore's Funniest Comic Magician 2018", "Featured on NDTV, Hotstar, and News24", "Keynote Mentalist for Global Tech Summits"],
    talkSummary: "Sanchit reveals the psychological blind spots that allow illusionists to manipulate perception, proving that what we call 'reality' is largely an internal story authored by cognitive shortcuts.",
    quote: "Magic doesn't happen in the hands of the magician; it happens inside the willing gaps of your own subconscious."
  },
  {
    id: "aditi-arya",
    name: "Aditi Arya Kotak",
    role: "Social Entrepreneur & Miss India 2015",
    company: "Alum-n-i",
    category: "Past",
    topic: "Redefining the Crown: Global Education as a Equalizing Force",
    image: `${CDN_BASE}static/media/speaker-2.88d0bcc7f43a5c2fedfb.png`,
    bio: "Aditi Arya Kotak was crowned Miss India World in 2015. She is a Yale School of Management alumna and co-founder of Alum-n-i, an educational initiative expanding perspectives through mentorship and international university access. Prior to her entrepreneurial ventures, she worked as an analyst at Ernst & Young and has spearheaded grassroots initiatives with nonprofits like Amitasha, Supported Decision Making, and Protsahan.",
    highlights: ["Femina Miss India World 2015", "Yale School of Management Alumna", "Co-Founder of Alum-n-i Mentorship", "Former EY Financial Analyst"],
    talkSummary: "Aditi shares her journey navigating two seemingly conflicting identities: the glamour of national beauty pageantry and the gritty analysis of corporate finance and grassroots educational advocacy.",
    quote: "Do not let other people's labels define the radius of your ambition."
  },
  {
    id: "pradyun-p-rao",
    name: "Pradyun P Rao",
    role: "Student Founder & AI Tinkerer",
    company: "PES University Alum / Tech Incubator",
    category: "Past",
    topic: "The Art of ASKing: Why Curiosity Outpaces Code",
    image: `${CDN_BASE}static/media/speaker-3.3cdaf7adebb4f84dd9d5.png`,
    bio: "Pradyun P Rao is a young builder and PES University Computer Science alumnus who started building companies from his very first semester on campus. From freelance copywriting and fine-tuning generative models to launching web applications, Pradyun champions non-linear education driven by relentless, fearless questioning.",
    highlights: ["Student Entrepreneur of the Year, PESU", "Fine-tuned Open Source LLM Architectures", "Built 5+ Venture MVPs during undergrad"],
    talkSummary: "Pradyun shares stories of how asking seemingly naive questions unlocked doors that formal academic credentials could not open, and why relentless inquiry is the best antidote to algorithmic stagnation.",
    quote: "The future belongs not to those with all the answers, but to those fearless enough to ask the uncomfortable question."
  },
  {
    id: "swathi-vellal",
    name: "Swathi Vellal Raghunandan",
    role: "Founder Director",
    company: "Ishanya India Foundation",
    category: "Past",
    topic: "Inclusion by Design: Assistive Tech and Dignity for Neurodivergent Minds",
    image: `${CDN_BASE}static/media/speaker-4.5baafccd448e37d512b1.png`,
    bio: "Swathi Vellal Raghunandan is the Founder Director of Ishanya India Foundation, a premier NGO in Bangalore empowering persons with disabilities through assistive technology and personalized special education. With Master's degrees in Special Educational Needs from the University of Northampton and Clinical Psychology from Christ University, she is the recipient of the MTC Global Award and the 2024 Amarnath Rajanahally Inclusion Award.",
    highlights: ["Founder, Ishanya India Foundation", "Amarnath Rajanahally Inclusion Award 2024", "Master's in SEN from University of Northampton, UK"],
    talkSummary: "Swathi challenges conventional notions of disability, demonstrating how assistive digital interfaces allow neurodivergent youth to unlock extraordinary vocational and artistic capabilities.",
    quote: "Disability is not an inherent defect of the person; it is a design flaw in a world built for only one type of body and brain."
  },
  {
    id: "sudiptaa-paul",
    name: "Sudiptaa Paul Choudhury",
    role: "Chief Marketing & Growth Officer",
    company: "Shorter Loop / Independent Board Director",
    category: "Past",
    topic: "Agile Humanity: Navigating Corporate Boardrooms and Rapid Scale",
    image: `${CDN_BASE}static/media/Speaker-5.6f7ac77a855add9c1ffb.png`,
    bio: "Sudiptaa Paul Choudhury is a growth leader and Independent Director (IoD) serving across multiple corporate boards. Recognized as 'Woman Executive of the Year' by ET NOW in 2021, she guides tech enterprises through complex scaling phases while keeping human empathy and ethical governance at the focal point.",
    highlights: ["ET NOW Woman Executive of the Year 2021", "Certified Independent Director (IoD)", "Chief Marketing & Growth Officer at Shorter Loop"],
    talkSummary: "Sudiptaa unpacks the critical moments in hyper-growth startups where metrics blind leaders to human culture, and how ethical governance creates lasting enterprise value.",
    quote: "Growth without governance is a fire that consumes itself; empathy is the engine of sustainable triumph."
  },
  {
    id: "nikhil-narendran",
    name: "Nikhil Narendran",
    role: "Partner & Tech Law Authority",
    company: "Trilegal",
    category: "Past",
    topic: "Sovereignty of the Self: The Legal Frontier of Artificial Intelligence and Data",
    image: `${CDN_BASE}static/media/Speaker-6.7b13242d0d355fc8f78a.jpeg`,
    bio: "Nikhil Narendran is a Partner at Trilegal specializing in Technology, Media, and Telecom (TMT) and Artificial Intelligence regulation. He advises prominent multinationals, hyper-growth startups, and policymakers on navigating complex digital governance frameworks, cross-border data sovereignty, and ethical algorithmic compliance.",
    highlights: ["Partner at Trilegal (Leading TMT Practice)", "Chambers & Partners Band 1 Tech Lawyer", "Adviser to International Data Protection Councils"],
    talkSummary: "Nikhil walks through landmark precedents that will decide who owns your synthetic likeness, digital thoughts, and autonomous agent decisions over the next decade.",
    quote: "Law should not lag five years behind the silicon chip; we must write principles that anticipate the future."
  }
];

export const PERFORMERS = [
  {
    id: "team-sanskriti",
    name: "Team Sanskriti",
    role: "Indian Contemporary Dance Troupe",
    organization: "PES University",
    image: `${CDN_BASE}static/media/Sanskriti.91c99bc5fb0a5c74c884.png`,
    description: "Team Sanskriti, founded in 2004, is the flagship Indian contemporary dance team of PES University. What makes them stand out is their signature style—mixing the rich, traditional classical dance forms of India with modern choreographic velocity. Their performances honour cultural roots while adding vibrant contemporary energy.",
    performanceTitle: "Convergence: The Sacred & The Synthetic",
    highlights: ["15+ National Collegiate Dance Championships", "Featured at International Cultural Fests", "20-Year Legacy at PES University"]
  },
  {
    id: "satvik-and-pranav",
    name: "Satvik RK & Pranav Prabhakar",
    role: "Carnatic Fusion & World-Class Beatbox Duo",
    organization: "PES University Music Society",
    image: `${CDN_BASE}static/media/Keys.d882c1b15413270b899d.png`,
    description: "Satvik RK, head of the Music Club of PES and lead vocalist of rock band Youth in Asia, pairs his extensive classical Carnatic vocal mastery with Pranav Prabhakar—a multi-instrumentalist, music producer for feature film 'Kenda' (Amazon Prime), and ranked 10th in the world in the U18 Beatboxing Category. Together, they create an electrifying auditory paradox.",
    performanceTitle: "Ragas in Resonance: Ancient Notes x Sub-Bass Frequencies",
    highlights: ["10th in World U18 Beatboxing Championship", "Music Production for Feature Film 'Kenda' (Amazon Prime)", "Gayana Samaja Classical Competitions Runner-Up"]
  },
  {
    id: "athulya",
    name: "Athulya",
    role: "Indo-Contemporary Ensemble",
    organization: "PES University Alumni Collective",
    image: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&w=800&q=80",
    description: "Athulya is a vibrant semi-classical and indo-contemporary dance collective formed by passionate PES University graduates and alumni of Team Sanskriti. Their choreographies capture the festive essence of Indian traditions with athletic contemporary floorwork and emotional depth.",
    performanceTitle: "Echoes of the Loom: Threads of Heritage",
    highlights: ["Corporate Showcase Headliners across Bengaluru", "Alumni Collective carrying Forward PES Heritage"]
  }
];

export const TEAM_DOMAINS = [
  {
    domain: "Organizing & Core Leads",
    quote: "Guiding the vision, empowering the team.",
    leadRole: "CONVENORS & LEADS",
    mainMembers: [
      { name: "Aarav Sharma", role: "Organizer & Curator", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80" },
      { name: "Meera Iyer", role: "Co-Organizer & Executive Lead", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80" },
      { name: "Diya", role: "Operations Lead", image: `${CDN_BASE}static/media/Diya.5471d69085cff46af86d.jpg` },
      { name: "Mariam", role: "Production Lead", image: `${CDN_BASE}static/media/Mariam.2f715040b2fa9732e094.jpg` },
      { name: "Smruthi", role: "Community Lead", image: `${CDN_BASE}static/media/Smruthi.b30a2ec81788435620d2.png` }
    ],
    supportingMembers: []
  },
  {
    domain: "Design",
    quote: "Connecting Ideas, Creating Experiences.",
    leadRole: "DESIGN CORES",
    mainMembers: [
      { name: "Nikita Rao", role: "Design Head", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80" },
      { name: "Saanvi", role: "Design Core", image: `${CDN_BASE}static/media/Saanvi.c5ddd71ff8d752dd8b61.JPG` },
      { name: "Nirmita", role: "Design Core", image: `${CDN_BASE}static/media/Nirmita.9697d321b04098afcafc.jpg` }
    ],
    supportingMembers: [
      { name: "Jia Arun", role: "UI/UX & Stage Graphics" },
      { name: "Pragnya Bedathur", role: "Visual Branding" },
      { name: "Vashini", role: "Print & Merch Design" }
    ]
  },
  {
    domain: "Content & Curation",
    quote: "Crafting the Visual Symphony.",
    leadRole: "C&C CORES",
    mainMembers: [
      { name: "Devansh Gupta", role: "Curation Head", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80" },
      { name: "Mahi", role: "C&C Core", image: `${CDN_BASE}static/media/Mahi.1b4f12f76d868e58d58f.jpg` },
      { name: "Sohini", role: "C&C Core", image: `${CDN_BASE}static/media/Sohini.23f500fb7ac254e06cb4.jpg` },
      { name: "Avani", role: "C&C Core", image: `${CDN_BASE}static/media/Avani.6b8e5d74893cd8eb803f.jpg` }
    ],
    supportingMembers: [
      { name: "Anushka", role: "Speaker Mentorship" },
      { name: "Arya Rajwade", role: "Talk Research" },
      { name: "Maanasi", role: "Script & Editorial" },
      { name: "Malavika", role: "Theme Synthesis" },
      { name: "Parvathy", role: "Curation Associate" },
      { name: "Raina", role: "Editorial Associate" },
      { name: "Rohini", role: "Speaker Liaison" },
      { name: "Samanyu", role: "Content Strategy" },
      { name: "Sathvik Rao", role: "Speaker Host" },
      { name: "Tanvi", role: "Storyboarding" },
      { name: "Tarunika", role: "Curation Associate" }
    ]
  },
  {
    domain: "Web & Tech Development",
    quote: "Turning ideas into code.",
    leadRole: "TECH LEADS",
    mainMembers: [
      { name: "Rohan Kulkarni", role: "Web & Tech Head", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80" },
      { name: "Siddanth", role: "Tech Lead", image: `${CDN_BASE}static/media/Siddanth.67444f1c4c18523a8d56.jpg` }
    ],
    supportingMembers: [
      { name: "Harsimran Kaur", role: "Frontend Engineer" },
      { name: "Sucheta", role: "Fullstack Developer" }
    ]
  },
  {
    domain: "Event Management (EVM)",
    quote: "Orchestrating moments, shaping lasting memories.",
    leadRole: "EVM CORES",
    mainMembers: [
      { name: "Rejith", role: "EVM Core", image: `${CDN_BASE}static/media/Rejith.551af297f59cd19605a5.jpg` },
      { name: "Ansh", role: "EVM Core", image: `${CDN_BASE}static/media/Ansh.faef7ec49d562d4397a4.jpg` }
    ],
    supportingMembers: [
      { name: "Avantika Kishore", role: "Stage Coordinator" },
      { name: "Piyush Shiv", role: "Auditorium Logistics" },
      { name: "Sharvani", role: "Guest Relations" },
      { name: "Shivangi", role: "Green Room Hospitality" },
      { name: "Shriya M", role: "Crowd Flow" },
      { name: "Syeda Fathima", role: "Ticketing & Badging" },
      { name: "Terrance Chris", role: "Security & Safety" },
      { name: "Varsha", role: "VIP Reception" },
      { name: "Yatin Prabhakar", role: "Equipment Logistics" }
    ]
  },
  {
    domain: "Visual Effects & Media (VE)",
    quote: "Framing stories, bringing visions to life.",
    leadRole: "VE LEAD",
    mainMembers: [
      { name: "Madhav", role: "VE Lead", image: `${CDN_BASE}static/media/Madhav.e404dfa04b4f795ab38b.jpg` }
    ],
    supportingMembers: [
      { name: "Vineeth", role: "Cinematographer" },
      { name: "Aryan", role: "Video Editor" },
      { name: "Kushal", role: "Live Broadcast Engineer" },
      { name: "Nandan", role: "Sound & Acoustic Design" }
    ]
  },
  {
    domain: "Sponsorship & Partnerships",
    quote: "Building partnerships, fueling possibilities.",
    leadRole: "SPONSORSHIP LEAD",
    mainMembers: [
      { name: "Pratyusha", role: "Sponsorship Lead", image: `${CDN_BASE}static/media/pratyusha.9cbf75e3daa56c39d01d.jpg` }
    ],
    supportingMembers: [
      { name: "Arjun", role: "Corporate Outreach" },
      { name: "Devansh Tiwari", role: "Brand Relations" },
      { name: "Harsha Vardhana", role: "Sponsor Deliverables" },
      { name: "Manya Manjunatha", role: "Finance Coordinator" },
      { name: "Sidharth Rao", role: "Partnership Associate" },
      { name: "Sriram", role: "In-kind Partnerships" }
    ]
  },
  {
    domain: "Marketing & Public Relations",
    quote: "Inspiring minds, amplifying voices.",
    leadRole: "MARKETING CORES",
    mainMembers: [
      { name: "Rithvik", role: "Marketing Core", image: `${CDN_BASE}static/media/Rithvik.3f52ce651630067e2b37.jpg` },
      { name: "Arnav", role: "Marketing Core", image: `${CDN_BASE}static/media/Arnav.eef25af59f5fd69fa105.PNG` }
    ],
    supportingMembers: [
      { name: "Anuva Kishore", role: "Social Media Strategist" },
      { name: "Kathi Sibi", role: "Content Creator" },
      { name: "Meghana Sridhar", role: "Campus Ambassador Lead" },
      { name: "Prajwal N", role: "Digital Campaigns" },
      { name: "Sai Sushantha", role: "PR & Media Liaison" },
      { name: "Samhita Rao", role: "Community Engagement" },
      { name: "Saupriya S Y", role: "Influencer Relations" },
      { name: "Sushma Raj", role: "Creative Copywriter" },
      { name: "Vaishnavi PM", role: "Newsletter & Blog Editor" },
      { name: "Vivek Mysore", role: "Campus Activations" }
    ]
  }
];

export const PAST_EDITIONS = [
  {
    year: "2025",
    theme: "Tessellations of Time",
    date: "November 15, 2025",
    description: "A look back at last year's ideas, speakers, and the incredible TEDxPESU community. Centered around how individual human moments, memories, and scientific breakthroughs piece together into the vast mosaic of civilization.",
    attendees: "1,200+",
    talksCount: "8 Talks",
    videoHighlightUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    videoTitle: "TEDxPESU 2025 Official Aftermovie",
    videoDuration: "04:25",
    gallery: [
      { id: 1, src: `${CDN_BASE}static/media/tedx1.b350f35d9c5aca2e2754.JPG`, caption: "The Stage in Crimson Illumination" },
      { id: 2, src: `${CDN_BASE}static/media/tedx2.3fe6e05c142d6bd1d14c.JPG`, caption: "Standing Ovation at Main Auditorium" },
      { id: 3, src: `${CDN_BASE}static/media/tedx3.16afe875d36965606f47.JPG`, caption: "Speaker on the Iconic Red Dot" },
      { id: 4, src: `${CDN_BASE}static/media/tedx4.2917d98f5501beebf37d.png`, caption: "Team Sanskriti Performing Live" },
      { id: 5, src: `${CDN_BASE}static/media/tedx5.18924f345ede0e22e72d.png`, caption: "Audience Engagement & Live Q&A" },
      { id: 6, src: `${CDN_BASE}static/media/tedx6.d8620fc0676b938996a5.png`, caption: "Behind the Scenes Production Crew" },
      { id: 7, src: `${CDN_BASE}static/media/tedx7.164d3d17fc8374a34c53.jpg`, caption: "Interactive Idea Wall & Networking Lounge" },
      { id: 8, src: `${CDN_BASE}static/media/tedx8.95cdec3a3068b44d4b54.jpg`, caption: "Speakers & Organizing Leads Group Photo" }
    ]
  },
  {
    year: "2024",
    theme: "Infinite Horizons",
    date: "November 18, 2024",
    description: "Exploring limitless frontiers across artificial intelligence, social entrepreneurship, deep space, and individual human purpose.",
    attendees: "1,000+",
    talksCount: "7 Talks",
    videoTitle: "TEDxPESU 2024 Highlights",
    videoDuration: "03:45",
    gallery: [
      { id: 9, src: `${CDN_BASE}static/media/tedx9.3174031b2b8c2dca4fe8.png`, caption: "Opening Address & Keynote" },
      { id: 10, src: `${CDN_BASE}static/media/tedx10.b2ab454238d00f5b673f.png`, caption: "Audience Packed Hall" },
      { id: 11, src: `${CDN_BASE}static/media/tedx11.fa635f48b82d7c130fcb.png`, caption: "Fireside Chat with Innovators" },
      { id: 12, src: `${CDN_BASE}static/media/tedx12.14c2d8872657b8927eed.png`, caption: "Closing Musical Performance" }
    ]
  }
];

export const TICKET_TIERS = [
  {
    id: "student",
    name: "PESU Student Pass",
    badge: "Popular for Campus",
    price: 499,
    originalPrice: 799,
    features: [
      "Full Day Access to All 12+ Keynotes",
      "Official TEDxPESU 2026 Swag Kit",
      "Certificate of Participation",
      "Access to Live Cultural Performances",
      "PESU Campus Food & Refreshments Included",
      "Interactive Networking Hub Access"
    ],
    note: "Valid PES University SRN / ID Card Required at Registration",
    cta: "Claim Student Seat"
  },
  {
    id: "general",
    name: "General Delegate Pass",
    badge: "Most Selected",
    price: 899,
    originalPrice: 1299,
    popular: true,
    features: [
      "Full Day Auditorium Seating",
      "Exclusive 2026 Theme Merch Bundle",
      "Curated Delegate Networking Lunch",
      "TEDxPESU Community Lounge Pass",
      "Priority Auditorium Entry",
      "Post-Event Digital Resource Archive"
    ],
    note: "Open to Students, Academicians, and Industry Delegates",
    cta: "Register as Delegate"
  },
  {
    id: "vip",
    name: "VIP / Patron Pass",
    badge: "Exclusive Access",
    price: 1499,
    originalPrice: 2199,
    features: [
      "Front-Row VIP Reserved Seating",
      "Speaker Green Room & VIP Lounge Access",
      "Private High-Tea & Networking with Keynotes",
      "Limited-Edition Hardcover Event Anthology",
      "Fast-Track Check-In & Dedicated Host",
      "Commemorative TEDxPESU 2026 Memento"
    ],
    note: "Strictly limited to 40 delegates to ensure intimate networking",
    cta: "Secure VIP Pass"
  }
];

export const EVENT_SCHEDULE = [
  { time: "08:30 AM – 09:30 AM", title: "Registration & Breakfast", desc: "Badge collection, interactive idea-wall activations, morning brew." },
  { time: "09:30 AM – 10:00 AM", title: "Opening Ceremony", desc: "Welcome address by PES leadership, lamp lighting & theme reveal." },
  { time: "10:00 AM – 11:30 AM", title: "Session I: Technological Horizons", desc: "Keynotes on artificial intelligence, neuro-symbolics, and robotics." },
  { time: "11:30 AM – 12:00 PM", title: "Performance I: Team Sanskriti", desc: "Indo-contemporary convergence performance." },
  { time: "12:00 PM – 01:15 PM", title: "Session II: Human-Centric Resilience", desc: "Talks on cognitive neuroscience, inclusive education, and community healthcare." },
  { time: "01:15 PM – 02:15 PM", title: "Networking Luncheon", desc: "Curated lunch and interactive project booths at the open quadrangle." },
  { time: "02:15 PM – 03:45 PM", title: "Session III: Creative Dissonance & Arts", desc: "Presentations on theatre presence, cinematic folklore, and mentalism." },
  { time: "03:45 PM – 04:15 PM", title: "Performance II: Satvik RK & Pranav", desc: "Carnatic melody colliding with beatbox frequencies." },
  { time: "04:15 PM – 05:30 PM", title: "Session IV: Ecological Frontiers & Closing", desc: "Circular economy, clean-tech materials, and concluding remarks." },
  { time: "05:30 PM – 06:00 PM", title: "Patron High-Tea & Memento Presentation", desc: "VIP photo session, speaker gratitude felicitations." }
];
