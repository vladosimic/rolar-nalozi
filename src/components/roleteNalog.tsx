import { useAppDispatch, useAppSelector } from '../features/hooks/hooks';
import React from 'react';
import styles from '../styles/RoleteNalog.module.css';
import { ukloniArtikal } from '../features/reducers/roleteFormaSlice';
import ZbrojKvadrataRolete from '../features/utils/ZbrojM2Rolete';
import { Roleta } from './roleteForma';

const RoleteNalog: React.FC = () => {
  const rolete: any[] = useAppSelector(
    (state) => state.roleteForma.nalogRolete,
  );
  const dispatch = useAppDispatch();
  return (
    <div>
      {rolete.length > 0 && (
        <>
          <h2>Rolete</h2>
          <ul className={styles.roleteNalogGrid}>
            <li>Kom</li>
            <li>Tip</li>
            <li>Šir x Vis</li>
            <li>Komanda</li>
            <li>Povlačenje</li>
            <li>Mreža</li>
            <li></li>
          </ul>
        </>
      )}

      {rolete.length > 0 &&
        rolete.map((roletas: Roleta): JSX.Element => {
          const {
            id,
            komada,
            desne,
            lijeve,
            mreža,
            povlačenje,
            tip,
            visina,
            širina,
          } = roletas;

          return (
            <ul className={styles.roleteNalogGrid} key={id}>
              <li>{komada}</li>
              <li>{tip}</li>
              <li>
                {širina} x {visina}
              </li>

              <li>
                {lijeve > 0 && desne < 1 && `L`}
                {desne > 0 && lijeve < 1 && `D`}
                {desne > 0 && lijeve > 0 && `${lijeve}L+${desne}D`}
              </li>
              <li>{povlačenje}</li>
              <li>{mreža}</li>
              <li>
                <button onClick={() => dispatch(ukloniArtikal(id))}>
                  Ukloni
                </button>
              </li>
            </ul>
          );
        })}
      <ZbrojKvadrataRolete />
    </div>
  );
};

export default RoleteNalog;
