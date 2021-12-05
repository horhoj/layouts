import React from 'react';
import { Router } from './router';
import { Back } from './components/Back';

export const App: React.FC = () => {
  return (
    <>
      <Back />
      <Router />
    </>
  );
};
