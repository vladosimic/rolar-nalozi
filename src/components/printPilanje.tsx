import React from 'react';
import styles from '../styles/RoleteNalog.module.css';
import { useAppSelector } from '../features/hooks/hooks';
import PilanjeRolete from './pilanjeRolete';
import MrežePilanje from './mrežePilanje';

const PrintPilanje = () => {
  const kupac = useAppSelector((state) => state.kupac);
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
        <PilanjeRolete />
        <MrežePilanje />
      </div>
    </div>
  );
};

export default PrintPilanje;
