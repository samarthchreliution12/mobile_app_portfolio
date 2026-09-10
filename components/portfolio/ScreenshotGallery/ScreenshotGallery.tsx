"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import styles from "./ScreenshotGallery.module.css";

interface ScreenshotGalleryProps {
  screenshots: string[];
  productTitle: string;
}

export const ScreenshotGallery: React.FC<ScreenshotGalleryProps> = ({
  screenshots,
  productTitle,
}) => {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(
    null
  );

  const handleNext = useCallback(() => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) =>
        prev !== null ? (prev + 1) % screenshots.length : null
      );
    }
  }, [activeLightboxIndex, screenshots.length]);

  const handlePrev = useCallback(() => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) =>
        prev !== null
          ? (prev - 1 + screenshots.length) % screenshots.length
          : null
      );
    }
  }, [activeLightboxIndex, screenshots.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === "Escape") setActiveLightboxIndex(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeLightboxIndex, handleNext, handlePrev]);

  if (!screenshots || screenshots.length === 0) {
    return <p style={{ color: "#64748b", fontSize: "0.875rem", fontStyle: "italic" }}>No screenshots available.</p>;
  }

  return (
    <div>
      {/* Screenshot Grid */}
      <div className={styles.galleryGrid}>
        {screenshots.map((src, index) => (
          <div
            key={index}
            onClick={() => setActiveLightboxIndex(index)}
            className={styles.galleryItem}
          >
            <Image
              src={src}
              alt={`${productTitle} Screenshot ${index + 1}`}
              fill
              sizes="(max-width: 640px) 45vw, (max-width: 768px) 30vw, 22vw"
              className={styles.galleryImage}
            />
            <div className={styles.overlay}>
              <span className={styles.zoomIcon}>
                <svg
                  style={{ width: "1.25rem", height: "1.25rem" }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                  />
                </svg>
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* LIGHTBOX OVERLAY */}
      {activeLightboxIndex !== null && (
        <div
          className={styles.lightboxOverlay}
          onClick={() => setActiveLightboxIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${productTitle} Screenshot Lightbox`}
        >
          {/* Main Lightbox Card */}
          <div
            className={styles.lightboxContainer}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Toolbar */}
            <div className={styles.lightboxHeader}>
              <span className={styles.counter}>
                {activeLightboxIndex + 1} / {screenshots.length}
              </span>
              <button
                onClick={() => setActiveLightboxIndex(null)}
                className={styles.closeButton}
                aria-label="Close Lightbox"
              >
                <svg
                  style={{ width: "1.5rem", height: "1.5rem" }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Image Preview Container */}
            <div className={styles.imagePreviewWrapper}>
              <div className={styles.previewContainer}>
                <Image
                  src={screenshots[activeLightboxIndex]}
                  alt={`${productTitle} Screenshot Large View ${
                    activeLightboxIndex + 1
                  }`}
                  fill
                  className={styles.previewImage}
                  priority
                />
              </div>

              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className={`${styles.navButton} ${styles.prevButton}`}
                aria-label="Previous Screenshot"
              >
                <svg
                  style={{ width: "1.5rem", height: "1.5rem" }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className={`${styles.navButton} ${styles.nextButton}`}
                aria-label="Next Screenshot"
              >
                <svg
                  style={{ width: "1.5rem", height: "1.5rem" }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            {/* Bottom Caption */}
            <p className={styles.caption}>
              {productTitle} • App Screenshot Preview
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScreenshotGallery;
