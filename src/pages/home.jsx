import Category from "../components/shared/category";
import Navbar from "../components/shared/navbar";
import ProductCard from "../components/shared/product-card";
import { products } from "../constants";

function Home() {
  return (
    <div className="container mx-auto p-2">
      <Navbar />
      <Category />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 mt-4 ">
        {products?.map((item, i) => (
          <ProductCard product={item} key={i} />
        ))}
      </div>
    </div>
  );
}

export default Home;
