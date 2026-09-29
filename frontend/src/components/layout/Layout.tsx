import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const Layout = () => {
  return (
    <>
      <Sidebar />
      <div className="pl-64">
        <Header />
        <main className="relative pt-16 bg-surface min-h-screen">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
