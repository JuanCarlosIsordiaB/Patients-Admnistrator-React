import React from 'react'
import { GloabalProvider } from './context/GlobalState'
import { Header } from './components/Header'
import { Formulario } from './components/Formulario'
import { Listado } from './components/Listado'

const App = () => {
  return (
    <GloabalProvider>
      <div className='container mx-auto mt-10'>
        <Header/>
        <div className='mt-12 md:flex'>
          <Formulario />
          <Listado />
        </div>
      </div>
    </GloabalProvider>
  )
}

export default App
