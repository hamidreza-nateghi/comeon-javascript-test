import { apiSlice } from './apiSlice';

export const gameSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getGames: builder.query({
      query: () => '/games',
    }),
    getCategories: builder.query({
      query: () => '/categories',
    }),
  }),
});

export const { useGetGamesQuery, useGetCategoriesQuery } = gameSlice;
