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

export const lecturerLogin = () => ({
    type: ActionTypes.LECTURER_LOGIN
})

export const create_new_lecturer = (user) => ({
    type: ActionTypes.CREATE_NEW_LECTURER,
    payload: user
})

export const notification = (notificationMessage) => ({
    type: ActionTypes.NOTIFICATION,
    payload: notificationMessage
})

// Start User Registration
const registerStart = () => ({
    type: ActionTypes.REGISTER_START
})

const registerSuccess = (data) => ({
    type: ActionTypes.REGISTER_SUCCESS,
    payload: data
})

const registerFailed = (data) => ({
    type: ActionTypes.REGISTER_FAILED,
    payload: data
})

export const registerUser = (userRegisterDetails) => async (dispatch) => {
    try {
        dispatch(registerStart());
        let res = await fetch('https://e-portal-fc6d8-default-rtdb.firebaseio.com/lecturers.json', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userRegisterDetails),
        })
        const data = await res.json();

        if (res.status === 200) {
            dispatch(registerSuccess(data));

        }
        else {
            dispatch(registerFailed(data.message));
        }

    } catch (err) {
        dispatch(registerFailed("An error occured"));
    }
}