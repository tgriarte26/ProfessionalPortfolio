import styles from './Navbar.module.css';

export default function NavBar() {
  return (
    <div className={styles.container}>
      <h2 className={styles.name}>trev</h2>
      <div className={styles.navContainer}>
        <a>home</a>
        <a>about</a>
        <a>projects</a>
        <a>blogs</a>
        <a>games</a>
      </div>

    </div>
  )

}