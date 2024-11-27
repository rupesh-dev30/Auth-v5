import { BsExclamationTriangle } from "react-icons/bs";
import CardWrapper from "./CardWrapper";

export default function ErrorCard() {
  return (
    <CardWrapper
      headerLabel="Oop! Something went wrong!"
      backButtonHref="/auth/login"
      backButtonLabel="Back to login"
    >
      <div className="w-full flex justify-center">
        <BsExclamationTriangle className="text-destructive" />
      </div>
    </CardWrapper>
  );
}
