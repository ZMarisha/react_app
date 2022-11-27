let initialState = {
    myFriend: [],
    myNewFriend: {},
    messageList: [],
    value: ''
}

const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FRIENDS': 
            let myNewFriend = action.data
            return {...state, myFriend: myNewFriend};
        case 'NEW_FRIEND': 
            let newFriend = action.friend
            return {...state, myNewFriend:newFriend};
        case 'ADD_FRIEND': 
            return {...state, myFriend: [...state.myFriend, action.user]};
        case 'DELETE_FRIEND': 
            return {...state, myFriend: action.deletedFriend};
        case 'ADD_TEXT':
            return {...state, value: action.inputText};
        case 'ADD_MESSAGE':
            console.log(action)
            return {...state, messageList: [...state.messageList, action.payload]};
        case 'ADD_ROBOT':
            return {...state, messageList: [...state.messageList, action.robot]}
            //TODO Добавил Андрей
        case 'FETCH_MESSAGES':
            return {...state, messageList: [...action.payload]}
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