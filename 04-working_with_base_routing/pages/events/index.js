import { useRouter } from "next/router";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";
import { getAllEvents } from "../../dummy-data";

export default function AllEventList() {
  const route = useRouter();
  const events = getAllEvents();

  const filterEventHandler = function (year, month) {
    route.push(`/events/${year}/${month}`);
  };

  return (
    <div>
      <EventsSearch submitForm={filterEventHandler} />
      <EventList events={events} />
    </div>
  );
}
