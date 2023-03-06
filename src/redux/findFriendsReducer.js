import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addMyNewFriend } from '../firebase/crud';

let initialState = {
    users: [],
    currentPage: 1,
    pageSize: 7,
    totalUsers: 180,
    addingFriends: [],
    preloader: false,
    error: false,
};

export const findFriendsThunk = createAsyncThunk(
    'findFriends/findFriendsThunk',
    async({currentPage = 1, pageSize = 5}, {rejectWithValue}) => {
        try{
            const response = await fetch(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
                const res = await response.json();
                const data = await res.items;
                return data;
        } catch(e) {
            return rejectWithValue('An error has occurred')
        }
    }
)

export const getCurrentFriendsThunk = createAsyncThunk(
    'findFriends/findFriendsThunk',
    async({currPage, pageSize}) => {
        console.log(currPage)
        try{
            const response = await fetch(`https://social-network.samuraijs.com/api/1.0/users?page=${currPage}&count=${pageSize}`)
                const res = await response.json();
                const data = await res.items;
                return data;
        } catch(e) {
            console.log(e.message)
        }
    }
)

const findFriendsSlice = createSlice({
    name: 'findFriends',
    initialState,
    reducers: {
        getCurrentPage: (state, action) => {
            return {...state, currentPage: action.payload}
        },
        addFriend: (state, action) => {
           state.users.map(el => {
            if (el.id === action.payload.id) {
                const user = {
                    id: action.payload.id,
                    name: action.payload.name,
                    src: action.payload.photos.large,
                };
                //state.addingFriends.push(el)
                addMyNewFriend(user)
                return el.followed = true
            }
            return el;
           })
        },
        removeFriend: (state, action) => {
            
            const newAddingUsers = state.addingFriends.filter(el => el.id !== action.payload.id)
            state.addingFriends = newAddingUsers;
            console.log(state.addingFriends)
            state.users.map(el => {
                if (el.id === action.payload.id) {
                    return el.followed = false
                }
                return el;
            });
        }
    },
    extraReducers: {
        [findFriendsThunk.pending]: (state) => {
            state.preloader = true;
        },
        [findFriendsThunk.fulfilled]: (state, action) => {
            state.preloader = false;
            state.users = action.payload;
        },
        [findFriendsThunk.rejected]: (state) => {
            state.preloader = false; 
            state.error = true;
        },
        [getCurrentFriendsThunk.pending]: (state) => {
            state.preloader = true;
        },
        [getCurrentFriendsThunk.fulfilled]: (state, action) => {
            state.preloader = false;
            state.users = action.payload;
        },
        [getCurrentFriendsThunk.rejected]: (state) => {
            state.preloader = false; 
            state.error = true;
        },
    }
});

export const { getCurrentPage, addFriend, removeFriend } = findFriendsSlice.actions;
const findFriendsReducer = findFriendsSlice.reducer;

export default findFriendsReducer;