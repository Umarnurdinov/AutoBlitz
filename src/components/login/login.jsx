import axios from "axios";
import React, { useState } from "react";

function Login() {
    const [user, setUser] = useState({
        phone: "",
        password: "",
    });

    const submitHandler = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        try {
            const response = await axios.post(
                "http://13.49.183.39:8000/register/",
                user
            );
            console.log(response.data);
        } catch (error) {
            console.error("There was an error registering the user!", error);
        }
    };

    function getUser() {
        axios.get("http://13.49.183.39:8000/users/").then((user)=>console.log(user));
    }

    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={submitHandler}>
                <input
                    placeholder="Write your phone"
                    value={user.phone}
                    onChange={(e) =>
                        setUser({ ...user, phone: e.target.value })
                    }
                    type="text"
                />
                <input
                    placeholder="Write your password"
                    value={user.password}
                    onChange={(e) =>
                        setUser({ ...user, password: e.target.value })
                    }
                    type="password" // Use 'password' type for security
                />
                <button type="submit">Зарегистрироваться</button>
            </form>
                <button onClick={getUser} >GetUser</button>
        </div>
    );
}

export default Login;
