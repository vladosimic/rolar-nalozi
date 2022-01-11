import {
  TipoviKom,
  useFetchTipoviKomarica,
} from '../features/fetch/useFetchData';
import React, { useState } from 'react';
import styles from '../styles/RoleteForma.module.css';
import {
  komaricaProizvod,
  trenutniTipMreže,
} from '../features/reducers/mrežeFormaSlice';
import { useAppDispatch } from '../features/hooks/hooks';

export interface Komarica {
  id: string;
  tip: string;
  širina: number | null;
  visina: number | null;
  komada: number | null;
  kukice?: number | null;
  mjera?: string;
}

const MrežeForma: React.FC = () => {
  const { tipKomaricaFbase } = useFetchTipoviKomarica();
  const [komarica, setKomarica] = useState<Komarica>({
    id: ``,
    tip: ``,
    širina: null,
    visina: null,
    komada: null,
    kukice: null,
    mjera: ``,
  });

  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(komaricaProizvod(komarica));
    dispatch(trenutniTipMreže(komarica.tip));
    setKomarica({
      ...komarica,
      širina: null,
      visina: null,
      komada: null,
    });
  };

  if (!tipKomaricaFbase) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className={styles.roleteForma}>
      <form onSubmit={(e) => handleSubmit(e)}>
        {/*** Odabir vrste Rolete  ***/}
        <h4>Odaberi</h4>
        <select
          name="tipRolete"
          onChange={(e) => setKomarica({ ...komarica, tip: e.target.value })}
        >
          <option value="--Odaberi">--Odaberi</option>
          {tipKomaricaFbase.length > 0 &&
            tipKomaricaFbase.map(
              (kom: TipoviKom, index: number): JSX.Element => {
                return (
                  <option key={index} value={kom.tip}>
                    {kom.tip}
                  </option>
                );
              },
            )}
        </select>
        {/*** Širina Rolete  ***/}
        <h4>Širina</h4>
        <input
          type="number"
          required
          value={komarica.širina || ``}
          onWheel={(e: any) => e.target.blur()}
          onChange={(e) =>
            setKomarica({ ...komarica, širina: Number(e.target.value) })
          }
        />
        {/*** Visina Rolete  ***/}
        <h4>Visina</h4>
        <input
          type="number"
          required
          value={komarica.visina || ``}
          onWheel={(e: any) => e.target.blur()}
          onChange={(e) =>
            setKomarica({ ...komarica, visina: Number(e.target.value) })
          }
        />
        {/*** Količina komarica u komadima ***/}
        <h4>Komada</h4>
        <input
          type="number"
          required
          value={komarica.komada || ``}
          onWheel={(e: any) => e.target.blur()}
          onChange={(e) =>
            setKomarica({ ...komarica, komada: Number(e.target.value) })
          }
        />
        {/*** Veličina zakački ***/}
        {komarica.tip !== `Fix Stan` && (
          <>
            <h4>Kukice</h4>
            <input
              type="number"
              value={komarica.kukice || ``}
              onWheel={(e: any) => e.target.blur()}
              onChange={(e) =>
                setKomarica({ ...komarica, kukice: Number(e.target.value) })
              }
            />
          </>
        )}
        <div style={{ textAlign: `center` }}>
          <button className={styles.roleteFormaBtn} type="submit">
            Dodaj Proizvod
          </button>
        </div>
      </form>
    </div>
  );
};

export default MrežeForma;
