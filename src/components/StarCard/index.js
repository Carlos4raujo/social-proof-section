import React from 'react';
import styled from "styled-components";
import Stars from "../Stars"
import { responsive } from '../../functions/responsive'

const Card = styled.div`
    color: black;
    height: 100px;
    display: flex;
    flex-direction: column;
    background-color: hsl(300, 24%, 96%);
    border-radius: 10px;
    margin: 15px auto;
    justify-content: center;
    width: 345px;
    align-items: center;

    p {
        text-align: center;
        font-weight: 600;
        color: hsl(300, 43%, 22%);
    }

    @media (min-width: ${responsive.large}){
        box-sizing: border-box;
        flex-direction: row;
        width: 593px;
        height: 75px;
    }
`

const index = props => {
    return (
        <Card>
            <Stars cant={props.data.stars} />
            <p>Rated {props.data.stars} Stars in {props.data.web}</p>
        </Card>
    );
}

export default index;
