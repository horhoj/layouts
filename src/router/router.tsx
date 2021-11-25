import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from './routes';

export const Router: FC = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          path={route.path}
          key={route.route}
          element={<route.component />}
        />
      ))}
    </Routes>
  );
};
