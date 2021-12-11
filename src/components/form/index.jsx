import React, { useReducer } from 'react';
import styled from 'styled-components';
import Form from './Form';
import { breakpoints } from '../../config';
import { inputType } from '../../constants/index';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  @media(max-width: ${breakpoints.maxMobile}px) {
    flex-direction: column;
  }
  .left, .right {
    width: 50%;
    padding: 20px;
    box-sizing: border-box;
    @media(max-width: ${breakpoints.maxMobile}px) {
      width: 100%;
    }
  }
`;

const initialState = {
  [inputType.longTitle]: {
    content: '',
    error: null,
  },
  [inputType.description]: {
    content: '',
    error: null,
  },
  [inputType.imageUrl]: {
    content: '',
    error: null,
  },
  [inputType.dropdown]: {
    content: '',
    error: null,
  },
  [inputType.linkOutUrl]: {
    content: '',
    error: null,
  },
};

function reducer(state, action) {
  switch (action.type) {
    case inputType.longTitle: {
      const { content, error } = action?.payload;
      return {
        ...state,
        [inputType.longTitle]: {
          content,
          error,
        },
      };
    }
    case inputType.description: {
      const { content, error } = action?.payload;
      return {
        ...state,
        [inputType.description]: {
          content,
          error,
        },
      };
    }
    case inputType.imageUrl: {
      const { content, error } = action?.payload;
      return {
        ...state,
        [inputType.imageUrl]: {
          content,
          error,
        },
      };
    }
    case inputType.dropdown: {
      const { content, error } = action?.payload;
      return {
        ...state,
        [inputType.dropdown]: {
          content,
          error,
        },
      };
    }
    case inputType.linkOutUrl: {
      const { content, error } = action?.payload;
      return {
        ...state,
        [inputType.linkOutUrl]: {
          content,
          error,
        },
      };
    }
    default:
      throw new Error();
  }
}

function FormSet() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Container>
      <div className="left">
        <Form
          data={state}
          dispatch={dispatch}
        />
      </div>
      <div className="right">

      </div>
    </Container>
  );
}

export default FormSet;
