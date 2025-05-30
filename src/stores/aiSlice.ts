import { type StateCreator } from "zustand";

export type AISlice = {
    recipe: string
    generateRecipe: (promp: string) => Promise<void>
}

export const createAISlice : StateCreator<AISlice, [], [], AISlice> = () => ({
    recipe: '',
    generateRecipe: async (prompt) => {
        console.log(prompt)
    }
})