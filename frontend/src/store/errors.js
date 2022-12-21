import { combineReducers } from 'redux';
import { sessionErrorsReducer } from './session';
import { eventsErrorReducer } from './events';
import { tasksErrorReducer } from './tasks';


export default combineReducers({
  session: sessionErrorsReducer,
  events: eventsErrorReducer,
  tasks: tasksErrorReducer
});
