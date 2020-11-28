import React from 'react';
import PropTypes from 'prop-types';
import '../../../Components/index.css';
import Mediacard from '../../../Components/singlecard';
import {useSelector} from 'react-redux';
import {useEffect} from 'react'

 
const  HomeRender =(props)=>{
  
  const historycard = props.history
  const addresscard = props.address
  
    return (
        <div className="belowbanner">
         
           <div className="left-panel">
           <h1>ADDRESS</h1>
              {
                addresscard && addresscard.slice(0,5).map( (item) => (
                   <div>
                        <Mediacard   
                               foraddress = {"foraddress"} 
                               payload_id = {item.payload_id}                       
                               payload_mass_kg ={item.payload_mass_kg}
                               nationality = {item.nationality}
                               orbit = {item.orbit}
                               manufacturer= {item.manufacturer}
                          /></div>  
              ))
              }
             

           </div>
           <div className="right-panel">
           <h1>HISTORY</h1>

           {
                historycard &&  historycard.slice(0,5).map( (item) => (
                   <div>
                        <Mediacard 
                               forhistory={"forhistory"} 
                               id={item.id}                       
                               title ={item.title}
                               flight_number = {item.flight_number}
                               event_date_utc = {item.event_date_utc}
                               details= {item.details}
                          /></div>  
              ))
              }
               
           </div>
            
        </div>
    );
}
 

 
export default HomeRender;