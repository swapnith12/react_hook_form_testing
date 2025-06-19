import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './routes/home'
import NavBar from './components/navBar'
import Job from './routes/jobs/job'
import Applicationform from './routes/jobs/Applicationform'
import JobDescription from './routes/jobs/jobDescription'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' index={true} element={<Home />} />
        <Route path='/job' element={<Job />}>
          <Route path='/job/jobDescription' element={<JobDescription />} />
          <Route path='/job/application' element={<Applicationform />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
