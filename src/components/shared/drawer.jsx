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
      <DrawerContent className="bg-white p-6 w-full max-w-md h-full">
        <DrawerHeader>
          <DrawerTitle>
            {caregories.map((item, index) => (
              <Button
                key={index}
                variant="secondary"
                className="inline-block px-3 py-1 rounded-md"
              >
                {item}
              </Button>
            ))}
          </DrawerTitle>
          <DrawerDescription>Kerakli kategoriyani tanlang...</DrawerDescription>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
}

export default DrawerCategory;
