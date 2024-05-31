import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./userSlice"
import moviesReducer from "./moviesSlice"
import gptReducer from "./gptSlice"
import configReducer from "./configSlice"
// creating the store
const appStore = configureStore({
    // reducer
    reducer: {
        // reducer for user slice
        user: userReducer,
        // reducer for movies
        movies: moviesReducer,
        // slice for gpt page toggle
        gpt: gptReducer,
        // slice for config (language)
        config: configReducer
    }

})

export default appStore