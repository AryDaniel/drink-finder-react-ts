import type { StateCreator } from "zustand"
import { getCategories } from "../services/RecipeService"
import type { Categories, SearchFilter } from "../types"

export type recipeSliceType = {
    categories: Categories
    fetchCategories: () => Promise<void>
    searchRecipies: (SearchFilters: SearchFilter) => Promise<void>
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
    },
    searchRecipies: async (filters) => {
        console.log(filters)
    }
})