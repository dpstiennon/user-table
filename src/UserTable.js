import React from 'react';
import classes from './dude.module.css'
import AddUserForm from "./AddUserForm";
import $ from 'jquery'
import Paginator from "./Paginator";

const usersDefault = [
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
  },
]

const HeaderRow = (props) => {
  if (props.users.length === 2) {
    return (
      <tr>
        <td>
          <h2>Header</h2>
        </td>
      </tr>
    )
  } else {
    return null;
  }
}


const UserTable = (props) => {
  let [users, setUsers] = React.useState(usersDefault)
  let [pageNumber, setPageNumber] = React.useState(1)

  React.useEffect(() => {
    $.ajax( `https://reqres.in/api/users?page=${pageNumber}`).then((result) => {
      console.log(result);
      setUsers(result.data)
    })
  }, [pageNumber]);


  const handleSubmit = (first, last, email) => {
    const newUser = {
      id: users.length + 1,
      first_name: first,
      last_name: last,
      email: email
    };
    const newUsers = [...users]
    newUsers.push(newUser)
    setUsers(newUsers)
  }

  return <>
    <table className="table">
      <tbody>
      <HeaderRow users={users}/>
      {users.map(u => <UserTableRow user={u} classes={classes}/>)}
      </tbody>
    </table>
    <AddUserForm handleSubmit={handleSubmit}/>
    <Paginator value={pageNumber} setter={setPageNumber} />
  </>
}

const UserTableRow = ({user, classes}) => {
  return <tr>
    <td className={classes.dude}>{user.id}</td>
    <td className={classes.dude}>{user.first_name}</td>
    <td>{user.last_name}</td>
    <td>{user.email}</td>
    <td>
      <label htmlFor="text">I am a textbox</label>
      <input type="text" name="text"/>
    </td>
  </tr>
}

export default UserTable