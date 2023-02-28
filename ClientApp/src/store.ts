import { configureStore } from '@reduxjs/toolkit'
import userSlice from './features/userSlice'
import cartSlice from './features/cartSlice'
import searchSlice from './features/searchSlice'

console.log(userSlice)
export const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        search: searchSlice.reducer,
        user: userSlice.reducer,
    },
})