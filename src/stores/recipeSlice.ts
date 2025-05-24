import type { StateCreator } from "zustand"

type Category = {}

export type recipeSliceType = {
    categories: Category[]
}

export const createRecipesSlice: StateCreator<recipeSliceType> = () => ({
    categories: []
})