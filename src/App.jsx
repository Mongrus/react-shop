import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Shop from './components/Shop';
import PersonalArea from './components/reg-and-log/PersonalArea';
import Basket from './components/Basket';
import FilmContext from './context/FilmContext';
import MainLayout from './layout/MainLayout';
import Post from './components/Post';
import info from './data/info';
import subscribers from './data/subscribers';
import Posts from './components/Posts';
import Login from './components/reg-and-log/login/Login';
import Register from './components/reg-and-log/register/Register';
import Personal from './components/reg-and-log/personal/Personal';
import './App.sass';

function App() {
  const [dataInfo, setDataInfo] = useState(info);
  const [numBasket, setNumBasket] = useState(0);
  const [arrBasket, setArrBasket] = useState([]);
  const [newArr, setNewArr] = useState(dataInfo);
  const [sub, setSub] = useState(subscribers);
  const [userActive, setUserActive] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [day, setDay] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <FilmContext.Provider
          value={{
            dataInfo,
            setDataInfo,
            numBasket,
            setNumBasket,
            arrBasket,
            setArrBasket,
            newArr,
            setNewArr,
            sub,
            setSub,
            userActive,
            setUserActive,
            userInfo,
            setUserInfo,
            day,
            setDay,
          }}
        >
          <Routes>
            <Route path="/react-shop" element={<MainLayout />}>
              <Route index element={<Shop />}></Route>
              <Route path="posts" element={<Posts />}></Route>
              <Route path="posts/:id" element={<Post />}></Route>
              <Route path="personal-area" element={<PersonalArea />}></Route>
              <Route path="personal-area/login" element={<Login />}></Route>
              <Route
                path="personal-area/register"
                element={<Register />}
              ></Route>
              <Route
                path="personal-area/personal"
                element={<Personal />}
              ></Route>
              <Route path="basket" element={<Basket />}></Route>
            </Route>
          </Routes>
        </FilmContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
