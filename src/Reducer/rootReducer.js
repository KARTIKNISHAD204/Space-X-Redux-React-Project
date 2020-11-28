import {combineReducers} from 'redux';
import homereducer from '../Pages/Home/reducer'
import historyReducer from '../Pages/History/reducer'
import addressReducer from '../Pages/Address/reducer'

const rootReducer = combineReducers({
    homereducer,historyReducer,addressReducer

})
export default rootReducer;

