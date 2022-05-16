import { useState } from "react";
import { signUp } from "../utils";

export const UserForm = ({ setUser }) => {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [show, setShow] = useState();

    const submitHandler = (e) => {
        e.preventDefault();
        signUp(username, email, password, setUser);
    };

    return (
        <div>
            <form onSubmit = {submitHandler}>
                <input onChange = {(e) => setUsername(e.target.value)}
                placeholder = "Username" />
                <input onChange = {(e) => setEmail(e.target.value)}
                placeholder = "Email" />
                <input onChange = {(e) => setPassword(e.target.value)}
                placeholder = "Password"
                type = {show ? "text" : "password"} />
                <button type = "submit">Submit</button>
            </form>
            <button onClick = {() => setShow(!show)}>ShowPassword</button>
        </div>
    );
};