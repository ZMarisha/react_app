import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/firebase';
import { signInWithEmailAndPassword } from "firebase/auth";

let initialState = {
    user: {},
    err: false
};

const registerReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'REGISTER_NEW_USER': 
            return {...state, user: action.newUser};
            case 'LOGIN_USER': 
                return {...state, user: action.newUser};
        case 'LOGOUT_USER': 
            return {...state, user: action.deleteUser};
        case 'ERROR': 
            return {...state, err: action.error}
        default: 
            return state
    }
}

export const registerUserThunk = (email, password) => (dispatch) => {
    const registerUser = async() => {
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            console.log(res.user)
            dispatch({type: 'REGISTER_NEW_USER', newUser: {email: res.user.email,
                                                            id: res.user.id,
                                                            token: res.user.accessToken,
                                                            }})
        } catch(e) {
            console.log(e)  
        }
    }
    registerUser();
};

export const loginUserThunk = (email, password) => (dispatch) => {
    const loginUser = async() => {
        try {
            const res = await signInWithEmailAndPassword(auth, email, password);
            console.log(res.user)
            dispatch({type: 'LOGIN_USER', newUser: {email: res.user.email,
                                                            id: res.user.id,
                                                            token: res.user.accessToken,
                                                            }})
        } catch(e) {
            dispatch({type: 'ERROR', error: true})
            console.log(e)
        }
    }
    loginUser();
};


export default registerReducer;