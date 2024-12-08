"use server";

import { z } from "zod";
import { ResetSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";

export const reset = async (values: z.infer<typeof ResetSchema>) => {
  const validatedFields = ResetSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid email" };
  }

  const { email } = validatedFields.data;

  const exisitingUser = await getUserByEmail(email);

  if (!exisitingUser) {
    return { error: "Email not found!" };
  }

  // TODO: Generate token and reset email

  return { success: "Reset email sent!" };
};
