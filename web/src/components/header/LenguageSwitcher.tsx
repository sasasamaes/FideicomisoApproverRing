"use client";

import React, { useState } from "react";
import { useLanguageStore } from "@/store/languageStore";
import { usePathname, useRouter } from "next/navigation";

const LanguageSwitcher = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { language, setLanguage } = useLanguageStore();
  const pathname = usePathname();
  const router = useRouter();

  const changeLanguage = (locale: string) => {
    setLanguage(locale);
    const newPathname = pathname.replace(/^\/(en|es)/, `/${locale}`);
    router.push(newPathname);
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative bg-white px-[0.2rem] py-[0.2rem] rounded-sm">
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
