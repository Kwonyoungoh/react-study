import React from 'react';
import Hello from './hello';
import Wrapper from './Wrapper';
import './App.css';

function App() {
  return (
    <Wrapper>
      <Hello name="React" color="red" isTrue={true} isSpecial />
      {/* isSpecial과 같은 불리언 값이 true인경우에는 안써주면 true임 */}
      <Hello color="aqua" isSpecial={false} />
    </Wrapper>
  );
}
//여기있는 dom의 property를 함수에서 props로 받아올수있다. 비구조할당하면 속성마다 가져오는 것이 가능 ex){name,color}
export default App;
