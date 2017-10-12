import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Header from "../components/common/Header";

class HeaderCon extends Component{
    static defaultProps = {
        content: "消息"
    }
    static propTypes = {
        content: PropTypes.string
    }
    render(){
        return (
            <Header content={this.props.content}/>
        )
    }
}
const mapStateToProps = (state)=> {
    return {
        content: state.content
    }
}
export default connect(mapStateToProps)(HeaderCon);
