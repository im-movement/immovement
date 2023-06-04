import { useGetEvents } from '@/firebase/getData';
import { Event } from './Event';

// TODO: pagination
// https://firebase.google.com/docs/firestore/query-data/query-cursors

export const Events = () => {
  const { events, loading, error } = useGetEvents();

  const showEvents = events?.filter(event => event.hidden !== true);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error.toString()}</div>;

  return (
    <section>
      <h2>Events</h2>
      <ul>
        {showEvents?.length ? (
          showEvents?.map(event => <Event event={event} key={event.id} />)
        ) : (
          <p>No events found</p>
        )}
      </ul>
    </section>
  );
};
