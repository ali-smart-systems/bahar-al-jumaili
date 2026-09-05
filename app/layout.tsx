import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "وكالة بحر الجميلي | أجود أنواع القات الحيوفي والأرحبي",
  description:
    "وكالة بحر الجميلي لأجود أنواع القات الحيوفي والأرحبي في سوق المقالح وسوق بني حيان في صنعاء. تعرف على الأنواع من خلال معرض الصور وتواصل معنا مباشرة.",
  keywords: [
    "قات حيوفي",
    "قات أرحبي",
    "قات عنسي",
    "قات حداء",
    "مقوت",
    "أفضل مقوت في صنعاء",
    "أقوى مقوتي في صنعاء",
    "مقوت في صنعاء",
    "مقوت في المقالح",
    "مقوت في سوق بني حيان",
    "وكالة بحر الجميلي",
    "سوق المقالح",
    "سوق بني حيان",
  ],
  authors: [{ name: "وكالة بحر الجميلي" }],
  openGraph: {
    title: "وكالة بحر الجميلي | أجود أنواع القات الحيوفي والأرحبي",
    description:
      "وكالة بحر الجميلي لأجود أنواع القات الحيوفي والأرحبي في سوق المقالح وسوق بني حيان في صنعاء.",
    type: "website",
    locale: "ar_YE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}


