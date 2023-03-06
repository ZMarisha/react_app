import { createUserWithEmailAndPassword, } from "firebase/auth";
import { auth } from '../firebase/firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

let initialState = {
    user: {},
    err: false
};

// const registerReducer = (state = initialState, action) => {
//     switch(action.type) {
//         case 'REGISTER_NEW_USER': 
//             return {...state, user: action.newUser};
//             case 'LOGIN_USER': 
//                 return {...state, user: action.newUser};
//         case 'LOGOUT_USER': 
//             return {...state, user: action.deleteUser};
//         case 'ERROR': 
//             return {...state, err: action.error}
//         default: 
//             return state
//     }
// }

export const registerUserThunk = createAsyncThunk(
    'register/registerUserThunk',
    async({email, password, displayName}) => {
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            console.log(res.user)
            const newUser = {
                email: res.user.email,
                id: res.user.uid,
                token: res.user.accessToken,
            };

            return newUser
        } catch(e) {
            console.log(e.code, e.message)
        }
    }
);

export const loginUserThunk = createAsyncThunk(
    'register/loginUserThunk',
    async({email, password}) => {
        try {
            const res = await signInWithEmailAndPassword(auth, email, password);
            console.log(res.user)
            const newUser = {
                email: res.user.email,
                id: res.user.uid,
                token: res.user.accessToken,
            }
            return newUser;
        } catch(e) {
            console.log(e.code, e.message)
        }
    }
)

const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        // registerNewUser: (state, action) => {
        //     return {...state, user: action.payload.newUser};
        // },
        // loginUser: (state, action) => {
        //     return {...state, user: action.newUser};
        // },
        logoutUser: (state, action) => {
            return {...state, user: action.payload};
        },
        // error: (state, action) => {
        //     return {...state, err: action.error}
        // }
    },
    extraReducers: {
        [registerUserThunk.fulfilled]: (state, action) => {
            return {...state, user: action.payload};
        },
        [loginUserThunk.fulfilled]: (state, action) => {
            return {...state, user: action.payload};
        },
        [loginUserThunk.rejected]: (state) => {
            return {...state, err: true}
        }
    }
})

// export const registerUserThunk = (email, password) => (dispatch) => {
//     const registerUser = async() => {
//         try {
//             const res = await createUserWithEmailAndPassword(auth, email, password);
//             console.log(res.user)
//             dispatch({type: 'REGISTER_NEW_USER', newUser: {email: res.user.email,
//                                                             id: res.user.id,
//                                                             token: res.user.accessToken,
//                                                             }})
//         } catch(e) {
//             console.log(e)  
//         }
//     }
//     registerUser();
// };



// export const loginUserThunk = (email, password) => (dispatch) => {
//     const loginUser = async() => {
//         try {
//             const res = await signInWithEmailAndPassword(auth, email, password);
//             console.log(res.user)
//             dispatch({type: 'LOGIN_USER', newUser: {email: res.user.email,
//                                                             id: res.user.id,
//                                                             token: res.user.accessToken,
//                                                             }})
//         } catch(e) {
//             dispatch({type: 'ERROR', error: true})
//             console.log(e)
//         }
//     }
//     loginUser();
// };

export const { logoutUser } = registerSlice.actions;
const registerReducer = registerSlice.reducer;

export default registerReducer;