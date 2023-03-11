import { FetchData } from "./components/FetchData";
import Members from './components/Members';
import Home from './components/Home';
import Details from './components/Details';
import Cart from './components/Cart';
import Result from './components/Result';
import AdminPage from './components/AdminPage';

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/members',
    element: <Members />
  },
  {
    path: '/cart',
    element: <Cart />
  },
  {
    path: '/result',
    element: <Result />
  },
  {
    path: '/admin',
    element: <AdminPage />
    },
  {
    path: '/details/:id',
    element: <Details />
  }
];

export default AppRoutes;
