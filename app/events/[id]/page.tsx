"use client";
import React, { useState, useEffect, Suspense } from "react";
import { NewEvent } from "@/firebase/addData"
import { getEvent } from "@/firebase/getData"
import { Modal } from "@/components/Modal";
import Link from "next/link";
import { notFound } from 'next/navigation'
import Loading from "./loading";

interface PageProps {
  params: { id: string };
}

const Page: React.FC<PageProps> = ({params}) => {
  const [loading, setLoading] = useState(true)
  const [event, setEvent] = useState<NewEvent>()
  const id = params.id;

  useEffect(() => {
      const fetchData = async () => {
        setLoading(true)
    
        // TODO: fix type error
        // @ts-ignore
        const res = await getEvent(id)
    
        // TODO: fix type error
        // @ts-ignore
        setEvent(res)
        setLoading(false)
      }
        fetchData()
    }, [])

  const handleSignup = () => {
    // TODO: 
    // new page that takes in event id
    // user enters info (name, email, payment method)
    // figure out payment?
    // add user to a firebase doc with same event id (should prob set this up at event creation)
    // where/how will user cancel/edit signup?
    alert('Sign up')
  }

  if (loading) return <div>Loading...</div>
  return (
    <>
      <Link href='/events'>{'< Back to all events'}</Link>
        <section>
          {/* <Modal title="Edit" /> */}
          <div>Event</div>
          {/* TODO: fix type error */}
          {/* @ts-ignore */}
          <h2>{event.title}</h2>
        </section>
        <button onClick={handleSignup}>Sign up</button>
    </>
  );
}

export default Page;
