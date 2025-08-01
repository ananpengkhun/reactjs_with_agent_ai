// components/LanguageSwitcher.tsx
'use client'; // Required for interactivity
import { useRouter, usePathname } from 'next/navigation';
export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const changeLanguage = (locale: string) => {
    // Redirect to the new locale while preserving the current path
    router.push(`/${locale}${pathname.replace(/^\/(en|th)/, '')}`);
  };
  return (
    <div className="flex gap-2">
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('th')}>thailand</button>
    </div>
  );
}