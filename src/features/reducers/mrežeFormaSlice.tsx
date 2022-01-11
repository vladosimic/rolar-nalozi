import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store/store';
import { Komarica } from '../../components/mrežeForma';

// Define the initial state using that type
interface InitState {
  nalogFixKomarice: object[];
  trenutniTip: string | '';
}
const initialState: InitState = {
  nalogFixKomarice: [],
  trenutniTip: ``,
};

export const komariceFormaSlice = createSlice({
  name: `komariceForma`,
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    komaricaProizvod: (state, { payload }: PayloadAction<Komarica>) => {
      state.nalogFixKomarice = [
        ...state.nalogFixKomarice,
        { ...payload, id: `_` + Math.random().toString(36).substr(2, 9) },
      ];
    },
    ukloniArtikal: (state, { payload }: PayloadAction<string>) => {
      const filterKomaricaId = state.nalogFixKomarice.filter(
        (komarica: any) => {
          return komarica.id !== payload;
        },
      );
      return { ...state, nalogFixKomarice: filterKomaricaId };
    },
    trenutniTipMreže: (state, { payload }: PayloadAction<string>) => {
      return { ...state, trenutniTip: payload };
    },
  },
});

export const { komaricaProizvod, ukloniArtikal, trenutniTipMreže } =
  komariceFormaSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state;

export default komariceFormaSlice.reducer;
