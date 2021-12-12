import React from 'react';
import styled from 'styled-components';
import { TAG_MAP } from '../../constants';
import { _ } from '../../utils';

const { debounce } = _;

const Container = styled.div`
  position: fixed;
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  background-color: white;
  width: 100%;
  left: 0;
  top: 0;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.formGray};
  > input {
    box-sizing: border-box;
    margin-right: 10px;
  }
`;

function ControlGroup({
  setTag,
  setFilter,
}) {
  const options = Object.values(TAG_MAP).map((value) => (
    <option
      key={value}
      value={value}
    >
      {value}
    </option>
  ));

  const debouncedSetFilter = debounce(setFilter, 300);

  return (
    <Container>
      <input
        type="text"
        onChange={(e) => {
          debouncedSetFilter(e.target.value);
        }}
      />
      <select
        onChange={(e) => {
          setTag(e.target.value);
        }}
      >
        {options}
      </select>
    </Container>
  );
};

export default ControlGroup;
