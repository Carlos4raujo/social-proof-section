import React from 'react';
import styled from "styled-components";

const Card = styled.div`
    color: black;
    display: flex;
    flex-direction: column;
    background-color: hsl(300, 43%, 22%);
    border-radius: 10px;
    margin: 15px auto;
    justify-content: center;
    width: 345px;

    *{
        box-sizing: border-box;
    }

    .header {
        display: flex;
        margin: 30px 0;
    }

    .opinion, .name {
        color: hsl(300, 24%, 96%);
    }

    .opinion{
        padding: 0 25px;
        line-height: 30px;
        margin-bottom: 30px;
    }


    .name {
        text-align: center;
        line-height: 0;
        font-weight: 600;
    }

    img{
        border-radius: 50%;
        margin: 0 25px;
    }

    span {
        color: hsl(333, 80%, 67%);
    }
`

const index = ({ data }) => {
    return (
        <Card>
            <div className="header">
                <img src={require("../../images/image-" + data.photo)} alt={data.photo} width="45" height="45" />
                <div className="text">
                    <p className="name">{data.name}</p>
                    <span>Verified Buyer</span>
                </div>
            </div>
            <p className="opinion">"{data.opinion}"</p>
        </Card>
    );
}

export default index;
