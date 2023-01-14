import TasksListItem from "./TasksListItem";

function TaskList({ eventsInd, setEventsInd }) {
  return (
    <>
      <ul style={{ marginTop: "8px" }}>
        <TasksListItem eventsInd={eventsInd} setEventsInd={setEventsInd} />
      </ul>
    </>
  );
}

export default TaskList;
