import type { StateCreator } from "zustand"
import { getCategories } from "../services/RecipeService"
import type { Categories } from "../types"

export type recipeSliceType = {
    categories: Categories
    fetchCategories: () => Promise<void>

}

export const createRecipesSlice: StateCreator<recipeSliceType> = (set) => ({
    categories: {
        drinks: []
    },
    fetchCategories: async() => {
        const categories = await getCategories()
        
        set({
            categories
        })
    }
})