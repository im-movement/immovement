import { NewEvent } from '@/firebase/addData';
import { getEvents } from '@/firebase/getData';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export const Events = () => {
  const [loading, setLoading] = useState(false)
  const [events, setEvents] = useState<NewEvent[]>([])

  const fetchData = async () => {
    setLoading(true)

    const res = await getEvents()

    setEvents([...res])
    setLoading(false)
  }

    useEffect(() => {
        fetchData()
    }, [fetchData])

  if (loading) return <div>Loading...</div>
  return (
      <section>
        <h2>Events</h2>
        <ul>
          {events.length > 0 && events.map((event, i) => (
            <div key={i}>
              <Link href={`/events/${event.id}`}>
                {event.title}
              </Link>
            </div>
          ))}
        </ul>
      </section>
  );
};

