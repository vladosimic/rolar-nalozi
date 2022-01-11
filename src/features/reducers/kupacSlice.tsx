import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store/store';

// Define a type for the slice state
interface DetaljiKupca {
  ime: string;
  mjesto: string;
  napomena: string;
}

// Define the initial state using that type
const initialState: DetaljiKupca = {
  ime: ``,
  mjesto: ``,
  napomena: ``,
};

export const kupacSlice = createSlice({
  name: `kupac`,
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    kupacPodaci: (state, action: PayloadAction<DetaljiKupca>) => {
      const { ime, mjesto, napomena } = action.payload;

      state.ime = ime;
      state.mjesto = mjesto;
      state.napomena = napomena;
    },
  },
});

export const { kupacPodaci } = kupacSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state;

export default kupacSlice.reducer;
