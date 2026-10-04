// ─────────────────────────────────────────────────────────────
// Site content. Edit the text here; the layout updates itself.
// Project screenshots live in /public/images and are referenced
// by path (for example '/images/project-1.jpg').
// ─────────────────────────────────────────────────────────────

export const EMAIL = 'fredrickmwendwa77@gmail.com';
export const LINKEDIN = 'https://linkedin.com/in/fredrick-mwendwa';
export const GITHUB = 'https://github.com/fredrickmwendwa';

export const SITE_URL = 'https://fredrickmwendwa.vercel.app';

export const projects = [
  {
    id: 'c1',
    num: '01 / 03',
    name: 'Inventra',
    kind: 'Inventory & sales management platform',
    stack: ['Python', 'Django', 'Django REST Framework', 'PostgreSQL'],
    problem: 'Businesses need a simple system to manage inventory, sales, suppliers, and staff.',
    built: 'Built a multi-tenant platform for managing products, stock, sales, suppliers, and staff.',
    role: 'Backend development, database design, authentication, and business logic.',
    outcome: 'A functional business management platform built with Django and PostgreSQL.',
    liveUrl: '',
    sourceUrl: 'https://github.com/fredrickmwendwa/inventra',
    image: '/images/project-1.jpg',
    imageAlt: 'Inventra inventory management platform',
  },

  {
    id: 'c2',
    num: '02 / 03',
    name: 'E-Commerce API',
    kind: 'E-commerce REST API',
    stack: ['Python', 'Django', 'Django REST Framework', 'PostgreSQL'],
    problem: 'Online stores need a reliable backend for products, carts, checkout, and orders.',
    built: 'Built an API for authentication, products, carts, checkout, and order management.',
    role: 'API development, authentication, database design, and checkout logic.',
    outcome: 'A functional REST API for core e-commerce operations.',
    liveUrl: '',
    sourceUrl: 'https://github.com/fredrickmwendwa/ecommerce-api',
    image: '/images/project-2.jpg',
    imageAlt: 'E-commerce API project',
  },

  {
    id: 'c3',
    num: '03 / 03',
    name: 'Job Board API',
    kind: 'Job recruitment REST API',
    stack: ['Python', 'Django', 'Django REST Framework', 'PostgreSQL'],
    problem: 'Recruitment platforms need secure job posting and application workflows.',
    built: 'Built an API for jobs, applications, resumes, search, and application tracking.',
    role: 'API development, authentication, permissions, and application workflows.',
    outcome: 'A functional backend for connecting employers and job seekers.',
    liveUrl: '',
    sourceUrl: 'https://github.com/fredrickmwendwa/job-board-api',
    image: '/images/project-3.jpg',
    imageAlt: 'Job board API project',
  },
];

export const journey = [
  {
    n: '01 · JUN – OCT 2025',
    title: 'Frontend foundations',
    tech: 'HTML · CSS · JavaScript',
    story: 'I began with interfaces. Freelance front-end web development, where the habit of shipping started.',
    shape: 'Page',
    mark: '□',
  },
  {
    n: '02 · SEP – DEC 2025',
    title: 'Business applications',
    tech: 'PHP · Laravel · MySQL',
    story: 'I learned how systems work behind those interfaces. A 3-month industrial attachment at ICT Authority, where I built three full-stack systems. The turning point from pages to systems.',
    shape: 'Application',
    mark: '□ □',
  },
  {
    n: '03 · CURRENT STACK',
    title: 'Full-stack engineering',
    tech: 'React · Python · Django · DRF',
    story: 'I started connecting frontend, backend and data. A React interface on a Django REST API, with the data layer underneath.',
    shape: 'System',
    mark: '□ □ □',
  },
  {
    n: '04 · NOW',
    title: 'Building complete products',
    tech: 'interface → API → database',
    story: 'Owning a feature end to end. Next: doing it professionally, inside a real engineering team.',
    shape: 'Full-stack',
    mark: '→',
    now: true,
  },
];

export const layers = [
  {
    title: 'Frontend',
    what: 'Interfaces, interaction, responsive layouts.',
    items: [
      ['HTML', 'structure, semantics'],
      ['CSS', 'layout, responsive behaviour'],
      ['JavaScript', 'interaction, state'],
      ['React', 'component-based interfaces'],
    ],
  },
  {
    title: 'Backend',
    what: 'Business logic, APIs, application structure.',
    items: [
      ['Python · Django', 'application structure, business rules'],
      ['Django REST Framework', 'the API between screen and system'],
      ['PHP · Laravel', 'business applications, attachment work'],
    ],
  },
  {
    title: 'Data',
    what: 'Database-driven applications and persistence.',
    items: [
      ['PostgreSQL', 'current direction, with Django'],
      ['MySQL', 'schemas and queries from the attachment'],
    ],
  },
];

export const principles = [
  ['01', 'Start from the problem', 'A feature is only useful if someone needed it. I understand the task before I pick the tool.'],
  ['02', 'Know the whole system', 'A button, an endpoint, a table. When something breaks I want to follow it through all three.'],
  ['03', 'Write code someone can read', 'That someone includes me, six months from now.'],
  ['04', 'Design for the person using it', 'Clear states, useful errors, layouts that hold up on a phone.'],
  ['05', 'Learn by shipping', 'Every tool on this page came from building something with it.'],
];
