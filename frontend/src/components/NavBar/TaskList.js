import TasksListItem from "./TasksListItem";

function TaskList({ eventsInd, setEventsInd }) {
  return (
    <>
      <ul style={{ marginTop: "10px" }}>
        <TasksListItem eventsInd={eventsInd}setEventsInd={setEventsInd}/>
      </ul>
    </>
  );
}

export default TaskList;
