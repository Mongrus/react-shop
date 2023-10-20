import { useContext, useState } from 'react';
import FilmContext from '../../../context/FilmContext';
import styles from './Login.module.sass';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { sub, setUserActive, setUserInfo, day } = useContext(FilmContext);
  const [log, setLog] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate();

  console.log(sub);

  const logInAccount = (login, password) => {
    const positively = sub.find(
      (el) => el.login === login && el.password === password
    );
    console.log(positively);
    if (positively) {
      alert(`Добро пожаловать ${login}`);
      navigate('/personal-area/personal');
      setUserActive(true);
      setUserInfo(positively);
    } else {
      alert(
        'Данных логина и пароля не существует в базе, пожалуйста будьте внимательнее и попробуйте снова. Или зарегистрируйтесь, если вы этого еще не сделали.'
      );
    }
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className={day ? styles.form : styles.formWhite}
      >
        <h3>Введите пожалуйста Ваши данные для авторизации:</h3>
        <label htmlFor="login">Ваш логин:</label>
        <input
          onChange={(e) => setLog(e.target.value)}
          type="text"
          name="login"
          value={log}
          placeholder="User"
          pattern="[\w]{1,15}"
          required
        />
        <label htmlFor="password">Ваш пароль:</label>
        <input
          onChange={(e) => setPass(e.target.value)}
          type="password"
          name="password"
          value={pass}
          placeholder="12345"
          required
        />

        <button type="submit" onClick={() => logInAccount(log, pass)}>
          Войти в личный кабинет
        </button>
      </form>
    </div>
  );
};

export default Login;
