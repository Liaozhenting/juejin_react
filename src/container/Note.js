import React, {Component} from "react";
import {connect} from "react-redux";
import Note from "../components/Note";

class NoteCon extends Component {
    render() {
        return (
            <Note {...this.props}/>
        );
    }
}
const mapStateToProps = (state) =>{
    return {
        message: "现在没有消息哦！"
    }
}
NoteCon = connect(mapStateToProps)(NoteCon);
export default NoteCon;