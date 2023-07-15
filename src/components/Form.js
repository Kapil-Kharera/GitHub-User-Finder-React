import React, {  useContext, useState } from 'react'
import { UserContext } from '../context/UserContext';

const Form = () => {
    const [username, setUsername] = useState("");
    const { setUserData } = useContext(UserContext);

    const handleInputChange = (e) => {
        setUsername(e.target.value);
    }

    const handleSubmitData = (e) => {
        e.preventDefault();

        if (username) fetchData();
    }

    const fetchData = async () => {
        const url = `https://api.github.com/users/${username}`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            setUserData(data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="form-wrapper">
            <form action="#" id="finduser-form" onSubmit={handleSubmitData}>
                <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Enter the username..."
                    required=""
                    value={username}
                    onChange={handleInputChange}
                />
                <button type="submit" id="submit">
                    Get the Data
                </button>
            </form>
        </div>
    )
}

export default Form;