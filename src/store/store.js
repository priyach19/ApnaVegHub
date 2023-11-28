import { configureStore } from '@reduxjs/toolkit'
//impoting reducers
import cartReducer from './cartSlice'
import productsReducer from './productSlice'

export const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer
    },
})

export default store;