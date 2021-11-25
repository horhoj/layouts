import { FC } from 'react';

export interface RouteItem {
  route: Routes;
  path: string;
  component: FC;
  isFeature: boolean;
  imgPreview: string;
  description: string;
}

export type Routes = 'Home' | 'MVideoSlider' | 'Page404';
