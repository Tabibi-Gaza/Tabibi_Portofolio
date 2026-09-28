import { ArrowUp, Code2, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { links, sections } from '../data/content.js';

export default function Footer() {
  const { t } = useTranslation();

  const year = new Date().getFullYear();

  return (
    <footer className="band pb-10 pt-12">
      <div className="container-x">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="text-xl font-black" style={{ color: 'var(--band-ink)' }}>
              {t('footer.brand')}
            </p>
            <p className="mt-1 text-sm font-semibold" style={{ color: 'var(--band-muted)' }}>
              {t('footer.tagline')}
            </p>
            <p className="mt-4 text-xs leading-relaxed" style={{ color: 'var(--band-muted)' }}>
              {t('footer.rights')} {year > 2026 ? `· ${year}` : ''}
            </p>
          </div>

          <nav aria-label={t('footer.links')}>
            <p className="text-sm font-extrabold" style={{ color: 'var(--band-ink)' }}>
              {t('footer.links')}
            </p>
            <ul className="mt-3 grid grid-cols-2 gap-x-8 gap-y-2">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="text-sm font-semibold transition-colors hover:text-primary"
                    style={{ color: 'var(--band-muted)' }}
                  >
                    {t(`nav.${s.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col items-start gap-3">
            <a
              className="text-sm font-bold transition-colors hover:text-primary"
              style={{ color: 'var(--band-muted)' }}
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Code2 size={16} className="me-2 inline" aria-hidden="true" />
              GitHub
            </a>
            <a
              className="text-sm font-bold transition-colors hover:text-primary"
              style={{ color: 'var(--band-muted)' }}
              href={`mailto:${links.email}`}
            >
              <Mail size={16} className="me-2 inline" aria-hidden="true" />
              {t('contact.emailLabel')}
            </a>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="btn btn-primary mt-2 !py-2.5 text-sm"
            >
              <ArrowUp size={16} aria-hidden="true" />
              {t('ui.backTop')}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
