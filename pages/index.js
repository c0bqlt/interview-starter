import { useState } from 'react';
import { PriceWithoutVat, PriceWithVat, VatRate } from '../components';

const Page = () => {
  const [state, setState] = useState({
    withoutVat: '',
    withVat: '',
    vatRate: '',
  });

  return (
    <div className="grid gap-4 grid-cols-3 max-w-3xl mx-auto my-12 bg-white border-2 border-purple-400 rounded-lg p-4">
      <PriceWithoutVat {...{ state, setState }} />
      <VatRate {...{ state, setState }} />
      <PriceWithVat {...{ state, setState }} />
    </div>
  );
};

export default Page;
