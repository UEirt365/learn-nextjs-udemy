import { getFeaturedEvents } from "./data/dummy-data";
import EventList from "./events";

export default function HomePage() {
  const events = getFeaturedEvents();
  return (
    <div>
      <h1>HomePage</h1>
      <EventList events={events} />
    </div>
  );
}
