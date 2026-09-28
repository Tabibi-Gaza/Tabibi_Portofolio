import { useTranslation } from 'react-i18next';
import Reveal from './Reveal.jsx';

export default function Stats() {
  const { t } = useTranslation();
  const items = t('stats', { returnObjects: true });

  return (
    <section aria-label="stats" className="border-y border-line bg-surface">
      <div className="container-x grid grid-cols-2 py-8 md:grid-cols-4 md:py-10">
        {items.map((item, i) => (
          <Reveal
            key={item.label}
            delay={i * 0.07}
            className={`px-4 py-4 text-center md:py-2 ${
              i > 0 ? 'md:border-s md:border-line' : ''
            }`}
          >
            <p className="text-2xl font-black text-primary md:text-[2rem]">{item.value}</p>
            <p className="mt-1 text-sm font-bold text-muted md:text-base">{item.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
