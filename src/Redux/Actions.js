import { ActionTypes } from "./ActionTypes";


export const payment_confirmed = () => ({
    type: ActionTypes.STUDENT_PAID
})

export const complaint_message = (message) => ({
    type: ActionTypes.COMPLAINTS,
    payload: message
})

export const save_hostel = (hostel) => ({
    type: ActionTypes.SAVE_HOSTEL,
    payload: hostel
})

export const add_course = (courseDetails) => ({
    type: ActionTypes.ADD_COURSE,
    payload: courseDetails
})

export const register_courses = () => ({
    type: ActionTypes.REGISTER_COURSES
})

export const approve_courses = () => ({
    type: ActionTypes.APPROVE_COURSES
})

export const add_result = (resultDetails) => ({
    type: ActionTypes.ADD_RESULT,
    payload: resultDetails
})

export const register_results = () => ({
    type: ActionTypes.REGISTER_RESULTS
})

export const showNav = () => ({
    type: ActionTypes.WELCOME
})

export const login = () => ({
    type: ActionTypes.STUDENT_LOGIN
})

export const create_new_user = (user) => ({
    type: ActionTypes.CREATE_NEW_USER,
    payload: user
})

export const logout = () => ({
    type: ActionTypes.LOGOUT
})