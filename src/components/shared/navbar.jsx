import { Search } from "lucide-react";
import { ModeToggle } from "./mode-toggle";

function Navbar() {
  return (
    <div className="flex items-center justify-between space-x-2 p-4">
      <div></div>
      <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold">
        Dokon-nomi
      </h1>
      <Search size={"18px"} />
      <ModeToggle />
    </div>
  );
}

export default Navbar;
