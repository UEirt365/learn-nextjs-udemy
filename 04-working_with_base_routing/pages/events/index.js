import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";
import { getAllEvents } from "../../dummy-data";

export default function AllEventList() {
  const events = getAllEvents();
  return (
    <div>
      <EventsSearch />
      <EventList events={events} />
    </div>
  );
}
