"use client";

import React from "react";
import styles from "./ProductFilters.module.css";

interface ProductFiltersProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

export const ProductFilters: React.FC<ProductFiltersProps> = ({
  categories,
  activeCategory,
  onSelectCategory,
}) => {
  if (!categories || categories.length === 0) return null;

  const allCategories = ["All", ...categories];

  return (
    <nav
      aria-label="Product categories filter"
      className={styles.filterNav}
    >
      {allCategories.map((category) => {
        const isActive = activeCategory === category;
        return (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            type="button"
            className={`${styles.filterButton} ${
              isActive ? styles.filterButtonActive : ""
            }`}
            aria-pressed={isActive}
          >
            {category}
          </button>
        );
      })}
    </nav>
  );
};

export default ProductFilters;
