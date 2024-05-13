import type { Metadata } from "next";
import { dir } from "i18next";
import { Language, languages } from "@/i18n/settings";
import { PropsWithChildren } from "react";
import "../globals.css";
import { Link } from "@/components/link";
export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export interface PageParamsProps {
  lang: Language;
}
export interface PageProps<T = PageParamsProps> {
  params: T;
}

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
  params: { lang },
}: Readonly<PropsWithChildren<PageProps>>) {
  return (
    <html lang={lang} dir={dir(lang)}>
      <head />
      <body>
        {children}
        <div className="flex gap-1 p-1">
          <Link href="/" changeLangTo="en">
            en
          </Link>
          <Link href="/" changeLangTo="pl">
            pl
          </Link>
        </div>
      </body>
    </html>
  );
}
