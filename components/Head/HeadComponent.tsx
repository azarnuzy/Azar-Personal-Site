import Head from 'next/head'
import React from 'react'

function HeadComponent() {
  return (
    <Head>
      <title>Azar Site</title>
      <meta
        name='description'
        content='Welcome to my personal site! This is where you can learn more about me, my interests, and my work. Explore my portfolio, blog, and more to get a better sense of who I am and what I do.'
      />
      <meta
        name='keywords'
        content='personal, portfolio, blog, about me, interests, work, projects, skills, experience, education, achievements, contact, homepage'
      />
      <meta
        name='author'
        content='M. Azar nuzy'
      />
      <meta
        property='og:title'
        content='Azar Site'
      />
      <meta
        property='og:description'
        content='Welcome to my personal site! This is where you can learn more about me, my interests, and my work. Explore my portfolio, blog, and more to get a better sense of who I am and what I do.'
      />
      <meta
        property='og:type'
        content='website'
      />
      <meta
        property='og:url'
        content='https://azarsite.netlify.app/'
      />
      <meta
        property='og:image'
        content='/images/header-1.jpg'
      />
      <meta
        property='twitter:title'
        content='Azar Site'
      />
      <meta
        property='twitter:description'
        content='Welcome to my personal site! This is where you can learn more about me, my interests, and my work. Explore my portfolio, blog, and more to get a better sense of who I am and what I do.'
      />
      <meta
        property='twitter:image'
        content='/images/header-1.jpg'
      />
      <meta
        name='twitter:creator'
        content='@azarnuzy'
      />
      <meta
        name='twitter:card'
        content='summary_large_image'
      />
      <link
        rel='canonical'
        href='https://azarsite.netlify.app/'
      />
      <link
        rel='icon'
        href='/favicon.ico'
      />
    </Head>
  )
}

export default HeadComponent
