import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './root/Root';
import HomePage from './pages/HomePage';
import ListingPage from './pages/ListingPage';
import About from './pages/AboutPage';
import ErrorPage from './pages/ErrorPage';
import PropertyPage from './pages/PropertyPage';

const router = createBrowserRouter([

  {
    path: '/',element: <Root />,errorElement: <ErrorPage />, children: [
      { index: true, element: <HomePage /> },
      {path: 'listing',element: <ListingPage />,}, //add loader
      { path: 'listing/:homeID', element: <PropertyPage />},
      { path: 'about', element: <About /> },
    ]
  }
])

const App = () => {
  return (
    <RouterProvider router={ router } />
  )
}
export default App;