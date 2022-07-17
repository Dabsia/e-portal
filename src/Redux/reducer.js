import { ActionTypes } from "./ActionTypes";

const initialState = {
    paid: false,
    registered_course: false,
    complaint : [{
        id: 0,
        message: 'The hostel is smelling'
    }],
    hostel: {
        hostelName: '', hostelFlat : '', hostelRoomNumber : ''
    }, 
    courses: [{
            courseName: '', courseCode: '', courseUnit: ''
    }],
    // Lecturers section
    student: false,
    approveCourses: false
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
        case ActionTypes.ADD_COURSE:
            return {
                ...state, courses: [...state.courses, action.payload]
            }
        // Lecturers section
        case ActionTypes.REGISTER_COURSES:
            return {
                ...state, registered_course: true
            }
        case ActionTypes.APPROVE_COURSES:
            return {
                ...state, approveCourses : true
            }
        default:
            return state
    }
}

export default reducer