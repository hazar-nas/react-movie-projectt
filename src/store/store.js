import { configureStore } from '@reduxjs/toolkit'
import movies from './movieSlice'
import movieFilter from './movieFilterSlice'
import actors from './actorsSlice'
import search from './searchSlice'

const store = configureStore({
  reducer: {
    movies: movies,
    movieFilter: movieFilter,
    actors: actors,
    searchResult: search,
  },
})

export default store
