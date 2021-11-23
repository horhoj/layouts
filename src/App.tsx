import React from 'react';
import { Container } from './GlobalStyles';
import { MVideoSlider } from './features/MVideoSlider/MVideoSlider';

export const App: React.FC = () => {
  return (
    <Container>
      <MVideoSlider />
    </Container>
  );
};
