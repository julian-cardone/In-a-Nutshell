import jwtFetch from "./jwt";
import { RECEIVE_USER_LOGOUT  } from "./session";

const RECEIVE_EVENT = "events/RECEIVE_EVENT"
const RECEIVE_EVENTS = "events/RECEIVE_EVENTS"
const RECEIVE_NEW_EVENT = "events/RECEIVE_NEW_EVENT"
const RECEIVE_EVENT_ERRORS = "events/RECEIVE_EVENT_ERRORS"
const CLEAR_EVENT_ERRORS = "events/CLEAR_EVENT_ERRORS"

const receiveEvent = event => ({
    type: RECEIVE_EVENT,
    event
})

const receiveEvents = events => ({
    type: RECEIVE_EVENTS,
    events
})

const receiveNewEvent = event => ({
    type: RECEIVE_NEW_EVENT,
    event
})


const receiveErrors = errors => ({
    type: RECEIVE_EVENT_ERRORS,
    errors
  });
  
  export const clearTweetErrors = errors => ({
      type: CLEAR_EVENT_ERRORS,
      errors
  });

  export const fetchEvents = () => async dispatch => {
    try {
        const res = await jwtFetch('/api/events')
        const events = await res.json();
        dispatch(receiveEvents(events))
    } catch (err) {
        const resBody = await err.json();
        if (resBody.statusCode === 400) {
            return dispatch(receiveErrors(resBody.errors));
        }
    }
  };

  export const fetchEvent = () => async dispatch => {
    try {
        const res = await jwtFetch('/api/event')
        const event = await res.json();
        dispatch(receiveEvent(event))
    } catch (err) {
        const resBody = await err.json();
        if (resBody.statusCode === 400) {
            return dispatch(receiveErrors(resBody.errors));
        }
  }
}

export const createEvent = data => async dispatch => {
    try {
      const res = await jwtFetch('/api/events/', {
        method: 'POST',
        body: JSON.stringify(data)
      });
      const event = await res.json();
      dispatch(receiveNewEvent(event));
    } catch(err) {
      const resBody = await err.json();
      if (resBody.statusCode === 400) {
        return dispatch(receiveErrors(resBody.errors));
      }
    }
  };
