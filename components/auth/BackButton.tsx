import Link from "next/link";
import { Button } from "../ui/button";

interface Props {
  label: string;
  href: string;
}

export default function BackButton({ label, href }: Props) {
  return (
    <Button variant="link" className="font-normal w-full" size="sm" asChild>
      <Link href={href}>{label}</Link>
    </Button>
  );
}
