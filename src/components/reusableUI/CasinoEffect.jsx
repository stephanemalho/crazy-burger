import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";
import { casinoEffectRTG } from "../../styled/rtg-animations/basketRTG/casinoEffectRTG";

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
  ${casinoEffectRTG}
`;
