import {
  ListResponse,
  ProductResponse,
  ProductRequest,
  SingleResponse,
} from "@/models";
import axiosClient from "./axiosClient";

export const productApi = {
  async getAllProducts(): Promise<ListResponse<ProductResponse>> {
    try {
      return await axiosClient.get(`/products`);
    } catch (error) {
      console.error("Error fetching product:", error);
      throw error;
    }
  },

  async getProducts(productId: string): Promise<ListResponse<ProductResponse>> {
    try {
      return await axiosClient.get(`/products/${productId}`);
    } catch (error) {
      console.error("Error fetching product:", error);
      throw error;
    }
  },
  async createProduct(
    productData: ProductRequest
  ): Promise<SingleResponse<ProductResponse>> {
    try {
      return await axiosClient.post("/products", productData);
    } catch (error) {
      console.error("Error creating product:", error);
      throw error;
    }
  },
  async updateProduct(
    productId: string | number,
    productData: ProductRequest
  ): Promise<SingleResponse<ProductResponse>> {
    try {
      return await axiosClient.put(`/products/${productId}`, productData);
    } catch (error) {
      console.error("Error updating product:", error);
      throw error;
    }
  },

  async deleteProduct(productId: string) {
    try {
      return await axiosClient.delete(`/products/${productId}`);
    } catch (error) {
      console.error("Error deleting product:", error);
      throw error;
    }
  },
};
