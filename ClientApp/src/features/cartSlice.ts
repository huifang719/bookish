import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Item {
    id: string | null;
    name: string | null;
    imageUrl: string | null;
    quantity: number | null;
    price: number | null;
}
interface CartState {
    value: Item[]
}

const initialState: CartState = { value: [] };

const cartSlice = createSlice({
    name: "Cart",
    initialState,
    reducers: {
        addItem: (state: CartState, action: PayloadAction<Item>) => {
            state.value.push(action.payload);
        },
        updateItem: (state: CartState, action: PayloadAction<Item>) => {
            state.value = state.value.map((item) => {
                if (item.id === action.payload.id) {
                    return action.payload
                }
                return item
            })
        },
        removeItem: (state: CartState, action: PayloadAction<{ id: string }>) => {
            state.value = state.value.filter((item) => item.id !== action.payload.id)
        }
    }
})

export const { addItem, updateItem, removeItem } = cartSlice.actions;
export default cartSlice; 