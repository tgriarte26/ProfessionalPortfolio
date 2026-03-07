import styles from './Navbar.module.css';

export default function NavBar() {
  return (
    <div className={styles.container}>
      <li className={styles.name}><a href="/">trev.</a></li>
      <header className={styles.navContainer}>
        <li><a href="/">home</a></li>
        <li><a href="/creative">creating</a></li>
        <li><a href="/games">games</a></li>
      </header>
    </div>
  )
}