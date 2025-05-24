import type { z } from "zod";
import type { CategoriesAPIResponseSchema } from "../schemas/recipes-schema";

export type Categories = z.infer<typeof CategoriesAPIResponseSchema>