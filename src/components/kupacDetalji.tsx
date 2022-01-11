import { kupacPodaci } from '../features/reducers/kupacSlice';
import React, { useEffect, useState } from 'react';
import styles from '../styles/KupacDetalji.module.css';
import { useAppDispatch } from '../features/hooks/hooks';

interface DetaljiKupca {
  ime: string;
  mjesto: string;
  napomena: string;
}

const KupacDetalji = () => {
  const [kupac, setKupac] = useState<DetaljiKupca>({
    ime: ``,
    mjesto: ``,
    napomena: ``,
  });
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(kupacPodaci(kupac));
  }, [dispatch, kupac]);

  return (
    <div className={styles.formContainer}>
      <form className="kupacDetalji">
        <h3>
          <span style={{ marginRight: `92px` }}>Ime: </span>
          {` `}
          <input
            type="text"
            value={kupac.ime}
            onChange={(e) => setKupac({ ...kupac, ime: e.target.value })}
          />
        </h3>
        <h3>
          <span style={{ marginRight: `65px` }}>Mjesto: </span>
          {` `}
          <input
            type="text"
            value={kupac.mjesto}
            onChange={(e) => setKupac({ ...kupac, mjesto: e.target.value })}
          />
        </h3>
        <h3>
          <span style={{ marginRight: `30px` }}>Napomena: </span>
          <textarea
            name=""
            id=""
            cols={Number(38)}
            rows={Number(3)}
            value={kupac.napomena}
            onChange={(e) => setKupac({ ...kupac, napomena: e.target.value })}
          ></textarea>
        </h3>
      </form>
    </div>
  );
};

export default KupacDetalji;
