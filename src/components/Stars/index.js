import React from 'react';
import img from '../../images/icon-star.svg'
import styled from "styled-components";
import { responsive } from '../../functions/responsive'

const Stars = styled.div`
    height:  16px;
    width: 157px;
    display: flex;
    padding: 0 120px;
    justify-content: space-between;

    @media(min-width: ${responsive.large}){
        padding: 0 120px 0 0;
    }
`;

const Index = ({cant}) => {
    return (
        <Stars>
           {[...Array(cant)].map((e, i) => <img alt="star" key={"star-" + i} src={img} />)}
        </Stars>
    );
}

export default Index;
