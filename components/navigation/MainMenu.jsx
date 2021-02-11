import React, { createRef } from 'react'
import Link from 'next/link'

const menu = createRef()

function toggleMenu() {
  menu.current.classList.toggle("show")
}

export default function MainMenu() {
  return (
    <div className="s-grid-1 lg-cols-3 s-cross-center s-main-end header-links">
      <nav className="main-menu" ref={menu}>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
      <div 
        className="main-menu-toggle to-l"
        onClick={() => toggleMenu()}
      ></div>
    </div>
  )
}