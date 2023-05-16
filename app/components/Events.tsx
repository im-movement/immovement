import { useDeleteEvent } from '@/firebase';
import { IEvent, useGetEvents } from '@/firebase/getData';
import Link from 'next/link';
import { FaEdit, FaListAlt, FaTrashAlt } from 'react-icons/fa';

// TODO: pagination
// https://firebase.google.com/docs/firestore/query-data/query-cursors

export const Events = () => {
  const { events, loading, error } = useGetEvents();

  const handleEdit = (e: IEvent) => {
    alert(`Edit ${e.title}`);
  };

  const handleDelete = (e: IEvent) => {
    if (confirm(`Are you sure you want to delete ${e.title}?`)) {
      useDeleteEvent(e);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error.toString()}</div>;
  if (!events?.length) return <p>No events found</p>;

  return (
    <section>
      <h2>Events</h2>
      <ul>
        {events.map((event, i) => {
          if (!event.hidden) {
            return (
              <div key={i}>
                {/* TODO: fix type error */}
                {/* @ts-ignore */}
                <Link href={`/events/${event.id}`}>{event.title}</Link>
                <button
                  aria-label={`Edit ${event.title}`}
                  onClick={() => handleEdit(event)}>
                  <FaEdit aria-hidden />
                </button>
                <button
                  aria-label={`Delete ${event.title}`}
                  onClick={() => handleDelete(event)}>
                  <FaTrashAlt aria-hidden />
                </button>
                <a href="">
                  <FaListAlt aria-hidden />
                </a>
              </div>
            );
          }
        })}
      </ul>
    </section>
  );
};
