import Reveal from './Reveal.jsx';

export default function SectionHead({ eyebrow, title, desc, center = false }) {
  return (
    <Reveal className={center ? 'text-center' : ''}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className={`title-xl mt-4 max-w-3xl ${center ? 'mx-auto' : ''}`}>{title}</h2>
      {desc ? (
        <p className={`lead-muted mt-4 max-w-2xl ${center ? 'mx-auto' : ''}`}>{desc}</p>
      ) : null}
    </Reveal>
  );
}
