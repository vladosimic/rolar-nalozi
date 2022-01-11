import { useAppSelector } from '../features/hooks/hooks';
import React from 'react';
import styles from '../styles/RoleteNalog.module.css';
import ZbrojKvadrataRolete from '../features/utils/ZbrojM2Rolete';
import ZbrojKvadrataFixMreže from '../features/utils/ZbrojM2Komarice';
import { Roleta } from './roleteForma';
import { Komarica } from './mrežeForma';

const Print = () => {
  const kupac = useAppSelector((state) => state.kupac);
  const rolete: any[] = useAppSelector(
    (state) => state.roleteForma.nalogRolete,
  );
  const mreže: any[] = useAppSelector(
    (state) => state.komariceForma.nalogFixKomarice,
  );
  console.log(rolete);

  const { ime, mjesto, napomena } = kupac;

  return (
    <div>
      <div className={styles.kupac} style={{ marginBottom: `60px` }}>
        <h3>
          Ime : <span>{ime}</span>
        </h3>
        <h3>
          Mjesto : <span>{mjesto}</span>
        </h3>
        <h3>
          Napomena : <span>{napomena}</span>
        </h3>
      </div>

      <div className={styles.printGridNalog}>
        <div>
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
                  </ul>
                );
              })}
            <ZbrojKvadrataRolete />
          </div>
        </div>
        <div>
          {mreže.length > 0 && (
            <>
              <h2>Fix Mreže</h2>
              <ul className={styles.roleteNalogGrid}>
                <li>Kom</li>
                <li>Tip</li>
                <li>Šir x Vis</li>
                <li>Kukice</li>
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
                </ul>
              );
            })}
          <ZbrojKvadrataFixMreže />
        </div>
      </div>
    </div>
  );
};

export default Print;
