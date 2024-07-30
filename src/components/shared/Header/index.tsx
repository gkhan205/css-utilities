import Link from "next/link";

import { Input } from "@/components/ui/input";
import { ThemeSwitcher } from "@/components/shared/ThemeSwitcher";
import { cn } from "@/lib/utils";

export const Header = () => {
  return (
    <div className={cn("py-3 bg-background drop-shadow-md")}>
      <nav className="flex gap-10 items-center container">
        <Link href="/" aria-label="home navigation">
          <p className="text-5xl font-black text-primary">CUG</p>
          <p className="text-xs">CSS Utility Generator</p>
        </Link>

        <div className="ms-auto flex gap-5">
          <Input
            placeholder="Search Tool"
            className="w-96 dark:bg-gray-800 hidden md:block"
          />
          <ThemeSwitcher />
        </div>
      </nav>
    </div>
  );
};
