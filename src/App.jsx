import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { applyDocumentLang } from './i18n.js';
import { useTheme } from './hooks/useTheme.js';

import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Stats from './components/Stats.jsx';
import Problem from './components/Problem.jsx';
import Solution from './components/Solution.jsx';
import Timeline from './components/Timeline.jsx';
import RolesTabs from './components/RolesTabs.jsx';
import Gallery from './components/Gallery.jsx';
import AiPipeline from './components/AiPipeline.jsx';
import TechStack from './components/TechStack.jsx';
import Decisions from './components/Decisions.jsx';
import Roadmap from './components/Roadmap.jsx';
import Team from './components/Team.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const { i18n, t } = useTranslation();
  useTheme();

  useEffect(() => {
    applyDocumentLang(i18n.language);
    document.title = t('meta.title');
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', t('meta.description'));
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', t('meta.title'));
    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) ogLocale.setAttribute('content', i18n.language === 'ar' ? 'ar_PS' : 'en_US');
  }, [i18n.language, t]);

  return (
    <div className="min-h-screen bg-bg text-ink">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Problem />
        <Solution />
        <Timeline />
        <RolesTabs />
        <Gallery />
        <AiPipeline />
        <TechStack />
        <Decisions />
        <Roadmap />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
