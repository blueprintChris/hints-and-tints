import { useRouteError } from 'react-router-dom';
import styles from './ErrorPage.module.css';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className={styles.errorPageContainer}>
      <h1>Whoops!</h1>
      <p>Looks like this page does not exist!</p>
    </div>
  );
};

export default ErrorPage;
