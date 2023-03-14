import React from "react";
import d from './AboutMe.module.css';
import BorderColorIconMUI from "./BorderColorIcon";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import avatar_empty from '../../../../assets/images/avatar_empty.jpeg'




const AboutMe = ({theme, aboutMe, mode, modeName, changeMode, changeModeName, getName, getDateOfBirth, saveMode, saveModeName, getWebsite, getCity, getEducation, valueBirthday, valueCity, valueEducation, valueWebsite, valueName, getAvatar, currentAvatar}) => {
console.log(currentAvatar.avatar)

    return (
        <>
            <h1>My Profile</h1>
            <div className={d.profile}>
                <div className={d.avatarka}>
                    <div style={{border: theme.palette.primary.border2}} className={d.blockAvatar}>
                        <img className={d.imgAvatarka} src={currentAvatar.avatar ? currentAvatar.avatar : avatar_empty} alt='Avatar'/>
                    </div>
                    <label htmlFor="file" className={d.uploadPhoto}>
                        <input type='file' style={{opacity: 0, position: 'absolute'}} onChange={getAvatar}/>
                        <AddAPhotoIcon src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Ds_6MHw0J7Ynb45lX_QaD-i10_rkjV7JLX-6zCZlsl79vzTdcB08N9R6DCZh00zigpc&usqp=CAU" alt='add avatarka'/>
                        <span style={{marginLeft: '44px', fontSize: '16px'}}>Upload photo</span>
                    </label>
                </div>

                {aboutMe ?
                <div className={d.description}>
                    <div className={d.userName}>
                        {modeName 
                            ? <input type='text' className={d.editName} value={valueName} onChange={getName} maxLength='35' minLength='2'/> 
                            : <h1>{aboutMe.name}</h1>
                        }
                        <div className={d.topBbtnSave}> 
                            {modeName 
                            ? <label onClick={saveModeName}>Save<input type="checkbox"/></label> 
                            : <div onClick={changeModeName}><BorderColorIconMUI/><span style={{fontSize: '16px', marginLeft: '10px'}}>edit</span></div>
                            }
                        </div>
                    </div>
                    <p>Date of Birth:<span>
                        {mode 
                            ? <input type='text' value={valueBirthday} onChange={getDateOfBirth} /> 
                            : <span>{aboutMe.birthDay}</span>
                        }</span>
                        <span className={d.bottom_btn_save}> 
                            {mode 
                                ? <label onClick={saveMode}>Save<input type="checkbox"/></label> 
                                : <span onClick={changeMode}><BorderColorIconMUI/><span style={{fontSize: '16px', marginLeft: '10px'}}>edit</span></span>
                            }
                        </span>
                    </p>
                    <p>City: <span onClick={changeMode}>
                        {mode 
                            ? <input type='text' value={valueCity} onChange={getCity} /> 
                            : <span>{aboutMe.city}</span>
                        }</span>
                    </p>
                    <p>Education: <span>
                        {mode 
                            ? <input type='text' value={valueEducation} onChange={getEducation} /> 
                            : <span>{aboutMe.education}</span>
                        }</span>
                    </p>
                    <p>Website: <span>
                        {mode 
                            ? <input type='text' value={valueWebsite} onChange={getWebsite} /> 
                            : <span>{aboutMe.website}</span>
                        }</span>
                    </p>
                </div> : null}
            </div>
        </>
    )
}

export default AboutMe;