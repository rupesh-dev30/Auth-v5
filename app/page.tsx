import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: "700",
});

export default function Home() {
  return (
    <main className="flex h-full items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-purple-500">
      <div className="space-y-6 text-center">
        <h1
          className={cn(
            "text-6xl font-semibold text-white drop-shadow-md",
            ubuntu.className
          )}
        >
          🔒 Authentication
        </h1>
        <p className="text-white text-lg">A simple Authentication Service</p>

        <Button variant="secondary" className="w-1/4 py-6 text-lg font-medium">
          Sign in
        </Button>
      </div>
    </main>
  );
}
