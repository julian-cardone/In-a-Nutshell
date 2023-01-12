import jwtFetch from "./jwt";
import { RECEIVE_USER_LOGOUT } from './session';

const RECEIVE_TASKS = 'tasks/RECEIVE_TASKS'
const RECEIVE_TASK = 'tasks/RECEIVE_TASK'
const RECEIVE_NEW_TASK = 'tasks/RECEIVE_NEW_TASK'
const REMOVE_TASK = 'tasks/REMOVE_TASK'
const RECEIVE_TASK_ERRORS = "events/RECEIVE_TASK_ERRORS"
const CLEAR_TASK_ERRORS = "events/CLEAR_TASK_ERRORS"

const receiveTasks = tasks => ({
    type: RECEIVE_TASKS, 
    tasks
})
const receiveTask= task => ({
    type: RECEIVE_TASK,
    task
})

const receiveNewTask = task => ({
    type: RECEIVE_NEW_TASK,
    task
})

const receiveErrors = errors => ({
    type: RECEIVE_TASK_ERRORS,
    errors
  })

const removeTask = taskId => ({
    type: REMOVE_TASK,
    taskId
})
  
  export const clearTaskErrors = errors => ({
      type: CLEAR_TASK_ERRORS,
      errors
  })

  export const fetchTasks = () => async dispatch => {
    try {
        const res = await jwtFetch('/api/tasks/')
        const tasks = await res.json();
        dispatch(receiveTasks(tasks));
    } catch (err) {
        const resBody = await err.json();
        if (resBody.statusCode === 400) {
            return dispatch(receiveErrors(resBody.errors))
        }
    }
  }

  export const fetchTask = () => async dispatch => {
    try {
        const res = await jwtFetch('/api/task')
        const task = await res.json();
        dispatch(receiveTask(task))
    } catch(err) {
        const resBody = await err.json();
        if (resBody.statusCode === 400) {
            return dispatch(receiveErrors(resBody.errors))
        }
    }
  }

  export const createTask = data => async dispatch => {
    // debugger
    // debugger
    try {
      const res = await jwtFetch('/api/tasks/new', {
        method: 'POST',
        body: JSON.stringify(data)
      });
      const task = await res.json();
      dispatch(receiveNewTask(task));
    } catch(err) {
      const resBody = await err.json();
      if (resBody.statusCode === 400) {
        return dispatch(receiveErrors(resBody.errors));
      }
    }
  };

  export const deleteTask = (taskId) => async dispatch => {
    try {
        await jwtFetch(`/api/tasks/${taskId}`, {
        method: "DELETE"
      });
      dispatch(removeTask(taskId));
    } catch(err) {
      const resBody = await err.json();
      if (resBody.statusCode === 400) {
        return dispatch(receiveErrors(resBody.errors))
      }
    }
}

export const updateTask = (task) => async (dispatch) => {
    try {
      const res = await jwtFetch(`/api/tasks/${task.id}`, {
        method: 'PATCH',
        body: JSON.stringify(task),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await res.json();
    dispatch(receiveTask(data));
    } catch(err) {
      const resBody = await err.json();
      if (resBody.statusCode === 400) {
        return dispatch(receiveErrors(resBody.errors))
      }
    }
  };


const nullErrors = null;

export const tasksErrorReducer = (state = nullErrors, action) => {
    switch (action.type) {
      case RECEIVE_TASK_ERRORS:
        return action.tasks;
      case RECEIVE_TASK:
      case CLEAR_TASK_ERRORS:
        return nullErrors;
      default:
        return state
    }
}

export const tasksReducer = (state = { all: {}, event: {}, new: undefined }, action ) => {
    switch (action.type) {
        case RECEIVE_TASK:
            return { ...state, all: action.task, new: undefined };
        case RECEIVE_TASKS:
            return { ...state, all: action.tasks, new: undefined };
        case RECEIVE_NEW_TASK:
            return { ...state, new: action.task };
        case REMOVE_TASK: {
            delete state[action.taskId];
            return state;
        }
        case RECEIVE_USER_LOGOUT:
            return { ...state, event: {}, new: undefined}
            default:
                return state;
    }
}

export default tasksReducer;