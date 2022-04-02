import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getSearchResults = createAsyncThunk(
  'search/getSearchResults',
  async (searchValue) => {
    return axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=1335239b0b917f23ccc8492fb3fecd4f&language=en&query=${searchValue}&page=1&include_adult=false`
      )
      .then((res) => res.data)
  }
)

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchValue: '',
    searchResult: {
      status: '',
      searchResultList: [],
    },
  },
  extraReducers: {
    [getSearchResults.pending]: (state) => {
      state.searchResult.status = 'loading'
    },
    [getSearchResults.fulfilled]: (state, action) => {
      state.searchResult.searchResultList = action.payload.results
      state.searchResult.status = 'success'
    },
  },
})
export default searchSlice.reducer
