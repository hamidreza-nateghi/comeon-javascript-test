import { createSlice } from '@reduxjs/toolkit';

const initialState = { categoryId: 0, query: '' };

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId: (state, action) => {
      state.categoryId = action.payload;
    },
    setQuery: (state, action) => {
      state.query = action.payload;
    },
  },
});

export const { setCategoryId, setQuery } = filterSlice.actions;

export default filterSlice.reducer;
