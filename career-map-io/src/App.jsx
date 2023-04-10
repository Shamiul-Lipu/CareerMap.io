import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet, useLoaderData } from 'react-router-dom'
import Header from './Components/Header'
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
      <Outlet />

    </AllJobsContext.Provider>
  )
}

export default App
