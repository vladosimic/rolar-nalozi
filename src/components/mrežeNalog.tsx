import { useAppDispatch, useAppSelector } from '../features/hooks/hooks';
import React from 'react';
import styles from '../styles/RoleteNalog.module.css';
import { ukloniArtikal } from '../features/reducers/mrežeFormaSlice';
import ZbrojKvadrataFixMreže from '../features/utils/ZbrojM2Komarice';
import { Komarica } from './mrežeForma';

const MrežeNalog: React.FC = () => {
  const mreže: any[] = useAppSelector(
    (state) => state.komariceForma.nalogFixKomarice,
  );

  const dispatch = useAppDispatch();
  return (
    <div>
      {mreže.length > 0 && (
        <>
          <h2>Fix Mreže</h2>
          <ul className={styles.roleteNalogGrid}>
            <li>Kom</li>
            <li>Tip</li>
            <li>Šir x Vis</li>
            <li>Kukice</li>
            <li></li>
          </ul>
        </>
      )}

      {mreže.length > 0 &&
        mreže.map((komarica: Komarica): JSX.Element => {
          const { id, komada, tip, visina, širina, kukice } = komarica;

          return (
            <ul className={styles.roleteNalogGrid} key={id}>
              <li>{komada}</li>
              <li>{tip}</li>
              <li>
                {širina} x {visina}
              </li>
              <li>{kukice}</li>

              <li>
                <button onClick={() => dispatch(ukloniArtikal(id))}>
                  Ukloni
                </button>
              </li>
            </ul>
          );
        })}
      <ZbrojKvadrataFixMreže />
    </div>
  );
};

export default MrežeNalog;
