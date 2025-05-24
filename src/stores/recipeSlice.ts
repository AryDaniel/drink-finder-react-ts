import type { StateCreator } from "zustand"
import { getCategories } from "../services/RecipeService"

type Category = {}

export type recipeSliceType = {
    categories: Category[]
    fetchCategories: () => Promise<void>

}

export const createRecipesSlice: StateCreator<recipeSliceType> = () => ({
    categories: [],
    fetchCategories: async() => {
        getCategories()        
    }
})