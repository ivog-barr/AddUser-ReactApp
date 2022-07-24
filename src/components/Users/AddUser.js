import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

function AddUser(props) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error,setError] = useState()
  const addUserHandler = (event) => {
    event.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
        setError({
            title:"Invalid input",
            message: "Campos vacios"
        });
      return;
    }

    if (+enteredAge < 1) {
        setError({
            title:"Invalid age",
            message: "Entrar fecha valida"
        });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    console.log(enteredAge, enteredUsername);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameHandler = (e) => {
    setEnteredUsername(e.target.value);
  };
  const ageHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  const errorHandler =() =>{
    setError(null);
  }

  return (
    <div>
        {error && <ErrorModal title={error.title} message={error.message} error={errorHandler}/>}
      
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            onChange={usernameHandler}
            value={enteredUsername}
          />

          <label htmlFor="age">Age</label>
          <input
            type="age"
            id="number"
            onChange={ageHandler}
            value={enteredAge}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </div>
  );
}

export default AddUser;
