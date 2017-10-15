import React, {Component} from "react";
import {connect} from "react-redux";
import Note from "../components/Note";

class NoteCon extends Component {
    render() {
        return (
            <Note/>
        );
    }
}
const mapStateToprops = (state)=> {
    return {
        
    }
}
NoteCon = connect(mapStateToprops)(NoteCon);
export default NoteCon;