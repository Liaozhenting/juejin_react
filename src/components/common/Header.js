import React, {Component} from "react";
import PropTypes from "prop-types";
import "../../style/Header.less";

class Header extends Component {
    static proptypes = {
        content: PropTypes.string
    }
    render() {
        const {content} = this.props;
        return (
            <div className="header">
                {content}
            </div>
        );
    }
}
export default Header;