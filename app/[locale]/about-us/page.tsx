'use client'
import Link from 'next/link'
import React from 'react'
import { useTranslations } from 'next-intl'

const Home = () => {
  const t = useTranslations('AboutUs')
  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-24'>
      <h1>{t('title')}</h1>
      <p>
        <b>Our Address:</b>
      </p>
      <p>
        123 Example street
        <br />
        Los Angles, CA
      </p>
      <Link href='/'>Back</Link>
    </main>
  )
}

export default Home
