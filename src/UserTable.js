import React from 'react';

const users = [
  {
    id: 1,
    first_name: 'David',
    last_name: 'Stiennon',
    email: 'dstiennon@lenderclose.com',
  },
  {
    id: 2,
    first_name: 'Kiara',
    last_name: 'Moyer',
    email: 'kmoyer@lenderclose.com',
  }
]


const UserTable = (props) => {
  mapDemo()
  const rows = [];

  const rows2 = users.map(user => <UserTable user={user}/>)

  for (let i = 0; i < users.length; i++) {
    rows.push(<UserTableRow user={users[i]}/>)
  }


  return <table>
    {users.map(u => <UserTableRow user={u} />)}
  </table>
}

const UserTableRow = (props) => {
  const user = props.user;
  return <tr>
    <td>{user.id}</td>
    <td>{user.first_name}</td>
    <td>{user.last_name}</td>
    <td>{user.email}</td>
  </tr>
}


const mapDemo = () => {
  const numbers = [1, 2, 3, 4, 5]
  const numbersDoubled = numbers.map(n => n * 2)
  console.log(numbersDoubled)
}


export default UserTable