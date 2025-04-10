import { Product } from "@/types/product";
import { products } from "@/data/productsNew";

export const getAllProduct = async (): Promise<Product[]> => {
  return new Promise((resolve, rejects) => {
    return setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};
