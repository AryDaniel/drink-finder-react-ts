import { type StateCreator } from "zustand";
import type { FavoritesSliceType } from "./favoritesSlice";

type Notification = {
    text: string
    error: boolean // true: red false: green
    show: boolean // show or hide the notification
}

export type NotificationSliceType = {
    notification: Notification
    showNotification: (payload: Pick<Notification, 'text' | 'error'>) => void
}

export const createNotificationSlice: 
    StateCreator<NotificationSliceType & FavoritesSliceType, [], [], NotificationSliceType> = (set) => ({
        notification: {
        text: "",
        error: false,
        show: false        
        },
        showNotification: (payload) => {
            set({
                notification: {
                    text: payload.text,
                    error: payload.error,
                    show: true
                }
            })
        }
    })