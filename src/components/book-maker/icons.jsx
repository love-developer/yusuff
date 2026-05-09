import React from 'react'

const base = 'h-4 w-4'

export const IconBooks = ({ className = base }) => (
  <svg viewBox='0 0 24 24' className={className} fill='none' stroke='currentColor' strokeWidth='1.8'>
    <path d='M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21z' />
    <path d='M8 7h8M8 11h8' />
  </svg>
)

export const IconPen = ({ className = base }) => (
  <svg viewBox='0 0 24 24' className={className} fill='none' stroke='currentColor' strokeWidth='1.8'>
    <path d='m12 20 8-8a2 2 0 1 0-2.8-2.8l-8 8L8 20z' />
    <path d='M15 8l3 3M4 20h6' />
  </svg>
)

export const IconUsers = ({ className = base }) => (
  <svg viewBox='0 0 24 24' className={className} fill='none' stroke='currentColor' strokeWidth='1.8'>
    <path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' />
    <circle cx='9' cy='7' r='3' />
    <path d='M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a3 3 0 0 1 0 5.75' />
  </svg>
)

export const IconPalette = ({ className = base }) => (
  <svg viewBox='0 0 24 24' className={className} fill='none' stroke='currentColor' strokeWidth='1.8'>
    <path d='M12 3a9 9 0 1 0 0 18h1a2 2 0 0 0 0-4h-1a2 2 0 0 1 0-4h1a4 4 0 0 0 0-8z' />
    <circle cx='7.5' cy='9.5' r='1' />
    <circle cx='10.5' cy='6.5' r='1' />
    <circle cx='14.5' cy='6.5' r='1' />
  </svg>
)

export const IconPublish = ({ className = base }) => (
  <svg viewBox='0 0 24 24' className={className} fill='none' stroke='currentColor' strokeWidth='1.8'>
    <path d='M12 16V4M8 8l4-4 4 4M4 16v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3' />
  </svg>
)

export const IconChart = ({ className = base }) => (
  <svg viewBox='0 0 24 24' className={className} fill='none' stroke='currentColor' strokeWidth='1.8'>
    <path d='M3 3v18h18' />
    <path d='M7 14l3-3 3 2 4-5' />
  </svg>
)

export const IconClose = ({ className = 'h-[24px] w-[24px]' }) => (
  <svg viewBox='0 0 24 24' className={className} fill='none' stroke='currentColor' strokeWidth='2'>
    <path d='M18 6 6 18M6 6l12 12' />
  </svg>
)
