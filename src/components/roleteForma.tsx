import {
  useFetchTipoviRoleta,
  useFetchVrstePovlačenja,
  useFetchMrežaZaRoletu,
  RoleteTipI,
} from '../features/fetch/useFetchData';
import React, { useState } from 'react';
import styles from '../styles/RoleteForma.module.css';
import { useAppDispatch } from '../features/hooks/hooks';
import {
  roletaProizvod,
  trenutniTipRolete,
} from '../features/reducers/roleteFormaSlice';

export interface Roleta {
  id: string;
  tip: string;
  širina: number | '';
  visina: number | '';
  povlačenje: string;
  lijeve: number | '';
  desne: number | '';
  komada: number | '';
  mreža: string;
}

const RoleteForma = () => {
  const { tipRoletaFbase } = useFetchTipoviRoleta();
  const { vrstaPovlačenjaFbase } = useFetchVrstePovlačenja();
  const { mrežaZaRoletuFbase } = useFetchMrežaZaRoletu();

  const [roleta, setRoleta] = useState<Roleta>({
    id: ``,
    tip: ``,
    širina: ``,
    visina: ``,
    povlačenje: ``,
    lijeve: ``,
    desne: ``,
    komada: ``,
    mreža: ``,
  });

  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(trenutniTipRolete(roleta.tip));
    dispatch(roletaProizvod(roleta));
    setRoleta({
      ...roleta,
      širina: ``,
      visina: ``,
      lijeve: ``,
      desne: ``,
      komada: ``,
    });
  };

  if (!tipRoletaFbase) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className={styles.roleteForma}>
      <form onSubmit={(e) => handleSubmit(e)}>
        {/*** Odabir vrste Rolete  ***/}
        <h4>Odaberi</h4>
        <select
          name="tipRolete"
          onChange={(e) => setRoleta({ ...roleta, tip: e.target.value })}
        >
          <option value="--Odaberi">--Odaberi</option>
          {tipRoletaFbase.map((rol: RoleteTipI, index: number): JSX.Element => {
            return (
              <option key={index} value={rol.tip}>
                {rol.tip}
              </option>
            );
          })}
        </select>
        {/*** Širina Rolete  ***/}
        <h4>Širina</h4>
        <input
          type="number"
          required
          value={roleta.širina || ``}
          onWheel={(e: any) => e.target.blur()}
          onChange={(e) =>
            setRoleta({ ...roleta, širina: Number(e.target.value) })
          }
        />
        {/*** Visina Rolete  ***/}
        <h4>Visina</h4>
        <input
          type="number"
          required
          value={roleta.visina || ``}
          onWheel={(e: any) => e.target.blur()}
          onChange={(e) =>
            setRoleta({ ...roleta, visina: Number(e.target.value) })
          }
        />
        {/*** Količina Roleta u komadima ***/}
        <h4>Komada</h4>
        <input
          type="number"
          required
          value={roleta.komada || ``}
          onWheel={(e: any) => e.target.blur()}
          onChange={(e) =>
            setRoleta({ ...roleta, komada: Number(e.target.value) })
          }
        />
        {/*** Komande Lijevo / Desno ***/}
        <div className={styles.roleteFormaGrid}>
          <div>
            <h4>Komanda</h4>
            L:{` `}
            <input
              style={{ maxWidth: `100%`, width: `40px`, marginLeft: `10px` }}
              type="number"
              onWheel={(e: any) => e.target.blur()}
              value={roleta.lijeve || ``}
              onChange={(e) =>
                setRoleta({ ...roleta, lijeve: Number(e.target.value) })
              }
            />
            <br />
            <br />
            D:{` `}
            <input
              style={{ maxWidth: `100%`, width: `40px`, marginLeft: `6px` }}
              type="number"
              onWheel={(e: any) => e.target.blur()}
              value={roleta.desne || ``}
              onChange={(e) =>
                setRoleta({ ...roleta, desne: Number(e.target.value) })
              }
            />
          </div>
          <div style={{ paddingLeft: `40px` }}>
            <h4>Povlačenje</h4>
            {vrstaPovlačenjaFbase.length < 1 && <h3>Loading...</h3>}
            {vrstaPovlačenjaFbase.map(
              (vrste: string, idx: number): JSX.Element => {
                return (
                  <div
                    key={idx}
                    style={{ display: `flex`, alignItems: `center` }}
                  >
                    <input
                      type="radio"
                      name="vrstePovlačenja"
                      value={vrste}
                      onChange={(e) =>
                        setRoleta({ ...roleta, povlačenje: e.target.value })
                      }
                    />
                    <label htmlFor={vrste}>{vrste}</label>
                  </div>
                );
              },
            )}
          </div>
          <div>
            <h4>Mreža</h4>
            {mrežaZaRoletuFbase.length < 1 && <h3>Loading...</h3>}
            {mrežaZaRoletuFbase.map(
              (vrste: string, idx: number): JSX.Element => {
                return (
                  <div
                    key={idx}
                    style={{ display: `flex`, alignItems: `center` }}
                  >
                    <input
                      type="radio"
                      name="vrsteMrežaZaRoletu"
                      value={vrste}
                      onChange={(e) =>
                        setRoleta({ ...roleta, mreža: e.target.value })
                      }
                    />
                    <label htmlFor={vrste}>{vrste}</label>
                  </div>
                );
              },
            )}
          </div>
        </div>

        <div style={{ textAlign: `center` }}>
          <button className={styles.roleteFormaBtn} type="submit">
            Dodaj Proizvod
          </button>
        </div>
      </form>
    </div>
  );
};

export default RoleteForma;
