import { ZodBoolean, ZodDefault, ZodEnum, ZodObject, ZodString, z } from "zod";

export interface formaDataTypes {
  _id?: string;
  title: string;
  description?: string;
  completed: boolean;
  priority: "low" | "medium" | "high" | "delayed"; // you can modify this field depending on your needs
  __v?: number;
}
export const taskSchema = z.object({
  title: z
    .string()
    .min(3, { message: "the title must be at least 3 caracteres" })
    .max(20, { message: "the title must be less than 3 caracteres" }),
  description: z.string(),
  completed: z.boolean().default(false),
  priority: z.enum(["low", "medium", "high", "delayed"]),
});
export const taskType = ZodObject<{
  title: ZodString;
  description: ZodString;
  completed: ZodDefault<ZodBoolean>;
  priority: ZodEnum<["low", "medium", "high", "delayed"]>;
}>;
