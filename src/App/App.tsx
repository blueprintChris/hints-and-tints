import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import DisconnectedApp from './DisconnectedApp/DisconnectedApp';
import ConnectedApp from './ConnectedApp/ConnectedApp';
import { ErrorPage } from '../components';
import { PropsWithChildren } from 'react';
import { GameContextProvider, PlayerContextProvider, SocketContextProvider } from '../context';
import styles from './App.module.css';
import AppContainer from './AppContainer/AppContainer';
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
    errorElement: (
      <AppContainer>
        <ErrorPage />
      </AppContainer>
    ),
  },
  {
    path: '/room/:id',
    element: (
      <ProviderWrapper>
        <ConnectedApp />
      </ProviderWrapper>
    ),
    errorElement: (
      <AppContainer>
        <ErrorPage />
      </AppContainer>
    ),
  },
  {
    path: '/error',
    element: (
      <AppContainer>
        <ErrorPage />
      </AppContainer>
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
