import React, {Component} from "react";
import {connect} from "react-redux";
import Footer from "../components/common/Footer";

class FooterCon extends Component {
    render() {
        return (
            <Footer content={this.props.content}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {    
        content: state.content
    }
}
const mapDispatchToProps = (dispatch)=> {
    return {
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FooterCon);
