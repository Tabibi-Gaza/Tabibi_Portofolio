import { Moon, Sun } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../hooks/useTheme.js';

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const { t } = useTranslation();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? t('ui.themeLight') : t('ui.themeDark')}
      title={isDark ? t('ui.themeLight') : t('ui.themeDark')}
      className="btn btn-ghost !px-3 !py-2"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
