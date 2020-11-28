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
export function  getAddressDetail(){
    return {
        type : types.GET_ADDRESS_DETAIL,
    };
}
export  function showAddressDetail(payload){

    return {
        type : types.SHOW_ADDRESS_DETAIL,
        payload:payload
    };
    
}


