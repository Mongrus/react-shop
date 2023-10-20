import styles from './Footer.module.sass';
import { useContext } from 'react';
import FilmContext from '../context/FilmContext';

const Footer = () => {
  const { day } = useContext(FilmContext);
  return (
    <div className={day ? styles.footer : styles.footerWhite}>
      <a href="https://github.com/Mongrus" rel="noreferrer" target="_blank">
        Остальные мои работы на GitHub
      </a>
    </div>
  );
};

export default Footer;
