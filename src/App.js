import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './root/Root';
import HomePage from './pages/HomePage';
import ListingPage from './pages/ListingPage';
import About from './pages/AboutPage';
import Support from './components/layout/support/support';

const router = createBrowserRouter([
  {
    path: '/', element: <Root />, children: [
      { path: '/', element: <HomePage /> },
      {path: '/listing', element: <ListingPage/>},
      {path: '/about', element: <About/> },
      {path: '/support', element: <Support/> },
    ]
  }
])

const App = () => {
  return (
    <RouterProvider router={ router } />
  )
}
export default App;