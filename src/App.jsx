import React, { useState } from 'react'
import Background from './Component/Background'
import Forground from './Component/Forground'

function App() {

  return (
    <div className='relative w-full h-screen bg-zinc-800/75'>
      <Background />
      <Forground />
    </div>
  )
}

export default App