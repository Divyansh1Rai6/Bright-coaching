export const siteConfig = {
  name: 'Bright Future Coaching',
  tagline: 'Your Gateway to Academic Excellence',
  phone: '9000012345',
  phoneDisplay: '+91 90000 12345',
  email: 'info@brightfuturecoaching.in',
  address: '24, Shanti Nagar, Vijay Nagar, Indore, Madhya Pradesh 452010',
  addressShort: 'Vijay Nagar, Indore, MP',
  hours: 'Mon – Sat: 7:00 AM – 8:00 PM',
  social: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    youtube: 'https://youtube.com',
    twitter: 'https://twitter.com',
  },
};

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/courses', label: 'Courses' },
  { href: '/results', label: 'Results' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export const heroImage =
  'https://images.pexels.com/photos/3231359/pexels-photo-3231359.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

export const whyChooseUs = [
  {
    icon: 'Award',
    title: 'Experienced Faculty',
    description:
      'Learn from mentors with 15+ years of experience who have guided thousands of rank holders.',
  },
  {
    icon: 'Target',
    title: 'Result-Oriented Approach',
    description:
      'A proven methodology focused on concept clarity, rigorous practice, and exam strategy.',
  },
  {
    icon: 'Users',
    title: 'Small Batch Sizes',
    description:
      'Maximum 30 students per batch ensuring personalised attention for every learner.',
  },
  {
    icon: 'FileText',
    title: 'Comprehensive Study Material',
    description:
      'Research-backed printed notes, practice sheets, and previous year question banks.',
  },
  {
    icon: 'BarChart3',
    title: 'Regular Testing & Analysis',
    description:
      'Weekly tests, monthly mock exams, and detailed performance analytics to track progress.',
  },
  {
    icon: 'Headphones',
    title: 'Doubt Resolution Sessions',
    description:
      'Dedicated doubt-clearing slots every day so no concept is ever left unclear.',
  },
];

export type Course = {
  id: string;
  name: string;
  category: 'School' | 'Competitive';
  level: string;
  description: string;
  duration: string;
  fee: string;
  timing: string;
  subjects: string[];
  seats: string;
  popular?: boolean;
};

export const courses: Course[] = [
  {
    id: 'foundation-9-10',
    name: 'Foundation Program (Class 9–10)',
    category: 'School',
    level: 'Class 9 & 10',
    description:
      'Builds a strong base in Science and Mathematics with early exposure to competitive thinking.',
    duration: '2 Years',
    fee: '₹48,000/year',
    timing: '4:00 PM – 6:30 PM',
    subjects: ['Physics', 'Chemistry', 'Maths', 'Biology'],
    seats: '30 per batch',
    popular: true,
  },
  {
    id: 'science-11-12',
    name: 'Senior Secondary (Class 11–12)',
    category: 'School',
    level: 'Class 11 & 12',
    description:
      'Complete board exam preparation with integrated focus on Science stream subjects.',
    duration: '2 Years',
    fee: '₹55,000/year',
    timing: '7:00 AM – 10:00 AM',
    subjects: ['Physics', 'Chemistry', 'Maths', 'Biology'],
    seats: '30 per batch',
  },
  {
    id: 'jee-main-advanced',
    name: 'JEE Main & Advanced',
    category: 'Competitive',
    level: 'Class 11–12 + Droppers',
    description:
      'Intensive engineering entrance preparation covering PCM with advanced problem-solving techniques.',
    duration: '2 Years / 1 Year',
    fee: '₹75,000/year',
    timing: '8:00 AM – 12:00 PM',
    subjects: ['Physics', 'Chemistry', 'Mathematics'],
    seats: '30 per batch',
    popular: true,
  },
  {
    id: 'neet',
    name: 'NEET Preparation',
    category: 'Competitive',
    level: 'Class 11–12 + Droppers',
    description:
      'Focused medical entrance coaching with emphasis on Biology, Physics, and Chemistry mastery.',
    duration: '2 Years / 1 Year',
    fee: '₹72,000/year',
    timing: '8:00 AM – 12:00 PM',
    subjects: ['Biology', 'Physics', 'Chemistry'],
    seats: '30 per batch',
    popular: true,
  },
  {
    id: 'ntse-olympiad',
    name: 'NTSE & Olympiad Training',
    category: 'School',
    level: 'Class 8–10',
    description:
      'Specialised training for NTSE, NSO, IMO, and other national-level scholarship Olympiads.',
    duration: '1 Year',
    fee: '₹25,000/year',
    timing: '5:00 PM – 7:00 PM',
    subjects: ['MAT', 'SAT', 'Science', 'Maths'],
    seats: '25 per batch',
  },
  {
    id: 'crash-course',
    name: 'Crash Course (JEE/NEET)',
    category: 'Competitive',
    level: 'Class 12 / Droppers',
    description:
      '45-day rapid revision program covering high-yield topics, mock tests, and exam temperament.',
    duration: '45 Days',
    fee: '₹18,000',
    timing: '9:00 AM – 2:00 PM',
    subjects: ['Physics', 'Chemistry', 'Maths/Bio'],
    seats: '40 per batch',
  },
  {
    id: 'dropper-batch',
    name: 'Dropper Batch (Target 2026)',
    category: 'Competitive',
    level: 'Droppers',
    description:
      'Full-year residential-style intensive program for JEE/NEET aspirants repeating a year.',
    duration: '1 Year',
    fee: '₹85,000',
    timing: '7:00 AM – 1:00 PM',
    subjects: ['Physics', 'Chemistry', 'Maths/Bio'],
    seats: '30 per batch',
  },
  {
    id: 'pre-foundation',
    name: 'Pre-Foundation (Class 7–8)',
    category: 'School',
    level: 'Class 7 & 8',
    description:
      'Early nurturing program to develop logical thinking and scientific curiosity in young minds.',
    duration: '1 Year',
    fee: '₹30,000/year',
    timing: '4:30 PM – 6:30 PM',
    subjects: ['Science', 'Maths', 'Mental Ability'],
    seats: '25 per batch',
  },
];

export type Topper = {
  id: string;
  name: string;
  exam: string;
  rank: string;
  score: string;
  year: string;
  image: string;
  quote: string;
};

export const toppers: Topper[] = [
  {
    id: 't1',
    name: 'Aarav Sharma',
    exam: 'JEE Advanced',
    rank: 'AIR 247',
    score: '285 / 360',
    year: '2024',
    image:
      'https://images.pexels.com/photos/2590287/pexels-photo-2590287.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    quote:
      'The faculty at Bright Future believed in me even on tough days. Their test series was exactly what I needed.',
  },
  {
    id: 't2',
    name: 'Priya Verma',
    exam: 'NEET UG',
    rank: 'AIR 312',
    score: '680 / 720',
    year: '2024',
    image:
      'https://images.pexels.com/photos/30876168/pexels-photo-30876168.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    quote:
      'Small batch sizes meant I could ask doubts freely. My Biology teacher made every concept crystal clear.',
  },
  {
    id: 't3',
    name: 'Rohit Singh',
    exam: 'JEE Main',
    rank: '99.89 %ile',
    score: '292 / 300',
    year: '2024',
    image:
      'https://images.pexels.com/photos/37756887/pexels-photo-37756887.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    quote:
      'The daily practice problems and weekly tests built my speed and accuracy step by step.',
  },
  {
    id: 't4',
    name: 'Ananya Gupta',
    exam: 'NEET UG',
    rank: 'AIR 456',
    score: '672 / 720',
    year: '2024',
    image:
      'https://images.pexels.com/photos/19877825/pexels-photo-19877825.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    quote:
      'From average scores to a medical seat — the mentors here transformed my approach to studying.',
  },
  {
    id: 't5',
    name: 'Karan Mehta',
    exam: 'JEE Advanced',
    rank: 'AIR 580',
    score: '268 / 360',
    year: '2023',
    image:
      'https://images.pexels.com/photos/6102858/pexels-photo-6102858.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    quote:
      'The crash course in the final 45 days gave me the edge I needed. Worth every minute.',
  },
  {
    id: 't6',
    name: 'Sneha Rathore',
    exam: 'NEET UG',
    rank: 'AIR 701',
    score: '665 / 720',
    year: '2023',
    image:
      'https://images.pexels.com/photos/31302931/pexels-photo-31302931.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    quote:
      'The study material was so well-structured. I never needed any extra books throughout the year.',
  },
];

export type FacultyMember = {
  name: string;
  subject: string;
  qualification: string;
  experience: string;
  image: string;
};

export const faculty: FacultyMember[] = [
  {
    name: 'Dr. Rajesh Khanna',
    subject: 'Physics',
    qualification: 'Ph.D. Physics, IIT Bombay',
    experience: '18 years',
    image:
      'https://images.pexels.com/photos/38889922/pexels-photo-38889922.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    name: 'Mrs. Sunita Agarwal',
    subject: 'Chemistry',
    qualification: 'M.Sc. Chemistry, BITS Pilani',
    experience: '15 years',
    image:
      'https://images.pexels.com/photos/7176438/pexels-photo-7176438.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    name: 'Mr. Vivek Joshi',
    subject: 'Mathematics',
    qualification: 'M.Sc. Maths, IIT Kanpur',
    experience: '12 years',
    image:
      'https://images.pexels.com/photos/33261949/pexels-photo-33261949.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    name: 'Dr. Meena Tiwari',
    subject: 'Biology',
    qualification: 'Ph.D. Zoology, AIIMS Delhi',
    experience: '16 years',
    image:
      'https://images.pexels.com/photos/14349071/pexels-photo-14349071.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export type Testimonial = {
  name: string;
  role: string;
  content: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    name: 'Sunil & Reena Sharma',
    role: 'Parents of Aarav (JEE 2024)',
    content:
      'We visited three coaching centres before choosing Bright Future. The transparency, regular updates, and genuine care for each student stood out. Our son cracked JEE Advanced with AIR 247.',
    rating: 5,
  },
  {
    name: 'Priya Verma',
    role: 'NEET 2024, AIR 312',
    content:
      'What makes Bright Future different is the doubt resolution culture. No question is ever too small. My confidence grew every week because of the supportive environment.',
    rating: 5,
  },
  {
    name: 'Manish Patel',
    role: 'Parent of Class 10 student',
    content:
      'The foundation program is excellent. My daughter went from being scared of Maths to topping her class. The teachers make learning enjoyable without compromising on rigor.',
    rating: 5,
  },
  {
    name: 'Karan Mehta',
    role: 'JEE Advanced 2023, AIR 580',
    content:
      'The mock tests here are at a different level. By the time I sat for the real exam, I had already solved similar patterns dozens of times. The pressure felt manageable.',
    rating: 5,
  },
  {
    name: 'Anjali Desai',
    role: 'Parent of NEET aspirant',
    content:
      'The small batch size is a game-changer. My daughter gets individual attention and the teachers actually know her strengths and weaknesses. Worth every rupee.',
    rating: 5,
  },
];

export const stats = [
  { label: 'Years of Excellence', value: 18, suffix: '+' },
  { label: 'Students Enrolled', value: 12000, suffix: '+' },
  { label: 'Selections in JEE/NEET', value: 3400, suffix: '+' },
  { label: 'Expert Faculty', value: 35, suffix: '+' },
];

export const galleryImages = [
  {
    url: 'https://images.pexels.com/photos/20200756/pexels-photo-20200756.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Modern educational building in India with contemporary architecture at Bright Future Coaching',
    category: 'Infrastructure',
  },
  {
    url: 'https://images.pexels.com/photos/12199101/pexels-photo-12199101.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Group of Indian girls engaged in a classroom learning session at Bright Future Coaching',
    category: 'Lectures',
  },
  {
    url: 'https://images.pexels.com/photos/18012458/pexels-photo-18012458.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Group of Indian children engaging in learning and interaction in a classroom',
    category: 'Lectures',
  },
  {
    url: 'https://images.pexels.com/photos/37145891/pexels-photo-37145891.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Modern red-brick educational campus in India with greenery surrounding Bright Future Coaching',
    category: 'Infrastructure',
  },
  {
    url: 'https://images.pexels.com/photos/18870256/pexels-photo-18870256.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'A teacher helping Indian students with their coursework in a bright classroom',
    category: 'Lectures',
  },
  {
    url: 'https://images.pexels.com/photos/6217466/pexels-photo-6217466.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Group of Indian schoolgirls in uniforms with neatly braided hair during a class',
    category: 'Student Life',
  },
  {
    url: 'https://images.pexels.com/photos/3231358/pexels-photo-3231358.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Students listening attentively during a coaching class',
    category: 'Student Life',
  },
  {
    url: 'https://images.pexels.com/photos/18650478/pexels-photo-18650478.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Young learners studying together in a bright classroom',
    category: 'Classrooms',
  },
];

export const infrastructureHighlights = [
  {
    icon: 'Building2',
    title: 'Modern Smart Classrooms',
    description:
      '12 air-conditioned classrooms equipped with digital boards, projectors, and audio systems for immersive learning.',
  },
  {
    icon: 'Library',
    title: 'Well-Stocked Library',
    description:
      'Over 5,000 reference books, competitive exam guides, and a quiet reading hall open till 8 PM daily.',
  },
  {
    icon: 'FlaskConical',
    title: 'Science Laboratories',
    description:
      'Fully equipped Physics, Chemistry, and Biology labs for hands-on practical learning and experiments.',
  },
  {
    icon: 'MonitorPlay',
    title: 'Online Test Platform',
    description:
      'Computer lab with 40 terminals for real-time online mock tests simulating actual exam conditions.',
  },
  {
    icon: 'Coffee',
    title: 'Student Lounge & Cafeteria',
    description:
      'A hygienic cafeteria and relaxation lounge where students can recharge between classes and study sessions.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Safe & Monitored Campus',
    description:
      '24/7 CCTV surveillance, secure entry-exit, and an on-site counsellor for student well-being.',
  },
];

export const resultStats = [
  { year: '2024', selections: 420, jee: 185, neet: 235, topperRank: 'AIR 247' },
  { year: '2023', selections: 380, jee: 165, neet: 215, topperRank: 'AIR 312' },
  { year: '2022', selections: 350, jee: 150, neet: 200, topperRank: 'AIR 401' },
  { year: '2021', selections: 310, jee: 135, neet: 175, topperRank: 'AIR 522' },
  { year: '2020', selections: 280, jee: 120, neet: 160, topperRank: 'AIR 680' },
];
