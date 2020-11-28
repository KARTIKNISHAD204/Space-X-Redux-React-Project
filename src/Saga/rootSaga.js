import {all } from 'redux-saga/effects';
import watchHomeSaga from '../Pages/Home/saga';
import watchAddressSaga from '../Pages/Address/saga';
import watchHistorySaga from '../Pages/History/saga'

export default function* rootsaga (){
yield all ([
    watchHomeSaga(),
    watchHistorySaga(),
    watchAddressSaga(),
])

};