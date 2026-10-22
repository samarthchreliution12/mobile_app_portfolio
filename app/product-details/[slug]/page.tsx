import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { products } from "@/data/products/products";
import { ScreenshotGallery } from "@/components/portfolio/ScreenshotGallery/ScreenshotGallery";
import styles from "./page.module.css";




interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) {
    return { title: "Product Not Found" };
  }
  return {
    title: `${product.title} | Mobile Application Portfolio`,
    description: product.shortDescription,
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const currentIndex = products.findIndex((p) => p.slug === slug);

  if (currentIndex === -1) {
    notFound();
  }

  const product = products[currentIndex];
  const prevProduct = currentIndex > 0 ? products[currentIndex - 1] : null;
  const nextProduct =
    currentIndex < products.length - 1 ? products[currentIndex + 1] : null;

  const platformText =
    product.platform.length === 2
      ? "Android & iOS"
      : product.platform.join(", ");



  return (
    <main className={styles.pageWrapper}>
      {/* Top Header Navigation Bar */}
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link href="/" className={styles.backLink}>
            <svg
              style={{ width: "1rem", height: "1rem" }}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <span>Back to Portfolio</span>
          </Link>

          <div className={styles.breadcrumbs}>
            <Link href="/" className={styles.breadcrumbLink}>
              Portfolio
            </Link>
            <span>/</span>
            <span className={styles.currentBreadcrumb}>{product.title}</span>
          </div>
        </div>
      </header>

      <article className={styles.container}>
        {/* HERO SECTION */}
        <section className={styles.heroCard}>
          <div className={styles.heroGrid}>
            {/* Left Content */}
            <div className={styles.heroLeft}>
              <div className={styles.logoRow}>
                {/* Logo */}
                <div className={styles.heroLogoWrapper}>
                  <Image
                    src={product.logo}
                    alt={`${product.title} Logo`}
                    width={80}
                    height={80}
                    className={styles.heroLogoImage}
                    priority
                  />
                </div>
                <div>
                  <div className={styles.badgesRow}>
                    <span className={styles.platformBadge}>
                      {platformText}
                    </span>
                  </div>
                  <h1 className={styles.heroTitle}>
                    {product.title}
                  </h1>
                </div>
              </div>

              <p className={styles.heroDescription}>
                {product.shortDescription}
              </p>

              {/* Action Buttons */}
              <div className={styles.heroActions}>
                <a href="#screenshots" className={styles.btnPrimary}>
                  <span>View Screenshots</span>
                </a>
                {product.links?.googlePlay && (
                  <a
                    href={product.links.googlePlay}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.appstoreBtn}
                  >
                    <span aria-hidden="true">▷</span>
                    <span>Google Play</span>
                  </a>
                )}
                {product.links?.appStore && (
                  <a
                    href={product.links.appStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.appstoreBtn}
                  >
                    <span aria-hidden="true">↗</span>
                    <span>App Store</span>
                  </a>
                )}
              </div>
            </div>

            {/* Right Hero Logo Image */}
            <div className={styles.heroRight}>
              <div className={styles.heroRightImageCard}>
                <Image
                  src={product.screenshots[0]}
                  alt={`${product.title} application preview`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className={styles.heroRightImage}
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* OVERVIEW SECTION */}
        <section className={styles.sectionCard}>
          <div className={styles.sectionPill}>
            Overview
          </div>
          <h2 className={styles.sectionTitle}>
            About {product.title}
          </h2>
          <p className={styles.sectionBodyText}>
            {product.description}
          </p>
        </section>

        {/* KEY FEATURES SECTION */}
        <section>
          <div style={{ marginBottom: "1rem" }}>
            <div className={styles.sectionPill} style={{ marginBottom: "0.5rem" }}>
              Core Capabilities
            </div>
            <h2 className={styles.sectionTitle}>
              Key Features
            </h2>
          </div>

          {product.featureGroups && product.featureGroups.length > 0 ? (
            <div className={styles.featureGroupsGrid}>
              {product.featureGroups.map((group, idx) => (
                <div key={idx} className={styles.featureGroupCard}>
                  <div className={styles.groupTitleRow}>
                    <span className={styles.groupNumberBadge}>
                      0{idx + 1}
                    </span>
                    <h3 className={styles.groupTitle}>
                      {group.title}
                    </h3>
                  </div>
                  <ul className={styles.groupList}>
                    {group.items.map((item, i) => (
                      <li key={i} className={styles.groupListItem}>
                        <span className={styles.checkBadge}>✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.featureGroupsGrid}>
              {product.features.map((feature, idx) => (
                <div key={idx} className={styles.featureGroupCard}>
                  <span className={styles.checkBadge}>✓</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* APP SCREENSHOTS SECTION */}
        <section id="screenshots">
          <div style={{ marginBottom: "1rem" }}>
            <div className={styles.sectionPill} style={{ marginBottom: "0.5rem" }}>
              Interface & Design
            </div>
            <h2 className={styles.sectionTitle}>
              App Screenshots
            </h2>
            <p style={{ fontSize: "0.875rem", color: "#64748b", margin: "0.25rem 0 0 0" }}>
              Click any image to launch the full-screen lightbox gallery preview.
            </p>
          </div>

          <div className={styles.sectionCard}>
            <ScreenshotGallery
              screenshots={product.screenshots}
              productTitle={product.title}
            />
          </div>
        </section>



        {/* BOTTOM PRODUCT NAVIGATION */}
        <nav aria-label="Product navigation" className={styles.bottomNav}>
          {prevProduct ? (
            <Link href={`/product-details/${prevProduct.slug}`} className={styles.navLink}>
              <svg
                style={{ width: "1rem", height: "1rem" }}
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
              <span>← {prevProduct.title}</span>
            </Link>
          ) : (
            <div style={{ opacity: 0, pointerEvents: "none" }} />
          )}

          <Link href="/" className={styles.centerBtn}>
            Back to Products
          </Link>

          {nextProduct ? (
            <Link href={`/product-details/${nextProduct.slug}`} className={styles.navLink}>
              <span>{nextProduct.title} →</span>
              <svg
                style={{ width: "1rem", height: "1rem" }}
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
            </Link>
          ) : (
            <div style={{ opacity: 0, pointerEvents: "none" }} />
          )}
        </nav>
      </article>
    </main>
  );
}
