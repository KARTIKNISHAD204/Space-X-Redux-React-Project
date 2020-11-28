import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../action'
import Homerender from './homeRender';

class Home extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        
        this.props.actions.getHistory();
        this.props.actions.getAddress();
    }
    render() { 
        return ( <div>
            <div>
            <Homerender  address ={this.props.address} history={this.props.history} /></div>
            </div>
        
            )                   
    }



}
const mapStatetoProps = (state)=>{
    const address = state.homereducer.address;
    const history =state.homereducer.history;
 
    return {
        address : address ,
        history : history      
    }
    }
 
const mapDispatchToProps = (dispatch)=>{
       const actionToBind = Object.assign({},actions)
       return {
           actions : bindActionCreators(actionToBind,dispatch)
       }


    }

 
export default connect(mapStatetoProps,mapDispatchToProps)(Home);