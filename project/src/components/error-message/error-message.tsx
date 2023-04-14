// import { Link } from 'react-router-dom';
// import { AppRoute } from '../../const';
import { useAppDispatch } from '../../hooks/use-app-dispatch/use-app-dispatch';
import { fetchOffersAction } from '../../store/api-actions';
import classes from './error-message.module.scss';

function ErrorMessage(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <div className={classes.wrapper}>
      <div className={classes.box}>
        <p className={classes.text}>☹</p>
        <p className={classes.text}>Failed to load data</p>
        <button className={classes.btn} onClick={() => { dispatch(fetchOffersAction()); }}>Try again</button>
      </div>
    </div>
  );
}

export default ErrorMessage;
