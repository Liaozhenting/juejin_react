import React from "react";
import "./Items.less";

const SingleItem = (props)=> {
    const logo_bg = {
        "background": "url("+ props.url +") no-repeat 22px 14px"
    }
    return (
        <div key={props.id} className="user_item">
            <div className="item_logo" style={logo_bg}></div>
            <div className="item_name">{props.list}</div>
            <div className="item_count">{props.count}</div>
        </div>
    );
}
export {
    SingleItem
};

const Items = (props)=> {
    return (
        <div className="item_wrapper">
            {props.items.map((list,index)=>{
                return <SingleItem  key={index} {...list}/>
            })}
        </div>
    );
}
export default Items;