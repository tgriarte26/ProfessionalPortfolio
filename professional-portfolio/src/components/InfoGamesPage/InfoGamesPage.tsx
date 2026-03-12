import styles from "./InfoGamesPage.module.css";
import Image from "next/link";

export default function InfoGamesPage() {
  return (
    <div>
      <div className={styles.page}>
        <h1 className={styles.title}>Games</h1>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Pokémon Types</h2>
          </div>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Pokémon Higher or Lower Stats</h2>
          </div>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Wordle</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
