import React from 'react';
// import './App.css';
import styled, { css, ThemeProvider } from 'styled-components';
import Button from './components/Button';
// 중첩 Tagged Template Literal을 사용하려면 css가 필요

const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  background: ${props => props.color};
  border-radius: 50%;
  ${props =>
    props.huge &&
    css`
      width: 10rem;
      height: 10rem;
    `}
`

const AppBlock = styled.div`
  width: 512px;
  margin: 4rem auto 0;
  border: 1px solid black;
  padding: 1rem;
`;

const ButtonGroup = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;

const palette = {
  blue: '#228be6',
  gray: '#496057',
  pink: '#f06595',
};

function App() {
  return (
    <ThemeProvider theme={{palette}}>
      <AppBlock>
        <ButtonGroup>
          <Button size="large">Buttton</Button>
          <Button color="gray">Buttton</Button>
          <Button size="small" color="pink">Buttton</Button>
        </ButtonGroup>
      </AppBlock>
    </ThemeProvider>
  );
}

export default App;
