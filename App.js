import React from 'react';
import ReactDOM from 'react-dom/client';
import Body from './src/Components/Body';
import Header from './src/Components/Header';
import About from './src/Components/Header/Navigation/About';
import Services from './src/Components/Header/Navigation/Services';
import Cart from './src/Components/Header/Navigation/Cart';
import Home from './src/Components/Header/Navigation/Home';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router';
import Error from './src/Components/Error';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Outlet />
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    errorElement: <Error />,
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/services',
        element: <Services />
      },
      {
        path: '/cart',
        element: <Cart />
      }]
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={appRouter} />

);