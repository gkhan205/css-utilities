import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const Header = () => (
  <div className={cn("py-3 container bg-background drop-shadow-md")}>
    <nav className="flex gap-10 items-center">
      <Link href="/">
        <p className="text-5xl font-black text-primary">CUG</p>
        <p className="text-xs">CSS Utility Generator</p>
      </Link>

      <div className="ms-auto">
        <Input placeholder="Search Tool" className="w-96 dark:bg-gray-800" />
      </div>
    </nav>
  </div>
);
