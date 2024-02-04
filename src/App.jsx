import React from 'react';
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.scss';
import Video from './Components/pages/video';
import Home from './Components/pages/home';
import Quests from './Components/pages/quests';
import Rating from './Components/pages/rating';
import { useEffect } from 'react';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/quests",
    element: <Quests />
    
  },
  {
    path: "/rating",
    element: <Rating />
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>

  )
}

export default App;
