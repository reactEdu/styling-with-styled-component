import React, { useState } from 'react';
// import './App.css';
import styled, { css, ThemeProvider } from 'styled-components';
import Button from './components/Button';
import Dialog from './components/Dialog';
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
  const [dialog, setDialog] = useState(false);
  const onClick = () => {
    setDialog(true);
  }
  const onConfirm = () => {
    setDialog(false);
  }
  const onCancel = () => {
    setDialog(false);
  }
  return (
    <ThemeProvider theme={{palette}}>
      <AppBlock>
        <ButtonGroup>
          <Button size="large">Buttton</Button>
          <Button color="gray">Buttton</Button>
          <Button size="small" color="pink">Buttton</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button size="large" outline>Buttton</Button>
          <Button color="gray" outline>Buttton</Button>
          <Button size="small" color="pink" outline>Buttton</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button size="small" color="gray" fullWidth>Buttton</Button>
          <Button size="medium" color="pink" fullWidth>Buttton</Button>
          <Button size="large" fullWidth>Buttton</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button size="large" fullWidth onClick={onClick}>삭제</Button>
        </ButtonGroup>
      </AppBlock>
      <Dialog title="정말로 삭제?" confirmText="삭제" cancelText="취소" visible={dialog} onConfirm={onConfirm} onCancel={onCancel}>
        데이터를 정말로 삭제?
      </Dialog>
    </ThemeProvider>
  );
}

export default App;
