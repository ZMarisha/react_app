let initialState = {
    newsWorld: [],
    article: {},
    preloader: false,
    error: false,
};

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'PRELOADER': 
            return {...state, preloader: action.isPreloader};
        case 'NEWS': 
            return {...state, newsWorld: action.myNews};
        case 'ERROR': 
            return {...state, error: action.error};
        case 'GET_ARTICLE': 
            return {...state, article: action.post}
        default: 
            return state;
    }
}


export const getNewsThunk = () => (dispatch) => {
    const getData = async() => {
        dispatch({type: 'PRELOADER', isPreloader: true});
        try {
            let response = await fetch('https://jsonplaceholder.typicode.com/posts');
            if (!response.ok) {
                dispatch({type: 'ERROR', error: true})
                throw new Response('', {status: response.status, statusText: 'Not Found'})}   
            else {
                let data = await response.json();
                dispatch({type: 'NEWS', myNews: data})
                dispatch({type: 'ERROR', error: false})
            }    
        } finally {
            dispatch({type: 'PRELOADER', isPreloader: false})
        }
    }
    getData();
}

export const getArticleThunk = (newsId) => (dispatch) => {
    const getArticle = async() => {
        dispatch({type: 'PRELOADER', isPreloader: true});
        try {
            let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${newsId}`);
            if (!res.ok) {
                dispatch({type: 'ERROR', error: true})
                throw new Response('', {status: res.status, statusText: 'Not Found'})}   
            else {
                let data = await res.json();
                dispatch({type: 'GET_ARTICLE', post: data})
                dispatch({type: 'ERROR', error: false})
            }    
        } finally {
            dispatch({type: 'PRELOADER', isPreloader: false})
        }
    }
    getArticle();
}

export default newsReducer;