import React, {Component} from "react";
import {connect} from "react-redux";
import User from "../components/User";

class UserCon extends Component {
    render() {
        return (
            <User/>
        );
    }
}
const mapStateToprops = (state)=> {
    return {
        
    }
}
UserCon = connect(mapStateToprops)(UserCon);
export default UserCon;