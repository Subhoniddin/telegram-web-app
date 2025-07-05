import Category from "@/components/shared/category";
import Search from "@/components/shared/search";
import { SearchIcon } from "lucide-react";
import { useParams } from "react-router";

const categories = ["ayollar", "erkaklar"];

function CategoryPage() {
  const { id } = useParams();

  return (
    <div className="p-2">
      <div className="mt-3 relative">
        <SearchIcon
          size={16}
          className="absolute top-1/2 transform -translate-1/2 left-8 text-white/50"
        />
        <Search />
      </div>
      <h2 className="my-5 text-2xl font-bold tracking-wider">{id}</h2>
      <Category categories={categories} />
    </div>
  );
}

export default CategoryPage;
