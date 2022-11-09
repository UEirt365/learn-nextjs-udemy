import { useRouter } from "next/router";
import EventList from "../../components/events/event-list";
import { getFilteredEvents } from "../../dummy-data";

export default function FilterEvent() {
  const router = useRouter();
  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const events = getFilteredEvents({
    year: +filterData[0],
    month: +filterData[1],
  });

  return events && events.length > 0 ? (
    <div>
      <EventList events={events} />
    </div>
  ) : (
    <p className="center">No events found.</p>
  );
}
