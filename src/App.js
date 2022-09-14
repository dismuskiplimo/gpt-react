import React from 'react';

import { Header, Footer, Features, Blog, Possibility, WhatGPT3 } from './containers';
import { CTA, Navbar, Brand } from './components';

const App = () => {
  return (
    <div className='App'>
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
    </div>
  )
}

export default App;