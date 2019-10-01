import React from 'react';
import './App.css';
import UserTable from "./UserTable";

function App() {
  return (
    React.createElement('div', {className: 'App'},
      React.createElement(UserTable)
      )
  )
  // return (
  //   <div className="App">
  //     <UserTable/>
  //   </div>
  // );
}

export default App;
