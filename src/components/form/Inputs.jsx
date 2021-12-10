import React from 'react';
import styled from 'styled-components';
import { _ } from '../../utils';

const { debounce } = _;

const InputContainer = styled.div`
  margin-bottom: 10px;
  span {
    font-size: 14px;
    white-space: nowrap;
    display: inline-block;
  }
  span:first-of-type {
    margin-right: 5px;
  }
`;

const LabelSet = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Error = styled.span`
  color: ${(props) => props.theme.errorRed};
`;

function LabelSetComp({
  text,
  maxLength,
  content,
  error,
}) {
  const { length } = content;
  return (
    <LabelSet>
      <div className="leftSub">
        <span>{text}</span>
        {maxLength && <span>{`(${length})`}</span>}
      </div>
      {error
        && (
          <div className="rightSub">
            <Error>{error}</Error>
          </div>
        )}
    </LabelSet>
  );
}

const validation = ({
  type,
  value,
  maxLength,
  dispatch,
  id,
}) => {
  let error = null;
  if (value.length === 0) {
    error = null;
  } else if ((type === 'text' || type === 'description') && maxLength) {
    if (value.length >= maxLength) {
      error = `max length: ${maxLength}`;
    }
  } else if (type === 'url') {
    let url;
    try {
      url = new URL(value);
      if (url?.protocol !== 'http:' && url?.protocol !== 'https:') {
        error = 'invalid protocol';
      }
    } catch (e) {
      error = 'invalid URL';
    }
  }
  dispatch({
    type: id,
    payload: {
      content: value,
      error,
    },
  });
};

const errorValidation = debounce(validation, 300);

function TextInputRaw({
  id,
  type,
  text,
  data,
  dispatch,
  maxLength
}) {
  if (!data) {
    return null;
  }
  const { content, error } = data;
  const onChangeHandler = (e) => {
    const { value } = e.target;
    if ((type === 'text' || type === 'description') && maxLength && value.length > maxLength) {
      return;
    }
    dispatch({
      type: id,
      payload: {
        content: value,
        error,
      },
    });

    errorValidation({
      type,
      value,
      maxLength,
      dispatch,
      id,
    });
  };

  const inputArea = (() => {
    if (type === 'description') {
      return (
        <textarea
          id={id}
          value={content}
          onChange={onChangeHandler}
        />
      );
    }
    return (
      <input
        autoComplete="off"
        type="text"
        id={id}
        value={content}
        onChange={onChangeHandler}
      />
    );
  })();

  return (
    <InputContainer>
      <label htmlFor={id}>
        <LabelSetComp
          text={text}
          maxLength={maxLength}
          content={content}
          error={error}
        />
        {inputArea}
      </label>
    </InputContainer>
  );
}

function DropDown() {

}

const TextInput = React.memo(TextInputRaw);

export {
  TextInput,
  DropDown,
};
