import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";

const CasinoEffect = ({ count }) => {
  return (
    <CasinoEffectStyled>
      <CSSTransition timeout={500} classNames="casino-effect" key={count}>
        <span>{count}</span>
      </CSSTransition>
    </CasinoEffectStyled>
  );
};

export default CasinoEffect;

const CasinoEffectStyled = styled(TransitionGroup)`
  position: relative;
  overflow-y: hidden;
  span {
    display: inline-block;
  }
  .casino-effect-enter {
    transform: translateY(100%);
  }
  .casino-effect-enter-active {
    transform: translateY(0%);
    transition: 300ms;
  }
  .casino-effect-exit {
    transform: translateY(0%);
    position: absolute;
    bottom: 0;
    right: 0;
  }
  .casino-effect-exit-active {
    transform: translateY(-100%);
    transition: 300ms;
  }
`;
