import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './routes/home'
import Job from './routes/jobs/job'
import Applicationform from './routes/jobs/Applicationform/[id]'
import JobDescription from './routes/jobs/jobDescription/[id]'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path='/' index={true} element={<Home />} />
          <Route path='/job' element={<Job />}>
            <Route path='jobDescription/:id' element={<JobDescription />} />
            <Route path='application/:id' element={<Applicationform />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
