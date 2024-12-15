"use server";

import * as z from 'zod';
import { SettingSchema } from "@/schemas";
import { currentUser } from "@/lib/auth";
import bcryptjs from "bcryptjs";
import { db } from "@/lib/db";
import { getUserByEmail, getUserById } from "@/data/user";
import { generateVerificationToken } from "@/lib/token";
import { sendVerificationEmail } from "@/lib/mail";

export const settings = async (values: z.infer<typeof SettingSchema>) => {
  const user = await currentUser();

  if (!user) {
    return { error: "Unauthorized" };
  }

  const dbUser = await getUserById(user.id);

  if (!dbUser) {
    return { error: "Unauthorized" };
  }

  if (user.isOAuth) {
    values.email = undefined;
    values.password = undefined;
    values.newPassword = undefined;
    values.isTwoFactorEnabled = undefined;
  }

  if (values.email && values.email !== user.email) {
    const exisitingUser = await getUserByEmail(values.email);

    if (exisitingUser && exisitingUser.id !== user.id) {
      return { error: "Email already in use" };
    }

    const verificationToken = await generateVerificationToken(values.email);

    await sendVerificationEmail(
      verificationToken.email,
      verificationToken.token
    );

    return { success: "Verification Email Sent!!" };
  }

  if (values.password && values.newPassword && dbUser.password) {
    const passwordMatch = await bcryptjs.compare(
      values.password,
      dbUser.password
    );

    if (!passwordMatch) {
      return { error: "Incorrect Password" };
    }

    const hashedPassword = await bcryptjs.hash(values.newPassword, 10);
    values.password = hashedPassword;
    values.newPassword = undefined;
  }

  await db.user.update({
    where: { id: dbUser.id },
    data: {
      ...values,
    },
  });

  return { success: "Setting Updated!" };
};
