"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Product } from "@/data/products/types";
import styles from "./ProductDetailsModal.module.css";

interface ProductDetailsModalProps {
  product: Product | null;
  allProducts?: Product[];
  onClose: () => void;
  onSelectProduct?: (product: Product) => void;
}

export const ProductDetailsModal: React.FC<ProductDetailsModalProps> = ({
  product,
  onClose,
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (product) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [product]);

  // Handle ESC key press
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  if (!product) return null;

  const platformText =
    product.platform.length === 2
      ? "Android & iOS"
      : product.platform.join(", ");

  const steps = [
    { number: "01", title: "Overview" },
    { number: "02", title: "Features & Tech" },
  ];

  return (
    <div
      className={styles.modalBackdrop}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
    >
      {/* Centered Modal Container */}
      <div
        className={styles.modalContainer}
        onClick={(e) => e.stopPropagation()}
      >
        {/* TOP MODAL BAR: Header Title & Close Button */}
        <div className={styles.topBar}>
          <div style={{ fontSize: "0.875rem", fontWeight: 600, color: "#64748b" }}>
            Project Quick View
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className={styles.closeButton}
            aria-label="Close modal"
          >
            <svg
              style={{ width: "1.25rem", height: "1.25rem" }}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* MODAL HEADER: App Meta Banner (Light Theme) */}
        <div className={styles.modalHeader}>
          <div className={styles.headerMeta}>
            {/* Logo */}
            <div className={styles.logoWrapper}>
              <Image
                src={product.logo}
                alt={`${product.title} Logo`}
                width={80}
                height={80}
                className={styles.logoImage}
              />
            </div>

            {/* Title & Tagline */}
            <div style={{ flexGrow: 1 }}>
              <div className={styles.badgesRow}>
                <span className={styles.categoryTag}>
                  {product.category}
                </span>
                <span className={styles.platformTag}>
                  {platformText}
                </span>
              </div>
              <h2 id="modal-product-title" className={styles.modalTitle}>
                {product.title}
              </h2>
              <p className={styles.modalTagline}>
                {product.shortDescription}
              </p>
            </div>
          </div>

          {/* STEP INDICATOR WIZARD BAR */}
          <div className={styles.wizardBar}>
            {steps.map((step, idx) => {
              const stepNum = idx + 1;
              const isActive = currentStep === stepNum;
              return (
                <React.Fragment key={step.number}>
                  <button
                    onClick={() => setCurrentStep(stepNum)}
                    className={`${styles.wizardStepButton} ${
                      isActive ? styles.wizardStepButtonActive : ""
                    }`}
                  >
                    <span>{step.number}</span>
                    <span>{step.title}</span>
                  </button>
                  {idx < steps.length - 1 && (
                    <span className={styles.stepArrow}>→</span>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* MODAL BODY (Scrollable Content Area) */}
        <div className={styles.modalBody}>
          {/* STEP 1 CONTENT: OVERVIEW & PROJECT DETAILS */}
          {currentStep === 1 && (
            <div>
              <section>
                <h3 className={styles.sectionTitle}>
                  <svg
                    className={styles.sectionIcon}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Overview
                </h3>
                <p className={styles.overviewBox}>
                  {product.description}
                </p>
              </section>

              {/* PROJECT INFORMATION METADATA */}
              <section>
                <h3 className={styles.sectionTitle}>
                  <svg
                    className={styles.sectionIcon}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Project Details
                </h3>
                <div className={styles.projectGrid}>
                  <div className={styles.projectMetaCard}>
                    <span className={styles.metaLabel}>Industry</span>
                    <span className={styles.metaValue}>{product.industry}</span>
                  </div>
                  <div className={styles.projectMetaCard}>
                    <span className={styles.metaLabel}>Platform</span>
                    <span className={styles.metaValue}>{platformText}</span>
                  </div>
                  <div className={styles.projectMetaCard}>
                    <span className={styles.metaLabel}>Application Type</span>
                    <span className={styles.metaValue}>{product.applicationType}</span>
                  </div>
                </div>
              </section>
            </div>
          )}

          {/* STEP 2 CONTENT: FEATURES & TECHNOLOGY */}
          {currentStep === 2 && (
            <div>
              {/* KEY FEATURES */}
              <section style={{ marginBottom: "1.5rem" }}>
                <h3 className={styles.sectionTitle}>
                  <svg
                    className={styles.sectionIcon}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Key Features
                </h3>
                {product.featureGroups && product.featureGroups.length > 0 ? (
                  <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    {product.featureGroups.map((group, idx) => (
                      <div key={idx} className={styles.featureCard} style={{ flexDirection: "column", alignItems: "flex-start", gap: "0.5rem", padding: "1rem" }}>
                        <div style={{ fontWeight: "700", color: "#0f172a", fontSize: "0.9375rem" }}>
                          {group.title}
                        </div>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.375rem", width: "100%" }}>
                          {group.items.map((item, i) => (
                            <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.875rem", color: "#475569" }}>
                              <span className={styles.checkBadge}>✓</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className={styles.featuresGrid}>
                    {product.features.map((feature, idx) => (
                      <div key={idx} className={styles.featureCard}>
                        <span className={styles.checkBadge}>✓</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                )}
              </section>

              {/* TECHNOLOGY STACK */}
              <section>
                <h3 className={styles.sectionTitle}>
                  <svg
                    className={styles.sectionIcon}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                  Technology Stack
                </h3>
                <div className={styles.techBox}>
                  {product.technologies.map((tech, idx) => (
                    <span key={idx} className={styles.techPill}>
                      {tech}
                    </span>
                  ))}
                </div>
              </section>
            </div>
          )}
        </div>

        {/* MODAL FOOTER */}
        <div className={styles.modalFooter}>
          <button
            onClick={onClose}
            type="button"
            className={styles.btnSecondary}
          >
            Close
          </button>

          <a
            href={`/product-details/${product.slug}`}
            className={styles.btnPrimary}
          >
            <span>View More Details</span>
            <svg
              style={{ width: "1rem", height: "1rem" }}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsModal;
