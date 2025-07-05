import { ArrowUpDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

function Dropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80 px-3 py-2 h-full rounded-lg">
          <ArrowUpDown size={"18"} />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Filterlash</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Umumiy</DropdownMenuItem>
        <DropdownMenuItem>yangilar</DropdownMenuItem>
        <DropdownMenuItem>narx bo'yicha</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default Dropdown;
