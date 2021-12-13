import React, { forwardRef } from 'react';
import styled from 'styled-components';


const Container = styled.div`
  display: grid;
  padding: 0 2em;
  margin-top: 80px;
  gap: 2em 1em;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  em {
    font-style: inherit;
  }
`;

const Card = styled.div`
  border: 1px solid ${(props) => props.theme.formGray};
  padding-bottom: 15px;
`;

const ImageWrapper = styled.div`
  position: relative;
  padding-top: 100%;
  > img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const InfoContainer = styled.div`
  padding: 0 10px;
`;

const Title = styled.p`
  height: 38px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Prices = styled.p`
  > em:first-child {
    color: #B12704;
  }
  > em:last-child {
    text-decoration: line-through;
    color: #5659;
  }
`;

const Marks = styled.div`
  display: flex;
  font-size: 12px;
  mark {
    padding: 2px 4px;
    box-sizing: border-box;
    height: 18px;
    display: inline-block;
  }
  mark:first-of-type {
    background-color: #232F3E;
    color: white;
    margin-right: 10px;
  }
  mark:last-of-type {
    background-color: transparent;
    color: #5659;
    border: 1px solid #5659;
  }
`;

function Grid({
  data,
}, ref) {
  const content = data.map(({
    title,
    originalPrice,
    priceAfterDiscount,
    imgUr,
    id,
  }, index) => (
    <Card
      key={id}
      ref={index === 0 ? ref : null}
    >
      <ImageWrapper>
        <img
          src={imgUr}
          alt='product'
        />
      </ImageWrapper>
      <InfoContainer>
        <Title>{title}</Title>
        <Prices>
          <em>{`$${originalPrice} `}</em>
          <em>{`$${priceAfterDiscount}`}</em>
        </Prices>
        <Marks>
          <mark>Price</mark>
          <mark>Was</mark>
        </Marks>
      </InfoContainer>
    </Card>
  ));
  return (
    <Container>
      {content}
    </Container>
  );
}

export default forwardRef(Grid);
