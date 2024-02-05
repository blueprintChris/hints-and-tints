import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import DisconnectedApp from './DisconnectedApp/DisconnectedApp';
import ConnectedApp from './ConnectedApp/ConnectedApp';
import { ErrorPage } from '../components';
import styles from './App.module.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DisconnectedApp />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/room/:id',
    element: <ConnectedApp />,
  },
]);

const App = () => {
  return (
    <div className={styles.app}>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
