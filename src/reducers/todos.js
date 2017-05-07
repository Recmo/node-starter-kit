import { createSelector } from 'reselect';
import { makeCreators, makeReducer } from './redux-utils';
import VisibilityFilters from '../visibility-filters';

const initialState = {
  nextTodoId: 0,
  todosById: {},
  todos: [],
};

const reducers = {
  addTodo: (state, text) => ({
    ...state,
    nextTodoId: state.nextTodoId + 1,
    todosById: {
      ...state.todosById,
      [state.nextTodoId]: {
        id: state.nextTodoId,
        text,
        completed: false,
      },
    },
    todos: [...state.todos, state.nextTodoId],
  }),
  toggleTodo: (state, id) => ({
    ...state,
    todosById: {
      ...state.todosById,
      [id]: {
        ...state.todosById[id],
        completed: !state.todosById[id].completed,
      },
    },
  }),
};

export const reducer = makeReducer(reducers, initialState);
export const creators = makeCreators(reducers);
export const { addTodo, toggleTodo } = creators;
export default reducer;

export const getOrderedTodos = createSelector(
  [state => state.todos.todosById, state => state.todos.todos],
  (todosById, todoIds) => todoIds.map(id => todosById[id])
);

export const getVisibleTodos = createSelector(
  [state => state.visibilityFilter, getOrderedTodos],
  (filter, orderedTodos) => {
    switch (filter) {
      case VisibilityFilters.SHOW_ALL:
        return orderedTodos;
      case VisibilityFilters.SHOW_COMPLETED:
        return orderedTodos.filter(t => t.completed);
      case VisibilityFilters.SHOW_ACTIVE:
        return orderedTodos.filter(t => !t.completed);
      default:
        throw new Error('Invalid filter');
    }
  }
);
