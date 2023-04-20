import { useState } from 'react';

import { addEvent, NewEvent } from '@/firebase/addData';
import { Input } from './Input';

const NewEventForm = () => {
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
      // TODO: log
    }

    // Reset form field
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
    <form onSubmit={handleSubmit}>
      <div>
        <Input title="Title" value={title} setValue={setTitle}/>
        <Input title="Date" type="date" value={date} setValue={setDate}/>
        <Input title="Time" type="time" value={time} setValue={setTime}/>
        <Input title="Location" value={location} setValue={setLocation}/>
        <Input title="Description" value={description} setValue={setDescription}/>
        <Input title="Featured image" type="file" value={featuredImage} setValue={setFeaturedImage}/>
        <Input title="Capacity" type="number" value={capacity} setValue={setCapacity}/>
        <Input title="Price" type="number" value={price} setValue={setPrice}/>
      </div>
      
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewEventForm;
