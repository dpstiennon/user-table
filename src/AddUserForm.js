import React from 'react';

const AddUserForm = (props) => {

  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName ] = React.useState('')
  const [email, setEmail] = React.useState('')

  const firstNameHandler = (e) => {
    const currentValue = e.target.value
    setFirstName(currentValue)
  }

  const lastNameHandler = (e) => {
    const currentValue = e.target.value
    setLastName(currentValue)
  }

  const emailHandler = (e) => {
    const currentValue = e.target.value
    setEmail(currentValue)
  }

  const onSubmit = () => {
    props.handleSubmit(firstName, lastName, email)
  }

  return (
    <div>
      <span>
        <label htmlFor="first">First Name</label>
        <input onChange={firstNameHandler} value={firstName} type="text" name="first"/>
      </span>
      <span>
        <label htmlFor="last">Last Name</label>
        <input onChange={lastNameHandler} type="text" name="last" value={lastName}/>
      </span>
      <span>
        <label htmlFor="email">Email</label>
        <input onChange={emailHandler} type="text" name="email" value={email}/>
      </span>
      <button onClick={onSubmit}> Add</button>
      <span>{firstName}</span>
    </div>
  );
};

export default AddUserForm;