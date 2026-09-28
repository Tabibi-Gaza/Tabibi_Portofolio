import { Bot, Network, QrCode } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Reveal from './Reveal.jsx';
import SectionHead from './SectionHead.jsx';

const icons = [QrCode, Bot, Network];

export default function Solution() {
  const { t } = useTranslation();
  const cards = t('solution.cards', { returnObjects: true });

  return (
    <section id="solution" className="section-pad bg-surface" style={{ background: 'var(--surface)' }}>
      <div className="container-x">
        <SectionHead
          eyebrow={t('solution.eyebrow')}
          title={
            <>
              {t('solution.lead')} <span className="hi">{t('solution.highlight')}</span>{' '}
              {t('solution.tail')}
            </>
          }
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {cards.map((card, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={card.title} delay={i * 0.08}>
                <article className="card card-hover h-full p-6 md:p-7">
                  <span
                    className="grid h-12 w-12 place-items-center rounded-2xl"
                    style={{ background: 'var(--primary-soft)' }}
                  >
                    <Icon size={24} style={{ color: 'var(--primary)' }} />
                  </span>
                  <h3 className="mt-4 text-lg font-extrabold md:text-xl">{card.title}</h3>
                  <p className="mt-3 text-[0.98rem] leading-relaxed text-muted">{card.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>

      <Reveal className="mt-14">
        <div className="band py-12 md:py-16">
          <div className="container-x max-w-4xl text-center">
            <span
              className="mx-auto mb-5 block h-1 w-16 rounded-full"
              style={{ background: 'var(--accent)' }}
            />
            <h3 className="text-xl font-black md:text-3xl" style={{ color: 'var(--band-ink)' }}>
              {t('solution.bandTitle')}
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed md:text-lg" style={{ color: 'var(--band-muted)' }}>
              {t('solution.bandText')}
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
