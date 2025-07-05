import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function getTip(products, tip) {
  let obj = {};
  products.forEach((el) => {
    if (obj[el[tip]]) {
      obj[el[tip]] += 1;
    } else {
      obj[el[tip]] = 1;
    }
  });
  return obj;
}

export function formatPrice(price) {
  if (!price || price === 0) return "0 so'm";
  const formattedPrice = price.toLocaleString("uz-UZ");
  return `${formattedPrice} so'm`;
}
