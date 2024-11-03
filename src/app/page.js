"use client";

import Image from "next/image";

export default function Home() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    const result = await response.json();
    console.log(result);
  };
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <form onSubmit={handleSubmit} >
      <input type="text" name="name" placeholder="Name" />
      <input type="email" name="email" placeholder="Email" />
      <button type="submit">Create User</button>
    </form>
    </div>
  );
}
