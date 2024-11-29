'use client';

import Bounded from '@/components/Bounded';
import { ClaimEscrowEarningsForm } from '@/components/modules/escrow/ClaimEscrowEarningsForm';
import WithAuthProtect from '@/constants/helpers/WithAuth';

const ClaimEscrowEarnings = () => {
  return (
    <Bounded center={true}>
      <div className="flex flex-col gap-3 w-full md:w-1/2">
        <ClaimEscrowEarningsForm />
      </div>
    </Bounded>
  );
};

export default WithAuthProtect(ClaimEscrowEarnings);
