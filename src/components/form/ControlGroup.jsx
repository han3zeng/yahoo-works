import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  > button {
    margin-right: 10px;
  }
`;

function ControlGroup({
  dispatch,
  setNumberOfPreview,
}) {
  const [status, setStatus] = useState(null);

  const onResetHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: 'reset',
    });
  };

  const onSaveHandler = (e) => {
    e.preventDefault();
    setStatus('You just saved the form');
    dispatch({
      type: 'save',
    });
    setTimeout(() => {
      setStatus(null);
    }, 2000);
  };

  const onRetrieveHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: 'retrieve',
    });
  };

  return (
    <Container>
      <button
        type="button"
        onClick={onResetHandler}
      >
        Clear Items
      </button>
      <button
        type="button"
        onClick={onSaveHandler}
      >
        Save
      </button>
      <button
        type="button"
        onClick={onRetrieveHandler}
      >
        Retrieve Saved
      </button>
      <button
        type="button"
        onClick={() => {
          setNumberOfPreview((number) => number + 1);
        }}
      >
        Add One Markup
      </button>
      {status && <p>{status}</p>}
    </Container>
  );
}

export default ControlGroup;
