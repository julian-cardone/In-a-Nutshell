import jwtFetch from "./jwt";

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


const nullErrors = null;

export const tasksErrorReducer = (state = nullErrors, action) => {
    switch (action.type) {
      case RECEIVE_TASK_ERRORS:
        return action.tasks;
      case RECEIVE_TASK:
      case CLEAR_TASK_ERRORS:
        return nullErrors;
      default:
        return state;
    }
}

export const tasksReducer = (state = { all: {}, event: {}, new: undefined }, action ) => {
    switch (action.type) {
        case RECEIVE_TASK:
            return { ..state, all: action.task, new: undefined }
    }
}