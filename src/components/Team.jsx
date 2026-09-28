import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Reveal from './Reveal.jsx';
import SectionHead from './SectionHead.jsx';

function TeamCard({ member, delay }) {
  const { i18n } = useTranslation();
  const [broken, setBroken] = useState(false);
  const name = i18n.language === 'ar' ? member.name : member.nameEn;
  const initial = (member.nameEn || member.name).trim().charAt(0).toUpperCase();

  return (
    <Reveal delay={delay}>
      <article className="card card-hover h-full p-5 text-center">
        <div className="mx-auto h-24 w-24 overflow-hidden rounded-full" style={{ background: 'var(--primary-soft)' }}>
          {broken ? (
            <span
              className="grid h-full w-full place-items-center text-3xl font-black"
              style={{ color: 'var(--primary)' }}
              aria-hidden="true"
            >
              {initial}
            </span>
          ) : (
            <img
              src={member.photo}
              alt={name}
              width={96}
              height={96}
              loading="lazy"
              decoding="async"
              onError={() => setBroken(true)}
              className="h-full w-full object-cover"
            />
          )}
        </div>
        <h3 className="mt-4 text-base font-extrabold leading-snug">{name}</h3>
        <p className="mt-1 text-sm font-bold text-primary">{member.role}</p>
        {member.name !== member.nameEn && i18n.language === 'ar' ? (
          <p className="mt-1 text-xs font-semibold text-muted">{member.nameEn}</p>
        ) : null}
      </article>
    </Reveal>
  );
}

export default function Team() {
  const { t } = useTranslation();
  const members = t('team.members', { returnObjects: true });

  return (
    <section id="team" className="section-pad bg-bg">
      <div className="container-x">
        <SectionHead
          eyebrow={t('team.eyebrow')}
          title={t('team.title')}
          desc={t('team.desc')}
          center
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {members.map((member, i) => (
            <TeamCard key={member.nameEn} member={member} delay={i * 0.06} />
          ))}
        </div>
      </div>
    </section>
  );
}
