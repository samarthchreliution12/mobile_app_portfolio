"use client";

import React from "react";
import Image from "next/image";
import { Product } from "@/data/products/types";
import styles from "./ProductCard.module.css";

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onViewDetails,
}) => {
  const platformText =
    product.platform.length === 2
      ? "Android & iOS"
      : product.platform.join(", ");

  return (
    <div
      onClick={() => onViewDetails(product)}
      className={styles.card}
    >
      <div>
        {/* Cover Image Container */}
        <div className={styles.imageContainer}>
          <Image
            src={product.coverImage}
            alt={`${product.title} Cover Thumbnail`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={styles.cardImage}
            priority={product.id <= 3}
          />
          
        </div>

        {/* Card Body */}
        <div className={styles.cardBody}>
          {/* Title */}
          <h3 className={styles.title}>
            {product.title}
          </h3>

          {/* Platform Badge */}
          <div className={styles.platformBadgeContainer}>
            <span className={styles.platformBadge}>
              <svg
                className={styles.platformIcon}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              {platformText}
            </span>
          </div>

          {/* Short Description */}
          <p className={styles.shortDescription}>
            {product.shortDescription}
          </p>
        </div>
      </div>

      {/* Card Footer CTA */}
      <div className={styles.cardFooter}>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onViewDetails(product);
          }}
          type="button"
          className={styles.ctaButton}
          aria-label={`View details for ${product.title}`}
        >
          <span>View Details</span>
          <svg
            className={styles.arrowIcon}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
