import { isRouteErrorResponse, useLocation, useNavigate, useRouteError } from 'react-router-dom';
import { socket } from '../../socket/Socket';
import LargeCard from '../LargeCard/LargeCard';
import Title from '../Title/Title';
import styles from './ErrorPage.module.css';
import Button from '../Button/Button';

const ErrorPage = () => {
  const error = useRouteError() as Error;
  const navigate = useNavigate();
  const { state } = useLocation();

  const handleClick = () => {
    socket.disconnect();
    navigate('/');
  };

  return (
    <div className={styles.errorPage}>
      <LargeCard>
        <Title size={30} />
        <h1>Whoops!</h1>

        {isRouteErrorResponse(error) ? (
          <p>Looks like this page does not exist!</p>
        ) : (
          <>
            <p>Looks like there was an error: {state?.message}</p>
            <div className={styles.buttonWrapper}>
              <Button onClick={handleClick} text='Return to Homepage' />
            </div>
          </>
        )}
      </LargeCard>
    </div>
  );
};

export default ErrorPage;
