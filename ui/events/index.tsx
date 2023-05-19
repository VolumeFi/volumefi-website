import { useEffect } from 'react';

import { useStoryBlok } from 'services/storyblok';
import SectionContainer from 'ui/common/SectionContainer';
import EventItem from 'ui/events/EventItem';
import style from 'ui/events/index.module.scss';
import NoEvents from 'ui/events/NoEvents';

const EventsContainer = () => {
  const { getEvents, upcomingEvents, pastEvents } = useStoryBlok({ getUpcomingEvents: true, getPastEvents: true });

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <SectionContainer>
      <section className={style.container}>
        <h1 className={style.title}>Upcoming Events</h1>
        {upcomingEvents?.length > 0 ? (
          <section className={style.eventListWrapper}>
            {upcomingEvents.map((event) => (
              <EventItem event={event} key={event.uuid} />
            ))}
          </section>
        ) : (
          <NoEvents className={style.noEvents} />
        )}

        {pastEvents?.length > 0 && (
          <>
            <h2 className={style.title}>Past Events</h2>
            <section className={style.eventListWrapper}>
              {pastEvents.slice(0, 9).map((event) => (
                <EventItem event={event} key={event.uuid} />
              ))}
            </section>
          </>
        )}
      </section>
    </SectionContainer>
  );
};

export default EventsContainer;
