// npm i ai
import { streamText } from "ai"
import { openrouter } from "../lib/ai"

export default {
    async generateRecipe(prompt:string) {
        const result = streamText({
            model: openrouter('meta-llama/llama-3.3-70b-instruct:free'),
            prompt: prompt
        })

        return result.textStream
    }
}