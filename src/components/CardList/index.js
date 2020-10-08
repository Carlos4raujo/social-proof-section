import React from 'react';
import StarCard from "../StarCard";
import OpinionCard from "../OpinionCard";
import styled from 'styled-components';
import { responsive } from '../../functions/responsive'

const CardList = styled.div`
    @media (min-width: ${responsive.large}) {
        display: ${props => props.type !== "stars" ? "flex" : "block"};
    }
    ${props => props.type !== "stars" ? `
        @media (max-width: 1188px){
            display: block;
        }
    ` : null};
`;

const index = ({data}) => {
    return (
        <CardList 
            type={data.type}
        >
            { data.type === "stars" ? 
                data.data.map(element => <StarCard key={element.web} data={element} />)
                : data.data.map(element => <OpinionCard key={element.name} data={element} />)
            }
        </CardList>
    );
}

export default index;
