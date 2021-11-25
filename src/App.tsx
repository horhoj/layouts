import React from 'react';
import { Router } from './router';
import { Back } from './componets/Back';

export const App: React.FC = () => {
  return (
    <>
      <Back />
      <Router />
    </>
  );
};
