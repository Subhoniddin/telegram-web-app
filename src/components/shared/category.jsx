import { caregories } from "../../constants";
import { Button } from "../ui/button";
import DrawerCategory from "./drawer";
import Dropdown from "./dropdown";
function Category() {
  return (
    <div className="overflow-x-auto whitespace-nowrap scrollbar-hide">
      <div className="flex items-center space-x-3">
        <div>
          <Dropdown />
        </div>
        <DrawerCategory />
        {caregories.map((item, index) => (
          <Button
            key={index}
            variant={"secondary"}
            className="inline-block px-3 py-1 rounded-md"
          >
            {item}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default Category;
