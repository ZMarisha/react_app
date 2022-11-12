let initialState = {
    valueCheckbox: false
}

const profileReducer = (state = initialState.valueCheckbox, action) => {
    switch(action.type) {
        case 'TOGGLE_ACTION': 
            return !state
        default: 
            return state
    }
}

export default profileReducer;