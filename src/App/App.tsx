import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import DisconnectedApp from './DisconnectedApp/DisconnectedApp';
import ConnectedApp from './ConnectedApp/ConnectedApp';
import { ErrorPage } from '../components';
import styles from './App.module.css';
import { PropsWithChildren, ReactNode } from 'react';
import { GameContextProvider, PlayerContextProvider, SocketContextProvider } from '../context';

const ProviderWrapper = ({ children }: PropsWithChildren) => {
  return (
    <GameContextProvider>
      <PlayerContextProvider>
        <SocketContextProvider>{children}</SocketContextProvider>
      </PlayerContextProvider>
    </GameContextProvider>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProviderWrapper>
        <DisconnectedApp />
      </ProviderWrapper>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: '/room/:id',
    element: (
      <ProviderWrapper>
        <ConnectedApp />
      </ProviderWrapper>
    ),
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
