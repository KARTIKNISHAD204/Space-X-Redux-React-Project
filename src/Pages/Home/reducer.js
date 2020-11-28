
import * as types from './actiontype';

const initialState = {
    address : [],
    history : [],
   
};

const reducer =(state=initialState,action)=>{
   
    const newstate = {...state}
   
        switch(action.type){            
            case types.SHOW_ADDRESS:
            return  {
                ...newstate,
                address :  [...state.address, ...action.payload]
            }     
            case types.SHOW_HISTORY:
            return  {
                ...newstate, 
                history :  [...state.history, ...action.payload]}
            default:
                return newstate;
        }
        
    
   

}
export default reducer;