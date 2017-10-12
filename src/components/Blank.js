import React, {Component} from "react";
import PropTypes from "prop-types";

class Blank extends Component{
    static propTypes = {
        content: PropTypes.string
    }
    render() {
        return (
            <div className="blank__content">
                {this.props.content}
            </div>
        );
    }
}
export default Blank;