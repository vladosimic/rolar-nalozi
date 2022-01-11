import { useAppSelector } from '../features/hooks/hooks';
import styles from '../styles/RoleteNalog.module.css';
import React from 'react';
import { useFetchTipoviKomarica } from '../features/fetch/useFetchData';
import { Komarica } from './mrežeForma';

const MrežePilanje = () => {
  const mrežeNalog: any = useAppSelector(
    (state) => state.komariceForma.nalogFixKomarice,
  );
  const { tipKomaricaFbase } = useFetchTipoviKomarica();

  return (
    <div>
      {mrežeNalog.length > 0 && (
        <>
          <h2>Fix Mreže Pilanje</h2>
          <ul className={styles.roleteNalogGrid}>
            <li>Kom</li>
            <li>Tip</li>
            <li>Širina</li>
            <li>Visina</li>
          </ul>
        </>
      )}
      {mrežeNalog.length > 0 &&
        mrežeNalog.map((mreža: Komarica, idx: string) => {
          const match =
            tipKomaricaFbase &&
            tipKomaricaFbase.find((tipKom) => {
              if (tipKom.tip === mreža.tip) {
                return tipKom;
              }
              return null;
            });
          if (match) {
            return (
              <ul key={idx} className={styles.roleteNalogGrid}>
                <li>{mreža.komada}</li>
                <li>{mreža.tip}</li>
                <li>
                  {Math.round(((mreža.širina as number) - match.širina) * 100) /
                    100}
                </li>
                <li>
                  {Math.round(((mreža.širina as number) - match.visina) * 100) /
                    100}
                </li>
              </ul>
            );
          }
        })}
    </div>
  );
};

export default MrežePilanje;
