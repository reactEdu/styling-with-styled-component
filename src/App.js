import React from 'react';
import './App.css';
import styled, {css} from 'styled-components';
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

function App() {
  return (
    <Circle color="blue" huge />
  );
}

export default App;
