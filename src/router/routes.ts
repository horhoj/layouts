import { Home } from '../pages/Home';
import { Page404 } from '../pages/Page404';
import { MVideoSlider } from '../features/MVideoSlider';
import imgPreviewMVideoSlider from '../features/MVideoSlider/imgPreview.png';
import imgPreviewDuckDuckGoFrequentlyAskedQuestions from '../features/DuckDuckGoFrequentlyAskedQuestions/imgPreview.png';
import imgPreviewClockFaceFeature from '../features/ClockFaceFeature/imgPreview.png';
import imgPreviewYandexRealty from '../features/YandexRealty/imgPreview.png';
import { DuckDuckGoFrequentlyAskedQuestions } from '../features/DuckDuckGoFrequentlyAskedQuestions';
import { ClockFaceFeature } from '../features/ClockFaceFeature';
import { YandexRealty } from '../features/YandexRealty';
import { RouteItem } from './types';

export const routes: RouteItem[] = [
  {
    route: 'Home',
    path: '/',
    component: Home,
    isFeature: false,
    imgPreview: '',
    description: '',
  },
  {
    route: 'ClockFace',
    path: 'clock-face',
    component: ClockFaceFeature,
    isFeature: true,
    imgPreview: imgPreviewClockFaceFeature,
    description: 'Циферблат с анимацией',
  },
  {
    route: 'MVideoSlider',
    path: 'm-video-slider',
    component: MVideoSlider,
    isFeature: true,
    imgPreview: imgPreviewMVideoSlider,
    description: 'Слайдер с сайта МВИДЕО c автопрокруткой через заданное время',
  },
  {
    route: 'DuckDuckGoFrequentlyAskedQuestions',
    path: 'duck-duck-go-frequently-asked-questions',
    isFeature: true,
    component: DuckDuckGoFrequentlyAskedQuestions,
    imgPreview: imgPreviewDuckDuckGoFrequentlyAskedQuestions,
    description:
      'FAQ вопросов с DuckDuckGo, с интересной анимацией открытия и закрытия ответа на вопрос',
  },
  {
    route: 'YandexRealty',
    path: '/yandex-realty',
    isFeature: true,
    component: YandexRealty,
    imgPreview: imgPreviewYandexRealty,
    description: 'Виджет недвижимость с сайта yandex.ru',
  },
  {
    route: 'Page404',
    path: '*',
    component: Page404,
    isFeature: false,
    imgPreview: '',
    description: '',
  },
];
