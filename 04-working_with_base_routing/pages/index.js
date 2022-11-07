import EventList from "../components/events/event-list";
import { getAllEvents, getFeaturedEvents } from "../dummy-data";

export default function HomePage() {
  const events = getAllEvents();
  return (
    <div>
      <EventList events={events} />
    </div>
  );
}
