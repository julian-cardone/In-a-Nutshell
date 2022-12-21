import { combineReducers } from 'redux';
import { sessionErrorsReducer } from './session';
import { eventsErrorsReducer } from './events';
import { tasksErrorsReducer } from './tasks';


export default combineReducers({
  session: sessionErrorsReducer,
  events: eventsErrorsReducer,
  tasks: tasksErrorsReducer
});
