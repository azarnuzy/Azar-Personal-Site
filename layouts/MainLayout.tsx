import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import Head from 'next/head'
import React, { ReactNode } from 'react'

interface MainLayoutProps {
  children: ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <link
          rel='icon'
          href='/favicon.ico'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0'
        />
        <meta
          name='keywords'
          content='website portofolio,personal portofolio, muhammad azar nuzy, front end portofolio'
        />
        <meta
          name='description'
          content='This is my personal Website that contain all of my activities and projects.'
        />
        <meta
          property='og:image'
          content='/hero.png'
        />
        <meta
          name='robots'
          content='index,follow'
        />
        <meta
          name='Googlebot'
          content='index,follow'
        />
        <meta
          name='AdsBot-Google'
          content='index,follow'
        />
        <meta
          property='og:site_name'
          content='https://azar-personal-site.netlify.app//'
        />
        <meta
          property='og:title'
          content='M. Azar Nuzy | Personal Site'
        />
        <meta
          property='og:description'
          content='This is my personal Website that contain all of my activities and projects.'
        />
        <meta
          property='og:type'
          content='website'
        />
        <meta
          property='og:url'
          content='https://azar-personal-site.netlify.app//'
        />
        <meta
          name='twitter:card'
          content='summary'
        />
        <meta
          name='twitter:site'
          content='https://azar-personal-site.netlify.app//'
        />
        <meta
          name='application-name'
          content='M. Azar Nuzy | Personal Site'
        />
        <meta
          name='apple-mobile-web-app-title'
          content='M. Azar Nuzy | Personal Site'
        />
        <meta
          name='summary'
          content='This is my personal Website that contain all of my activities and projects.'
        />
        <title>Azar | Site</title>
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default MainLayout
