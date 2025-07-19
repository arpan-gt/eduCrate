import { z } from "zod";

const createCourseSchema = z.object({
  title: z.string().min(1),
  description: z.string(),
  price: z.coerce.number()
});

const updateCourseSchema = createCourseSchema.partial();

export { createCourseSchema, updateCourseSchema };
