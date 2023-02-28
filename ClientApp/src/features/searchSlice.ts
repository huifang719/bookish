import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Item {
    id: string | null;
    name: string | null;
    author: string | null;
    cover: string | null;
}
interface SearchState {
    value: Item[]
}

const initialState: SearchState = { value: [] }

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        showResult: (state: SearchState, action: PayloadAction<Item[]>) => {
            state.value = action.payload;
        },
        reset: (state: SearchState) => {
            state = initialState;
        }
    }
})

export const { showResult } = searchSlice.actions;
export default searchSlice; 
