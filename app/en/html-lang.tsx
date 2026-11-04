"use client";

import { useEffect } from "react";

// O layout raiz é único e declara pt-BR; esta página troca o idioma do documento enquanto está aberta.
export function HtmlLang({ lang }: { lang: string }) {
  useEffect(() => {
    const previous = document.documentElement.lang;
    document.documentElement.lang = lang;
    return () => {
      document.documentElement.lang = previous;
    };
  }, [lang]);
  return null;
}
