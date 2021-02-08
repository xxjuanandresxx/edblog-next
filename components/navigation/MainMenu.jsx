import React from 'react'
import Link from 'next/link'

export default function MainMenu() {
  return (
    <div className="s-grid-1 lg-cols-3 s-cross-center s-main-end header-links">
      <nav className="main-menu">
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  )
}