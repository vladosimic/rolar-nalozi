import { useAppSelector } from '../features/hooks/hooks';
import React from 'react';

import {
  RoleteTipI,
  useFetchTipoviRoleta,
} from '../features/fetch/useFetchData';
import styles from '../styles/RoleteNalog.module.css';
import { Roleta } from './roleteForma';

const PilanjeRolete = () => {
  const roleteNalog: any = useAppSelector(
    (state) => state.roleteForma.nalogRolete,
  );
  // const trenutniTipRolete = useAppSelector(
  //   (state) => state.roleteForma.trenutniTip,
  // );

  const aw = useFetchTipoviRoleta();
  // const pilanjeTrenutna = { aw, trenutniTipRolete, roleteNalog };
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(roletaPilanje(pilanjeTrenutna));
  // }, [roleteNalog, dispatch]);

  return (
    <div>
      {roleteNalog.length > 0 && (
        <>
          <h2>Rolete Pilanje</h2>
          <ul className={styles.roleteNalogGrid}>
            <li>Kom</li>
            <li>Tip</li>
            <li>Lamela</li>
            <li>Vodilica</li>
            <li>Osovina</li>
            <li>Mrž / Završ</li>
          </ul>
        </>
      )}

      {roleteNalog.length > 0 &&
        roleteNalog.map((it: Roleta, idx: number) => {
          const match = aw.tipRoletaFbase.find((item) => {
            if (item.tip === it.tip) {
              return it;
            }
            return null;
          });
          const isMreža: RoleteTipI =
            match &&
            match.vrsteMreže.find((its: RoleteTipI) => {
              if (its.tip === it.mreža) {
                return its;
              }
              return null;
            });

          const brLamela =
            match && (((it.visina as number) - match.vodilica) as number) / 3.9;

          if (match) {
            return (
              <ul className={styles.roleteNalogGrid} key={idx}>
                <li>{it.komada}</li>
                <li>{it.tip}</li>
                <li style={{ position: `relative` }}>
                  {Math.round(((it.širina as number) - match.lamela) * 100) /
                    100}
                  {` `}
                  <span className={styles.brLamela}>
                    {String(brLamela).slice(0, 4)}
                  </span>
                </li>
                <li>
                  {Math.round(((it.visina as number) - match.vodilica) * 100) /
                    100}
                </li>
                <li>
                  {Math.round(((it.širina as number) - match.osovina) * 100) /
                    100}
                </li>
                <li>
                  {isMreža &&
                    `${
                      Math.round(
                        ((it.širina as number) - isMreža.mreža) * 100,
                      ) / 100
                    } / ${
                      Math.round(
                        ((it.širina as number) - isMreža.završna) * 100,
                      ) / 100
                    }`}
                </li>
              </ul>
            );
          }
          return;
        })}
    </div>
  );
};

export default PilanjeRolete;
