import { FileX2, Quote, RefreshCcw, ShieldAlert } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Reveal from './Reveal.jsx';
import SectionHead from './SectionHead.jsx';

const icons = [FileX2, ShieldAlert, RefreshCcw];

export default function Problem() {
  const { t } = useTranslation();
  const cards = t('problem.cards', { returnObjects: true });

  return (
    <section id="problem" className="section-pad bg-bg">
      <div className="container-x">
        <SectionHead eyebrow={t('problem.eyebrow')} title={t('problem.title')} />

        <Reveal className="mt-10">
          <article
            className="card border-s-4 border-accent p-6 md:p-8"
            style={{ background: 'var(--surface)' }}
          >
            <div className="flex items-center gap-3">
              <span
                className="grid h-10 w-10 place-items-center rounded-full"
                style={{ background: 'color-mix(in srgb, var(--accent) 18%, transparent)' }}
              >
                <Quote size={18} style={{ color: 'var(--accent)' }} />
              </span>
              <h3 className="text-lg font-extrabold md:text-xl">{t('problem.storyTitle')}</h3>
            </div>
            <p className="lead-muted mt-4">{t('problem.story')}</p>
          </article>
        </Reveal>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {cards.map((card, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={card.title} delay={i * 0.08}>
                <article className="card card-hover h-full p-6">
                  <span
                    className="grid h-11 w-11 place-items-center rounded-2xl"
                    style={{ background: 'var(--primary-soft)' }}
                  >
                    <Icon size={22} style={{ color: 'var(--primary)' }} />
                  </span>
                  <h3 className="mt-4 text-lg font-extrabold">{card.title}</h3>
                  <p className="mt-2 text-[0.98rem] leading-relaxed text-muted">{card.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
