import React from "react";
import CardWrapper from "./CardWrapper";

export default function LoginForm() {
  return (
    <CardWrapper
      headerLabel="Welcome back"
      backButtonLabel="Don't have an account?"
      backButtonHref="/auth/signup"
      showSocial
    >
      Login Form
    </CardWrapper>
  );
}
