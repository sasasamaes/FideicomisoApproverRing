'use client';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useInitializeEscrowHook } from './hooks/initialize-escrow.hook';
import { useTranslations } from 'next-intl';

export function InitializeEscrowForm() {
  const { form, onSubmit } = useInitializeEscrowHook();
  const t = useTranslations('InitializeEscrowForm');

  return (
    <div
      className="w-full max-w-lg mx-auto p-8 rounded-lg shadow-lg"
      style={{
        background: 'linear-gradient(to bottom left, #33471E 10%, #132864 100%)',
      }}
    >
      <h2 className="text-white text-xl font-semibold mb-4">{t('title')}</h2>
      <p className="text-gray-300 text-sm mb-6">{t('subtitle')}</p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col space-y-6">
          <FormField
            control={form.control}
            name="engagementId"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">{t('fields.engagementId.label')}</FormLabel>
                <FormControl>
                  <Input placeholder={t('fields.engagementId.placeholder')} {...field} />
                </FormControl>
                <FormDescription className="text-gray-400">
                  {t('fields.engagementId.description')}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">{t('fields.description.label')}</FormLabel>
                <FormControl>
                  <Input placeholder={t('fields.description.placeholder')} {...field} />
                </FormControl>
                <FormDescription className="text-gray-400">
                  {t('fields.description.description')}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="serviceProvider"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">{t('fields.serviceProvider.label')}</FormLabel>
                <FormControl>
                  <Input placeholder={t('fields.serviceProvider.placeholder')} {...field} />
                </FormControl>
                <FormDescription className="text-gray-400">
                  {t('fields.serviceProvider.description')}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">{t('fields.amount.label')}</FormLabel>
                <FormControl>
                  <Input placeholder={t('fields.amount.placeholder')} {...field} />
                </FormControl>
                <FormDescription className="text-gray-400">
                  {t('fields.amount.description')}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-end">
            <Button className="bg-white text-black font-medium py-1 px-4 rounded-full shadow-md hover:shadow-lg transition text-sm">
              {t('button')}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
