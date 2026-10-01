import {
  CalendarDays,
  FlaskConical,
  MessageCircle,
  Pill,
  Smartphone,
  WalletCards,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Reveal from './Reveal.jsx';
import SectionHead from './SectionHead.jsx';

export default function Roadmap() {
  const { t } = useTranslation();
  const items = t('roadmap.items', { returnObjects: true });
  const icons = [WalletCards, Pill, FlaskConical, MessageCircle, Smartphone, CalendarDays];

  return (
    <section className="section-pad bg-surface" style={{ background: 'var(--surface)' }}>
      <div className="container-x">
        <SectionHead eyebrow={t('roadmap.eyebrow')} title={t('roadmap.title')} />

        <ol className="mt-10 grid gap-4 sm:grid-cols-2">
          {items.map((item, i) => {
            const Icon = icons[i];

            return (
              <li key={item.title}>
                <Reveal delay={i * 0.08}>
                  <article className="card card-hover flex h-full items-start gap-4 p-5">
                    <span
                      className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl"
                      style={{ background: 'var(--primary-soft)' }}
                    >
                      <Icon size={22} style={{ color: 'var(--primary)' }} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-extrabold">{item.title}</h3>
                      <p className="mt-1 text-sm font-semibold leading-relaxed text-muted">
                        {item.text}
                      </p>
                    </div>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ol>

        <p className="mt-8 text-2xl font-black leading-relaxed md:text-4xl">
          {t('roadmap.closingLead')}
          <span className="hi">{t('roadmap.closingHighlight')}</span>
          {t('roadmap.closingTail')}
        </p>
      </div>
    </section>
  );
}
