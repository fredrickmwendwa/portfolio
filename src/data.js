// ─────────────────────────────────────────────────────────────
// Site content. Edit the text here; the layout updates itself.
// Project images live in /public/images and are referenced by
// path (for example '/images/project-1.jpg').
// ─────────────────────────────────────────────────────────────

export const SITE_URL = 'https://fredrickmwendwa.vercel.app';
export const EMAIL = 'fredrickmwendwa77@gmail.com';
export const LINKEDIN = 'https://linkedin.com/in/fredrick-mwendwa';
export const GITHUB = 'https://github.com/fredrickmwendwa';

export const projects = [
  {
    id: 'c1',
    name: 'Inventra',
    kind: 'Inventory & sales management platform',
    desc: 'A multi-tenant platform for managing products, stock, sales, suppliers and staff.',
    stack: ['Python', 'Django', 'Django REST Framework', 'PostgreSQL'],
    problem: 'Businesses need a simple system to manage inventory, sales, suppliers and staff.',
    role: 'Backend development, database design, authentication and business logic.',
    outcome: 'A functional business management platform built with Django and PostgreSQL.',
    liveUrl: SITE_URL,
    sourceUrl: 'https://github.com/fredrickmwendwa/inventra',
    image: '/images/project-1.jpg',
    imageAlt: 'Inventra inventory management platform',
  },
  {
    id: 'c2',
    name: 'E-Commerce API',
    kind: 'Online store engine',
    desc: 'Authentication, products, carts, checkout and order management for an online store.',
    stack: ['Python', 'Django', 'Django REST Framework', 'PostgreSQL'],
    problem: 'Online stores need a reliable backend for products, carts, checkout and orders.',
    role: 'API development, authentication, database design and checkout logic.',
    outcome: 'A functional system for core e-commerce operations.',
    liveUrl: SITE_URL,
    sourceUrl: 'https://github.com/fredrickmwendwa/ecommerce-api',
    image: '/images/project-2.jpg',
    imageAlt: 'E-commerce API project',
  },
  {
    id: 'c3',
    name: 'Job Board API',
    kind: 'Recruitment platform',
    desc: 'Jobs, applications, resumes, search and application tracking, connecting employers and job seekers.',
    stack: ['Python', 'Django', 'Django REST Framework', 'PostgreSQL'],
    problem: 'Recruitment platforms need secure job posting and application workflows.',
    role: 'API development, authentication, permissions and application workflows.',
    outcome: 'A functional backend for connecting employers and job seekers.',
    liveUrl: SITE_URL,
    sourceUrl: 'https://github.com/fredrickmwendwa/job-board-api',
    image: '/images/project-3.jpg',
    imageAlt: 'Job board API project',
  },
];

export const aboutParagraphs = [
  "I'm Fredrick, a full-stack developer based in Nairobi. I like work where the interface, the logic and the data all pull in the same direction.",
  'I care about the details people notice, like clear states, quick pages and layouts that hold up on a phone, and the ones they never see, like clean structure, sensible naming and code the next person can read.',
  "I'm looking for a full-stack internship or junior role on a team that ships real software, with people I can learn from.",
];

export const aboutFacts = [
  ['Based in', 'Nairobi, Kenya'],
  ['Studying', 'Diploma in Computer Science, Kiambu National Polytechnic (final year)'],
  ['Looking for', 'Full-stack internship or junior software engineering role'],
];

export const toolbox = [
  { title: 'Interfaces', text: 'What people see, tap and use.', items: ['React', 'JavaScript', 'HTML', 'CSS'] },
  { title: 'Back end', text: 'The logic, accounts and rules behind every screen.', items: ['Python', 'Django', 'Django REST Framework', 'PHP', 'Laravel'] },
  { title: 'Data', text: 'Where everything is stored and found.', items: ['PostgreSQL', 'MySQL'] },
];

export const principles = [
  ['01', 'Start from the problem', 'A feature is only useful if someone needed it. I understand the task before I pick the tool.'],
  ['02', 'Know the whole system', 'A button, an endpoint, a table. When something breaks I want to follow it through all three.'],
  ['03', 'Write code someone can read', 'That someone includes me, six months from now.'],
  ['04', 'Design for the person using it', 'Clear states, useful errors, layouts that hold up on a phone.'],
  ['05', 'Learn by shipping', 'Every tool on this page came from building something with it.'],
];
