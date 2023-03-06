import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import MyPhotos from './MyPhotos/MyPhotos';
import AboutMe from './AboutMe/AboutMe';



const Profile = () => {

    return (
        <div>
            <AboutMe />
            <MyPhotos />
            <MyPosts />
        </div>
    )
}

export default Profile;