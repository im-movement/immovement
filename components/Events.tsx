import { NewEvent } from '@/firebase/addData';
import { getEvents } from '@/firebase/getData';
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
    }, [])

  if (loading) return <div>Loading...</div>
  return (
      <section>
        <h2>Events</h2>
        <ul>
          {events.length > 0 && events.map(event => (
            <div>{event.title}</div>
          ))}
        </ul>
      </section>
  );
};

