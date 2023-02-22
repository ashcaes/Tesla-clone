import { createSlice } from "@reduxjs/toolkit";

const initialState = { models:["Model s","Model 3","Model X" ,"Model Y"]}

const CarSlice = createSlice({
    name:'Cars',
    initialState,
    reducers:{
       
    }})

   export const SelectCars = state => state.cars.models
   export default CarSlice.reducer
 





   