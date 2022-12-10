import chatsReducer from "./chatsReducer";

let stateBefore = {
    myFriend: [],
    myNewFriend: {},
    messageList: [],
    value: ''
};

describe('check chatsReducer', () => {
    test('FRIENDS', () => {
        const action = {
            type: 'FRIENDS', 
            data: [
                {id: 1, name: 'Olga'},
                {id: 2, name: 'Pete'}
            ]
        };
        expect(chatsReducer(stateBefore, action)).toEqual({
            ...stateBefore,
            myFriend: action.data
        })
    });
    test('new friend', () => {
        const action = {
            type: 'NEW_FRIEND',
            friend: {id: 11, name: 'Bars'}
        };
        expect(chatsReducer(stateBefore, action)).toEqual({
            ...stateBefore,
            myNewFriend: action.friend
        })
    });
    test('add new friend', () => {
        const action = {
            type: 'ADD_FRIEND',
            user: {id: 11, name: 'Bars'}
        };
        expect(chatsReducer(stateBefore, action)).toEqual({
            ...stateBefore,
            myFriend: [...stateBefore.myFriend, action.user]
        })
    });
    test('DELETE_FRIEND', () => {
        const action = {
            type: 'DELETE_FRIEND',
            deletedFriend: {id: 11, name: 'Bars'}
        };
        expect(chatsReducer(stateBefore, action)).toEqual({
            ...stateBefore,
            myFriend: action.deletedFriend
        })
    });
    test('ADD_TEXT', () => {
        const action = {
            type: 'ADD_TEXT',
            inputText: ['Hello'],
        }
        expect(chatsReducer(stateBefore, action)).toEqual({
            ...stateBefore, 
            value: action.inputText
        })
    });
    test('ADD_ROBOT', () => {
        const action = {
            type: 'ADD_ROBOT',
            robot: { id: 1, name: 'ROBOT', text: 'Hi!'}
        };
        expect(chatsReducer(stateBefore, action)).toEqual({
            ...stateBefore, 
            messageList: [...stateBefore.messageList, action.robot]
        })
    })
    test('FETCH_MESSAGES', () => {
        const action = {
            type: 'FETCH_MESSAGES', 
            payload: ['Hello', 'Bye', 'Good day']
        };
        expect(chatsReducer(stateBefore, action)).toEqual({
            ...stateBefore,
            messageList: [...action.payload], 
            value: ''
        })
    });
})