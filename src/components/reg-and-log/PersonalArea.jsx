import { Link } from 'react-router-dom';
import styles from './PersonalArea.module.sass';
import { useContext } from 'react';
import FilmContext from '../../context/FilmContext';

const PersonalArea = () => {
  const { day } = useContext(FilmContext);
  return (
    <div className={day ? styles.backgraund : styles.backgraundWhite}>
      <div className={day ? styles.div : styles.divWhite}>
        <h3>Войдите пожалуйста в свой аккаунт или зарегистрируйтесь:</h3>
        <Link to="login" relative="path">
          <button>Войти под своим логином</button>
        </Link>
        <Link to="register" relative="path">
          <button>Зарегистрироваться</button>
        </Link>
      </div>
    </div>
  );
};

export default PersonalArea;
