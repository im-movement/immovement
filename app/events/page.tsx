"use client";
import React, { useState, useEffect } from "react";
import { NewBlogPost, NewEvent } from '@/firebase/addData';
import { getBlogPosts, getEvents } from '@/firebase/getData';
import Link from 'next/link';

const Page: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [events, setEvents] = useState<NewEvent[]>([])
  // TODO: fix explicit any
  // @ts-ignore
  const [error, setError] = useState<any>(null)

  
  useEffect(() => {
      const fetchData = async () => {
        try {
          setLoading(true)
    
          const res = await getEvents()
          // TODO: fix type error
          // @ts-ignore
          setEvents([...res])
          setLoading(false)
        } catch (e) {
          setError(e)
          setLoading(false)
        }
      }
        fetchData()
    }, [])

  if (loading) return <div>Loading...</div>

  // TODO: error display
  if (error) return <div>{error.toString()}</div>

  return (
    <section>
        <h2>Events</h2>
        <ul>
          {events.length > 0 && events.map((event, i) => (
            <div key={i}>
              {/* TODO: */}
              {/* @ts-ignore */}
              <Link href={`/events/${event.id}`}>
                {event.title}
              </Link>
            </div>
          ))}
        </ul>
      </section>
  );
}

export default Page;
