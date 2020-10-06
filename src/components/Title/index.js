import React from 'react';
import styled from "styled-components";
import { responsive } from '../../functions/responsive.js';

const Title = styled.h1`
    color: #4A1B49;
    margin-top: 2em;
    text-align: center;
    padding: 0 1.5em;

    @media (min-width: ${responsive.large}){
        text-align: left;
        width: 540px;
        font-size: 65px;
        padding: 0;
    }
`

const index = props => {
    return (
        <Title>
            {props.text}
        </Title>
    );
}

export default index;
