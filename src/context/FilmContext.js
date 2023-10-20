import { createContext } from 'react';

const FilmContext = createContext({
  dataInfo: [],
  numBasket: 0,
  arrBasket: [],
  newArr: [],
  sub: [],
  userActive: false,
  userInfo: {},
  day: false,
  setDataInfo: () => {},
  setNumBasket: () => {},
  setArrBasket: () => {},
  setNewArr: () => {},
  setSub: () => {},
  setUserActive: () => {},
  setUserInfo: () => {},
  setDay: () => {},
});

export default FilmContext;
