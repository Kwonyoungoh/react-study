import React from 'react';

function Wrapper({ children }) {
  //children이란 props는 <태그></태그>사이에있는 내용을 받아줌
  const style = {
    border: '2px solid black',
    padding: 16,
  };
  return <div style={style}>{children}</div>;
}

export default Wrapper;
