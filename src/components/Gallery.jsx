import { useState } from 'react';
import { Monitor, Smartphone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Lightbox from './Lightbox.jsx';
import Reveal from './Reveal.jsx';
import SectionHead from './SectionHead.jsx';

export default function Gallery() {
  const { t } = useTranslation();
  const items = t('gallery.items', { returnObjects: true });
  const [open, setOpen] = useState(null);

  return (
    <section className="section-pad bg-bg">
      <div className="container-x">
        <SectionHead
          eyebrow={t('gallery.eyebrow')}
          title={t('gallery.title')}
          desc={t('gallery.desc')}
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.src + item.title} delay={(i % 3) * 0.07}>
              <button
                type="button"
                onClick={() => setOpen(i)}
                aria-label={`${t('gallery.view')}: ${item.title}`}
                className="card card-hover group w-full overflow-hidden p-4 text-start"
              >
                {item.type === 'mobile' ? (
                  <div className="mx-auto w-full max-w-[210px]">
                    <div className="frame-phone">
                      <img
                        src={item.src}
                        alt={item.title}
                        width={720}
                        height={1600}
                        loading="lazy"
                        decoding="async"
                        className="block aspect-[9/17] w-full object-cover"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="frame-browser">
                    <div className="frame-browser__bar">
                      <span className="frame-dot" />
                      <span className="frame-dot" />
                      <span className="frame-dot" />
                    </div>
                    <img
                      src={item.src}
                      alt={item.title}
                      width={1366}
                      height={768}
                      loading="lazy"
                      decoding="async"
                      className="block aspect-[16/10] w-full object-cover object-top"
                    />
                  </div>
                )}

                <div className="mt-3 flex items-center justify-between gap-3 px-1">
                  <span className="truncate text-sm font-extrabold">{item.title}</span>
                  <span className="flex shrink-0 items-center gap-1.5">
                    {item.placeholder ? (
                      <span
                        className="rounded-full px-2 py-0.5 text-[0.7rem] font-extrabold"
                        style={{ background: 'var(--primary-soft)', color: 'var(--primary)' }}
                      >
                        {t('ui.placeholder')}
                      </span>
                    ) : null}
                    {item.type === 'mobile' ? (
                      <Smartphone size={16} className="text-muted" aria-hidden="true" />
                    ) : (
                      <Monitor size={16} className="text-muted" aria-hidden="true" />
                    )}
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {open !== null ? (
        <Lightbox
          items={items}
          index={open}
          onClose={() => setOpen(null)}
          onPrev={() => setOpen((i) => (i - 1 + items.length) % items.length)}
          onNext={() => setOpen((i) => (i + 1) % items.length)}
        />
      ) : null}
    </section>
  );
}
