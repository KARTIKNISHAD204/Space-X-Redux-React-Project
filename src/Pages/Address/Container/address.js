import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../action'
 import AddressRender from './addressRender';
class Address extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        
        this.props.actions.getAddress();
        
    }
    render() { 
        return (
            <div>
              <AddressRender  address={this.props.address} />
            </div>
        );
    }


}
const mapStatetoProps = (state)=>{
 
    const address =state.addressReducer.address;
 
    return {
   
        address : address     
    }
    }
 
const mapDispatchToProps = (dispatch)=>{
       const actionToBind = Object.assign({},actions)
       return {
           actions : bindActionCreators(actionToBind,dispatch)
       }


    }

 
export default connect(mapStatetoProps,mapDispatchToProps)(Address);