
function NewEventFormBox ({ title, description,  eventDate, status }) {
    return (
      <div className="event">
        <h3>{title}{description} {eventDate} {status}</h3>
      </div>
    );
  }
  
  export default NewEventFormBox;