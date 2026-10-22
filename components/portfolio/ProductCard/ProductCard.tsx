"use client";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products/types";
import styles from "./ProductCard.module.css";
interface ProductCardProps { product: Product; onViewDetails: (product: Product) => void; }
export function ProductCard({ product, onViewDetails }: ProductCardProps) {
  return <article className={styles.card}>
    <Link href={`/product-details/${product.slug}`} className={`${styles.visual} ${styles[`tone${product.id % 4}`]}`} aria-label={`Explore ${product.title}`}>
      <span className={styles.category}>{product.category}</span><span className={styles.open}>↗</span>
      <div className={styles.phone}><Image src={product.screenshots[0]} alt={`${product.title} application preview`} fill sizes="180px" className={styles.screen}/></div>
      {product.screenshots[1] && <div className={styles.secondPhone}><Image src={product.screenshots[1]} alt={`${product.title} additional screen`} fill sizes="150px" className={styles.screen}/></div>}
    </Link>
    <div className={styles.body}><div className={styles.heading}><Image src={product.logo} width={38} height={38} alt="" className={styles.logo}/><div><h3><Link href={`/product-details/${product.slug}`}>{product.title}</Link></h3><span className={styles.platform}>{product.platform.join(" / ")}</span></div></div><p>{product.shortDescription}</p><div className={styles.actions}><Link href={`/product-details/${product.slug}`}>Explore application <span>↗</span></Link><button type="button" onClick={()=>onViewDetails(product)} aria-label={`Quick view of ${product.title}`}>Quick view</button></div></div>
  </article>;
}
export default ProductCard;
