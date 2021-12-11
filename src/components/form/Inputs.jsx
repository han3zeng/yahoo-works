import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { _ } from '../../utils';

const { debounce } = _;

const Container = styled.div`
  margin-bottom: 10px;
`;

const ButtonSet = styled.div`
  position: relative;
`;

const DropdownMenu = styled.div`
  background-color: white;
  border: 1px solid ${(props) => props.theme.formGray};
  display: inline-block;
  box-shadow: 2px 2px 2px gray;
  position: absolute;
  left: 0;
  top: 110%;
  > div {
    padding: 6px 4px;
    &:hover {
      background-color: #f2f2f2;
      cursor: pointer;
    }
  }
`;

const InputContainer = styled(Container)`
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

const DropDownList = [
  'Watch Live',
  'Breaking News',
  'Read More',
];


function DropDownRaw({
  data,
  dispatch,
  id,
}) {
  const [ifShow, setIfShow] = useState(false);
  const dropdownRef = useRef(null);
  const { content, error } = data;

  const buttonText = content || 'Click to Select';

  const onClickHanler = (e) => {
    e.preventDefault();
    setIfShow((state) => !state);
  };

  useEffect(() => {
    function onClickOutterArearHandler(e) {
      if (e.target !== dropdownRef.current) {
        setIfShow(false);
      }
    }
    if (window) {
      window.addEventListener('click', onClickOutterArearHandler);
    }
    return () => window.removeEventListener('click', onClickOutterArearHandler);
  }, []);

  useEffect(() => {
    if (ifShow && dropdownRef) {
      dropdownRef.current.focus();
    } else {
      dropdownRef.current.blur();
    }
  }, [ifShow]);

  const dropDownBody = (() => {
    if (!ifShow) {
      return null;
    }
    const menu = DropDownList.map((text, index) => (
      <div
        key={text}
        role="button"
        tabIndex="0"
        onKeyPress={() => {

        }}
        onClick={() => {
          dispatch({
            type: id,
            payload: {
              content: text,
              error: null,
            }
          })
        }}
      >
        {text}
      </div>
    ));
    return (
      <DropdownMenu>
        {menu}
      </DropdownMenu>
    );
  })();

  return (
    <Container>
      <label>Button Text</label>
      <ButtonSet>
        <button
          type="button"
          onClick={onClickHanler}
          ref={dropdownRef}
        >
          {buttonText}
        </button>
        {ifShow && dropDownBody}
      </ButtonSet>
    </Container>
  );
}

const TextInput = React.memo(TextInputRaw);
const DropDown = React.memo(DropDownRaw);

export {
  TextInput,
  DropDown,
};
