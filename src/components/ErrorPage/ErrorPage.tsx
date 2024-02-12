import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import LargeCard from '../LargeCard/LargeCard';
import Title from '../Title/Title';
import styles from './ErrorPage.module.css';

const ErrorPage = () => {
  const error = useRouteError() as Error;

  return (
    <div className={styles.errorPage}>
      <LargeCard>
        <Title size={30} />
        <h1>Whoops!</h1>
        {isRouteErrorResponse(error) ? (
          <p>Looks like this page does not exist!</p>
        ) : (
          <p>{error.message}</p>
        )}
      </LargeCard>
    </div>
  );
};

export default ErrorPage;
