import { Button } from "../ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";

function DrawerCategory({ categories }) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="secondary">Kategoriyalar</Button>
      </DrawerTrigger>
      <DrawerContent className="bg-white bg-background w-full">
        <DrawerTitle className={"flex flex-col items-start py-5"}>
          {categories?.map((item, index) => (
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
