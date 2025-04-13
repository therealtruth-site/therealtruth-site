import React, { useEffect, useState } from 'react';

export default function HomePage() {
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    const targetDate = new Date("2025-06-01T00:00:00");
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval);
        setCountdown("We're live!");
      } else {
        setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-center text-white text-center"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <div className="bg-black/60 min-h-screen flex flex-col justify-center items-center p-10">
        <h1 className="text-5xl font-bold mb-4">The Real Truth</h1>
        <p className="text-lg mb-8">Launching soon with real documents and verified facts</p>
        <div className="text-3xl font-mono mb-10">{countdown}</div>
        <nav className="space-x-4">
          <a href="#" className="underline hover:text-gray-300">Archive</a>
          <a href="#" className="underline hover:text-gray-300">Contact</a>
        </nav>
      </div>
    </div>
  );
}
