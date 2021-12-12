import React from 'react';
import styled from 'styled-components';

const Conatiner = styled.div`
  display: flex;
  flex-direction: column;
`;

const Divider = styled.div`
  height: 1px;
  background-color: black;
  margin: 10px 0;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  > div {
    flex: 1 1 25%;
    max-width: 25%;
    box-sizing: border-box;
    padding: 0 5px;
    overflow-wrap: break-word;
  }
  img {
    width: 50px;
    height: 50px;
  }
`;

function Content({
  data
}) {
  const rows = data.map((elem) => {
    const { id, name, image, likes } = elem;
    return (
      <Row
        key={id}
      >
        <div>{id}</div>
        <div>{name}</div>
        <div>
          <img
            src={image}
            alt="product"
          />
        </div>
        <div>{likes}</div>
      </Row>
    );
  });

  return (
    <Conatiner>
      <Row>
        <div>Id</div>
        <div>Name</div>
        <div>Image</div>
        <div>Likes</div>
      </Row>
      <Divider />
      {rows}
    </Conatiner>
  );
}

export default Content;
