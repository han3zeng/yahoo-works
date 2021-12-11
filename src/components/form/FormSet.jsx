import React, { useReducer, useState } from 'react';
import styled from 'styled-components';
import ControlGroup from './ControlGroup';
import Form from './Form';
import Preview from './Preview';
import { breakpoints } from '../../config';
import { inputType } from '../../constants/index';

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
  [inputType.longTitle]: {
    content: '',
    error: null,
  },
  [inputType.imageUrl]: {
    content: '',
    error: null,
  },
  [inputType.description]: {
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
        <div className="flexItem">
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
