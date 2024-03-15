type ProductType = {
  id: number | string;
  name: string;
  image: string;
  price: number;
  description: string;
  color: string;
  createdAt?: string;
  slug: string;
};

type ProductRequest = Omit<ProductType, "id">;
type ProductResponse = ProductType;

export type { ProductType, ProductRequest, ProductResponse };
