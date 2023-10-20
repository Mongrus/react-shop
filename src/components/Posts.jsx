import { Link } from 'react-router-dom';
import FilmContext from '../context/FilmContext';
import { useContext, useEffect, useState } from 'react';
import styles from './Posts.module.sass';

const Posts = () => {
  const { dataInfo, setDataInfo, newArr, day } = useContext(FilmContext);
  const [newDataInfo, setNewDataInfo] = useState([]);

  const allFilms = () => {
    setDataInfo(newArr);
  };

  const filter = (name) => {
    setDataInfo(newArr);
    console.log(dataInfo);
    setNewDataInfo(
      newArr.filter((el) => {
        if (el.genre === name) {
          return true;
        } else {
          return false;
        }
      })
    );
  };

  useEffect(() => {
    if (newDataInfo.length !== 0) {
      setDataInfo(newDataInfo);
    }
  }, [newDataInfo, setDataInfo, newArr, setNewDataInfo]);

  return (
    <div>
      <h2 className={day ? styles.filterTitle : styles.filterTitleWhite}>
        Фильтр:
      </h2>
      <div className={day ? styles.filter : styles.filterWhite}>
        <button onClick={() => allFilms()}>Все</button>
        <button onClick={() => filter('comedy')}>Комедии</button>
        <button onClick={() => filter('romance')}>Романы</button>
        <button onClick={() => filter('drama')}>Драмы</button>
        <button onClick={() => filter('action')}>Экшен</button>
        <button onClick={() => filter('horror')}>Хорроры</button>
      </div>
      <div className={styles.posts}>
        {dataInfo.map((el) => (
          <div key={el.id} className={day ? styles.cards : styles.cardsWhite}>
            <h2>{el.movie_title}</h2>
            <h3>Жанр: {el.genre}</h3>
            <h3>Рейтинг: {el.rating}</h3>
            <h3>Продолжительность: {el.duration}</h3>
            <Link to={`${el.id}`}>
              <button>Узнать подробнее...</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
