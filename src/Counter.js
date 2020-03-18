import React, { useState } from 'react';

function Counter() {
  // react hook을 사용한 함수형 업데이트
  const [number, setNumber] = useState(0);
  // 비구조할당을 이용한 hook의 사용

  const onIncrease = () => {
    setNumber(prevNumber => prevNumber + 1);
    // 상태에 대한 업데이트일때는 이렇게
    // 최적화를 위해 여기서 상태를 받아주는듯 하다
  };
  const onDcrease = () => {
    setNumber(number - 1);
    // 아예 다른 상태를 넣어주려면
  };
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDcrease}>-1</button>
    </div>
  );
}

export default Counter;
