import React from 'react';
import styled from 'styled-components';

const Attribution = styled.div`
    font-size: 11px;
    text-align: center;
    margin: 50px 0 10px 0;

    a {
    color: hsl(228, 45%, 44%);
    }
`

const index = () => {
    return (
    <Attribution>
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" rel="noopener noreferrer" target="_blank"
        >Frontend Mentor</a
        >. Coded by Carlos Araujo.
    </Attribution>
    );
}

export default index;
