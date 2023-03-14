import AboutMe from "./AboutMe/AboutMe";
import React, { useEffect, useState }  from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from '@emotion/react';
import { getAllInformationAboutMeThunk, setmyInfo, setValueBirthday, setValueCity, setValueEducation, setValueWebsite, setValueName, getIdDocsThunk, setIdDocUser, getUserAvatarThunk, setAvatar } from "../../../redux/profileReducer";
import { chahgedDataUser, addAvatars } from "../../../firebase/crud";
//import { storage } from "../../../firebase/firebase";



const AboutMeContainer = () => {

    const dispatch = useDispatch();
    const theme = useTheme();
    const [mode, setMode] = useState(false);
    const [modeName, setModeName] = useState(false);
    //const infoAboutMe = useSelector(state => state.profile.users)
    const id = useSelector(state => state.register.user.id);
    //const dataAboutMe = useSelector(state => state.profile.aboutMe);
    const { users, aboutMe, valueBirthday, valueCity, valueEducation, valueWebsite, valueName, currentAvatar, avatars} = useSelector(state => state.profile);
    const idDocs = useSelector(state => state.profile.idDocs);
    const idDocUser = useSelector(state => state.profile.idDocUser);


    useEffect(() => {
        dispatch(getAllInformationAboutMeThunk());
        dispatch(getIdDocsThunk())
    }, [dispatch])


    useEffect(() => {
            const myInfo = users.find(el => el.id === id);
            dispatch(setmyInfo(myInfo))
            if (myInfo) {
                dispatch(setValueBirthday(myInfo.birthDay))
                dispatch(setValueCity(myInfo.city))
                dispatch(setValueEducation(myInfo.education))
                dispatch(setValueWebsite(myInfo.website))
                dispatch(setValueName(myInfo.name))
            }
    }, [id, dispatch, users]);

    useEffect(() => {
        if (idDocs.length > 0) {
            idDocs.map(el => el.id === id ? dispatch(setIdDocUser(el.idDoc)) : null);
        }
    }, [dispatch, id, idDocs])

    useEffect(() => {
        if (avatars.length === 0) {
            dispatch(getUserAvatarThunk())
        } else if (avatars.length > 0) {
             const avatar = avatars.find(el => el.id === id)
             dispatch(setAvatar(avatar))
         }
     }, [dispatch, id, avatars])



    const changeMode = () => {
        setMode(true)
    };

    const changeModeName = () => {
        setModeName(true)
    };

    const getName = (e) => {
        const data = e.target.value;
        dispatch(setValueName(data))
    };

    const getDateOfBirth = (e) => {
        const data = e.target.value;
        dispatch(setValueBirthday(data))
    };

    const getCity = (e) => {
        const data = e.target.value;
        dispatch(setValueCity(data))
    };

    const getEducation = (e) => {
        const data = e.target.value;
        dispatch(setValueEducation(data))
    };
    const getWebsite = (e) => {
        const data = e.target.value;
        dispatch(setValueWebsite(data))
    };

    const saveModeName = () => {
        setTimeout(() => {
            setModeName(false)
        }, 1000)
        chahgedDataUser(idDocUser, {
            name: valueName,
        })
        dispatch(getAllInformationAboutMeThunk())
    }

    const saveMode = () => {
        setTimeout(() => 
        setMode(false), 1500)
        chahgedDataUser(idDocUser, {
            birthDay: valueBirthday,
            city: valueCity,
            education: valueEducation,
            website: valueWebsite,
        })
        dispatch(getAllInformationAboutMeThunk())
    };

    const getAvatar = (e) => {
        if (e.target.files[0]) {
            const file = e.target.files[0];
            addAvatars(file, id)
            dispatch(getUserAvatarThunk())
        }
    }


    return (
        <AboutMe theme={theme} aboutMe={aboutMe} mode={mode} modeName={modeName} changeMode={changeMode} 
            changeModeName={changeModeName} getName={getName} getDateOfBirth={getDateOfBirth} saveMode={saveMode} saveModeName={saveModeName} getWebsite={getWebsite} getCity={getCity} getEducation={getEducation} valueBirthday={valueBirthday} valueCity={valueCity} valueEducation={valueEducation} valueWebsite={valueWebsite} valueName={valueName} getAvatar={getAvatar} currentAvatar={currentAvatar}
        />
    )
}

export default AboutMeContainer;