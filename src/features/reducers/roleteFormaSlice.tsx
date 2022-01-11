import { Roleta } from '../../components/roleteForma';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store/store';

// Define the initial state using that type
interface InitState {
  nalogRolete: object[];
  trenutniTip: string | '';
}
const initialState: InitState = {
  nalogRolete: [],
  trenutniTip: ``,
};

export const roleteFormaSlice = createSlice({
  name: `roleteForma`,
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`

    roletaProizvod: (state, { payload }: PayloadAction<Roleta>) => {
      state.nalogRolete = [
        ...state.nalogRolete,
        { ...payload, id: `_` + Math.random().toString(36).substr(2, 9) },
      ];
    },
    ukloniArtikal: (state, { payload }: PayloadAction<string>) => {
      const filterRoletaId = state.nalogRolete.filter((roleta: any) => {
        return roleta.id !== payload;
      });
      return { ...state, nalogRolete: filterRoletaId };
    },
    trenutniTipRolete: (state, { payload }) => {
      return { ...state, trenutniTip: payload };
    },
  },
});

export const { roletaProizvod, ukloniArtikal, trenutniTipRolete } =
  roleteFormaSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state;

export default roleteFormaSlice.reducer;
