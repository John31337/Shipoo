import React from 'react';

export default function Layout({ children, page }) {
  return (
    <>
      <div className="body">
        {children}
      </div>
    </>
  )
}
