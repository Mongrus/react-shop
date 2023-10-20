import styles from './Register.module.sass';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FilmContext from '../../../context/FilmContext';

const Register = () => {
  const { sub, setSub, day } = useContext(FilmContext);
  const [useForm, setUseForm] = useState(null);
  const [log, setLog] = useState('');
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');
  const [newObj, setNewObj] = useState({});
  const navigate = useNavigate();

  const newSub = (login, email, password) => {
    setNewObj({
      login: login,
      emeil: email,
      password: password,
    });

    setUseForm(null);
  };

  useEffect(() => {
    if (useForm === true) {
      setSub([...sub, newObj]);
      setLog('');
      setMail('');
      setPass('');
      alert('Вы успешно зарегистрировались !');
      navigate('/personal-area/login');
    }
  }, [useForm, setUseForm, setSub, navigate, newObj, sub]);
  return (
    <div>
      <form
        onSubmit={(e) => {
          setUseForm(Boolean(e));
          e.preventDefault();
        }}
        className={day ? styles.form : styles.formWhite}
      >
        <label htmlFor="login">Введите логин:</label>
        <input
          onChange={(e) => setLog(e.target.value)}
          type="text"
          name="login"
          value={log}
          placeholder="User"
          pattern="[\w]{1,15}"
          required
        />
        <label htmlFor="email">Введите емайл адрес:</label>
        <input
          onChange={(e) => setMail(e.target.value)}
          type="email"
          name="email"
          value={mail}
          placeholder="user@gmail.com"
        />
        <label htmlFor="password">Укажите пароль:</label>
        <input
          onChange={(e) => setPass(e.target.value)}
          type="password"
          name="password"
          value={pass}
          placeholder="12345"
          required
        />

        <button
          type="submit"
          onClick={() => {
            newSub(log, mail, pass);
          }}
        >
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
};

export default Register;
