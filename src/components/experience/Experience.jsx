import React from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
//import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
   
      <div className={styles.content}>
        <div className={styles.skills}data-aos="fade-up" data-aos-delay="200">
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
  <img src={skill.imageSrc} alt={skill.title} />                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
       
      </div>
    </section>
  );
};