import React from "react";
import Header from "./common/Header";
import Avator from "./User/Avator";
import Items from "./User/Items";

export default (props)=> {
    return (
        <div>
            <Header>用户</Header>
            <Avator {...props}/>
            <Items {...props}/>
        </div>
    )
}