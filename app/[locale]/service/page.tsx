'use client'
import React from 'react'
import { useTranslations } from 'next-intl'

const Home = () => {
  const t = useTranslations('Service')
  return (
    <h1>{t('title')}</h1>
  )
}

export default Home
