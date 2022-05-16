import './App.css';
import { UserForm } from "./components/userForm";
import { ImageStorage } from "./components/imageStorage";
import { tokenFetch } from "./utils";
import { NavBar } from './components/navbar';
import { useState, useEffect } from "react";

const App = () => {

  const [user, setUser] = useState();

  useEffect(() => {
    tokenFetch(setUser)
  }, [])

  return (
    <div className="App">
      {user ? <h1>{user}</h1> : <h1>Please enter Username</h1>}
      <UserForm setUser = {setUser}/>

    <div className = "NavBar">
      <NavBar />
    </div>

      <div className = "images">
        {user ? <ImageStorage/> : <h2>User not present</h2>}
      </div>
    </div>
  );
}

export default App;
