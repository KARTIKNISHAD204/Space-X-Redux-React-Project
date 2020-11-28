import React, { Component } from 'react';
import Home from "../Pages/Home/Container/home";
import History from '../Pages/History/Container/history';
import Address from '../Pages/Address/Container/address';
import HistoryDetail from '../Pages/History/Container/historyDetails';
import AddressDetail from '../Pages/Address/Container/addressDetail';



import {Route} from 'react-router-dom';
import {BrowserRouter as Router,Link,Switch} from 'react-router-dom';

 

export default class routeviews extends React.Component {
    render() { 
        return (
            <div>
               
            <Switch>
            <Route path='/' exact strict component={Home}/>
            <Route path='/history' exact strict component={History}/>
            <Route path='/address' exact strict component={Address}></Route>
            <Route path='/history/:historyurl' exact strict component={HistoryDetail}/>
            <Route path='/address/:addressurl' exact strict component={AddressDetail}/>
            </Switch>   
                       
            </div>
        );
    }
}
 



