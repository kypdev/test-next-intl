import ExampleClientComponent from '@/components/ExampleClientComponent'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import Navigation from '@/components/Navigation'
import LocaleSwitcher from '@/components/LocaleSwitcher'

export default function Home() {
  const t = useTranslations('Index')
  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-24'>
      <h1 className='text-2xl font-extrabold'>{t('title')}</h1>
      <h1 className='text-2xl font-extrabold'>Welcome to my home page</h1>
      <ExampleClientComponent />
      <Link href='/about-us'>{t('about_us')}</Link>
      <Link href='/service'>{t('service')}</Link>
    </main>
  )
}
