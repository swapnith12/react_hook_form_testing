import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import NavBar from './components/navBar.tsx';
import { worker } from './mocks/worker.ts';

worker.start()
  .then(() => {
    createRoot(document.getElementById('root')!).render(
      <StrictMode>
        <div className='flex flex-col bg-black min-w-screen  min-h-screen'>
          <NavBar />
          <div className="mt-20 flex justify-center items-center ">
            <App />
          </div>
        </div>
      </StrictMode>
    );
  })
  .catch(err => console.error('MSW failed to start:', err?.message));
