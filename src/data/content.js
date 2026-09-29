// ---------------------------------------------------------------------------
// Every external link and non-translatable asset of the portfolio lives here.
// Texts (Arabic + English) live in src/locales/ar.json and src/locales/en.json.
// ---------------------------------------------------------------------------

export const links = {
  liveDemo: 'https://tabibi-frontend.apps.taqat.academy',
  presentation: '', // TODO: add later, once the presentation is deployed to Vercel
  github: 'https://github.com/Mazen-seif21',
  linkedin: 'https://www.linkedin.com/company/tabibi-gaza/',
  whatsapp: 'https://wa.me/972597081983',
  email: 'mazan.seifppp@gmail.com',
  repo: 'https://github.com/Tabibi-Gaza/Tabibi_Portofolio',
};

// TODO: if a demo account becomes available, add its credentials link here and
// show a “Demo account” button in the hero (see src/components/Hero.jsx).
export const demoAccount = null;

export const sections = [
  { id: 'problem', key: 'problem' },
  { id: 'solution', key: 'solution' },
  { id: 'features', key: 'features' },
  { id: 'ai', key: 'ai' },
  { id: 'tech', key: 'tech' },
  { id: 'team', key: 'team' },
  { id: 'contact', key: 'contact' },
];

export const brand = {
  name: 'Tabibi',
  nameAr: 'طبيبي',
  logo: '/images/logo-horizontal.svg',
  logoAlt: 'Tabibi — طبيبي',
};
