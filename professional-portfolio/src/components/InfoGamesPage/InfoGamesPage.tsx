import styles from "./InfoGamesPage.module.css";
import Link from "next/link";

export default function InfoGamesPage() {
  return (
    <div>
      <div className={styles.page}>
        <h1 className={styles.title}>Games</h1>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <Link href="https://pokemon-type-battle.vercel.app/" className={styles.cardTitle}>Pokémon Type Battle</Link>
          </div>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Basketball Shootout</h2>
          </div>

        </div>
      </div>
    </div>
  );
}
