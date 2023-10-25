import { useGetEvents } from '@/firebase/getData';
import { Event } from './Event';
import { Loading } from './Loading';

// TODO: pagination
// https://firebase.google.com/docs/firestore/query-data/query-cursors

export const Events = () => {
  const { events, loading, error } = useGetEvents();
  // const showEvents = events?.filter(event => event.hidden !== true);

  if (loading) return <Loading />;
  if (error) return <div>{error.toString()}</div>;

  return (
    <section>
      <h2>Upcoming events</h2>
      <ul>
        {events?.length ? (
          events?.map(event => <Event event={event} key={event.id} />)
        ) : (
          <p>No events found</p>
        )}
      </ul>
    </section>
  );
};
