import styles from "./InfoGamesPage.module.css";
import Link from "next/link";

export default function InfoGamesPage() {
  return (
    <div>
      <div className={styles.page}>
        <h1 className={styles.title}>Games</h1>
        <div className={styles.cardContainer}>
          <div
            className={`${styles.card} ${styles.pokemonTypeBattleContainer}`}
          >
            <Link
              href="https://pokemon-type-battle.vercel.app/"
              className={styles.cardTitle}
              target="_blank"
            >
              Pokémon Type Battle
            </Link>
          </div>
          <div className={`${styles.card} ${styles.spendTheBudgetContainer}`}>
            <Link
              href="https://spend-the-budget.vercel.app/"
              className={styles.cardTitle}
              target="_blank"
            >
              Spend The Budget
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
