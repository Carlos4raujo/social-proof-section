import React from 'react';
import Title from './components/Title'
import Subtitle from "./components/Subtitle";
import CardList from "./components/CardList";
import Attribution from "./components/Attribution"
import { responsive } from './functions/responsive';
import styled from "styled-components";
import bgTopDesktop from "./images/bg-pattern-top-desktop.svg";
import bgBottomDesktop from "./images/bg-pattern-bottom-desktop.svg";
import bgTopMobile from "./images/bg-pattern-top-mobile.svg";

const Content = styled.div`
  background: url(${bgTopMobile}) no-repeat;
  margin: 0 auto;

  @media (min-width: ${responsive.large}) {
    background: url(${bgTopDesktop}) no-repeat;
    max-width: 1440px;  
    width: 90%;
  }
`;

const Header = styled.div`

  @media (min-width: ${responsive.large}) {
    .right {
      width: 100%;
    }
    display: flex;
    align-items: center; 
  }
`;

const BgBottom = styled.img`
  display: none;

  @media (min-width: ${responsive.large}) {
    display: block;
    position: fixed;
    bottom: 0;
    right: 0;
  }
`

function App() {
  return (
    <Content>
      <Header>
        <div className="left">
          <Title 
            text="10,000+ of our users love our products."
          />
          <Subtitle
            text="We only provide great products combined with excellent customer service.
            See what our satisfied customers are saying about our services."
          />
        </div>
        <div className="right">
          <CardList data={reviews} />
        </div>
      </Header>
      <CardList data={opinions} />
      <Attribution />
      <BgBottom src={bgBottomDesktop} />
    </Content>
  );
}

const reviews = {
  type: "stars",
  data: [
  {
    web: "Reviews",
    stars: 5
  },
  {
    web: "Report Guru",
    stars: 4
  },
  {
    web: "BestTech",
    stars: 5
  }]
}

const opinions = {
  type: "opinions",
  data: [
    {
      name: "Colton Smith",
      opinion: 'We needed the same printed design as the one we had ordered a week prior.Not only did they find the original order, but we also received it in time.Excellent!',
      photo: "colton.jpg"
    },
    {
      name: "Irene Roberts",
      opinion: "Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.",
      photo: "irene.jpg"
    },
    {
      name: "Anne Wallace",
      opinion: "Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!",
      photo: "anne.jpg"
    }
  ]
}

export default App;
