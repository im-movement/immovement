"use client";
import React, { useState, useEffect } from "react";
import { NewEvent } from "@/firebase/addData"
import { getEvent } from "@/firebase/getData"
import { Modal } from "@/components/Modal";

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

  if (loading) return <div>Loading...</div>
  return (
    <section>
      <Modal title="Edit" />
      <div>Event</div>
      {/* TODO: fix type error */}
      {/* @ts-ignore */}
      <h2>{event.title}</h2>
    </section>
  );
}

export default Page;
