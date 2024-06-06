import React, { useState } from "react";

function LogIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Regex email validation
    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };

    const submit = async (e) => {
        // Check if the email and password are correct
        e.preventDefault();
        if (password.length < 8) {
            alert("Password must be at least 8 characters long");
            // #EXTRA: Red border around the password input
        }
        if (!validateEmail(email)) {
            alert("Invalid email");
            // #EXTRA: Red border around the email input
        }
        // Send a request to the flask server to check for any user with the given email and password
    };

    return (
        <div>
            <h1>Log in</h1>
            <form  action={submit}>
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <button onClick={submit}>Log in</button>
            </form>
        </div>
    );
}

export default LogIn;