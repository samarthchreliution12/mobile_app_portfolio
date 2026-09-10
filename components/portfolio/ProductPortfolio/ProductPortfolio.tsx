"use client";

import React, { useState } from "react";
import { Product } from "@/data/products/types";
import { products as initialProducts } from "@/data/products/products";
// import { ProductFilters } from "../ProductFilters/ProductFilters";
import { ProductGrid } from "../ProductGrid/ProductGrid";
import { ProductDetailsModal } from "../ProductDetailsModal/ProductDetailsModal";

export const ProductPortfolio: React.FC = () => {
  // Category filter state commented out temporarily
  // const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // All products rendered directly without category filter
  const filteredProducts = initialProducts;

  return (
    <section style={{ width: "100%" }}>
      {/* Product Responsive Grid */}
      <ProductGrid
        products={filteredProducts}
        onViewDetails={setSelectedProduct}
      />

      {/* Product Details Wizard & Modal Overlay */}
      <ProductDetailsModal
        key={selectedProduct ? selectedProduct.id : "modal"}
        product={selectedProduct}
        allProducts={initialProducts}
        onClose={() => setSelectedProduct(null)}
        onSelectProduct={setSelectedProduct}
      />
    </section>
  );
};

export default ProductPortfolio;
