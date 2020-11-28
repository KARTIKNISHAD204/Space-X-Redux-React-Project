
import * as types from './actiontype';

const initialState = {
    history : [],
    historyID  : 0,
    singleHistory : []
   
};

const reducer =(state=initialState,action)=>{
   
    const newstate = {...state}
   
        switch(action.type){            
        
            case types.SHOW_HISTORY:
            return  {
                ...newstate, 
                history :  [...state.history, ...action.payload]}
            case types.GET_HISTORY_DETAIL : 
                return    {
                    ...newstate,
                    historyID : action.payload
                } 
            case types.SHOW_HISTORY_DETAIL : 
           
                return    {
                    ...newstate,
                    
                    singleHistory : action.payload.filter(x=>x.id==newstate.historyID)
                }   
            default:
                return newstate;
        }
        
    
   

}
export default reducer;