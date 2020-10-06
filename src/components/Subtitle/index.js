import React from "react";
import styled from "styled-components";
import { responsive } from '../../functions/responsive.js';

const SubtitleStyled = styled.h2`
  color: hsl(303, 10%, 53%);
  text-align: center;
  font-weight: 500;
  font-size: 1em;
  padding: 0 1em;

  
  @media (min-width: ${responsive.large}) {
    text-align: left;
    width: 540px;
    font-size: 17px;
    padding: 0;
  }
`;

const index = (props) => {
  return <SubtitleStyled>{props.text}</SubtitleStyled>;
};

export default index;
