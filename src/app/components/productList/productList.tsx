'use client';
import React, { useState, useEffect } from 'react';
import Card from "../card/Card";
import styles from "./productList.module.css";
import { fetchProducts } from "@/app/services/client/products";


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
// export default async function ProductsList() {
//     const products = await fetchProducts();

//     return(
//         <div className={styles.container}>

//             {products.map((product: any) => (
//                 <Card
//                 key={product._id}
//                 image={product.image}
//                 title={product.title}
//                 description={product.description}
//                 price={product.price} />
//             ))}

//         </div>
//     );
// }

const ProductsList: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const data: Product[] = await fetchProducts();
                setProducts(data);
            } catch (err: unknown) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError('Unknown error');
                }
            } finally {
                setLoading(false);
            }
        };
        loadProducts();
    }, []);

    if (loading) return <div >Loading...</div>;
    if (error) return <div >Error: {error}</div>;

    return(
        <div className={styles.container}>

            {products.map((product: any) => (
                <Card
                key={product._id}
                image={product.image}
                title={product.title}
                description={product.description}
                price={product.price} />
            ))}

        </div>
    );
};
export default ProductsList;