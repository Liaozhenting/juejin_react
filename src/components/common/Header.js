import React, {Component} from "react";
import "../../style/Header.less";
class Header extends Component {

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