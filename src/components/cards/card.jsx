import "swiper/css";
import "swiper/css/pagination";
import { Card, CardContent } from "../ui/card";
import { Pagination } from "swiper/modules";
import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { formatPrice } from "@/lib/utils";

function ProductsCard({ product }) {
  return (
    <Link to={`product/${product.id}`}>
      <Card className="w-full rounded-xl overflow-hidden p-0">
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="w-full"
        >
          {product?.images?.map((imge, i) => (
            <SwiperSlide key={i}>
              <img
                src={imge}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <CardContent className="p-3 space pt-0">
          <div className="text-sm font-semibold text-foreground">
            {formatPrice(product.price)}
            <span className="line-through text-muted-foreground ml-2 text-xs">
              {formatPrice(product.oldPrice)}
            </span>
          </div>
          <div className="text-sm text-foreground">{product.title}</div>
          <div className="text-xs text-muted-foreground">{product.color}</div>
        </CardContent>
      </Card>
    </Link>
  );
}

export default ProductsCard;
