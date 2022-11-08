import { useRouter } from "next/router";
import { Fragment } from "react";

import EventContent from "../../components/event-detail/event-content";
import EventLogistic from "../../components/event-detail/event-logistics";
import EventSummary from "../../components/event-detail/event-summary";
import { getEventById } from "../../dummy-data";

export default function EventDetail() {
  const router = useRouter();
  const event = getEventById(router.query.eventId);
  if (!event) {
    return <h1>No event found.</h1>;
  }
  console.log({ event });
  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistic
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}
