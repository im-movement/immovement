import { NewEvent } from '@/firebase/addData';
import { getEvents } from '@/firebase/getData';
import Link from 'next/link';
import { useEffect, useState } from 'react';

// TODO: pagination
// https://firebase.google.com/docs/firestore/query-data/query-cursors

export const Events = () => {
  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState<NewEvent[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const res = await getEvents();

      setEvents([...res]);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;

  if (!events) return <p>No events found</p>;

  return (
    <section>
      <h2>Events</h2>
      <ul>
        {events.length > 0 &&
          events.map((event, i) => (
            <div key={i}>
              {/* TODO: fix type error */}
              {/* @ts-ignore */}
              <Link href={`/events/${event.id}`}>{event.title}</Link>
            </div>
          ))}
      </ul>
    </section>
  );
};
