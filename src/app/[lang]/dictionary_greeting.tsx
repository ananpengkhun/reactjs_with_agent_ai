"use client";

import { useTranslations } from "next-intl";

export default function DictionaryGreeting() {
  const t = useTranslations("HomePage")
  return (
    <div className="text-center mt-10">
      <h2 style={{color: "black"}}>Login {t('greeting')}</h2>;
    </div>)
}   