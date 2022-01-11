import Head from 'next/head';
import { useState } from 'react';

import styles from '../styles/Home.module.css';
import KupacDetalji from '../components/kupacDetalji';
import RoleteForma from '../components/roleteForma';
import RoleteNalog from '../components/roleteNalog';
import MrežeForma from '../components/mrežeForma';

import MrežeNalog from '../components/mrežeNalog';
import Print from '../components/print';

import PilanjeRolete from '../components/pilanjeRolete';
import MrežePilanje from '../components/mrežePilanje';
import PrintPilanje from '../components/printPilanje';

export default function Home() {
  const [trenutnaForma, setTrenutnaForma] = useState<boolean>(true);
  const [isPrint, setIsPrint] = useState<boolean>(false);
  const [isPrintPilanje, setIsPrintPilanje] = useState<boolean>(false);

  const handlePrint = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e) {
      setIsPrint(true);
      window.print();
    }
  };
  const handlePrintPilanje = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e) {
      setIsPrintPilanje(true);
      window.print();
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Rolar - Nalozi</title>
        <meta
          name="description"
          content="TypeScript starter for Next.js that includes all you need to build amazing apps"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {!isPrint && !isPrintPilanje && (
        <div>
          <div className={styles.homeGrid}>
            <div>
              <KupacDetalji />
              <div>
                <button
                  className={`${styles.homeBtnL} ${
                    !trenutnaForma && styles.bgNone
                  }`}
                  onClick={() => setTrenutnaForma(true)}
                >
                  Rolete
                </button>
                <button
                  className={`${styles.homeBtnR} ${
                    trenutnaForma && styles.bgNone
                  }`}
                  onClick={() => setTrenutnaForma(false)}
                >
                  Fix Mreže
                </button>
              </div>

              {trenutnaForma && <RoleteForma />}

              {!trenutnaForma && <MrežeForma />}
            </div>
            <div>
              <RoleteNalog />
              <PilanjeRolete />
            </div>
            <div>
              <MrežeNalog />
              <MrežePilanje />
            </div>
          </div>
          <button onClick={handlePrint}>Prikaži Print</button>
          <button onClick={handlePrintPilanje}>Prikaži Print Pilanje</button>
        </div>
      )}
      {isPrint && (
        <>
          <Print />
          <button onClick={() => setIsPrint(false)}>Nalog</button>
        </>
      )}
      {isPrintPilanje && (
        <>
          <PrintPilanje />
          <button onClick={() => setIsPrintPilanje(false)}>Nalog</button>
        </>
      )}
    </div>
  );
}
