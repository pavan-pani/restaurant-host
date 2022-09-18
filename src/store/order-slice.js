import {createSlice} from '@reduxjs/toolkit'

///const ordervalue={}
// const count=0

const orderSlice = createSlice({
    name:'order',
    initialState:{ordervalue:[]},
    reducers:{
        addOrder(state, action){
            const neworder=action.payload
            // const existaOrder=state.ordervalue.find((item)=>item.id===neworder.id)
            // if(existaOrder){
            //     existaOrder
            // }
            state.ordervalue.push({
                id:neworder.id,
                name:neworder.name,
                price:neworder.price,
                url:neworder.url,
                tableNumber:neworder.tableNumber
            })
            // console.log(action.payload);
            // state.count++
            // return action.payload
            // console.log(state.length);
           
             
        },
       
    }
})

export const orderActions=orderSlice.actions;

export default orderSlice