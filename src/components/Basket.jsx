import { useContext } from 'react';
import FilmContext from '../context/FilmContext';
import styles from './Basket.module.sass';
import { RiDeleteBin5Line } from 'react-icons/ri';

const Basket = () => {
  const { arrBasket, setArrBasket, setNumBasket, day } =
    useContext(FilmContext);
  const delAllFilms = () => {
    setArrBasket([]);
    setNumBasket(0);
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
    <div className={day ? styles.products : styles.productsWhite}>
      {arrBasket.length ? (
        <></>
      ) : (
        <h2 className={styles.noFilms}>
          Вы пока не добавили товаров в корзину
        </h2>
      )}
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
      {arrBasket.length > 0 ? (
        <button onClick={() => delAllFilms()}>Очистить корзину</button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Basket;
