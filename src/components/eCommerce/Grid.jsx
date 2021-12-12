import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  padding: 0 2em;
  margin-top: 80px;
  gap: 2em 1em;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
`;

const Card = styled.div`
  border: 1px solid ${(props) => props.theme.formGray};
  padding-bottom: 15px;
  > img {
    width: 100%;
    aspect-ratio: 1;
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

function Grid({
  data,
}) {
  const content = data.map(({
    title,
    originalPrice,
    priceAfterDiscount,
    imgUr,
    tag,
    id
  }) => (
    <Card
      key={id}
    >
      <img
        src={imgUr}
        alt='product'
      />
      <InfoContainer>
        <Title>{title}</Title>
        <p>
          <em>{`$${originalPrice} `}</em>
          <em>{`$${priceAfterDiscount}`}</em>
        </p>
        <mark>萊爾富折扣 </mark>
        <mark>直購</mark>
      </InfoContainer>
    </Card>
  ));
  return (
    <Container>
      {content}
    </Container>
  )
}

export default Grid;
