"use client";

import React from "react";
import { Product } from "@/data/products/types";
import { ProductCard } from "../ProductCard/ProductCard";
import styles from "./ProductGrid.module.css";

interface ProductGridProps {
  products: Product[];
  onViewDetails: (product: Product) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  onViewDetails,
}) => {
  if (!products || products.length === 0) {
    return (
      <div className={styles.emptyState}>
        <p className={styles.emptyText}>
          No applications found matching the selected category.
        </p>
      </div>
    );
  }

  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onViewDetails={onViewDetails}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
