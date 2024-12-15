import { v4 as uuidv4 } from "uuid";
import { getVerificationTokenByEmail } from "@/data/verificationToken";
import { db } from "./db";
import { getPasswordResetTokenByEmail } from "@/data/passwordResetToken";
import crypto from "crypto";
import { getTwoFactorTokenByEmail } from "@/data/twoFactorToken";

export const generateTwoFactorToken = async (email: string) => {
  const token = crypto.randomInt(100_000, 1_000_000).toString();
  const expiresAt = new Date(new Date().getTime() + 3600 * 1000);

  const exisitingToken = await getTwoFactorTokenByEmail(email);

  if (exisitingToken) {
    await db.twoFactorToken.delete({
      where: {
        id: exisitingToken.id,
      },
    });
  }

  const twoFactorToken = await db.twoFactorToken.create({
    data: {
      email,
      token,
      expiresAt,
    },
  });

  return twoFactorToken;
};

export const generatePasswordResetToken = async (email: string) => {
  const token = uuidv4();
  // TODO : TWO FACTOR AUTHENTICATION CODE TOKEN TIMING
  const expiresAt = new Date(new Date().getTime() + 5 * 60 * 1000);

  const exisitingToken = await getPasswordResetTokenByEmail(email);

  if (exisitingToken) {
    await db.passwordResetToken.delete({
      where: {
        id: exisitingToken.id,
      },
    });
  }

  const passwordResetToken = await db.passwordResetToken.create({
    data: {
      email,
      token,
      expiresAt,
    },
  });
  return passwordResetToken;
};

export const generateVerificationToken = async (email: string) => {
  const token = uuidv4();
  const expires = new Date(new Date().getTime() + 3600 * 1000);

  const exisitingToken = await getVerificationTokenByEmail(email);

  if (exisitingToken) {
    await db.verificationToken.delete({
      where: {
        id: exisitingToken.id,
      },
    });
  }

  const verificationToken = await db.verificationToken.create({
    data: {
      email,
      token,
      expiresAt: expires,
    },
  });

  return verificationToken;
};
