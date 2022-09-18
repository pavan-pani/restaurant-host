import {createSlice} from '@reduxjs/toolkit'



const filterSlice = createSlice({
    name:'filter',
    initialState:{filter:'All Items'},
    reducers:{
        passfilter(state, action){
            state.filter=action.payload;
            console.log(state.filter);
        },
        resetFilter(state){
            state.filter='All Items'
        }
       
    }
})

export const filterActions=filterSlice.actions;

export default filterSlice