import { useContext } from 'react';
import FilmContext from '../../../context/FilmContext';
import { Link } from 'react-router-dom';
import styles from './Personal.module.sass';
import { RiDeleteBin5Line } from 'react-icons/ri';

const Personal = () => {
  const {
    userInfo,
    setUserActive,
    arrBasket,
    setArrBasket,
    setNumBasket,
    day,
  } = useContext(FilmContext);

  const exitLogin = () => {
    setUserActive(false);
  };

  const delOneFilms = (id) => {
    setArrBasket(
      arrBasket.filter((el) => {
        if (id !== el.id) {
          return true;
        } else {
          return false;
        }
      })
    );
    setNumBasket(arrBasket.length - 1);
  };

  return (
    <div className={day ? styles.form : styles.formWhite}>
      <div className={styles.info}>
        <h3>
          Добро пожаловать в личный кабинет {userInfo.login}. Твой email -{' '}
          {userInfo.email}. Это тестовый личный кабинет и поэтому здесь нет
          каких-либо интересных функции, он создан на отдельной странице
          благодаря React Router и в нем есть возможность просматривать
          состояние товаров добавленных в корзину благодаря Context API.
        </h3>
      </div>
      <Link to=".." onClick={() => exitLogin()} relative="path">
        <button>Выйти из учетной записи</button>
      </Link>
      {arrBasket.map((el) => {
        return (
          <div key={el.id} className={styles.oneProduct}>
            <div>
              <h2>{el.title}</h2>
            </div>
            <div>
              <p>Жанр:</p>
              <h3>{el.genre}</h3>
            </div>
            <div>
              <p>Рейтинг</p>
              <h3>{el.rating}</h3>
            </div>
            <div>
              <p>Продолжительность:</p>
              <h3>{el.duration}</h3>
            </div>
            <div>
              <p>Страна производства:</p>
              <h3>{el.country}</h3>
            </div>
            <RiDeleteBin5Line
              className={styles.oneProductDelete}
              onClick={() => delOneFilms(el.id)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Personal;
