import { client } from "./mongo";
import type { Collection } from "mongodb";

export interface Product {
  _id?: string;
  name: string;
  price: number;
  description?: string;
  image?: string;
}

export async function fetchProducts(): Promise<Product[]> {
  const collection: Collection<Product> = client.db("store").collection("products");
  const products = await collection.find({}).toArray();
  return products;
}
