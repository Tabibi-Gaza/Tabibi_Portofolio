import {
  ArrowRight,
  Braces,
  FileText,
  Mic,
  Save,
  ShieldCheck,
  Sparkles,
  UserCheck,
  UserX,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Reveal from './Reveal.jsx';
import SectionHead from './SectionHead.jsx';

const stepIcons = [Mic, FileText, UserX, Sparkles, Braces, UserCheck, Save];

export default function AiPipeline() {
  const { t } = useTranslation();
  const steps = t('ai.pipeline', { returnObjects: true });
  const security = t('ai.security', { returnObjects: true });

  return (
    <section id="ai" className="section-pad bg-bg">
      <div className="container-x">
        <SectionHead
          eyebrow={t('ai.eyebrow')}
          title={t('ai.title')}
          desc={t('ai.desc')}
        />

        <div className="no-scrollbar mt-10 flex items-stretch gap-3 overflow-x-auto pb-4">
          {steps.map((step, i) => {
            const Icon = stepIcons[i];
            return (
              <div key={step.title} className="flex shrink-0 items-center gap-3">
                <Reveal delay={i * 0.06}>
                  <article className="card h-full w-[230px] p-5 md:w-[250px]">
                    <div className="flex items-center justify-between">
                      <span
                        className="grid h-9 w-9 place-items-center rounded-xl"
                        style={{ background: 'var(--primary-soft)' }}
                      >
                        <Icon size={18} style={{ color: 'var(--primary)' }} />
                      </span>
                      <span className="text-xs font-black text-muted">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="mt-3 text-base font-extrabold">{step.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{step.text}</p>
                  </article>
                </Reveal>

                {i < steps.length - 1 ? (
                  <ArrowRight
                    size={20}
                    aria-hidden="true"
                    className="shrink-0 text-muted rtl:rotate-180"
                  />
                ) : null}
              </div>
            );
          })}
        </div>

        <Reveal className="mt-4">
          <p
            className="card inline-flex items-start gap-2.5 p-4 text-sm font-bold leading-relaxed"
            style={{ borderColor: 'color-mix(in srgb, var(--accent) 55%, var(--card-border))' }}
          >
            <span
              className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full"
              style={{ background: 'color-mix(in srgb, var(--accent) 18%, transparent)' }}
              aria-hidden="true"
            >
              <span className="h-2 w-2 rounded-full" style={{ background: 'var(--accent)' }} />
            </span>
            {t('ai.sttNote')}
          </p>
        </Reveal>
      </div>

      <Reveal className="mt-14">
        <div className="band py-14">
          <div className="container-x">
            <div className="flex items-center gap-3">
              <span
                className="grid h-11 w-11 place-items-center rounded-2xl"
                style={{ background: 'rgba(255,255,255,0.08)' }}
              >
                <ShieldCheck size={22} style={{ color: 'var(--accent)' }} />
              </span>
              <div>
                <h3 className="text-xl font-black md:text-2xl" style={{ color: 'var(--band-ink)' }}>
                  {t('ai.securityTitle')}
                </h3>
                <p className="text-sm font-semibold md:text-base" style={{ color: 'var(--band-muted)' }}>
                  {t('ai.securityDesc')}
                </p>
              </div>
            </div>

            <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {security.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl p-4"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.09)',
                  }}
                >
                  <ShieldCheck
                    size={18}
                    className="mt-0.5 shrink-0"
                    style={{ color: 'var(--primary)' }}
                    aria-hidden="true"
                  />
                  <span className="text-sm font-semibold leading-relaxed" style={{ color: 'var(--band-ink)' }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
