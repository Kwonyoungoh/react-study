import React from 'react';

function Hello({ color, name, isTrue, isSpecial }) {
  //property: something을 받아와서 정해줌
  return (
    <div
      style={{
        color,
      }}
    >
      {isTrue && <b>*</b>}
      {/* 삼항연산자를 이용한 조건부 렌더링 
      -삼항연산자
      판단변수 ? 참일때의 값 : 거짓일때 값
      -&&연산자
      참 거짓만을 판단할때는 &&이 더간편하다
      */}
      <b>{isSpecial ? '스페셜' : '평범'}</b>
      안녕,{name}
    </div>
  );
}

Hello.defaultProps = {
  name: '이름없음',
};

//defaultProps는 말그대로 기본속성임

export default Hello;
