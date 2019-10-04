import React from 'react';

const Paginator = ({value, setter, numberOfPages = 2}) => {
  let pageRange = [...Array(numberOfPages).keys()];
  return (
    <select value={value} onChange={e => setter(e.target.value)}>
      {pageRange.map(pageNum => <option value={pageNum + 1}>{ pageNum + 1 }</option>)}
    </select>
  );
};

export default Paginator;