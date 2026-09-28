import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Lock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Reveal from './Reveal.jsx';
import SectionHead from './SectionHead.jsx';

const TAB_ORDER = ['admin', 'doctor', 'secretary', 'patient'];

export default function RolesTabs() {
  const { t } = useTranslation();
  const [active, setActive] = useState('admin');
  const tabs = t('roles.tabs', { returnObjects: true });
  const tab = tabs[active];

  return (
    <section id="features" className="section-pad bg-surface" style={{ background: 'var(--surface)' }}>
      <div className="container-x">
        <SectionHead
          eyebrow={t('roles.eyebrow')}
          title={t('roles.title')}
          desc={t('roles.desc')}
        />

        <Reveal className="mt-9">
          <div
            role="tablist"
            aria-label={t('roles.title')}
            className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 pb-1"
          >
            {TAB_ORDER.map((key) => (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={active === key}
                onClick={() => setActive(key)}
                className={`btn shrink-0 text-sm ${
                  active === key ? 'btn-primary' : 'btn-ghost'
                }`}
              >
                {tabs[key].label}
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div
          key={active}
          role="tabpanel"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="mt-7 grid items-start gap-8 lg:grid-cols-2"
        >
          <div className="card p-6 md:p-8">
            <h3 className="text-xl font-black md:text-2xl">{tab.title}</h3>
            <p className="mt-2 text-[0.98rem] leading-relaxed text-muted">{tab.desc}</p>

            {tab.granted ? (
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div>
                  <p className="mb-3 text-sm font-extrabold text-primary">{tab.grantedTitle}</p>
                  <ul className="space-y-2.5">
                    {tab.granted.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[0.95rem] font-semibold">
                        <Check size={17} className="mt-1 shrink-0 text-primary" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="mb-3 text-sm font-extrabold" style={{ color: 'var(--accent)' }}>
                    {tab.doctorOnlyTitle}
                  </p>
                  <ul className="space-y-2.5">
                    {tab.doctorOnly.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[0.95rem] font-semibold">
                        <Lock
                          size={17}
                          className="mt-1 shrink-0"
                          style={{ color: 'var(--accent)' }}
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <ul className="mt-6 space-y-3">
                {tab.features.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[0.97rem] leading-relaxed">
                    <span
                      className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full"
                      style={{ background: 'var(--primary-soft)' }}
                      aria-hidden="true"
                    >
                      <Check size={13} style={{ color: 'var(--primary)' }} />
                    </span>
                    <span className="font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="frame-browser lg:sticky lg:top-24">
            <div className="frame-browser__bar">
              <span className="frame-dot" />
              <span className="frame-dot" />
              <span className="frame-dot" />
            </div>
            <img
              src={tab.img}
              alt={tab.alt}
              width={1366}
              height={768}
              loading="lazy"
              decoding="async"
              className="block aspect-[16/10] w-full object-cover object-top"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
