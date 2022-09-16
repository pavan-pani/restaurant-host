import { configureStore } from "@reduxjs/toolkit"; 
import filterSlice from "./filter-slice";
import tableNumSlice from "./tableNumber-slice";


const store = configureStore({
    reducer:{
        tableNum:tableNumSlice.reducer,
        filter:filterSlice.reducer
    }
})

export default store



// import {creatStore} from 'react-redux'

// const inatialState={
//     tableNumber:null
// }
// const tableReduser=(state=inatialState,action)=>{
//     const {type, payload} =action
//     switch(type){
//         case "setNum": return{
//             ...state,
//             state.tableNumber:payload
//         }

//         default : return state
//     }
// }
// const store = creatStore(tableReduser)

// export default store