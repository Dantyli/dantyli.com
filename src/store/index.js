import {createStore} from 'redux'
const reducer=(state={data:[]},action)=>{
    switch(action.type){
        case 'FETCH':
        state.data=action.data
        return{
            ...state
        }
        break;
        default:
        return state;
    }
}
let store=createStore(reducer)
export default store;