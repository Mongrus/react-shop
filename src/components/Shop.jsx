import { useState } from 'react';
import { useContext } from 'react';
import FilmContext from '../context/FilmContext';
import styles from './Shop.module.sass';
const Shop = () => {
  const { day } = useContext(FilmContext);
  const gallery = [
    'https://widewp.ru/images/movies/3.jpg',
    'https://w.forfun.com/fetch/42/424fd159136aff2102152df436ea431b.jpeg',
    'https://widewp.ru/images/movies/102.jpg',
    'https://w.forfun.com/fetch/17/1716900b2c808c121210d7d08ecfd479.jpeg',
    'https://get.wallhere.com/photo/1920x1080-px-Black-suited-Spiderman-man-Marvel-Comics-movies-spider-splitting-1438677.jpg',
  ];
  const [numImg, setNumImg] = useState(0);
  const [imgGallery, setImgGallery] = useState(gallery[numImg]);
  setTimeout(() => {
    if (numImg === 4) {
      setNumImg(0);
      setImgGallery(gallery[numImg]);
    } else if (numImg < gallery.length) {
      setNumImg(numImg + 1);
      setImgGallery(gallery[numImg]);
    }
  }, 8000);

  return (
    <div>
      <div className={styles.gallery}>
        <img src={imgGallery} alt="#" />
        <div className={day ? styles.textDiv : styles.textDivWhite}>
          <h2>
            Это мой пробный проект в котором я практиковался в использовании
            таких технологий как - React router и Context API.
          </h2>
          <br />
          <p>
            Что удалось осуществить: <br />
            <br />
            1. Создать личный кабинет с регистрацией пользователя, результаты
            записываются в массивы Логинов и Паролей(сохраняясь в глобальном
            состоянии контекста приложения реакт), после чего можно использовать
            их и войти в личный кабинет.{' '}
            <span>
              При обновлении сайта регистрации стираются, т.к. никаких баз
              данных в этом проекте я не подключал.
            </span>
            <br />
            <br />
            2. Полноценная корзина в которую вы можете добавлять товары и они
            буду в ней сохраняться пока вы не удалите их из нее (все вместе или
            по одному).
            <br />
            <br />
            3. Для каждого товара была создана своя личная страница при помощи
            React router. (Настроена маршрутизация и пути)
            <br />
            <br />
            4. Весь сайт можно переключать в ночной, либо дневной режим (эту
            задачу значительно упростил Context API и глобальные переменные
            состояния).
            <br />
            <br />
            5. Поиск товаров на странице "Все фильмы" при помощи сортировки и
            фильтрации по ключевым словам.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Shop;
