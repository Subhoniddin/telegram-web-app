import { Input } from "../ui/input";

function Search() {
  return (
    <div>
      <Input
        className="p-3 pl-12 rounded-full tracking-wide"
        type={"text"}
        placeholder="search"
      />
    </div>
  );
}

export default Search;
