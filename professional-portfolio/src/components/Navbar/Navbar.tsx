import Link from 'next/link';
import styles from './Navbar.module.css';

export default function NavBar() {
  return (
    <div className={styles.container}>
      <li className={styles.name}><a href="/">trev.</a></li>
      <header className={styles.navContainer}>
        <li><Link href="/">home</Link></li>
        <li><Link href="/navPages/CreatingPage">creating</Link></li>
        <li><Link href="/navPages/GamesPage">games</Link></li>
      </header>
    </div>
  )
}