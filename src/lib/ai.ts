// https://openrouter.ai/docs/community/frameworks#vercel-ai-sdk
// npm install @openrouter/ai-sdk-provider
import { createOpenRouter } from "@openrouter/ai-sdk-provider";

export const openrouter = createOpenRouter({
    apiKey: import.meta.env.VITE_OPENROUTER_KEY
})