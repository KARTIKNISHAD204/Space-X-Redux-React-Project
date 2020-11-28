

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


 const  fetchhistoryData = async (url) => {

  return axios
  .get(`${url}`)
  .then(response => ({ response: response.data }))
  .catch(error => ({ error }));

   
 
}; 
const  fetchaddresData = async (url) => {

  return axios
  .get(`${url}`)
  .then(response => ({ response: response.data }))
  .catch(error => ({ error }));

   
 
}; 


function* getAddressFromServer(action) {
  const {response,error} = yield call(fetchaddresData, `https://api.spacexdata.com/v3/payloads`);
  
  if(response){
       yield put(actions.showAddress(response));
     }else console.log(error);

}

function* getHistoryFromServer(action) {
  const {response,error} = yield call(fetchhistoryData, `https://api.spacexdata.com/v3/history`);
  
  if(response){
       yield put(actions.showHistory(response));
     }else console.log(error);

}


export default function* watchHomeSaga() {
    yield all(
      [
               yield takeLatest(types.GET_HISTORY, getHistoryFromServer),
               yield takeLatest(types.GET_ADDRESS, getAddressFromServer)
      
    
    ]);
  }