// ─────────────────────────────────────────────────────────────
// EDIT ME: all project content lives here.
// Replace each [PLACEHOLDER] with real text. Set `image` to a path
// in /public (e.g. '/images/projects/project-01.webp') to fill the
// screenshot slot. Set liveUrl / sourceUrl to real links.
// ─────────────────────────────────────────────────────────────

export const EMAIL = 'fredrickmwendwa77@gmail.com';
export const LINKEDIN = 'https://linkedin.com/in/fredrick-mwendwa';
export const GITHUB = 'https://github.com/fredrickmwendwa';

export const projects = [
  {
    id: 'c1',
    num: '01 / 03',
    name: '[PROJECT NAME 01]',
    kind: 'Full-stack business management platform',
    stack: ['React', 'Django', 'Django REST Framework', 'PostgreSQL'],
    problem: '[PROBLEM — what needed solving, and for whom]',
    built: '[WHAT WAS BUILT — frontend, API, data model]',
    role: '[YOUR ROLE AND CONTRIBUTION]',
    outcome: '[OUTCOME — ADD IF AVAILABLE]',
    liveUrl: '',
    sourceUrl: '',
    image: '', // e.g. '/images/projects/project-01.webp'
    imageAlt: '[describe the screenshot]',
    slotLabel: 'Screenshot slot · 16:10 · /images/projects/project-01.webp',
  },
  
  {
    id: 'c2',
    num: '02 / 03',
    name: '[PROJECT NAME 02]',
    kind: 'Business operations / workflow system',
    stack: ['React', 'Python', 'Django', 'Django REST Framework'],
    problem: '[PROBLEM — what needed solving, and for whom]',
    built: '[WHAT WAS BUILT — frontend, API, data model]',
    role: '[YOUR ROLE AND CONTRIBUTION]',
    outcome: '[OUTCOME — ADD IF AVAILABLE]',
    liveUrl: '',
    sourceUrl: '',
    image: '',
    imageAlt: '[describe the screenshot]',
    slotLabel: 'Screenshot slot · 5:4 · /images/projects/project-02.webp',
  },
  {
    id: 'c3',
    num: '03 / 03 · Industrial attachment',
    name: '[PROJECT NAME 03]',
    kind: 'Business application built during the attachment',
    stack: ['PHP', 'Laravel', 'MySQL'],
    problem: '[PROBLEM]',
    built: '[WHAT WAS BUILT]',
    role: '[YOUR ROLE]',
    outcome: '[OUTCOME — IF AVAILABLE]',
    liveUrl: '',
    sourceUrl: '',
    image: '',
    imageAlt: '[describe the screenshot]',
    slotLabel: 'Slot · 4:3',
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
    story: 'I learned how systems work behind those interfaces. A 3-month industrial attachment: the turning point from pages to systems.',
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
