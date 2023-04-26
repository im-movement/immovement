"use client";
import React, { useState } from 'react'
import { Input } from '@/components/Input';

const Page = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <>
      <h1>Contact</h1>
      <form name="contact" data-netlify={true} onSubmit={handleSubmit}>
        <Input required value={name} setValue={setName} title="Name" />
        <Input required value={email} setValue={setEmail} type="email" title="Email address" />
        <Input required value={message} setValue={setMessage} type="textarea" title="Message" />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default Page;