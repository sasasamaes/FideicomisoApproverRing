"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import localFont from "next/font/local";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/header/Header";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const [currentLocale, setCurrentLocale] = useState(locale);
  const [messages, setMessages] = useState<Record<string, string> | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedLocale = localStorage.getItem("language") || locale;
    if (storedLocale !== currentLocale) {
      const newPathname = window.location.pathname.replace(
        /^\/(en|es)/,
        `/${storedLocale}`
      );
      setCurrentLocale(storedLocale);
      router.replace(newPathname);
    }
  }, [locale, currentLocale, router]);

  useEffect(() => {
    const loadMessages = async () => {
      const importedMessages = (
        await import(`../../../messages/${currentLocale}.json`)
      ).default;
      setMessages(importedMessages);
    };
    loadMessages();
  }, [currentLocale]);

  return (
    <html lang={currentLocale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased p-5 bg-home-background bg-no-repeat bg-cover min-h-screen`}
      >
        {messages && (
          <NextIntlClientProvider locale={currentLocale} messages={messages}>
            <Header />
            {children}
            <footer></footer>
            <Toaster />
          </NextIntlClientProvider>
        )}
      </body>
    </html>
  );
}
