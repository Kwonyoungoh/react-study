import React, { useRef, useState } from 'react';
import './App.css';
import UserList from './userList';
import CreateUser from './createUser';

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });
  const { username, email } = inputs;

  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velaport',
      email: '1231@naver.com',
    },
    {
      id: 2,
      username: 'youngOh',
      email: 'dududh@naver.com',
    },
    {
      id: 3,
      username: 'mrsLee',
      email: 'mrslee@naver.com',
    },
  ]);

  const nextId = useRef(4);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    // setUsers([...users, user]); 기존배열을 spread 연산자로 복사한후 추가하는 방법
    setUsers(users.concat(user)); //concat으로 두배열을 합치는 방법 concat(Arr) 꼭 arr가 아니라도 괜찮다.
    setInputs({
      username: '',
      email: '',
    });
    console.log(nextId.current);
    nextId.current += 1;
  };

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} />
    </>
  );
}

export default App;
