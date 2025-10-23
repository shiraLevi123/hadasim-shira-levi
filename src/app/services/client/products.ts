export interface Product {
    _id: string;
    title: string;
    price: number;
    inv: {
      [key: string]: number;
    };
    image: string;
    description: string;
  }
  
  export const fetchProducts = async (): Promise<Product[]> => {
    const response = await fetch('/api/products');
  
    if (!response.ok) {
      throw new Error('Failed to fetch products from SERVICE');
    }
  
    const data: Product[] = await response.json();
    return data;
  };