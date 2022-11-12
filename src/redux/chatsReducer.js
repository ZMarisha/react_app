export function addDate() {
    let date = new Date();
    let year = date.getFullYear();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    
    return `${year}.${month}.${day}`
  }

 export function addTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    return `${hours}:${minutes}:${seconds}`
  }

let initialState = {
    myFriend: [],
    myNewFriend: {},
    messageList: [],
    value: ''
}

const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FRIENDS': 
        console.log(action.message)
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
            return {...state, messageList: [...state.messageList, action.message], value: ''};
        case 'ADD_ROBOT':
            return {...state, messageList: [...state.messageList, action.robot]}
        default:
            return state;
    }

}

export default chatsReducer;