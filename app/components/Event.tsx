import { editEvent, useDeleteEvent } from '@/firebase';
import { IEvent } from '@/firebase/getData';
import Link from 'next/link';
import { FaEdit, FaListAlt, FaTrashAlt } from 'react-icons/fa';
import { Modal } from './Modal';
import { Input } from './Input';
import { useState } from 'react';

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

  return (
    <div>
      {event.draft && (
        <span style={{ backgroundColor: 'dodgerblue', color: 'white' }}>
          Draft
        </span>
      )}
      {/* TODO: fix type error */}
      {/* @ts-ignore */}
      <Link target="_blank" href={`/events/${event.id}`}>
        {event.title}
      </Link>

      <EditEvent aria-label={`Edit ${event.title}`} {...props} />
      <button
        aria-label={`Delete ${event.title}`}
        onClick={() => handleDelete(event)}>
        <FaTrashAlt aria-hidden />
      </button>
      {/* TODO: add link to view list of attendees */}
      <a href="">
        <FaListAlt aria-hidden />
      </a>
    </div>
  );
};

const EditEvent: React.FC<EventProps> = props => {
  const { event } = props;

  const [title, setTitle] = useState(event.title);
  const [date, setDate] = useState(event.date);
  const [time, setTime] = useState(event.time);
  const [location, setLocation] = useState(event.location);
  const [description, setDescription] = useState(event.description);
  // const [featuredImage, setFeaturedImage] = useState('');
  const [capacity, setCapacity] = useState(event.capacity);
  const [price, setPrice] = useState(event.price);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    editEvent({
      title,
      date,
      time,
      location,
      description,
      // featuredImage,
      capacity,
      price,
      id: event.id,
    });
  };

  return (
    <Modal title={<FaEdit aria-hidden />}>
      <h2>Edit event</h2>
      <form onSubmit={handleSubmit}>
        <Input title="Title" value={title} setValue={setTitle} required />
        <Input
          title="Date"
          type="date"
          value={date}
          setValue={setDate}
          required
        />
        <Input
          title="Time"
          type="time"
          value={time}
          setValue={setTime}
          required
        />
        <Input
          title="Location"
          value={location}
          setValue={setLocation}
          required
        />
        <Input
          title="Description"
          value={description}
          setValue={setDescription}
        />
        {/* <Input
          title="Featured image"
          type="file"
          value={featuredImage}
          setValue={setFeaturedImage}
          required
        /> */}
        <Input
          title="Capacity"
          type="number"
          value={capacity}
          setValue={setCapacity}
          required
        />
        <Input
          title="Price"
          type="number"
          value={price}
          setValue={setPrice}
          required
        />
        {/* <button onClick={handleDraft}>Save as draft</button> */}
        <button type="submit">Save</button>
      </form>
    </Modal>
  );
};
