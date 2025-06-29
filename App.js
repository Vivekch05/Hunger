import React from 'react';
import ReactDOM from 'react-dom/client';
import Body from './src/Components/Body';
import Header from './src/Components/Header';
import About from './src/Components/Header/Navigation/About';
import Cart from './src/Components/Header/Navigation/Cart';
import Home from './src/Components/Header/Navigation/Home';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import RestaurentItem from './src/Components/Body/RestaurentItem';
import ContactUS from './src/Components/Header/Navigation/ContactUS';
import { Provider } from 'react-redux';
import store from './src/Redux/appStore';
import Checkout from './src/Components/Body/CheckOut';

const App = () => {
  return (
    <Provider store={store}>
      <div className='app'>
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
}

const appRouter = createBrowserRouter([
  {
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
        path: '/contactus',
        element: <ContactUS />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/checkout',
        element: <Checkout />
      },
      {
        path: '/restaurent/:resId',
        element: <RestaurentItem />
      }
    ]
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={appRouter} />

);