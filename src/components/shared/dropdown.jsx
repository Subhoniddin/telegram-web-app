import { ArrowUpDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";

function Dropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"secondary"}>
          <ArrowUpDown size={"18"} />
        </Button>
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
