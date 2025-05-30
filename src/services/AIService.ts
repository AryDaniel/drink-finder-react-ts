// npm i ai
import { streamText } from "ai"
import { openrouter } from "../lib/ai"

export default {
    async generateRecipe(prompt:string) {
        const result = streamText({
            model: openrouter('meta-llama/llama-3.3-70b-instruct:free'),
            prompt: prompt,
            // https://ai-sdk.dev/docs/foundations/prompts#system-prompts
            // System prompts are the initial set of instructions given to models that help guide and constrain the models' behaviors and responses.
            system: "You are a professional bartender and mixology expert. Always answer elegantly, formally, and with knowledge and precision. Respond in the same language the user uses. If the user asks in Spanish, reply in Spanish",
            // https://ai-sdk.dev/docs/ai-sdk-core/settings#temperature
            // 0 means almost deterministic results, and higher values mean more randomness.
            temperature: 0.2

        })

        return result.textStream
    }
}