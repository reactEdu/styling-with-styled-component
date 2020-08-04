import React, { useState, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";
import Button from "./Button";

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const fadeOut = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`;

const slideUp = keyframes`
    from {
        transform: translateY(200px);
    }
    to {
        transform: translateY(0px);
    }
`;

const slideDown = keyframes`
    from {
        transform: translateY(0px);
    }
    to {
        transform: translateY(200px);
    }
`;

const DarkBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);

  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;

  ${props => props.disappear && css`
    animation-name: ${fadeOut}
  `};
`;

const DialogBlock = styled.div`
  width: 320px;
  padding: 1.5rem;
  background: white;
  border-radius: 2px;

  h3 {
    margin: 0;
    font-size: 1.5rem;
  }

  p {
    font-size: 1.125rem;
  }

  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;

  ${props => props.disappear && css`
    animation-name: ${slideDown}
  `};
`;

const ButtonGroup = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: flex-end;
`;

const ShortMarginButton = styled(Button)`
  & + & {
    margin-left: 0.5rem;
  }
`;

const Dialog = ({
  title,
  children,
  confirmText,
  cancelText,
  visible,
  onConfirm,
  onCancel,
}) => {
  const [animate, setAnimate] = useState(false); // 현재 애니메이션 보여주는 중
  const [localVisible, setLocalVisible] = useState(visible); // dialog 자체가 가지는 현재 visible상태가 true인지 false인지에 대한 상태
  useEffect(() => {
      if(localVisible && !visible) { // visible이 true에서 false로 바뀌는 상태
        setAnimate(true);
        setTimeout(() => setAnimate(false), 1000);
      }
      setLocalVisible(visible); // visible이 바뀔때마다 localVisible도 동기화
  }, [localVisible, visible]);

  if (!localVisible && !animate) return null;

  return (
      <DarkBackground disappear={!visible}>
        <DialogBlock disappear={!visible}>
          <h3>{title}</h3>
          <p>{children}</p>
          <ButtonGroup>
            <ShortMarginButton color="gray" onClick={onCancel}>
              {cancelText}
            </ShortMarginButton>
            <ShortMarginButton color="pink" onClick={onConfirm}>
              {confirmText}
            </ShortMarginButton>
          </ButtonGroup>
        </DialogBlock>
      </DarkBackground>
  );
};

Dialog.defaultProps = {
  cancelText: "취소",
  confirmText: "확인",
};

export default Dialog;
