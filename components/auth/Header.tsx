import { cn } from "@/lib/utils";
import { Ubuntu } from "next/font/google";

const unbuntu = Ubuntu({
  subsets: ["latin"],
  weight: "700",
});

interface Props {
  label: string;
}

export default function Header({ label }: Props) {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className={cn("text-3xl font-semibold", unbuntu.className)}>
        🔒 Authentication
      </h1>
      <p className="text-muted-foreground text-md">{label}</p>
    </div>
  );
}
