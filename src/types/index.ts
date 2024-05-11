import {
  loginValidationSchema,
  signValidationSchema,
  supplyCreateValidation,
  supplyUpdateValidation,
} from "@/validation";
import { z } from "zod";

export type TSignupField = z.infer<typeof signValidationSchema>;
export type TLoginField = z.infer<typeof loginValidationSchema>;
export type TSupplyField = z.infer<typeof supplyCreateValidation>;
export type TSupplyUpdateField = z.infer<typeof supplyUpdateValidation>;

export type TSupplyData = {
  id: string;
  title: string;
  description: string;
  image: string;
  quantity: number;
  category: string;
};
