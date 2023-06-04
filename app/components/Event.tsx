import { useDeleteEvent } from '@/firebase';
import { IEvent } from '@/firebase/getData';
import Link from 'next/link';
import { FaEdit, FaListAlt, FaTrashAlt } from 'react-icons/fa';

interface EventProps {
  event: IEvent;
}

export const Event: React.FC<EventProps> = props => {
  const { event } = props;
  const { deleteEvent } = useDeleteEvent(event);

  const handleDelete = (e: IEvent) => {
    if (confirm(`Are you sure you want to delete ${e.title}?`)) {
      deleteEvent();
    }
  };

  const handleEdit = (e: IEvent) => {
    alert(`Edit ${e.title}`);
  };

  return (
    <div>
      {event.draft && (
        <span style={{ backgroundColor: 'dodgerblue', color: 'white' }}>
          Draft
        </span>
      )}
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
};
