import { z } from "zod";

const signupSchema = z.object({
  userName: z.string().min(3),
  email: z.email(),
  password: z.string().min(6),
});

const signinSchema = z.object({
  email: z.email(),
  password: z.string().min(6),
});

export { signupSchema, signinSchema }
