import React from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import NavBar from './routes/NavBar';
import ErrorPage from './routes/ErrorPage';
import Resume from './routes/Resume';
import Project from './routes/Project';
import Contact from './routes/Contact';
import Home from './routes/Home';

const router = createHashRouter([
  {
    path: '',
    element: <NavBar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'Resume',
        element: <Resume />,
      },
      {
        path: 'Project',
        element: <Project />,
      },
      {
        path: 'Contact',
        element: <Contact />,
      },
    ]
  }
])
const App = () => {
  return <RouterProvider router={router} />
}
export default App;
