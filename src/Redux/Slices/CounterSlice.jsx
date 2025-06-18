



import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value: 0,
}

//  step 1create slice
export  const CounterSlice = createSlice({
    // step 2
    name:"counter",
    initialState,
    reducers: {
        increment : (state) =>{
            state.value += 1;
        },
        decrement : (state) =>{
            state.value -= 1;
        }
    }
})

// if slice mathi je functionality nikalva mate 

export const {increment , decrement} = CounterSlice.actions;
export default CounterSlice.reducer;