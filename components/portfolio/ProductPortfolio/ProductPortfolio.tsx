"use client";
import React, { useState } from "react";
import { Product } from "@/data/products/types";
import { products } from "@/data/products/products";
import { ProductGrid } from "../ProductGrid/ProductGrid";
import { ProductDetailsModal } from "../ProductDetailsModal/ProductDetailsModal";
import styles from "./ProductPortfolio.module.css";
const groups = ["All applications", "Rewards & Loyalty", "Business Operations", "Industry Solutions"];
function groupFor(product: Product) {
  if ([1, 3].includes(product.id)) return groups[1];
  if ([2, 4, 7].includes(product.id)) return groups[2];
  return groups[3];
}
export function ProductPortfolio() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [active, setActive] = useState(groups[0]);
  const [query, setQuery] = useState("");
  const filtered = products.filter(p => (active === groups[0] || groupFor(p) === active) && `${p.title} ${p.category} ${p.shortDescription}`.toLowerCase().includes(query.toLowerCase()));
  return <section style={{width:"100%"}} aria-label="Application collection">
    <div className={styles.toolbar}><div className={styles.tabs} aria-label="Filter applications">{groups.map(group=><button key={group} type="button" aria-pressed={active===group} className={active===group?styles.active:""} onClick={()=>setActive(group)}>{group}{group===groups[0]&&<span>{products.length}</span>}</button>)}</div><label className={styles.search}><span aria-hidden="true">⌕</span><input aria-label="Search applications" type="search" placeholder="Search applications" value={query} onChange={e=>setQuery(e.target.value)}/></label></div>
    <p className={styles.count} aria-live="polite">Showing {filtered.length} of {products.length} applications</p>
    <ProductGrid products={filtered} onViewDetails={setSelectedProduct}/>
    <ProductDetailsModal key={selectedProduct?.id ?? "modal"} product={selectedProduct} onClose={()=>setSelectedProduct(null)}/>
  </section>;
}
export default ProductPortfolio;
