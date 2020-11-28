import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../action'
 import Historyrender from './historyRender';
class History extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        
        this.props.actions.getHistory();
        
    }
    render() { 
        return (
            <div>
              <Historyrender history={this.props.history} />
            </div>
        );
    }


}
const mapStatetoProps = (state)=>{
 
    const history =state.historyReducer.history;
 
    return {
   
        history : history      
    }
    }
 
const mapDispatchToProps = (dispatch)=>{
       const actionToBind = Object.assign({},actions)
       return {
           actions : bindActionCreators(actionToBind,dispatch)
       }


    }

 
export default connect(mapStatetoProps,mapDispatchToProps)(History);