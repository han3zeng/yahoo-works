import React, { useReducer, useState } from 'react';
import styled from 'styled-components';
import ControlGroup from './ControlGroup';
import Form from './Form';
import Preview from './Preview';
import { breakpoints } from '../../config';
import { INPUT_TYPE } from '../../constants/index';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const ContentContainer = styled.div`
  max-width: 800px;
  margin: 30px auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media(max-width: ${breakpoints.maxMobile}px) {
    flex-direction: column;
  }
  .flexItem {
    width: 47%;
    margin: 30px 0;
    box-sizing: border-box;
    @media(max-width: ${breakpoints.maxMobile}px) {
      width: 100%;
    }
  }
`;

const initialState = {
  [INPUT_TYPE.longTitle]: {
    content: '',
    error: null,
  },
  [INPUT_TYPE.imageUrl]: {
    content: '',
    error: null,
  },
  [INPUT_TYPE.description]: {
    content: '',
    error: null,
  },
  [INPUT_TYPE.dropdown]: {
    content: '',
    error: null,
  },
  [INPUT_TYPE.linkOutUrl]: {
    content: '',
    error: null,
  },
};

function reducer(state, action) {
  switch (action.type) {
    case INPUT_TYPE.longTitle: {
      const { content, error } = action?.payload;
      return {
        ...state,
        [INPUT_TYPE.longTitle]: {
          content,
          error,
        },
      };
    }
    case INPUT_TYPE.description: {
      const { content, error } = action?.payload;
      return {
        ...state,
        [INPUT_TYPE.description]: {
          content,
          error,
        },
      };
    }
    case INPUT_TYPE.imageUrl: {
      const { content, error } = action?.payload;
      return {
        ...state,
        [INPUT_TYPE.imageUrl]: {
          content,
          error,
        },
      };
    }
    case INPUT_TYPE.dropdown: {
      const { content, error } = action?.payload;
      return {
        ...state,
        [INPUT_TYPE.dropdown]: {
          content,
          error,
        },
      };
    }
    case INPUT_TYPE.linkOutUrl: {
      const { content, error } = action?.payload;
      return {
        ...state,
        [INPUT_TYPE.linkOutUrl]: {
          content,
          error,
        },
      };
    }
    case 'reset': {
      return initialState;
    }
    case 'save': {
      if (localStorage) {
        localStorage.setItem('formData', JSON.stringify(state));
      }
      return state;
    }
    case 'retrieve': {
      if (localStorage) {
        const data = localStorage.getItem('formData');
        return JSON.parse(data);
      }
      return state;
    }
    default:
      throw new Error();
  }
}

function FormSet() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [numberOfPreview, setNumberOfPreview] = useState(1);

  const previews = (() => {
    const result = [];
    for (let i = 0; i < numberOfPreview; i += 1) {
      const content = (
        <div
          key={i}
          className="flexItem"
        >
          <Preview
            data={state}
          />
        </div>
      );
      result.push(content);
    }
    return result;
  })();

  return (
    <Container>
      <ControlGroup
        data={state}
        dispatch={dispatch}
        setNumberOfPreview={setNumberOfPreview}
      />
      <ContentContainer>
        <div className="flexItem">
          <Form
            data={state}
            dispatch={dispatch}
          />
        </div>
        {previews}
      </ContentContainer>
    </Container>
  );
}

export default FormSet;
