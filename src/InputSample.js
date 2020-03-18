import React, { useState } from 'react';

function InputSample() {
  const [text, setText] = useState('');
  const onChange = e => {
    setText(e.target.value);
    //이벤트 타겟의 value값
  };

  const onReset = () => {
    setText('');
  };
  return (
    <div>
      <input onChange={onChange} value={text} />
      {/* 초기화를 위해서는 현재 value값을 받아와야한다. */}
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값:</b>
        {text}
      </div>
    </div>
  );
}

export default InputSample;
