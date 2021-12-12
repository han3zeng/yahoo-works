import React, { useState, useRef, useCallback } from 'react';
import styled from 'styled-components';
import { SHEET_DATA } from '../../constants';
import Content from './Content';
import { _ } from '../../utils';

const { debounce } = _;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto 30px auto;
`;

const FilterArea = styled.div`
  display: inline-flex;
  align-items: center;
  > label {
    margin-right: 10px;
  }
`;

const ButtonGroup = styled.div`
  margin: 30px 0;
  > button {
    margin-right: 10px;
  }
`;

const sort = ({
  data,
  key,
}) => {
  if (!Array.isArray(data)) {
    return undefined;
  }
  const rawData = [...data];
  rawData.sort((a, b) => {
    if (key === 'likes' && (a.likes !== b.likes)) {
      return a.likes - b.likes;
    }
    return +a.id - +b.id;
  });
  return rawData;
};

const getRandomIndex = ({
  set,
  start,
  interval,
}) => {
  while (set.size < interval) {
    const index = Math.floor(Math.random() * interval) + start;
    if (!set.has(index)) {
      set.add(index);
      return index;
    }
  }
  return undefined;
};

const DEFAULT_DATA = sort({
  data: SHEET_DATA,
  key: 'id',
});

function Sheet() {
  const [data, setData] = useState(DEFAULT_DATA);
  const intervalRef = useRef();

  const onChangeHandler = (e) => {
    const { value } = e.target;
    const updatedData = DEFAULT_DATA.filter((elem) => (
      elem.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
    ));
    setData(updatedData);
  };

  const debouncedHandler = useCallback(debounce(onChangeHandler, 300), []);

  const onRandomStart = () => {
    const Shuffle = () => {
      const result = [];
      const set = new Set();
      for (let i = 0; i < data.length; i += 1) {
        const index = getRandomIndex({
          start: 0,
          interval: data.length,
          set,
        });
        result[i] = data[index || 0];
      }
      setData(result);
    };
    Shuffle();
    intervalRef.current = setInterval(Shuffle, 1000);
  };

  const onRandomStop = () => {
    if (window) {
      clearInterval(intervalRef.current);
    }
  };

  const onClickSort = () => {
    const result = sort({
      data,
      key: 'likes',
    });
    setData(result);
  };

  return (
    <Container>
      <FilterArea>
        <label>Name: </label>
        <input
          onChange={debouncedHandler}
        />
      </FilterArea>
      <ButtonGroup>
        <button
          type="button"
          onClick={onRandomStart}
        >
          Start Random
        </button>
        <button
          type="button"
          onClick={onRandomStop}
        >
          Stop Random
        </button>
        <button
          type="button"
          onClick={onClickSort}
        >
          Sort
        </button>
      </ButtonGroup>
      <Content
        data={data}
      />
    </Container>
  );
}

export default Sheet;
