import * as types from './actiontype'

export function  getAddress(){
    return {
        type : types.GET_ADDRESS,
    };
}
export  function showAddress(payload){

    return {
        type : types.SHOW_ADDRESS,
        payload:payload
    };
    
}
export function  getHistory(){
    return {
        type : types.GET_HISTORY,
    };
}

export  function showHistory(payload){
  
    return {
        type : types.SHOW_HISTORY,
        payload:payload
    };
}
