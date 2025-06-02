'use client';

import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BloodStockDashboard: React.FC = () => {

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-rose-50" style={{ fontFamily: 'Lexend, "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        {/* Header */}
        <Navbar />

        {/* Main Content */}
        <Outlet />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default BloodStockDashboard;