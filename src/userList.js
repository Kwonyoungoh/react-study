import React from 'react';

function User({ user }) {
  return (
    <div>
      <b>{user.username}</b>
      <span>({user.email})</span>
    </div>
  );
}

function UserList() {
  const users = [
    {
      id: 1,
      username: 'velopert',
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
  ];
  return (
    <div>
      {users.map(user => (
        <User user={user} key={user.id} />
      ))}
      {/*{users.map((user,index) => (
        <User user={user} key={index} />
      ))} 앵간하면 피해주자 */}
      {/* 배열을 렌더링 할때는 key가 있어야 각 요소들의 효율적 업데이트가 가능하다 고유값이 없을 경우에는 index값의 지정이 가능하지만 비효율적*/}
    </div>
  );
}

export default UserList;
