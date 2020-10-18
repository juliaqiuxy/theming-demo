import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100vw;
  min-height: 100vh;
`;

const Disclaimer = styled.p`
  color: var(--fg);
`;

const Docs = () => (
  <Container>
    <Disclaimer>This page always renders in dark mode.</Disclaimer>
  </Container>
);

export default Docs;
