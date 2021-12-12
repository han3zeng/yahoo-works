import React, { useState, useMemo, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Grid from './Grid';
import ControlGroup from './ControlGroup';
import { GRID_DATA, TAG_MAP} from '../../constants';

const InvisibleAnchor = styled.div`
  visibility: hidden;
`;

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
  const [numberOfItems, setNumberOfItems] = useState(5);
  const targetRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const ref = targetRef.current;

    const loadMore = () => {
      if (filter || tag !== TAG_MAP.all) {
        return;
      }
      setNumberOfItems((number) => {
        if (number < GRID_DATA.length) {
          const numberInColumn = Math.ceil(window.innerWidth / cardRef.current.clientWidth);
          const numberInRow = Math.ceil(window.innerHeight / cardRef.current.clientHeight);
          return number + numberInColumn * numberInRow;
        }
        return number;
      });
    };

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    function callback(entries, observer) {
      entries.forEach((entry, index) => {
        const { isIntersecting } = entry;
        if (isIntersecting) {
          setTimeout(loadMore, 500);
        }
      });
    }

    const observer = new IntersectionObserver(callback, options);
    if (targetRef.current) {
      observer.observe(ref);
    }
    return () => {
      observer.unobserve(ref);
    };
  }, [filter, tag]);

  const filteredData = useMemo(() => [...GRID_DATA].splice(0, numberOfItems).filter((elem) => {
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
  }), [tag, filter, numberOfItems]);

  return (
    <>
      <ControlGroup
        setTag={setTag}
        setFilter={setFilter}
      />
      <Grid
        data={filteredData}
        ref={cardRef}
      />
      <InvisibleAnchor ref={targetRef} />
    </>
  );
}

export default ECommerce;
