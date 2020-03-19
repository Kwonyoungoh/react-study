import React, { useState, useRef } from 'react';

function InputSample() {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
  });
  const nameInput = useRef();

  const { name, nickname } = inputs;
  // name 과 nickname 의 비구조할당으로 추출
  const onChange = e => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      // spread 문법 es6 비슷한형태로 rest가 있다.
      [name]: value,
    });
    // 리액트에서는 객체를 직접수정해서안된다. 새로운 객체를 만들어서 수정하는 것이 리액트가 가진 불변성을 지켜준다. 불변성을 지켜줘야 성능최적화와 리액트가 리렌더링을 진행 할 수 있다.
  };

  const onReset = () => {
    setInputs({
      name: '',
      nickname: '',
    });
    nameInput.current.focus();
  };

  return (
    <div>
      <input
        name="name"
        placeholder=" 이름 "
        onChange={onChange}
        value={name}
        ref={nameInput}
      />
      <input
        name="nickname"
        placeholder="닉네임"
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값:</b>
        {name}({nickname})
      </div>
    </div>
  );
}

export default InputSample;
