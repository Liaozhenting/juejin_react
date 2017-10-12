import React, {Component} from "react";
import TodoInputCom from "../components/TodoInput";
class TodoInput extends Component {
    componentDidMount() {
        // let todoState = localStorage.state;

    }
    render() {
        return (
            <TodoInputCom {...this.props}/>
        );
    }
}
export default TodoInput;