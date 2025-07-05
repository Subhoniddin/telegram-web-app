import { Moon, MoonIcon, Sun, SunIcon } from "lucide-react";

import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useTheme } from "../provider/theme-provider";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return theme === "dark" ? (
    <Button variant={"ghost"} size={"icon"} onClick={() => setTheme("light")}>
      <MoonIcon />
    </Button>
  ) : (
    <Button variant={"ghost"} size={"icon"} onClick={() => setTheme("dark")}>
      <SunIcon />
    </Button>
  );
}
