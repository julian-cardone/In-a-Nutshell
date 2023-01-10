function NavBarEventsItem( { events } ){

  console.log(events);

  return (
    events.map((event)=>{
      return(
        <>
          <div className="event-container-default-nav">
            {event.title}
          </div>
        </>
      )
    })
  )

}

export default NavBarEventsItem;