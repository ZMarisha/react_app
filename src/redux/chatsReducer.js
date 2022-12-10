let initialState = {
    myFriend: [],
    myNewFriend: {},
    messageList: [],
    value: ''
}

const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FRIENDS': 
            return {...state, myFriend: action.data};
        case 'NEW_FRIEND': 
            return {...state, myNewFriend:action.friend};
        case 'ADD_FRIEND': 
            return {...state, myFriend: [...state.myFriend, action.user]};
        case 'DELETE_FRIEND': 
            return {...state, myFriend: action.deletedFriend};
        case 'ADD_TEXT':
            return {...state, value: action.inputText};
        case 'ADD_ROBOT':
            return {...state, messageList: [...state.messageList, action.robot]};
        case 'FETCH_MESSAGES':
            return {...state, messageList: [...action.payload], value: ''};
        default:
            return state;
    }

};



export const addRobotThunk = (messageList, chatId, postDate, postTime, ROBOT) => (dispatch) => {
    if (messageList.length > 0 && messageList.slice(-1)[0].author !== 'ROBOT') {
        setTimeout(() => dispatch({type: 'ADD_ROBOT', robot: {id: chatId, author: 'ROBOT', text: ROBOT, date: postDate, time: postTime}}
        ),1500)
    }
}

export default chatsReducer;