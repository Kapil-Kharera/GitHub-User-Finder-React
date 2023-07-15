import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const DisplayData = () => {
    const { userData } = useContext(UserContext);
    return (
        <div id="show-data">
            {
                userData && (
                    <>
                    <div id='img-container'>
                        <img src={userData.avatar_url} alt="avatar" id="avatar-img" />
                    </div>
                    <div id="user-data">
                        <p id="name">Name: {userData.name}</p>
                        <p id="portfolio">
                            Portfolio: <a href={userData.html_url} target="_blank" rel="noopener noreferrer">Portfolio</a>
                        </p>
                        <p id="location">Location: {userData.location}</p>
                        <p id="public-repos">Public Repos: {userData.public_repos}</p>
                        <p id="followers">Followers: {userData.followers}</p>
                        <p id="bio">Bio: {userData.bio}</p>
                    </div>
                    </>
                )
            }
        </div>
    )
}

export default DisplayData;