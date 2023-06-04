'use client';
import React, { useState } from 'react';
import signIn from '@/firebase/signIn';
import { useRouter } from 'next/navigation';

const Page: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { error } = await signIn(email, password);

    if (error) {
      // TODO: log error
      throw e;
    }

    return router.push('/dashboard');
  };
  return (
    <>
      <h1>Log in</h1>
      <form onSubmit={handleForm} className="form">
        <label htmlFor="email">
          <p>Email</p>
          <input
            onChange={e => setEmail(e.target.value)}
            required
            type="email"
            name="email"
            id="email"
            placeholder="example@mail.com"
          />
        </label>
        <label htmlFor="password">
          <p>Password</p>
          <input
            onChange={e => setPassword(e.target.value)}
            required
            type="password"
            name="password"
            id="password"
            placeholder="password"
          />
        </label>
        <button type="submit">Sign in</button>
      </form>
    </>
  );
};

export default Page;
