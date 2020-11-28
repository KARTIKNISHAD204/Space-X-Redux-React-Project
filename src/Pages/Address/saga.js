

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

function* getAddressFromServer(action) {
  const {response,error} = yield call(fetchData, `https://api.spacexdata.com/v3/payloads`);
  
  if(response){
       yield put(actions.showAddress(response));
       yield put(actions.showAddressDetail(response));
     }else console.log(error);

}


export default function* watchAddressSaga() {
    yield all(
      [
              
               yield takeLatest(types.GET_ADDRESS, getAddressFromServer),
               yield takeLatest( types.GET_ADDRESS_DETAIL, getAddressFromServer)
      
    
    ]);
  }