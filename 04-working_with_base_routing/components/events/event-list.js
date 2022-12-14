import EventItem from "./event-item";
import classes from "./event-list.module.css";

export default function EventList(props) {
  return (
    <ul className={classes.list}>
      {props.events.map((event) => {
        return <EventItem key={event.id} {...event}></EventItem>;
      })}
    </ul>
  );
}
