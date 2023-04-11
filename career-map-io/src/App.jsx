import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet, useLoaderData } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
export const AllJobsContext = createContext([])
export const IdContext = createContext([])

function App() {
  const allJobs = useLoaderData();
  // console.log('data', allJobs);


  return (
    <AllJobsContext.Provider value={allJobs} >
      <section className='bg-violet-50'>
        <Header />
      </section>
      <section className='min-h-[calc(100vh-136px)]'>
        <Outlet />
      </section>
      <section className=' bg-black'>
        <Footer />
      </section>
    </AllJobsContext.Provider>
  )
}

export default App
