import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllMyPosts, getAllAboutMe, getIdDocs, getUserAvatar } from '../firebase/crud';


let initialState = {
    valuePost: '',
    posts: [],
    users: [],
    aboutMe: {},
    valueName: '',
    valueBirthday: '',
    valueCity: '',
    valueEducation: '',
    valueWebsite: '',
    idDocs: [],
    idDocUser: '',
    avatars: [],
    currentAvatar: {},
}

// const profileSlice = (state = initialState, action) => {
//     switch(action.type) {
//         case 'TOGGLE_ACTION': 
//             return {...state, valueCheckbox: !state.valueCheckbox};
//         default: 
//             return state
//     }
// }

export const getAllMyPostsThunk = createAsyncThunk(
    'profile/getAllMyPostsThunk',
    async() => {
        try {
            const posts = await getAllMyPosts();
            return posts
        } catch(e) {
            console.log(e.message)
        }
    }
);

export const getAllInformationAboutMeThunk = createAsyncThunk(
    'profile/getAllInformationAboutMeThunk',
    async() => {
        try {
            const id = await getAllAboutMe();
            return id
        } catch(e) {
            console.log(e.message)
        }
    }
);

export const getIdDocsThunk = createAsyncThunk(
    'profile/getIdDocsThunk',
    async() => {
        try {
            const myData = await getIdDocs();
            return myData
        } catch(e) {
            console.log(e.message)
        }
    }
);

export const getUserAvatarThunk = createAsyncThunk(
    'profile/getUserAvatarThunk ',
    async() => {
        try {
            const avatar = await getUserAvatar();
            return avatar
        } catch(e) {
            console.log(e.message)
        }
    }
);




const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setValue: (state, action) => {
            state.valuePost = action.payload;
        },
        fetchMyPosts: (state, action) => {
            return {...state, posts: [...action.payload], valuePost: ''};
        },
        setmyInfo: (state, action) => {
            state.aboutMe = action.payload;
        },
        setValueName: (state, action) => {
            state.valueName = action.payload;
        },
        setValueBirthday: (state, action) => {
            state.valueBirthday = action.payload;
        },
        setValueCity: (state, action) => {
            state.valueCity = action.payload;
        },
        setValueEducation: (state, action) => {
            state.valueEducation = action.payload;
        },
        setValueWebsite: (state, action) => {
            state.valueWebsite = action.payload;
        },
        setIdDocUser: (state, action) => {
            state.idDocUser = action.payload;
        },
        setAvatar: (state, action) => {
            state.currentAvatar= action.payload
        }
    },
    extraReducers: {
        [getAllMyPostsThunk.fulfilled]: (state, action) => {
            state.posts = action.payload;
            // state.preloader = false;
        },
        [getAllInformationAboutMeThunk.fulfilled]: (state, action) => {
            state.users = action.payload;
        },
        [getIdDocsThunk.fulfilled]: (state, action) => {
            state.idDocs = action.payload;
        },
        [getUserAvatarThunk.fulfilled]: (state, action) => {
            state.avatars = action.payload;
        },
    }
})


export const { setValue, fetchMyPosts, setmyInfo, setValueBirthday, setValueCity, setValueEducation, setValueWebsite, setValueName, setIdDocUser, setAvatar } = profileSlice.actions;
const profileReducer = profileSlice.reducer

export default profileReducer;

