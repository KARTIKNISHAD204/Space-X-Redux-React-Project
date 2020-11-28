
import * as types from './actiontype';

const initialState = {
    address : [],
    detailID  : "",
    singleAddress : []
    
   
};

const reducer =(state=initialState,action)=>{
   
    const newstate = {...state}
   
        switch(action.type){            
            case types.SHOW_ADDRESS:
            return  {
                ...newstate,
                address :  [...state.address, ...action.payload]
            } 
            case types.GET_ADDRESS_DETAIL : 
              return    {
                  ...newstate,
               detailID: action.payload
              } 
            case types.SHOW_ADDRESS_DETAIL : 
              return    {
                  ...newstate,
                singleAddress : action.payload.filter(x=>x.payload_id===newstate.detailID)
              }

            default:
                return newstate;
        }
        
    
   

}
export default reducer;