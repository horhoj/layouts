import { Home } from '../pages/Home';
import { Page404 } from '../pages/Page404';
import { MVideoSlider } from '../features/MVideoSlider';
import imgPreviewMVideoSlider from '../features/MVideoSlider/imgPreview.png';
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
    route: 'MVideoSlider',
    path: 'm-video-slider',
    component: MVideoSlider,
    isFeature: true,
    imgPreview: imgPreviewMVideoSlider,
    description: 'Слайдер с сайта МВИДЕО c автопрокруткой через заданное время',
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
