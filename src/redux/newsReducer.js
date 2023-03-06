import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

let initialState = {
    newsWorld: [],
    article: {},
    preloader: false,
    error: false,
    errorMessage: '',
};

// const newsReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'PRELOADER': 
//             return {...state, preloader: action.isPreloader};
//         case 'NEWS': 
//             return {...state, newsWorld: action.myNews};
//         case 'ERROR': 
//             return {...state, error: action.error};
//         case 'GET_ARTICLE': 
//             return {...state, article: action.post}
//         default: 
//             return state;
//     }
// }

export const getNewsThunk = createAsyncThunk(
    'news/getNewsThunk',
    async(_, {rejectWithValue}) => {
        try {
            let response = await fetch('https://jsonplaceholder.typicode.com/posts');
            let data = await response.json();
            return data;
        } catch(e) {
            return rejectWithValue('An error has occurred')
        }
    }
);

export const getArticleThunk = createAsyncThunk(
    'news/getArticleThunk',
    async({newsId}, {rejectWithValue}) => {
        try {
            let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${newsId}`)
            let data = await response.json();
            return data;
        } catch(e) {
            return rejectWithValue('An error has occurred')
        }
    }
)

const newsSlice = createSlice({
    name: 'news',
    initialState,
    extraReducers: {
        [getNewsThunk.pending]: (state) => {
            state.preloader = true;
        },
        [getNewsThunk.fulfilled]: (state, action) => {
            state.preloader = false;
            state.newsWorld = action.payload;
        },
        [getNewsThunk.rejected]: (state, action) => {
            state.error = true;
            state.errorMessage = action.payload;
            state.preloader = false; 
        },
        [getArticleThunk.pending]: (state) => {
            state.preloader = true;
        },
        [getArticleThunk.fulfilled]: (state, action) => {
            state.article = action.payload;
            state.preloader = false;
        },
        [getArticleThunk.rejected]: (state, action) => {
            state.error = true;
            state.errorCode = action.payload
            state.preloader = false; 
        },
    }
})


// export const getNewsThunk = () => (dispatch) => {
//     const getData = async() => {
//         dispatch({type: 'PRELOADER', isPreloader: true});
//         try {
//             let response = await fetch('https://jsonplaceholder.typicode.com/posts');
//             if (!response.ok) {
//                 dispatch({type: 'ERROR', error: true})
//                 throw new Response('', {status: response.status, statusText: 'Not Found'})}   
//             else {
//                 let data = await response.json();
//                 //console.log(data)
//                 dispatch({type: 'NEWS', myNews: data})
//                 dispatch({type: 'ERROR', error: false})
//             }    
//         } finally {
//             dispatch({type: 'PRELOADER', isPreloader: false})
//         }
//     }
//     getData();
// }



// export const getArticleThunk = (newsId) => (dispatch) => {
//     const getArticle = async() => {
//         dispatch({type: 'PRELOADER', isPreloader: true});
//         try {
//             let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${newsId}`);
//             if (!res.ok) {
//                 dispatch({type: 'ERROR', error: true})
//                 throw new Response('', {status: res.status, statusText: 'Not Found'})}   
//             else {
//                 let data = await res.json();
//                 console.log(data)
//                 dispatch({type: 'GET_ARTICLE', post: data})
//                 dispatch({type: 'ERROR', error: false})
//             }    
//         } finally {
//             dispatch({type: 'PRELOADER', isPreloader: false})
//         }
//     }
//     getArticle();
// }




//export const { isPreloader } = newsSlice.actions;

const newsReducer = newsSlice.reducer;

export default newsReducer;