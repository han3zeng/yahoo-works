import React from 'react';
import styled from 'styled-components';
import { validation } from '../../utils';

const { isValidUrl } = validation;

const Container = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
  border: 1px solid ${(props) => props.theme.formGray};
  padding: 30px;
  box-sizing: border-box;
  background-image: url(${(props) => props.imgUrl});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  color: white;
  > a {
    text-decoration: none;
    > p {
      text-align: center;
      display: inline-block;
      margin: 0;
      max-width: 300px;
      padding: 10px;
      background-color: red;
      color: white;
      white-space: nowrap;
    }
  }
`;

function Preview({
  data,
}) {
  const { longTitle, description, imageUrl, dropdown, linkOutUrl } = data;
  return (
    <Container
      imgUrl={imageUrl?.content || 'https://s.aolcdn.com/images/dims?format=jpg&quality=80&thumbnail=500%2C300%2Cauto&image_uri=https%3A%2F%2Fs.yimg.com%2Fos%2Fcreatr-uploaded-images%2F2021-01%2F01063c70-4e9d-11eb-96f7-44000d07a7d6&client=76f99bdb8f78cd44cc0b&signature=eda91abc7140d6aa31510d623c60bf435ca2af2f'}
    >
      <h2>{longTitle?.content || 'test'}</h2>
      <p>{description?.content || 'test' }</p>
      <a href={linkOutUrl?.content} target="_blank" rel="noreferrer">
        <p>{dropdown?.content || 'test'}</p>
      </a>
    </Container>
  );
}

export default Preview;
