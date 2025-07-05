import ProductCard from "@/components/cards/product";
import { products } from "@/constants";
import { useParams } from "react-router";

function Product() {
  const { id } = useParams();

  return (
    <div>
      {products?.map((el) => {
        return el.id === +id && <ProductCard product={el} />;
      })}
    </div>
  );
}

export default Product;
