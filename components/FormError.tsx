import { BsExclamationTriangle } from "react-icons/bs";

interface Props {
  message?: string;
}

export default function FormError({ message }: Props) {
  if (!message) return null;

  return (
    <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive">
      <BsExclamationTriangle className="h-4 w-4" />
      {message}
    </div>
  );
}
