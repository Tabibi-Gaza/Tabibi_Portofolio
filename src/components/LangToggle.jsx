import { useTranslation } from 'react-i18next';

export default function LangToggle() {
  const { i18n, t } = useTranslation();
  const next = i18n.language === 'ar' ? 'en' : 'ar';

  return (
    <button
      type="button"
      onClick={() => i18n.changeLanguage(next)}
      aria-label={t('ui.lang')}
      title={t('ui.lang')}
      className="btn btn-ghost !px-4 !py-2 text-sm font-extrabold"
    >
      {t('ui.langShort')}
    </button>
  );
}
