'use client';
import React from 'react';
import { useGetEvents } from '@/firebase/getData';
import Link from 'next/link';
import { Loading } from '../components/Loading';
import { MainLayout } from '../components/MainLayout';

// TODO: pagination
// https://firebase.google.com/docs/firestore/query-data/query-cursors

const Page: React.FC = () => {
  const { events, loading, error } = useGetEvents();

  if (loading) return <Loading />;
  if (error) return <div>{error.toString()}</div>;
  if (!events?.length) return <p>No events found</p>;

  return (
    <MainLayout>
      <section>
        <h2>Events</h2>
        <ul>
          {events.map((event, i) => {
            if (event.hidden !== true)
              return (
                <div key={i}>
                  {/* TODO: */}
                  {/* @ts-ignore */}
                  <Link href={`/events/${event.id}`}>{event.title}</Link>
                </div>
              );
          })}
        </ul>
      </section>
    </MainLayout>
  );
};

export default Page;
