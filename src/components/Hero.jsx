import { ArrowUpRight, Presentation } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { links } from '../data/content.js';
import Reveal from './Reveal.jsx';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-28 md:pb-24 md:pt-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 end-[-6rem] h-80 w-80 rounded-full opacity-60 blur-3xl"
        style={{ background: 'var(--primary-soft)' }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-40 start-[-7rem] h-72 w-72 rounded-full opacity-40 blur-3xl"
        style={{ background: 'color-mix(in srgb, var(--accent) 35%, transparent)' }}
      />

      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow">{t('hero.eyebrow')}</p>

          <h1 className="mt-5 text-[clamp(2.1rem,5.2vw,3.5rem)] font-black leading-[1.2]">
            <span>{t('hero.lead')} </span>
            <span className="hi">{t('hero.highlight')}</span>
            <span> {t('hero.tail')}</span>
          </h1>

          <p className="lead-muted mt-5 max-w-xl">{t('hero.desc1')}</p>
          <p className="lead-muted mt-3 max-w-xl">{t('hero.desc2')}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              className="btn btn-primary"
              href={links.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('hero.ctaLive')}
              <ArrowUpRight size={18} />
            </a>

            {/* Hide the presentation button automatically while the link is empty. */}
            {links.presentation ? (
              <a
                className="btn btn-ghost"
                href={links.presentation}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Presentation size={18} />
                {t('hero.ctaPresent')}
              </a>
            ) : null}

            {/* TODO: show a “Demo account” button here if demoAccount is defined later. */}
          </div>

        </Reveal>

        <Reveal delay={0.15}>
          <div className="frame-browser">
            <div className="frame-browser__bar">
              <span className="frame-dot" />
              <span className="frame-dot" />
              <span className="frame-dot" />
              <span
                className="ms-2 truncate rounded-md px-3 py-1 text-xs font-bold text-muted"
                style={{ background: 'var(--card-bg)' }}
              >
                tabibi-frontend.apps.taqat.academy
              </span>
            </div>
            <img
              src="/images/screens/admin-dashboard.png"
              alt={t('hero.mockAlt')}
              width={1366}
              height={768}
              loading="eager"
              decoding="async"
              className="block aspect-[16/10] w-full object-cover object-top"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
