"use client";

import { logout } from "@/actions/logout";
import { PropsWithChildren } from "react";

export const LogoutButton = ({ children }: PropsWithChildren) => {
  const onClick = () => {
    logout();
  };

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};
