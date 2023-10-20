import FilmContext from '../context/FilmContext';
import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './Post.module.sass';

const Post = () => {
  const { dataInfo, setNumBasket, numBasket, arrBasket, setArrBasket, day } =
    useContext(FilmContext);
  const params = useParams();
  const post = dataInfo.find((posts) => {
    return posts.id === Number(params.id);
  });

  const plusBasket = (idel, title, genre, rating, duration, country) => {
    const newObj = {
      id: idel,
      title: title,
      genre: genre,
      rating: rating,
      duration: duration,
      country: country,
    };

    if (
      Number(params.id) ===
      arrBasket.reduce((acum, el) => {
        return (acum = el.id);
      }, 0)
    ) {
      console.log('уже куплен');
    } else {
      setArrBasket([...arrBasket, newObj]);
      setNumBasket(numBasket + 1);
    }
  };

  return (
    <div className={styles.post}>
      <div className={day ? styles.infoFilms : styles.infoFilmsWhite}>
        <h1>
          {post.movie_title}
          <br />
        </h1>
        <h3>
          Дата релиза: {post.release_date}
          <br />
          Жанр: {post.genre}
          <br />
          Рейтинг: {post.rating}
          <br />
          Продолжительность: {post.duration}
          <br />
          Страна производства: {post.country}
          <br />
          Главная роль: {post.actors}
        </h3>
        <Link to=".." relative="path">
          Вернуться назад
        </Link>
        <button
          onClick={() => {
            plusBasket(
              post.id,
              post.movie_title,
              post.genre,
              post.rating,
              post.duration,
              post.country
            );
          }}
        >
          Добавить в корзину
        </button>
      </div>
    </div>
  );
};

export default Post;
