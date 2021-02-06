import React from 'react'
import Link from 'next/link'

export default function MainMenu() {
  return (
    <nav>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
      </ul>
    </nav>
  )
}