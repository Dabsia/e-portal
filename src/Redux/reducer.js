import { ActionTypes } from "./ActionTypes";

const initialState = {
    paid: false,
    complaint : [{
        id: 0,
        message: 'The hostel is smelling'
    }],
    hostel: {
        hostelName: '', hostelFlat : '', hostelRoomNumber : ''
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.STUDENT_PAID:
            return { ...state, paid: true }
        case ActionTypes.COMPLAINTS:
            return {
                ...state, complaint: [...state.complaint, action.payload]
            }
        case ActionTypes.SAVE_HOSTEL:
            return {
                ...state, hostel: action.payload
            }
        default:
            return state
    }
}

export default reducer