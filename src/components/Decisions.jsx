import { KeyRound, Layers, QrCode } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Reveal from './Reveal.jsx';
import SectionHead from './SectionHead.jsx';

const icons = [KeyRound, QrCode, Layers];

export default function Decisions() {
  const { t } = useTranslation();
  const cards = t('decisions.cards', { returnObjects: true });

  return (
    <section className="section-pad bg-bg">
      <div className="container-x">
        <SectionHead eyebrow={t('decisions.eyebrow')} title={t('decisions.title')} />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {cards.map((card, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={card.title} delay={i * 0.08}>
                <article className="card card-hover h-full p-6 md:p-7">
                  <div className="flex items-center justify-between">
                    <span
                      className="grid h-12 w-12 place-items-center rounded-2xl"
                      style={{ background: 'var(--primary-soft)' }}
                    >
                      <Icon size={24} style={{ color: 'var(--primary)' }} />
                    </span>
                    <span className="text-sm font-black text-muted">0{i + 1}</span>
                  </div>
                  <h3 className="mt-4 text-lg font-extrabold">{card.title}</h3>
                  <p className="mt-3 text-[0.98rem] leading-relaxed text-muted">{card.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
