import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createRecipesSlice, type recipeSliceType } from "./recipeSlice";
import { type FavoritesSliceType, createFavoriteSlice } from "./favoritesSlice";
import { type NotificationSliceType, createNotificationSlice } from "./notificationSlice";
import { createAISlice, type AISlice } from "./aiSlice";

export const useAppStore = create<recipeSliceType & FavoritesSliceType & NotificationSliceType & AISlice>()(devtools((...a) => ({
    ...createRecipesSlice(...a),
    ...createFavoriteSlice(...a),
    ...createNotificationSlice(...a),
    ...createAISlice(...a),
})))