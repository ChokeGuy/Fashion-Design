
type ProductType = {
  id: number | string;
  name: string;
  image: string;
  price: number;
  description: string;
  color: string;
  createdAt?: string;
  reactions: {
    thumbsUp: number;
    hooray: number;
    heart: number;
    rocket: number;
    eyes: number;
  };
};

type ProductRequest = Omit<ProductType, "id" | "reactions">;
type ProductResponse = ProductType ;

export type { ProductType, ProductRequest, ProductResponse };
