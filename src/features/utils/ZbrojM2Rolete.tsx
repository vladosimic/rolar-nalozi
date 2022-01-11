import React from 'react';
import { useAppSelector } from '../hooks/hooks';

const ZbrojKvadrataRolete = () => {
  const nalog = useAppSelector((state) => state.roleteForma.nalogRolete);

  if (nalog.length > 0) {
    const aw = nalog.map((it: any) => {
      const num1 = Number(it.širina / 100) * Number(it.visina / 100);
      const all: number = num1 * it.komada;
      return all;
    });
    const sum = aw.reduce((a, b) => a + b, 0).toFixed(3);

    return <>{`Rolete: ${sum}m2`}</>;
  }
  return null;
};

export default ZbrojKvadrataRolete;
