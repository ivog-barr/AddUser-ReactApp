import React, { useState , useRef} from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

function AddUser(props) {

  const nameInputRef = useRef()
  const ageInputRef = useRef()
  const [error,setError] = useState()
  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value
    const enteredUserAge = ageInputRef.current.value

    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
        setError({
            title:"Invalid input",
            message: "Campos vacios"
        });
      return;
    }

    if (+enteredUserAge < 1) {
        setError({
            title:"Invalid age",
            message: "Entrar fecha valida"
        });
      return;
    }
    props.onAddUser(enteredName, enteredUserAge);
    nameInputRef.current.value = ""
    ageInputRef.current.value = ""
  
    
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
          
            ref={nameInputRef}
          />

          <label htmlFor="age">Age</label>
          <input
            type="age"
            id="number"
            
            ref={ageInputRef}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </div>
  );
}

export default AddUser;
