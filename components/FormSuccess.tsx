import { BsCheckCircle } from "react-icons/bs";

interface Props {
  message?: string;
}

export default function FormSuccess({ message }: Props) {
  if (!message) return null;

  return (
    <div className="bg-emerald-500/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald-500">
      <BsCheckCircle className="h-4 w-4" />
      {message}
    </div>
  );
}
