import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { brand, sections } from '../data/content.js';
import LangToggle from './LangToggle.jsx';
import ThemeToggle from './ThemeToggle.jsx';

export default function Navbar() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean);
    if (!els.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.6] }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const go = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'shadow-md' : ''
      }`}
      style={{
        background: 'color-mix(in srgb, var(--bg) 85%, transparent)',
        backdropFilter: 'blur(14px)',
        borderBottom: `1px solid ${scrolled ? 'var(--card-border)' : 'transparent'}`,
      }}
    >
      <nav className="container-x flex h-16 items-center justify-between gap-3 md:h-[72px]">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2"
          aria-label={brand.logoAlt}
        >
          <img src={brand.logo} alt={brand.logoAlt} className="h-9 w-auto md:h-10" width={160} height={40} />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {sections.map((s) => (
            <li key={s.id}>
              <button
                type="button"
                onClick={() => go(s.id)}
                className={`rounded-full px-3.5 py-2 text-[0.95rem] font-bold transition-colors ${
                  active === s.id ? 'text-primary' : 'text-ink hover:text-primary'
                }`}
              >
                {t(`nav.${s.key}`)}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <LangToggle />
          <ThemeToggle />
          <button
            type="button"
            className="btn btn-ghost !px-3 !py-2 lg:hidden"
            aria-label={open ? t('nav.close') : t('nav.menu')}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-line bg-bg lg:hidden">
          <ul className="container-x flex flex-col py-3">
            {sections.map((s) => (
              <li key={s.id}>
                <button
                  type="button"
                  onClick={() => go(s.id)}
                  className="w-full rounded-xl px-3 py-3 text-start text-base font-bold text-ink hover:bg-surface hover:text-primary"
                >
                  {t(`nav.${s.key}`)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
