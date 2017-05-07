import { connect } from 'react-redux';
import TodoList from './TodoList';
import { toggleTodo, getVisibleTodos } from '../reducers/todos';

export default connect(
  state => ({
    todos: getVisibleTodos(state),
  }),
  dispatch => ({
    onTodoClick: (id) => {
      dispatch(toggleTodo(id));
    },
  })
)(TodoList);
