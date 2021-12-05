import { FC } from 'react';

export interface RouteItem {
  route: Routes;
  path: string;
  component: FC;
  isFeature: boolean;
  imgPreview: string;
  description: string;
}

export type Routes =
  | 'Home'
  | 'ClockFace'
  | 'MVideoSlider'
  | 'DuckDuckGoFrequentlyAskedQuestions'
  | 'Page404';
