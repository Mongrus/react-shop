import { NavLink } from 'react-router-dom';
import styles from './Header.module.sass';
import FilmContext from '../context/FilmContext';
import { useContext } from 'react';
import {
  BsFillBasketFill,
  BsMoonStars,
  BsBrightnessHigh,
} from 'react-icons/bs';

const Header = () => {
  const { numBasket, userActive, day, setDay } = useContext(FilmContext);
  return (
    <nav className={day ? styles.header : styles.headerWhite}>
      <NavLink
        className={
          day
            ? ({ isActive }) => (isActive ? 'active' : 'link')
            : ({ isActive }) => (isActive ? 'activeWhite' : 'link')
        }
        to="."
        end
      >
        Главная
      </NavLink>
      <NavLink
        className={
          day
            ? ({ isActive }) => (isActive ? 'active' : 'link')
            : ({ isActive }) => (isActive ? 'activeWhite' : 'link')
        }
        to="posts"
      >
        Все фильмы
      </NavLink>
      <NavLink
        className={
          day
            ? ({ isActive }) => (isActive ? 'active' : 'link')
            : ({ isActive }) => (isActive ? 'activeWhite' : 'link')
        }
        to={userActive ? 'personal-area/personal' : 'personal-area'}
      >
        Личный кабинет
      </NavLink>{' '}
      <NavLink
        className={
          day
            ? ({ isActive }) => (isActive ? 'activeBasket' : 'link')
            : ({ isActive }) => (isActive ? 'activeBasketWhite' : 'link')
        }
        to="basket"
      >
        <BsFillBasketFill className={styles.basket} />
        {numBasket === 0 ? (
          <></>
        ) : (
          <div className={styles.num}>
            <p>{numBasket}</p>
          </div>
        )}
      </NavLink>
      <div className={styles.dayNight}>
        {day ? (
          <BsMoonStars onClick={() => setDay(!day)} />
        ) : (
          <BsBrightnessHigh onClick={() => setDay(!day)} />
        )}
      </div>
    </nav>
  );
};

export default Header;
