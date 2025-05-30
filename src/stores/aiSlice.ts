import { type StateCreator } from "zustand";
import AIService from "../services/AIService";

export type AISlice = {
    recipe: string
    isGenerating: boolean
    generateRecipe: (promp: string) => Promise<void>
}

export const createAISlice : StateCreator<AISlice> = (set) => ({
    recipe: '',
    isGenerating: false,
    generateRecipe: async (prompt) => {
        set({recipe: '', isGenerating: true}) // Reset the recipe state before generating a new one
        const data = await AIService.generateRecipe(prompt)

        for await(const textPart of data) {
            set((state => ({
                recipe: state.recipe + textPart
            })))
        }
        set({isGenerating: false})
    }
})