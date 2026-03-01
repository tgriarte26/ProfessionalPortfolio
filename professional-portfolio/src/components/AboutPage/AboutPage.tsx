import styles from "./AboutPage.module.css";

export default function AboutPage() {
  return (
    <div>
      <h1 className={styles.name}>Trevor Raphael Griarte</h1>
      <h2 className={styles.major}>
        Electrical Engineering & Computer Sciences (EECS) Major
      </h2>
      <div className={styles.divider}></div>
      <h1 className={styles.subheader}>About Me</h1>
      <p className={styles.aboutMe}>
        I am an 18 year old student at El Camino College with a strong focus on
        software and hardware development. I build full-stack applications using
        Next.js, TypeScript, and Python.
      </p>
      <div className={styles.divider}></div>
      
    </div>
  );
}
