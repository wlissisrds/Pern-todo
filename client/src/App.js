import React, {Fragment} from 'react';

//components
import InputTodo from "./Components/InputTodo";
import ListTodo from "./Components/ListTodo";


import './App.css';

function App() {
  return (
  <Fragment>
    <div className="container">
      <InputTodo></InputTodo>
      <ListTodo></ListTodo>
    </div>
  </Fragment>
  );
}

export default App;
