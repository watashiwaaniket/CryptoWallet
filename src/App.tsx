import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import OnBoardingPage from './pages/OnBoardingPage';
import LandingPage from './pages/LandingPage';

const router = createBrowserRouter([
  { path: '/', element: <LandingPage />},
  { path: '/home', element: <OnBoardingPage /> },  
])

function App() {
  return (    
    <RouterProvider router={router}/>
  )
}

export default App
