
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <section className="flex flex-col items-center justify-center text-center py-24 px-4 bg-gradient-to-b from-gray-900 to-black">
        <h1 className="text-4xl md:text-6xl font-bold tracking-wide mb-4">
          GradeForge
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mb-8">
          Where Assignments Meet Excellence
        </p>
        <a href="https://wa.me/92301092301" className="bg-white text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition">
          Message Us on WhatsApp
        </a>
      </section>
    </div>
  );
}

export default App;
