import React, {Component} from "react";
import {connect} from "react-redux";
import User from "../components/User";
import like from "../../psd/miniImg/like.png";

class UserCon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            occupation: "职业"
        }
    }
    componentWillMount() {
        const _t = this;
        setTimeout(()=> {
            _t.setState(
                {
                    name: "贾斯汀",
                    occupation: "歌手"
                }
            ); 
        }, 100);
    }
    render() {
        const props = this.props;
        return (
            <User {...props} {...this.state}/>
        );
    }
}
const mapStateToprops = (state)=> {
    return {
        content: "我",
        items: [
            {
                url: like,
                list: "jack",
                count: "21篇"
            },
            {
                url: like,
                list: "rose",
                count: "22篇"
            },
            {
                url: like,
                list: "mount",
                count: "23篇"
            },
            {
                url: like,
                list: "distory",
                count: "24篇"
            }
        ]
    }
}
UserCon = connect(mapStateToprops)(UserCon);
export default UserCon;