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