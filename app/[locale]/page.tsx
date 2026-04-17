import {getTranslations, setRequestLocale} from "next-intl/server";

const LOCALES = ["en", "de", "af"] as const;

export function generateStaticParams() {
  return LOCALES.map((locale) => ({locale}));
}

export default async function HomePage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;

  setRequestLocale(locale);

  const t = await getTranslations({locale, namespace: "home"});

  return (
    <main style={{padding: 24, fontFamily: "system-ui, sans-serif"}}>
      <h1 style={{fontSize: 32, fontWeight: 700, margin: "0 0 12px"}}>
        {t("title")}
      </h1>
      <p style={{margin: 0, opacity: 0.8}}>{t("subtitle")}</p>
    </main>
  );
}
