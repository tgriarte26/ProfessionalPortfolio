"use client"
import styles from "./CreatingNavbar.module.css";
import { useState, useRef } from "react";
import Image from "next/image";

export default function CreatingNavBar() {
  const [active, setActive] = useState("video");
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Creating</h1>
      <div className={styles.buttonContainer}>
        <button className={`${styles.button} ${active === "video" ? styles.active : ""}`} onClick={() => setActive("video")}>Video Editing</button>
        <button className={`${styles.button} ${active === "electronics" ? styles.active : ""}`} onClick={() => setActive("electronics")}>Electronics</button>
      </div>
      <div>
        {active === "video" && <div>
        <div className={styles.page}>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <h2 className={styles.cardTitle}>bball highlights</h2>
              <video controls className={styles.videoCard}>
                <source src="/videos/bball-highlights.mp4" type="video/mp4"/>
              </video>
              <p className={styles.cardDescription}>
                Basketball at Sur La Brea Park
              </p>
              <div className={styles.projectButtons}>
                <a
                  href="https://github.com/tgriarte26/PlsReadMe"
                  target="_blank"
                  onMouseEnter={() => setHovered("github1")}
                  onMouseLeave={() => setHovered(null)}
                >
                </a>
              </div>
            </div>
            <div className={styles.card}>
              <h2 className={styles.cardTitle}>The Story of Rama</h2>
              <video controls className={styles.videoCard}>
                <source src="/videos/thestoryoframa.mp4" type="video/mp4"/>
              </video>
              <p className={styles.cardDescription}>
                Senior Theology project recorded at Sur La Brea Park
              </p>
              <div className={styles.projectButtons}>
                <a
                  href="https://github.com/tgriarte26/PlsReadMe"
                  target="_blank"
                  onMouseEnter={() => setHovered("github1")}
                  onMouseLeave={() => setHovered(null)}
                >
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>}
        {active === "electronics" && <div>
        <div className={styles.page}>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <h2 className={styles.cardTitle}>Arduino Project #1</h2>

              <p className={styles.cardDescription}>
                Turned on an led light
              </p>
              <div className={`${styles.projectButtons} gap-4`}>
              </div>
            </div>
          </div>
        </div>
      </div>}
      </div>
    </div>
  );
}
