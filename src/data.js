// All site content lives here. Anything in [BRACKETS] is a placeholder to replace.

export const profile = {
  name: 'Fredrick Mwendwa',
  role: 'Full-Stack Developer',
  location: 'Nairobi, Kenya',
  email: 'fredrickmwendwa77@gmail.com',
  linkedin: 'https://linkedin.com/in/fredrick-mwendwa',
  github: 'https://github.com/fredrickmwendwa',
  portrait: '/images/portrait.jpg', // drop your photo at public/images/portrait.jpg
}

export const layers = [
  {
    name: 'Interface',
    route: 'GET /orders',
    tech: 'React · HTML · CSS · JavaScript',
    note: 'What people see and touch: forms, tables, states, responsive layouts.',
  },
  {
    name: 'API',
    route: '/api/orders/',
    tech: 'Django REST Framework · Django · Python',
    note: 'The contract between screen and system: validation, auth, business rules.',
  },
  {
    name: 'Data',
    route: 'SELECT … FROM orders',
    tech: 'MySQL',
    note: 'Schemas and queries that keep the application honest.',
  },
]

// Screenshots: put files in public/images/projects/ and keep these names (or change them here).
export const projects = [
  {
    n: '01',
    name: '[PROJECT NAME 01]',
    type: 'Full-stack business management platform',
    stack: 'React · Django · REST API · MySQL',
    variant: 'dashboard',
    image: '/images/projects/project-01.png',
    url: '[project-url.example]',
    caseStudy: '#work',
    source: '#work',
  },
  {
    n: '02',
    name: '[PROJECT NAME 02]',
    type: 'Business operations / workflow system',
    stack: 'React · Python · Django · DRF',
    variant: 'table',
    image: '/images/projects/project-02.png',
    url: '[project-url.example]',
    caseStudy: '#work',
    source: '#work',
  },
  {
    n: '03',
    name: '[PROJECT NAME 03]',
    type: 'Business application from the attachment era',
    stack: 'PHP · Laravel · MySQL',
    variant: 'form',
    image: '/images/projects/project-03.png',
    url: '[project-url.example]',
    caseStudy: '#work',
    source: '#work',
  },
]

export const projectDetails = [
  ['Problem', '[PROBLEM — what needed solving, and for whom]'],
  ['Built', '[WHAT WAS BUILT — frontend, API, data model]'],
  ['Role', '[YOUR ROLE AND CONTRIBUTION]'],
  ['Outcome', '[OUTCOME / METRIC — ADD IF AVAILABLE]'],
]

export const journey = [
  {
    n: '01',
    title: 'Frontend foundations',
    tech: 'HTML · CSS · JavaScript',
    text: 'Freelance front-end web development. Where the habit of shipping started.',
  },
  {
    n: '02',
    title: 'Business applications',
    tech: 'PHP · Laravel · MySQL',
    text: 'A 3-month industrial attachment. The turning point from pages to systems.',
  },
  {
    n: '03',
    title: 'Full-stack engineering',
    tech: 'React · Python · Django · DRF',
    text: 'A React interface talking to a Django REST API, with the data layer underneath.',
  },
  {
    n: '04 · NOW',
    now: true,
    title: 'Building complete products',
    tech: 'interface → API → database',
    text: 'Owning a feature end to end. Next: doing it inside a real engineering team.',
  },
]

export const attachment = {
  quote: 'The question changed from “how does this page look?” to “how does this business actually run?”',
  text: 'PHP, Laravel and MySQL, applied to real business applications. This is where front-end work became software with data, rules and users behind it.',
  placeholders: ['[ORGANISATION — ADD IF YOU WISH]', '[DATES]', '[WHAT YOU BUILT / OWNED — ADD IF YOU WISH]'],
}

export const education = {
  degree: 'Diploma in Computer Science',
  school: 'Kiambu National Polytechnic',
  status: 'Final year',
  text: 'The diploma is the foundation. Building projects is how I test it.',
}

export const about = [
  "I'm Fredrick, a final-year Computer Science diploma student at Kiambu National Polytechnic, based in Nairobi.",
  'I started with freelance front-end work: HTML, CSS and JavaScript. A three-month industrial attachment then moved me into PHP, Laravel and MySQL, building business applications where the interface was only one piece.',
  "Since then I've moved into React, Python, Django and Django REST Framework, because I want to own a product from the screen to the database rather than hand it off halfway.",
  "I'm looking for a full-stack internship or junior role on a team that ships real software, with people I can learn from.",
]

export const stack = [
  {
    name: 'Frontend',
    blurb: 'Interfaces, interaction, responsive layouts.',
    items: ['HTML', 'CSS', 'JavaScript', 'React'],
    grow: 3,
  },
  {
    name: 'Backend',
    blurb: 'Business logic, APIs, application structure.',
    items: ['Python · Django · Django REST Framework', 'PHP · Laravel'],
    grow: 3,
  },
  {
    name: 'Data',
    blurb: 'Database-driven applications and persistence.',
    items: ['MySQL'],
    grow: 2,
    accent: true,
  },
]

export const philosophy = [
  ['Start from the problem', 'A feature is only useful if someone needed it. I understand the task before I pick the tool.'],
  ['Know the whole system', 'A button, an endpoint, a table. When something breaks I want to follow it through all three.'],
  ['Write code someone can read', 'That someone includes me, six months from now.'],
  ['Design for the person using it', 'Clear states, useful errors, layouts that hold up on a phone.'],
  ['Learn by shipping', 'Every tool on this page came from building something with it.'],
]
