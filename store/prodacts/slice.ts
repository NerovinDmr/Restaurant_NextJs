import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchProdacts } from "./asyncActions";
import { Prodact, ProdactState, Status } from "./types";
const initialState: ProdactState = {
  items: [],
  status: Status.LOADING,
};
const prodactSlice = createSlice({
  name: "prodact",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Prodact[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProdacts.pending, (state, action) => {
      state.status = Status.LOADING;
      state.items = [];
    });

    builder.addCase(fetchProdacts.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchProdacts.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const { setItems } = prodactSlice.actions;

export default prodactSlice.reducer;
