import React from 'react';
import PropTypes from 'prop-types';
import {useSelector,useDispatch} from 'react-redux';
import {useEffect} from 'react';
import * as types from '../actiontype';
 
const HistoryDetail = (props) => {

    let id = props.location.search;
    id = id.replace('?','')
   

    const useFetching = () => {
        const dispatch = useDispatch();
        useEffect(() => {
          dispatch({type:types.GET_HISTORY_DETAIL,payload:id});
        }, [dispatch])
      }

      const singleHistory= useSelector(state=>state.historyReducer.singleHistory)

    return (
        <div>{
            useFetching(),
            singleHistory  && singleHistory.map( (item) => (
                        <div>
                             
                                    
                                    <span>{item.title}</span>                 
                                    <span>{item.event_date_utc}</span>
                                      <h1> {item.flight_number}</h1>
                                       <h1>{item.details}</h1>
                                    <h1>{item.manufacturer}</h1>
                               </div>  
                   ))}
        </div>
    );
}
 

 
export default HistoryDetail;