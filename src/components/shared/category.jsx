import { Link } from "react-router";
import { Button } from "../ui/button";
import DrawerCategory from "./drawer";
import Dropdown from "./dropdown";
function Category({ categories }) {
  return (
    <div className="overflow-x-auto whitespace-nowrap scrollbar-hide">
      <div className="flex items-center space-x-3">
        <div>
          <Dropdown />
        </div>
        <DrawerCategory categories={categories} />
        {categories?.map((item, index) => (
          <Link to={`category/${item}`} key={index}>
            <Button
              variant={"secondary"}
              className="inline-block px-3 py-1 rounded-md"
            >
              {item}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Category;
