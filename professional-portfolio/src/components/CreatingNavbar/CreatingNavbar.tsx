import styles from "./CreatingNavbar.module.css";

export default function CreatingNavBar() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Creating</h1>
      <div className={styles.buttonContainer}>
        <button className={styles.button}>Video Editing</button>
        <button className={styles.button}>Electronics</button>
        <button className={styles.button}>Computer Vision</button>
      </div>
    </div>
  );
}
