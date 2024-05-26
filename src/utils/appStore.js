import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./userSlice"
import moviesReducer from "./moviesSlice"
// creating the store
const appStore = configureStore({
    // reducer
    reducer: {
        // reducer for user slice
        user: userReducer,
        // reducer for movies
        movies: moviesReducer
    }

})

export default appStore