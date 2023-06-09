import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  recommend: null,
  newDisney: null,
  original: null,
  trending: null,
}

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.recommend = action.payload.recommend
      state.newDisney = action.payload.newDisney
      state.original = action.payload.original
      state.trending = action.payload.trending
    },
  }
})

export const { setMovies } = movieSlice.actions;

export const SelectRecommend = (state: any) => state.movie.recommend;
export const SelectNewDisney = (state: any) => state.movie.newDisney;
export const SelectOriginal = (state: any) => state.movie.original;
export const SelectTrending = (state: any) => state.movie.trending;

export default movieSlice.reducer
