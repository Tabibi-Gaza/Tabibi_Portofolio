import { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Lightbox({ items, index, onClose, onPrev, onNext }) {
  const { t, i18n } = useTranslation();
  const closeRef = useRef(null);
  const item = items[index];
  const isRtl = i18n.language === 'ar';

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') (isRtl ? onNext() : onPrev());
      if (e.key === 'ArrowRight') (isRtl ? onPrev() : onNext());
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose, onNext, onPrev, isRtl]);

  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      className="fixed inset-0 z-[60] flex flex-col items-center justify-center gap-4 p-4"
      style={{ background: 'rgba(4, 10, 16, 0.92)' }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="flex w-full max-w-5xl items-center justify-between">
        <p className="text-sm font-bold" style={{ color: '#E8F1F5' }}>
          {item.title}
        </p>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label={t('gallery.close')}
          className="grid h-10 w-10 place-items-center rounded-full"
          style={{ background: 'rgba(255,255,255,0.12)', color: '#fff' }}
        >
          <X size={20} />
        </button>
      </div>

      <div className="relative flex max-h-[74vh] w-full max-w-5xl items-center justify-center">
        <img
          src={item.src}
          alt={item.title}
          className={`max-h-[74vh] w-auto max-w-full rounded-xl object-contain ${
            item.type === 'mobile' ? 'border-4 border-white/80' : ''
          }`}
        />

        <button
          type="button"
          onClick={onPrev}
          aria-label={t('gallery.prev')}
          className="absolute start-0 grid h-11 w-11 place-items-center rounded-full"
          style={{ background: 'rgba(255,255,255,0.14)', color: '#fff' }}
        >
          <ChevronLeft size={22} className={isRtl ? 'rotate-180' : ''} />
        </button>
        <button
          type="button"
          onClick={onNext}
          aria-label={t('gallery.next')}
          className="absolute end-0 grid h-11 w-11 place-items-center rounded-full"
          style={{ background: 'rgba(255,255,255,0.14)', color: '#fff' }}
        >
          <ChevronRight size={22} className={isRtl ? 'rotate-180' : ''} />
        </button>
      </div>

      <p className="text-xs font-semibold" style={{ color: '#9FB0C0' }}>
        {index + 1} / {items.length}
      </p>
    </div>
  );
}
