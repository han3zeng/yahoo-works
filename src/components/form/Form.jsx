import React from 'react';
import styled from 'styled-components';
import { TextInput, DropDown } from './Inputs';

const Fieldset = styled.fieldset`
    border: 1px solid ${(props) => props.theme.formGray};
    padding: 5px 10px;
    margin: 0;
    box-sizing: border-box;
    font-size: 14px;
    > legend {
      text-align: center;
    }

    label {
      display: block;
    }

    textarea {
      height: 100px;
      resize: none;
      box-sizing: border-box;
      width: 100%;
      outline: none;
      border: 1px solid ${(props) => props.theme.formGray};
      &:focus {
        border: 1px solid ${(props) => props.theme.formHighlightGray};
      }
    }
`;

function Form({
  data,
  dispatch
}) {
  return (
    <form
      autoComplete="false"
    >
      <Fieldset>
        <legend>Article Input Form</legend>
        <TextInput
          id="longTitle"
          type="text"
          text="Long title"
          data={data.longTitle}
          dispatch={dispatch}
          maxLength={40}
        />
        <TextInput
          id="description"
          text="Description"
          type="description"
          data={data.description}
          dispatch={dispatch}
          maxLength={150}
        />
        <TextInput
          id="imageUrl"
          type="url"
          text="Image URL"
          data={data.imageUrl}
          dispatch={dispatch}
          placeholder={'https://www.example.com'}
        />
        <DropDown
          id="dropdown"
          data={data.dropdown}
          dispatch={dispatch}
        />
        <TextInput
          id="linkOutUrl"
          type="url"
          text="Link URL"
          data={data.linkOutUrl}
          dispatch={dispatch}
          placeholder={'https://www.example.com'}
        />
      </Fieldset>
    </form>
  );
}

export default Form;
