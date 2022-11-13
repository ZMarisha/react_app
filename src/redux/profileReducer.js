let initialState = {
    myProfile: {
        avatarka: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyy0VSRmQ2F3_kAMxBLMgs7dRrHKdqCd2eRQ&usqp=CAU'
    },
    valueCheckbox: false
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'TOGGLE_ACTION': 
            return {...state, valueCheckbox: !state.valueCheckbox};
        default: 
            return state
    }
}

export default profileReducer;

