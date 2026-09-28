import { useTranslation } from 'react-i18next';
import Reveal from './Reveal.jsx';
import SectionHead from './SectionHead.jsx';

export default function Timeline() {
  const { t } = useTranslation();
  const steps = t('timeline.steps', { returnObjects: true });

  return (
    <section className="section-pad bg-bg">
      <div className="container-x">
        <SectionHead
          eyebrow={t('timeline.eyebrow')}
          title={t('timeline.title')}
          desc={t('timeline.desc')}
        />

        <ol className="relative mt-12 max-w-3xl">
          <span
            aria-hidden="true"
            className="absolute bottom-6 top-6 w-0.5"
            style={{
              insetInlineStart: '21px',
              background:
                'linear-gradient(to bottom, var(--primary), color-mix(in srgb, var(--accent) 70%, transparent))',
              opacity: 0.35,
            }}
          />

          {steps.map((step, i) => (
            <li key={step.title} className="relative mb-6 last:mb-0">
              <Reveal delay={i * 0.08}>
                <div className="flex gap-4 md:gap-6">
                  <span
                    className="z-10 grid h-11 w-11 shrink-0 place-items-center rounded-full border text-sm font-black"
                    style={{
                      background: 'var(--primary-soft)',
                      borderColor: 'var(--card-border)',
                      color: 'var(--primary)',
                    }}
                  >
                    {i + 1}
                  </span>

                  <article className="card card-hover flex-1 p-5 md:p-6">
                    <h3 className="text-base font-extrabold md:text-lg">{step.title}</h3>
                    <p className="mt-2 text-[0.97rem] leading-relaxed text-muted">{step.text}</p>
                  </article>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
