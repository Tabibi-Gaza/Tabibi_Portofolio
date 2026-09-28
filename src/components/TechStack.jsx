import { ArrowRight, Database, Globe, Server, Smartphone, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Reveal from './Reveal.jsx';
import SectionHead from './SectionHead.jsx';

function ArchBox({ icon: Icon, title, sub, accent = false }) {
  return (
    <div
      className="card h-full p-5"
      style={
        accent
          ? { borderColor: 'color-mix(in srgb, var(--primary) 55%, var(--card-border))' }
          : undefined
      }
    >
      <div className="flex items-center gap-3">
        <span
          className="grid h-10 w-10 shrink-0 place-items-center rounded-xl"
          style={{ background: 'var(--primary-soft)' }}
        >
          <Icon size={20} style={{ color: 'var(--primary)' }} />
        </span>
        <div>
          <p className="text-sm font-extrabold md:text-base">{title}</p>
          <p className="text-xs font-semibold text-muted">{sub}</p>
        </div>
      </div>
    </div>
  );
}

function Arrow() {
  return (
    <span className="hidden items-center md:flex" aria-hidden="true">
      <ArrowRight size={26} className="text-muted rtl:rotate-180" />
    </span>
  );
}

export default function TechStack() {
  const { t } = useTranslation();
  const badges = t('tech.badges', { returnObjects: true });
  const arch = t('tech.arch', { returnObjects: true });

  return (
    <section id="tech" className="section-pad bg-surface" style={{ background: 'var(--surface)' }}>
      <div className="container-x">
        <SectionHead
          eyebrow={t('tech.eyebrow')}
          title={t('tech.title')}
          desc={t('tech.desc')}
        />

        <Reveal className="mt-10">
          <div className="card p-5 md:p-8">
            <div className="grid gap-4 md:grid-cols-[1fr_auto_1.15fr_auto_1fr] md:items-stretch">
              <div className="grid gap-4">
                <ArchBox icon={Globe} title={arch.web} sub={arch.webSub} />
                <ArchBox icon={Smartphone} title={arch.mobile} sub={arch.mobileSub} />
              </div>

              <Arrow />

              <div className="grid gap-4">
                <ArchBox icon={Server} title={arch.api} sub={arch.apiSub} accent />
              </div>

              <Arrow />

              <div className="grid gap-4">
                <ArchBox icon={Database} title={arch.db} sub={arch.dbSub} />
                <ArchBox icon={Sparkles} title={arch.ai} sub={arch.aiSub} />
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-8">
          <ul className="flex flex-wrap justify-center gap-3">
            {badges.map((badge, i) => (
              <li
                key={badge}
                className="chip"
                style={
                  i % 4 === 1
                    ? { borderColor: 'color-mix(in srgb, var(--primary) 45%, var(--card-border))' }
                    : undefined
                }
              >
                {badge}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
