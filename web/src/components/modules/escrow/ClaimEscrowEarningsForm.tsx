'use client';

import { ClaimEscrowForm } from '@/components/shared/ClaimEscrowForm';
import { useClaimEscrowEarningsHook } from './hooks/claim-escrow-earnings.hook';
import { useTranslations } from 'next-intl';

export function ClaimEscrowEarningsForm() {
  const { form, onSubmit } = useClaimEscrowEarningsHook();
  const t = useTranslations('ClaimEscrowEarningsForm');

  const fields = [
    {
      name: 'contractId',
      label: t('fields.contractId.label'),
      placeholder: t('fields.contractId.placeholder'),
      description: t('fields.contractId.description'),
    },
    {
      name: 'engagementId',
      label: t('fields.engagementId.label'),
      placeholder: t('fields.engagementId.placeholder'),
    },
  ];

  return (
    <ClaimEscrowForm
      title={t('title')}
      subtitle={t('subtitle')}
      fields={fields}
      form={form}
      onSubmit={onSubmit}
      submitButtonText={t('submitButtonText')}
    />
  );
}
