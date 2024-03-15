"use client";
import Image from "next/legacy/image";
import { useState } from "react";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleFormSubmit() {
    ev.preventDefault();
    fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
  }
  return (
    <section>
      <h1 className="text-center text-primary text-4xl mt-8 mb-4">Register</h1>
      <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <button className="w-full" type="submit">
          Register
        </button>
        <div className="my-4 text-gray-500 text-center">
          or login with provider
        </div>
        <button type="button" className="w-full flex justify-center gap-4 ">
          <Image src={"/google.png"} alt={""} width={20} height={20} />
          Login with Google
        </button>
      </form>
    </section>
  );
}
