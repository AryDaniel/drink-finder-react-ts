import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createRecipesSlice, type recipeSliceType } from "./recipeSlice";
import { type FavoritesSliceType, createFavoriteSlice } from "./favoritesSlice";
import { type NotificationSliceType, createNotificationSlice } from "./notificationSlice";

export const useAppStore = create<recipeSliceType & FavoritesSliceType & NotificationSliceType>()(devtools((...a) => ({
    ...createRecipesSlice(...a),
    ...createFavoriteSlice(...a),
    ...createNotificationSlice(...a),
})))