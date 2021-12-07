import { DataCardItem, DataFilterItem } from '../types';
import img1 from './img/1.jpeg';
import img2 from './img/2.jpeg';
import img3 from './img/3.jpeg';
import img4 from './img/4.jpeg';
import img5 from './img/5.jpeg';
import img6 from './img/6.jpeg';
import img7 from './img/7.jpeg';
import img8 from './img/8.jpeg';
import img9 from './img/9.jpeg';
import img10 from './img/10.jpeg';
import img11 from './img/11.jpeg';
import img12 from './img/12.jpeg';
import img13 from './img/13.jpeg';
import img14 from './img/14.jpeg';
import img15 from './img/15.jpeg';
import img16 from './img/16.jpeg';
import img17 from './img/17.jpeg';
import img18 from './img/18.jpeg';
import img19 from './img/19.jpeg';
import img20 from './img/20.jpeg';

export const dataFilterList: DataFilterItem[] = [
  { id: 1, title: 'Аренда', value: 'rent' },
  { id: 2, title: 'Новые', value: 'new' },
  { id: 3, title: 'Вторичка', value: 'secondary' },
  { id: 4, title: 'Проверены в ЕГРН', value: 'verifiedInTheUSRN' },
];

export const dataCardList: DataCardItem[] = [
  {
    id: 1,
    square: 16,
    title: 'студия',
    address: 'Проспект строителей, 134',
    dataFilterValue: 'rent',
    price: 8000,
    img: img1,
  },
  {
    id: 2,
    square: 28,
    title: '2-комнатная',
    address: 'улица Игоря Киртбая, 6',
    dataFilterValue: 'rent',
    price: 18000,
    img: img2,
  },
  {
    id: 3,
    square: 20,
    title: '1-комнатная',
    address: 'Ленинградский проспект, 11',
    dataFilterValue: 'rent',
    price: 8000,
    img: img3,
  },
  {
    id: 4,
    square: 38,
    title: '2-комнатная',
    address: 'метро Автово',
    dataFilterValue: 'rent',
    price: 16000,
    img: img4,
  },
  {
    id: 5,
    square: 50,
    title: '2-комнатная',
    address: 'проспект Черномырдина, 18',
    dataFilterValue: 'rent',
    price: 15000,
    img: img5,
  },
  {
    id: 6,
    square: 28,
    title: '1-комнатная',
    address: 'улица Авиаторов, 134',
    dataFilterValue: 'new',
    price: 2300000,
    img: img6,
  },
  {
    id: 7,
    square: 17,
    title: 'студия',
    address: 'улица Добрых Дубильщиков, 77',
    dataFilterValue: 'new',
    price: 1500000,
    img: img7,
  },
  {
    id: 8,
    square: 42,
    title: '2-комнатная',
    address: 'улица Афанасия Никитина, 16',
    dataFilterValue: 'new',
    price: 3000000,
    img: img8,
  },
  {
    id: 9,
    square: 29,
    title: '1-комнатная',
    address: 'проспект Сарумана, 33',
    dataFilterValue: 'new',
    price: 2700000,
    img: img9,
  },
  {
    id: 10,
    square: 26,
    title: '1-комнатная',
    address: 'улица Маршала Жукова, 11',
    dataFilterValue: 'new',
    price: 5000000,
    img: img10,
  },
  {
    id: 11,
    square: 29,
    title: '1-комнатная',
    address: 'проспект строителей, 11',
    dataFilterValue: 'secondary',
    price: 3000000,
    img: img11,
  },
  {
    id: 12,
    square: 48,
    title: '2-комнатная',
    address: 'проспект победы, 17',
    dataFilterValue: 'secondary',
    price: 3100000,
    img: img12,
  },
  {
    id: 13,
    square: 56,
    title: '3-комнатная',
    address: 'улица Безымянного, 16',
    dataFilterValue: 'secondary',
    price: 3600000,
    img: img13,
  },
  {
    id: 14,
    square: 19,
    title: 'студия',
    address: 'метро Дерибасово, 34',
    dataFilterValue: 'secondary',
    price: 1800000,
    img: img14,
  },
  {
    id: 15,
    square: 37,
    title: '2-комнатная',
    address: 'проспект приморский, 56',
    dataFilterValue: 'secondary',
    price: 28000000,
    img: img15,
  },
  {
    id: 16,
    square: 65,
    title: '3-комнатная',
    address: 'улица Светлого Будущего, 13',
    dataFilterValue: 'verifiedInTheUSRN',
    price: 2800000,
    img: img16,
  },
  {
    id: 17,
    square: 51,
    title: '2-комнатная',
    address: 'Проспект Счастья, 17',
    dataFilterValue: 'verifiedInTheUSRN',
    price: 2400000,
    img: img17,
  },
  {
    id: 18,
    square: 64.7,
    title: '3-комнатная',
    address: 'улица Дзержинского, 66',
    dataFilterValue: 'verifiedInTheUSRN',
    price: 3800000,
    img: img18,
  },
  {
    id: 19,
    square: 15.6,
    title: 'студия',
    address: 'проспект Эльфов, 43',
    dataFilterValue: 'verifiedInTheUSRN',
    price: 1800000,
    img: img19,
  },
  {
    id: 20,
    square: 70.1,
    title: '4-комнатная',
    address: 'Проспект строителей, 1',
    dataFilterValue: 'verifiedInTheUSRN',
    price: 5400000,
    img: img20,
  },
];
