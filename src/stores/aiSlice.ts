import { type StateCreator } from "zustand";
import AIService from "../services/AIService";

export type AISlice = {
    recipe: string
    generateRecipe: (promp: string) => Promise<void>
}

export const createAISlice : StateCreator<AISlice, [], [], AISlice> = (set) => ({
    recipe: '',
    generateRecipe: async (prompt) => {
        const data = await AIService.generateRecipe(prompt)

        for await(const textPart of data) {
            set((state => ({
                recipe: state.recipe + textPart
            })))
        }
    }
})