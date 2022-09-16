import {createSlice} from '@reduxjs/toolkit'

// const initialState={
//     tabelnum:null
// }


const tableNumSlice = createSlice({
    name:'tableNum',
    initialState:{tabelNumber:null},
    reducers:{
        passtableNum:(state, action)=>{
            state.tabelNumber=action.payload;
            console.log(state.tabelNumber);
        },
       
    }
})

export const tableActions=tableNumSlice.actions;

export default tableNumSlice