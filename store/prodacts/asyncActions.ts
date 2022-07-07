import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Prodact} from './types';


export const fetchProdacts = createAsyncThunk<Prodact[]>("prodact/fetchProdacts",
  async () => {
    const { data } = await axios.get<Prodact[]>("/db.json");

    return data;
  },
);
