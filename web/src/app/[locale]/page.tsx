'use client';

import Bounded from '@/components/Bounded';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('HomePage');

  return (
    <Bounded center={true}>
      <div className="flex flex-col justify-center items-center w-full h-full mt-0 md:mt-20 gap-4">
        <h1 className="flex flex-col items-center">
          +{' '}
          <span className="text-[40px] md:text-[80px] font-bold text-primary_green">
            {t('title')}
          </span>
          <span className="text-[40px] md:text-[80px] text-white">{t('subtitle')}</span>+{' '}
        </h1>
        <p className="text-[16px] md:text-[20px] w-full md:max-w-[60%] text-white text-center">
          {t('description')}
        </p>
      </div>
    </Bounded>
  );
}
