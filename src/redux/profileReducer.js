import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllMyPosts } from '../firebase/crud';


let initialState = {
    myProfile: {
        avatarka: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyy0VSRmQ2F3_kAMxBLMgs7dRrHKdqCd2eRQ&usqp=CAU'
    },
    value: '',
    posts: [],
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
    'chats/getAllMyPostsThunk',
    async() => {
        try {
            const posts = await getAllMyPosts();
            return posts
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
            state.value = action.payload;
        },
        fetchMyPosts: (state, action) => {
            return {...state, posts: [...action.payload], value: ''};
        }
    },
    extraReducers: {
        [getAllMyPostsThunk.fulfilled]: (state, action) => {
            state.posts = action.payload;
            // state.preloader = false;
        },
    }
})


export const { setValue, fetchMyPosts } = profileSlice.actions;
const profileReducer = profileSlice.reducer

export default profileReducer;

