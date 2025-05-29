import { type StateCreator } from "zustand";

type Notification = {
    text: string
    error: boolean // true: red false: green
    show: boolean // show or hide the notification
}

export type NotificationSliceType = {
    notification: Notification
}

export const createNotificationSlice: StateCreator<NotificationSliceType> = (set, get) => ({
    notification: {
    text: "",
    error: false,
    show: false        
    }
})