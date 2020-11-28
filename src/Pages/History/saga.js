

import * as types from './actiontype';
import * as actions from './action';
import axios from 'axios'
import {
  put,
  all,
  takeLatest,
  call,
} from 'redux-saga/effects';
import addressdata  from '../../address.json';
import historydata from '../../history.json';


 const  fetchData = async (url) => {

  return axios
  .get(`${url}`)
  .then(response => ({ response: response.data }))
  .catch(error => ({ error }));

   
 
}; 


function* getHistoryFromServer(action) {
  const {response,error} = yield call(fetchData, `https://api.spacexdata.com/v3/history`);
  
  if(response){
       yield put(actions.showHistory(response));
       yield put(actions.showHistoryDetail(response));
     }else console.log(error);

}


export default function* watchHistorySaga() {
    yield all(
      [
               yield takeLatest(types.GET_HISTORY, getHistoryFromServer),
               yield takeLatest( types.GET_HISTORY_DETAIL, getHistoryFromServer)
      
    
    ]);
  }