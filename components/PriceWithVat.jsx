import React, { useEffect } from 'react';

const PriceWithVat = ({ state, setState }) => {
  const handleChange = (event) => {
    setState((prev) => ({ ...prev, withVat: event.target.value }));
  };

  useEffect(() => {
    const withVat = state.withoutVat * (1 + state.vatRate / 100);
    setState((prev) => ({ ...prev, withVat }));
  }, [state.vatRate, state.withoutVat]);

  return (
    <div className="flex flex-col">
      <label>Price with VAT</label>
      <input
        type="text"
        className="border border-gray-400 rounded px-2 py-2 w-full leading-none bg-white"
        value={state.withVat}
        onChange={handleChange}
      />
    </div>
  );
};

export default PriceWithVat;
