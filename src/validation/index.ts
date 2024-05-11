import { z } from "zod";
export const signValidationSchema = z
  .object({
    name: z.string().min(1, "name is required"),
    email: z.string().min(1, "email is required").email("invalid email"),
    password: z
      .string()
      .min(8, "too short")
      .regex(
        /[a-zA-Z].*\d|\d.*[a-zA-Z].*/,
        "Password must contain at least one letter and one digit",
      )
      .regex(
        /[\w\d\S]*[^a-zA-Z\d\s][\w\d\S]*/,
        "Password must contain at least one special character",
      ),
    confirm_password: z.string().min(1, "confirm password required"),
  })
  .refine((schema) => schema.password === schema.confirm_password, {
    message: "Password don't match",
    path: ["confirm_password"],
  });

export const loginValidationSchema = z.object({
  email: z.string().email("invalid email address"),
  password: z
    .string()
    .min(8, "too short")
    .regex(
      /[a-zA-Z].*\d|\d.*[a-zA-Z].*/,
      "Password must contain at least one letter and one digit",
    )
    .regex(
      /[\w\d\S]*[^a-zA-Z\d\s][\w\d\S]*/,
      "Password must contain at least one special character",
    ),
});

export const supplyCreateValidation = z.object({
  title: z.string().min(1, "title is required"),
  category: z.string().min(1, "category is required"),
  quantity: z.string().min(1, "quantity is required"),
  image: z.string().min(1, "image is required"),
  description: z.string().min(1, "description is required"),
});

export const supplyUpdateValidation = z.object({
  title: z.string().min(1, "title is required").optional(),
  category: z.string().min(1, "category is required").optional(),
  quantity: z.string().min(1, "quantity is required").optional(),
  image: z.string().min(1, "image is required").optional(),
  description: z.string().min(1, "description is required").optional(),
});
