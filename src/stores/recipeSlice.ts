import type { StateCreator } from "zustand"
import { getCategories, getRecipes } from "../services/RecipeService"
import type { Categories, Drinks, SearchFilter } from "../types"

export type recipeSliceType = {
    categories: Categories
    drinks: Drinks
    fetchCategories: () => Promise<void>
    searchRecipies: (SearchFilters: SearchFilter) => Promise<void>
}

export const createRecipesSlice: StateCreator<recipeSliceType> = (set) => ({
    categories: {
        drinks: []
    },
    drinks: {
        drinks: []
    },
    fetchCategories: async() => {
        const categories = await getCategories()
        
        set({
            categories
        })
    },
    searchRecipies: async (filters) => {
        const drinks = await getRecipes(filters)
        set({
            drinks
        })
    }
})