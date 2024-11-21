"use client";

import { ClaimEscrowForm } from "@/components/shared/ClaimEscrowForm";
import { useClaimEscrowEarningsHook } from "./hooks/claim-escrow-earnings.hook";

export function ClaimEscrowEarningsForm() {
  const { form, onSubmit } = useClaimEscrowEarningsHook();

  const fields = [
    {
      name: "contractId",
      label: "Contract ID",
      placeholder: "Enter the contract ID",
      description:
        "This engagement will help you identify the escrows associated with a service provider.",
    },
    {
      name: "engagementId",
      label: "Engagement",
      placeholder: "Enter the engagement",
    },
  ];

  return (
    <ClaimEscrowForm
      title="Claim Escrow Earnings"
      subtitle="Fill in the details below to claim escrow earnings."
      fields={fields}
      form={form}
      onSubmit={onSubmit}
      submitButtonText="Fund escrow"
    />
  );
}
