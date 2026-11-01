import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const RootLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#fafdfb] relative selection:bg-emerald-200 selection:text-emerald-900 overflow-x-hidden">
      <Navbar />

      <main className="flex-1 pt-20">
        <Outlet />
      </main>

      {/* Floating chat bot widget removed per user request */}

      <Footer />
    </div>
  );
};
