import React from 'react'

import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from '../containers';
import { Article, Brand, CTA, Feature, Navbar } from '../components';

export default function Home() {
  return (
    <>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </>
  )
}
