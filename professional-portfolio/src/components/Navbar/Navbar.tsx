import styles from './Navbar.module.css';

export default function NavBar() {
  return (
    <div className={styles.container}>
      <li className={styles.name}><a href="#about">trev.</a></li>
      <header className={styles.navContainer}>
        <li><a href="#about">about</a></li>
        <li><a href="#projects">projects</a></li>
        <li><a href="#experience">experience</a></li>
        <li><a href="#games">games</a></li>
      </header>
    </div>
  )
}