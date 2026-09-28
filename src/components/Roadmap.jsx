import { Flag } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Reveal from './Reveal.jsx';
import SectionHead from './SectionHead.jsx';

export default function Roadmap() {
  const { t } = useTranslation();
  const items = t('roadmap.items', { returnObjects: true });

  return (
    <section className="section-pad bg-surface" style={{ background: 'var(--surface)' }}>
      <div className="container-x">
        <SectionHead eyebrow={t('roadmap.eyebrow')} title={t('roadmap.title')} />

        <ol className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((item, i) => (
            <li key={item}>
              <Reveal delay={i * 0.08}>
                <article className="card card-hover h-full p-6">
                  <div className="flex items-center gap-3">
                    <span
                      className="grid h-10 w-10 place-items-center rounded-full"
                      style={{ background: 'var(--primary-soft)' }}
                    >
                      <Flag size={18} style={{ color: 'var(--primary)' }} />
                    </span>
                    <span className="text-sm font-black text-muted">0{i + 1}</span>
                  </div>
                  <p className="mt-4 font-bold leading-relaxed">{item}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
