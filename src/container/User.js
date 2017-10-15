import React, {Component} from "react";
import {connect} from "react-redux";
import User from "../components/User";

class UserCon extends Component {
    render() {
        const props = this.props;
        return (
            <User {...props}/>
        );
    }
}
const mapStateToprops = (state)=> {
    return {
        content: "我"
    }
}
UserCon = connect(mapStateToprops)(UserCon);
export default UserCon;