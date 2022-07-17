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
    student: true,
    approveCourses: false,
    results: [{
            courseName: '', courseCode: '', coursegrade: ''
    }],
    registered_result: false
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
        case ActionTypes.ADD_RESULT:
            return {
                ...state, results: [...state.results, action.payload]
            }
        case ActionTypes.REGISTER_RESULTS:
            return {
                ...state, registered_result: true
            }
        default:
            return state
    }
}

export default reducer