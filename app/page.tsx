import { ProductPortfolio } from "@/components/portfolio/ProductPortfolio/ProductPortfolio";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.mainWrapper}>
      {/* Page Header */}
      <header className={styles.header}>
        <div className={styles.pillTag}>
          Portfolio Showcase
        </div>
        <h1 className={styles.title}>
          Our Mobile Applications
        </h1>
        <p className={styles.description}>
          Explore our portfolio of mobile applications designed to solve real-world problems through intuitive experiences and scalable technology.
        </p>
      </header>

      {/* Main Portfolio Content */}
      <ProductPortfolio />

    </main>
  );
}
