import { ArrowUpRight, Code2, Mail, MonitorUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { links } from '../data/content.js';
import Reveal from './Reveal.jsx';
import SectionHead from './SectionHead.jsx';

export default function Contact() {
  const { t } = useTranslation();

  const cards = [
    {
      key: 'ctaLive',
      icon: MonitorUp,
      href: links.liveDemo,
      external: true,
      value: 'tabibi-frontend.apps.taqat.academy',
    },
    {
      key: 'ctaGithub',
      icon: Code2,
      href: links.github,
      external: true,
      value: 'github.com/Mazen-seif21',
    },
    {
      key: 'ctaLinkedin',
      icon: ArrowUpRight,
      href: links.linkedin,
      external: true,
      value: 'linkedin.com/company/tabibi-gaza',
    },
    {
      key: 'ctaEmail',
      icon: Mail,
      href: `mailto:${links.email}`,
      external: false,
      value: links.email,
    },
  ];

  return (
    <section
      id="contact"
      className="section-pad bg-surface"
      style={{ background: 'var(--surface)' }}
    >
      <div className="container-x">
        <SectionHead
          eyebrow={t('contact.eyebrow')}
          title={t('contact.title')}
          desc={t('contact.desc')}
          center
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.key} delay={i * 0.07}>
                <a
                  className="card card-hover flex h-full flex-col items-start gap-3 p-6"
                  href={c.href}
                  target={c.external ? '_blank' : undefined}
                  rel={c.external ? 'noopener noreferrer' : undefined}
                >
                  <span
                    className="grid h-11 w-11 place-items-center rounded-2xl"
                    style={{ background: 'var(--primary-soft)' }}
                  >
                    <Icon size={20} style={{ color: 'var(--primary)' }} />
                  </span>
                  <span className="font-extrabold">{t(`contact.${c.key}`)}</span>
                  <span className="truncate text-sm font-semibold text-muted" dir="ltr">
                    {c.value}
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-8 text-center">
          <p className="text-sm font-semibold text-muted">{t('contact.note')}</p>
        </Reveal>
      </div>
    </section>
  );
}
