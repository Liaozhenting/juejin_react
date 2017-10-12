import React, {Component} from "react";
import Blank from "../components/Blank";
import {connect} from "react-redux";

class BlankCon extends Component{
    render() {
        return (
            <Blank message={this.props.message}/>
        );
    }
}
const mapStateToProps = (state)=> {
    return {
        message: state.message
    }
}
export default connect(mapStateToProps)(BlankCon);