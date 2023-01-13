# In-a-Nutshell

## Background
[Nutshell](https://nutshell.onrender.com) is a squirrel-themed interview planner. It allows you to schedule interviews on your personal calendar, assign yourself tasks for each of the interviews on the calendar and leave yourself personalized notes on each interview. A user is able to view all of their interviews on an index and from there, they can check out each interview's list of tasks on the dashboard. The application provides a user with a fun way to schedule and organize their job search process. 

## Technologies
Nutshell uses the MERN stack.
* MongoDB is a NoSQL database management system that employs documents with optional structures that are similar to JSON.
* Express is a backend tool for crafting RESTful APIs using Node.js. 
* React is an open-source frontend library.
* Node.js is an open-source JavaScript runtime environment that is used to build backend applications.

## Create, Read, Update, Delete Interviews

https://user-images.githubusercontent.com/112725448/212433287-eb780478-7ae7-4e44-a300-c3ee0bdc0a64.mp4

## Assign Tasks

https://user-images.githubusercontent.com/112725448/212433746-b3ca97b9-5cf7-4074-85f1-17fdb1e95f22.mp4

Once you have created events and assigned your tasks to each event, you can view all of the events in an index page, as seen below:

https://user-images.githubusercontent.com/112725448/212434009-42059228-aedf-491c-879d-1c60c4e8815b.mp4


## Code Snippets

```js
  //sorting the events by chronoligical order
  const sortEvents = (events) => {
    if (eventsLoaded){
    //base case
    if (events.length <= 1) return events

    let mid = Math.floor(events.length / 2);

    //recursive calls
    let left = sortEvents(events.slice(0,mid));
    let right = sortEvents(events.slice(mid));

    return sortHelper(left, right);
    }
  }

  const sortHelper = (left, right) => {
    let sortedArr = [];

    if (isBefore(
      new Date(left[0].eventDate),
      new Date(right[0].eventDate)
    )){
      sortedArr.push(left.shift())
    } else {
      sortedArr.push(right.shift())
    }

    return [ ...sortedArr, ...left, ...right]

  }
//end of sort
```


# Our Team
* Team Lead - Julian Cardone
* Frontend - Ross Mabbett
* Backend - Anthony Chiodi
* Flex - Ethan Graham
