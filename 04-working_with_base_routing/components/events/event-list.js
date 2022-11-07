import { getFeaturedEvents } from "./data/dummy-data";
import EventItem from "./event-item";

export default function EventList(props) {
  return (
    <ul>
      {props.events.map((event) => {
        return <EventItem></EventItem>;
      })}
    </ul>
  );
}
