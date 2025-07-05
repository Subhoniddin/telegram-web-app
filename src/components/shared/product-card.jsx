import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card, CardContent } from "../ui/card";
import { Pagination } from "swiper/modules";

export default function ProductCard({ product }) {
  return (
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

      <CardContent className="p-3 space">
        <div className="text-sm font-semibold text-foreground">
          RUB {product.price}
          <span className="line-through text-muted-foreground ml-2 text-xs">
            RUB {product.oldPrice}
          </span>
        </div>
        <div className="text-sm text-foreground">{product.title}</div>
        <div className="text-xs text-muted-foreground">{product.color}</div>
      </CardContent>
    </Card>
  );
}
