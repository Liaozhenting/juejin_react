import React, {Component} from "react";
import PropTypes from "prop-types";
class TodoInput extends Component {
    static propTypes = {
        action: PropTypes.object,
        text: PropTypes.string
    }
    constructor(props) {
        super(props);
        this.state={
            text: this.props.text || ""
        }
        this.handleChangeInput = this.handleChangeInput.bind(this);
    }
    handleChangeInput(e) {
        this.setState({
            text: e.target.value
        });
    }
    render() {
        const {addTodo} = this.props.action;
        console.log(addTodo);
        console.log(this.props.todos);
        return (
            <div className="todo-input">
                <input onChange={this.handleChangeInput}/>
                <button onClick={addTodo}>添加</button>
            </div>
        );
    }
}
export default TodoInput;