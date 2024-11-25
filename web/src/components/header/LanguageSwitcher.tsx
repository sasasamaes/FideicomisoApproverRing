"use client";

import { useLanguageStore } from "@/store/languageStore";
import { usePathname, useRouter } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";

const LanguageSwitcher = () => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { language, setLanguage } = useLanguageStore();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const changeLanguage = (locale: string) => {
    setLanguage(locale);

    const segments = pathname.split("/");
    const hasLangPrefix = /^[a-z]{2}$/.test(segments[1]);
    const newPath = hasLangPrefix
      ? `/${locale}/${segments.slice(2).join("/")}`
      : `/${locale}${pathname}`;

    router.push(newPath);
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative bg-white px-[0.2rem] py-[0.2rem] rounded-sm" ref={dropdownRef}>
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="flex items-center gap-0 w-16 h-6 bg-white rounded-full focus:outline-none"
      >
        <div className="flex items-center justify-center w-1/2 h-full bg-white">
          <span className="text-black font-bold text-lg">A</span>
        </div>
        <div className="flex items-center justify-center w-1/2 h-full bg-black">
          <span className="text-white font-bold text-lg">文</span>
        </div>
      </button>

      {isDropdownOpen && (
        <div className="absolute top-10 right-[-2rem] w-32 bg-white rounded-lg overflow-hidden shadow-md">
          <button
            onClick={() => changeLanguage("en")}
            className={`flex items-center gap-2 w-full px-2 py-2 text-left text-sm text-black hover:bg-gray-100 ${
              language === "en" ? "font-bold" : ""
            }`}
          >
            <div className="flex items-center justify-center w-8 h-8 bg-black rounded">
              <span className="text-white font-bold">EN</span>
            </div>
            English
          </button>
          <div className="h-[1px] bg-black my-1 mx-2"></div>
          <button
            onClick={() => changeLanguage("es")}
            className={`flex items-center gap-2 w-full px-2 py-2 text-left text-sm text-black hover:bg-gray-100 ${
              language === "es" ? "font-bold" : ""
            }`}
          >
            <div className="flex items-center justify-center w-8 h-8 bg-black rounded">
              <span className="text-white font-bold">ES</span>
            </div>
            Español
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
