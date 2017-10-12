import {
    addTodo,
    ADD_TODO,
    deleteTodo,
    DELETE_TODO
} from "../actions/index";
let initState = [
    {
      text: 'Use Redux',
      completed: false,
      id: 0
    }
  ]

const todosReducer = (state=initState, action)=> {
    switch(action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: state.reduce((maxId, todo)=> Math.max(todo.id, maxId), -1) + 1,
                    completed: false,
                    text: action.text
                }
            ]
        default:
            return state;
    }
}
export default todosReducer;