import { Button } from "../ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { caregories } from "../../constants";

function DrawerCategory() {
  return (
    <Drawer>
      <DrawerTrigger>
        <p className="bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80 h-9 px-3 py-1 rounded-lg">
          Kategoriyalar
        </p>
      </DrawerTrigger>
      <DrawerContent className="bg-white bg-background w-full max-w-md">
        <DrawerTitle className={"flex flex-col items-start py-5"}>
          {caregories.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              className="border-b py-6 mb-1 text-2xl"
            >
              {item}
            </Button>
          ))}
        </DrawerTitle>
      </DrawerContent>
    </Drawer>
  );
}

export default DrawerCategory;
