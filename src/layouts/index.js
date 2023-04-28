import React from 'react';
import Header from './Header';

export default function Layout({ children, page }) {
  return (
    <>
      <Header/>
      <div className="body">
        {children}
      </div>
    </>
  )
}
