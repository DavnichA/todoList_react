const SET_TODOS = 'my-app/app/SET_TODOS';
const DELETE_TODOS = 'my-app/app/DELETE_TODOS';
const COMPLETE_TODOS = 'my-app/app/COMPLETE_TODOS';
const SET_STATUS = 'my-app/app/SET_STATUS';
const STATUS_COMPLETED = 'my-app/app/STATUS_COMPLETED';
const STATUS_UNCOMPLETED = 'my-app/app/STATUS_UNCOMPLETED';
const STATUS_ALL = 'my-app/app/STATUS_ALL';


let initialState = {
  todos: [],
  status: 'all',
  filteredTodos: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_TODOS:
      return {
        ...state,
        todos: [...state.todos, {text: action.text, completed: false, id: Math.random() * 1000 }]
      }
    case DELETE_TODOS:
        return {
            ...state,
            todos: [...state.todos.filter(el => el.id !== action.id)]
        }
    case COMPLETE_TODOS:
        return {
            ...state,
            todos: [...state.todos.map(item => item.id === action.id ? {...item, completed: !item.completed} : item)]
        }
    case SET_STATUS:
        return {
            ...state,
            status: action.status
        }
    case STATUS_COMPLETED:
        return {
            ...state,
            filteredTodos: [...state.todos.filter(todo => todo.completed)]
        }
    case STATUS_UNCOMPLETED:
        return {
            ...state,
            filteredTodos: [...state.todos.filter(todo => !todo.completed)]
        }
    case STATUS_ALL:
        return {
            ...state,
            filteredTodos: [...state.todos]
        }
    default:
      return state;
  }
}

// action

export const setTodos = (text) => ({ type: SET_TODOS, text});
export const deleteTodos = (id) => ({type: DELETE_TODOS, id});
export const completeTodos = (id) => ({type: COMPLETE_TODOS, id});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const setStatusCompleted = (status) => ({type: STATUS_COMPLETED, status });
export const setStatusUncompleted = (status) => ({type: STATUS_UNCOMPLETED, status});
export const setStatusAll= () => ({type: STATUS_ALL});





export default reducer;