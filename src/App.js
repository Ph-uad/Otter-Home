import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './root/Root';
import HomePage from './pages/HomePage';
import ListingPage from './pages/ListingPage';
import About from './pages/AboutPage';
import ErrorPage from './pages/ErrorPage';
import PropertyDetails from './components/layout/propertyDetails/PropertyDetails';

const router = createBrowserRouter([
  {
    path: '/', 
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/listing', element: <ListingPage /> },
      { path: '/listing/details', element: <PropertyDetails /> },
      { path: '/about', element: <About /> },
    ]
  }
])

const App = () =>  <RouterProvider router={ router } />
export default App;