import * as types from './actiontype'

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

export function  getHistoryDetail(){
    return {
        type : types.GET_HISTORY_DETAIL,
    };
}
export  function showHistoryDetail(payload){

    return {
        type : types.SHOW_HISTORY_DETAIL,
        payload:payload
    };
    
}



