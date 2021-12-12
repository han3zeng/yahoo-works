import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import Grid from './Grid';
import ControlGroup from './ControlGroup';
import { GRID_DATA, TAG_MAP} from '../../constants';

const checkTag = ({
  elem,
  tag,
}) => {
  if (tag === TAG_MAP.all) return true;
  return elem.tag === tag;
}

function ECommerce() {
  const [filter, setFilter] = useState(null);
  const [tag, setTag] = useState(TAG_MAP.all);

  const filteredData = useMemo(() => GRID_DATA.filter((elem) => {
    if (filter) {
      const filterArray = filter.split(' ');
      let filterPass = true;
      for (let i = 0; i < filterArray.length; i += 1) {
        if (elem.title.toLowerCase().indexOf(filterArray[i]) === -1) {
          filterPass = false;
        }
      }
      if (filterPass) {
        return checkTag({
          elem,
          tag,
        });
      }
      return false;
    }
    return checkTag({
      elem,
      tag,
    });
  }), [tag, filter]);

  return (
    <>
      <ControlGroup
        setTag={setTag}
        setFilter={setFilter}
      />
      <Grid
        data={filteredData}
      />
    </>
  );
}

export default ECommerce;
