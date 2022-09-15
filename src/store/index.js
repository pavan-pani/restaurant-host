import {creatStore} from 'react-redux'

const inatialState={
    tableNumber:null
}
const tableReduser=(state=inatialState,action)=>{
    const {type, payload} =action
    switch(action){
        case "setNum": return{
            ...state,
            tableNumber:payload
        }

        default : return state
    }
}
const store = creatStore(tableReduser)

export default store