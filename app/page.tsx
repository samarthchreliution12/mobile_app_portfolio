import Image from "next/image";
import Link from "next/link";
import { ProductPortfolio } from "@/components/portfolio/ProductPortfolio/ProductPortfolio";
import { products } from "@/data/products/products";
import styles from "./page.module.css";

export default function Home() {
  const featured = products[0];
  return (
    <main className={styles.mainWrapper}>
      <nav className={styles.nav} aria-label="Main navigation">
        <Link href="/" className={styles.brand}><Image src="/brand/reliution-logo.png" alt="Reliution" width={414} height={94} className={styles.brandLogo} priority /></Link>
        <div className={styles.navLinks}><a href="#work">Our work</a><a href="#approach">Our approach</a></div>
        <a href="#work" className={styles.navCta}>Explore applications <span>↗</span></a>
      </nav>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <div className={styles.eyebrow}><span /> MOBILE APPLICATION PORTFOLIO</div>
          <h1>Everyday business.<br /><em>Extraordinary</em><br />mobile experiences.</h1>
          <p>From the field to the factory floor, explore applications that connect people, simplify operations, and bring business closer.</p>
          <a href="#work" className={styles.primary}>Discover our work <span>↗</span></a>
          <div className={styles.heroMeta}><span>Built for real workflows</span><span>Android & iOS</span></div>
        </div>
        <Link href={`/product-details/${featured.slug}`} className={styles.heroVisual} aria-label={`Explore ${featured.title}`}>
          <div className={styles.visualTop}><span>IN FOCUS / 01</span><span>↗</span></div>
          <div className={styles.orbit} />
          <div className={styles.phoneBack}><Image src={featured.screenshots[1] || featured.screenshots[0]} alt="P Partner rewards interface" fill sizes="230px" /></div>
          <div className={styles.phoneFront}><Image src={featured.screenshots[0]} alt="P Partner application screen" fill sizes="230px" priority /></div>
          <div className={styles.visualCaption}><div><span>REWARDS & LOYALTY</span><h2>{featured.title}</h2></div><span className={styles.circleArrow}>↗</span></div>
        </Link>
      </section>
      <section className={styles.trust} aria-label="Portfolio overview"><div><strong>09</strong><span>Applications in our portfolio</span></div><div><strong>02</strong><span>Mobile platforms</span></div><p>Different industries.<br /><strong>One focus: useful software.</strong></p></section>
      <section id="work" className={styles.work}>
        <div className={styles.sectionHeader}><div><span className={styles.label}>THE COLLECTION</span><h2>Small screens.<br />Meaningful impact.</h2></div><p>A closer look at the products we build<br />and the problems they help solve.</p></div>
        <ProductPortfolio />
      </section>
      <section id="approach" className={styles.approach}><span className={styles.label}>OUR APPROACH</span><h2>Built around the way<br />your business works.</h2><div className={styles.principles}><article><span>01 / UNDERSTAND</span><h3>Start with the workflow.</h3><p>Give every screen a clear purpose, grounded in the tasks people need to complete.</p></article><article><span>02 / SIMPLIFY</span><h3>Make complexity feel simple.</h3><p>Bring orders, rewards, information, and daily operations into focused mobile experiences.</p></article><article><span>03 / CONNECT</span><h3>Keep business moving.</h3><p>Connect teams and customers with the information they need, wherever work happens.</p></article></div></section>
      <footer className={styles.footer}><Link href="/" className={styles.brand}><Image src="/brand/reliution-logo.png" alt="Reliution" width={414} height={94} className={styles.brandLogo} /></Link><p>Thoughtful applications. Real-world possibilities.</p><a href="#work">Back to our work ↑</a></footer>
    </main>
  );
}
