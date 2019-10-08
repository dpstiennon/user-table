import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
  value: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  spacing: {
    marginLeft: 10,
    marginRight: 10,
  },
  inputLabel: {
    color: 'red'
  }
}));


const AddUserForm = (props) => {

  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName ] = React.useState('')
  const [email, setEmail] = React.useState('')
  const classes = useStyles()

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
      <span className={classes.spacing}>
        <label className={classes.inputLabel} htmlFor="first">First Name</label>
        <input onChange={firstNameHandler} value={firstName} type="text" name="first"/>
      </span>
      <span className={classes.spacing}>
        <label htmlFor="last">Last Name</label>
        <input onChange={lastNameHandler} type="text" name="last" value={lastName}/>
      </span>
      <span className={classes.spacing}>
        <label htmlFor="email">Email</label>
        <input onChange={emailHandler} type="text" name="email" value={email}/>
      </span>
      <button onClick={onSubmit}> Add</button>
      <span>{firstName}</span>
    </div>
  );
};

export default AddUserForm;