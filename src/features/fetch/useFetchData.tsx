import { useEffect, useState } from 'react';
import { db } from '../../../firebase';
import { collection, getDocs } from 'firebase/firestore/lite';

export interface KlikKlakBolcnaI {
  mreža: number;
  završna: number;
}

export interface RoleteTipI {
  [x: string]: any;
  lamela: number;
  vodilica: number;
  tip: string;
  osovina: number;
  Bolcna: KlikKlakBolcnaI;
  KlikKlak: KlikKlakBolcnaI;
}

export const useFetchTipoviRoleta = () => {
  const [tipRoletaFbase, setTipRoletaFbase] = useState<RoleteTipI[]>([]);
  const fetchBlogs = async () => {
    const response = collection(db, `TipoviRolete`);
    const data = await getDocs(response);

    data.docs.forEach((item) => {
      const { rolete } = item.data();

      setTipRoletaFbase([...rolete]);
    });
  };

  useEffect(() => {
    fetchBlogs();
  }, []);
  return { tipRoletaFbase };
};

export const useFetchVrstePovlačenja = () => {
  const [vrstaPovlačenjaFbase, setVrstePovlačenjaFbase] = useState<string[]>(
    [],
  );
  const fetchBlogs = async () => {
    const response = collection(db, `VrstePovlačenja`);
    const data = await getDocs(response);

    data.docs.forEach((item) => {
      const getKeysData = Object.keys(item.data());

      setVrstePovlačenjaFbase([...getKeysData]);
    });
  };

  useEffect(() => {
    fetchBlogs();
  }, []);
  return { vrstaPovlačenjaFbase };
};

export const useFetchMrežaZaRoletu = () => {
  const [mrežaZaRoletuFbase, setMrežaZaRoletuFbase] = useState<string[]>([]);
  const fetchBlogs = async () => {
    const response = collection(db, `MrežaZaRoletu`);
    const data = await getDocs(response);

    data.docs.forEach((item) => {
      const getKeysData = Object.keys(item.data());

      setMrežaZaRoletuFbase([...getKeysData]);
    });
  };

  useEffect(() => {
    fetchBlogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { mrežaZaRoletuFbase };
};

export interface TipoviKom {
  tip: string;
  širina: number;
  visina: number;
}
export const useFetchTipoviKomarica = () => {
  const [tipKomaricaFbase, setTipKomaricaFbase] = useState<TipoviKom[]>([]);
  const fetchBlogs = async () => {
    const response = collection(db, `TipFixKomarice`);
    const data = await getDocs(response);

    data.docs.forEach((item) => {
      const { komarice } = item.data();

      setTipKomaricaFbase([...tipKomaricaFbase, komarice][0]);
    });
  };

  useEffect(() => {
    fetchBlogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { tipKomaricaFbase };
};
