import { createSlice } from '@reduxjs/toolkit';
import { importArt } from '../../utility/utils';

export const slice = createSlice({
    name: 'art',
    initialState: importArt(require.context('../../assets/art/', true, /\.jpg$/)),
    reducers: {},
});
  
// List selector

export const selectArts = (state) => {
    return state.art;
};

// Element selector

export const selectArt = (state, id) => {
    return state.art.find((single) => single.id.toString() === id);
};

export default slice.reducer;
  