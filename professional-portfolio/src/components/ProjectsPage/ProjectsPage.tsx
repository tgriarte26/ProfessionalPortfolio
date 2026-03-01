import styles from "./ProjectsPage.module.css";

export default function ProjectsPage() {
  return (
    <div className={styles.page}>
      <h1 className={styles.subheader}>Projects</h1>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>PlsReadMe</h2>
          <p className={styles.cardDescription}>A modern markdown editor built for developers to create appealing and professional README files for their Github repositories.</p>
        </div>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>South Bay Volunteer Circle</h2>
          <p className={styles.cardDescription}>Connecting high school students across the South Bay with meaningful volunteer and internship opportunities to drive positive change in their communities.</p>
        </div>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>StackPera</h2>
          <p className={styles.cardDescription}>A financial tracking tool designed to help poker fnatics mangage buy-ins and monitor profits.</p>
        </div>
        
      </div>
    </div>
  )
}