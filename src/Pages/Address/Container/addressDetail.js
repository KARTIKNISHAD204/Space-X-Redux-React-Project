import React from 'react';
import PropTypes from 'prop-types';
import {useSelector,useDispatch} from 'react-redux';
import {useEffect} from 'react';
import * as types from '../actiontype';
 
const AddressDetail = (props) => {

    let id = props.location.search;
    id = id.replace('?','')
   

    const useFetching = () => {
        const dispatch = useDispatch();
        useEffect(() => {
          dispatch({type:types.GET_ADDRESS_DETAIL,payload:id});
        }, [dispatch])
      }

      const singelAddress= useSelector(state=>state.addressReducer.singleAddress)

    return (
        <div>{
            useFetching(),
            singelAddress  && singelAddress.map( (item) => (
                        <div>
                             
                                    
                                    <span>{item.payload_id}</span>                 
                                    <span>{item.payload_mass_kg}</span>
                                      <h1> {item.nationality}</h1>
                                       <h1>{item.orbit}</h1>
                                    <h1>manufacturer= {item.manufacturer}</h1>
                               </div>  
                   ))}
        </div>
    );
}
 
AddressDetail.propTypes = {};
 
export default AddressDetail;