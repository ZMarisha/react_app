import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllPosts } from '../firebase/crud'



let initialState = {
    robot: 'Hi! I am Robot. I got your message!',
    myFriend: [],
    messageList: [],
    value: '',
    preloader: false,
    error: false,
}

// const chatsReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'FRIENDS': 
//             return {...state, myFriend: action.data};
//         case 'NEW_FRIEND': 
//             return {...state, myNewFriend:action.friend};
//         case 'ADD_FRIEND': 
//             return {...state, myFriend: [...state.myFriend, action.user]};
//         case 'DELETE_FRIEND': 
//             return {...state, myFriend: action.deletedFriend};
//         case 'ADD_TEXT':
//             return {...state, value: action.inputText};
//         case 'ADD_ROBOT':
//             return {...state, messageList: [...state.messageList, action.robot]};
//         case 'FETCH_MESSAGES':
//             return {...state, messageList: [...action.payload], value: ''};
//         default:
//             return state;
//     }

// };

export const getAllPostsThunk = createAsyncThunk(
    'chats/getAllPostsThunk',
    async() => {
        try {
            const posts = await getAllPosts();
            return posts
        } catch(e) {
            console.log(e.message)
        }
    }
);


const chatsSlice = createSlice({
    name: 'chats',
    initialState,
    reducers: {
        getAllFriends: (state, action) => {
            state.myFriend = action.payload;
        },
        addFriend: (state, action) => {
            state.myFriend.push(action.payload)
        },
        deleteThisFriend: (state, action) => {
            state.myFriend = action.payload;
        },
        fetchMessages:(state, action) => {
            return {...state, messageList: [...action.payload], value: ''};
        },
        addText: (state, action) => {
            return {...state, value: action.payload};
        },
        addRobot: (state, action) => {
            return {...state, messageList: [...state.messageList, action.payload]};
        },
        loadingInProgress: (state, action) => {
            state.preloader = action.payload
        }
    },
    extraReducers: {
        // [getAllPostsThunk.pending]: (state) => {
        //     state.preloader = true;
        // },
        [getAllPostsThunk.fulfilled]: (state, action) => {
            state.messageList = action.payload;
            // state.preloader = false;
        },
        // [getAllPostsThunk.rejected]: (state, action) => {
        //     state.preloader = false;
        //     state.error = true;
        // }
    }
})



export const { getAllFriends, getNewFriend, addFriend, deleteThisFriend, fetchMessages, addText, addRobot, loadingInProgress } = chatsSlice.actions;
const chatsReducer = chatsSlice.reducer;

export default chatsReducer;