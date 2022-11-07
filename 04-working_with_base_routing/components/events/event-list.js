import EventItem from "./event-item";

export default function EventList(props) {
  return (
    <ul>
      {props.events.map((event) => {
        return <EventItem key={event.id} {...event}></EventItem>;
      })}
    </ul>
  );
}
