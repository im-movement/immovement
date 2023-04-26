import { useState } from 'react';

import { addEvent, NewEvent } from '@/firebase/addData';
import { Input } from './Input';

export const NewEventForm = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [featuredImage, setFeaturedImage] = useState('');
  const [capacity, setCapacity] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newEvent: NewEvent = {
      title,
      date,
      time,
      location,
      description,
      featuredImage,
      capacity,
      price,    
    };

    try {
      await addEvent(newEvent)
    } catch (error) {
      console.error('Error adding event:', error);
      // TODO: log error
    }

    // reset form field
    setTitle('');
    setDate('');
    setTime('');
    setLocation('');
    setDescription('');
    setFeaturedImage('');
    setCapacity('');
    setPrice('');
  };

  return (
    <section>
      <h2>Add new event</h2>
      <form onSubmit={handleSubmit}>
          <Input title="Title" value={title} setValue={setTitle} required />
          <Input title="Date" type="date" value={date} setValue={setDate} required />
          <Input title="Time" type="time" value={time} setValue={setTime} required />
          <Input title="Location" value={location} setValue={setLocation} required />
          <Input title="Description" value={description} setValue={setDescription}/>
          <Input title="Featured image" type="file" value={featuredImage} setValue={setFeaturedImage} required />
          <Input title="Capacity" type="number" value={capacity} setValue={setCapacity} required />
          <Input title="Price" type="number" value={price} setValue={setPrice} required />
          <button type="submit">Submit</button>
      </form>
    </section>
  );
};
