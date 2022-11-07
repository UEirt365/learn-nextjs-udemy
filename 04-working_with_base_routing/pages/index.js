import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../dummy-data";

export default function HomePage() {
  const events = getFeaturedEvents();
  return (
    <div>
      <h1>HomePage</h1>
      <EventList events={events} />
    </div>
  );
}
