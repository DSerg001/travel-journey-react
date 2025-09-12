import { useState } from "react";
import { Link } from "react-router-dom";
import { getDescriptionById } from "../../data/contentDescription";
import styles from "./Slider.module.css";

import London from "../../assets/London.jpg";
import Tokio from "../../assets/Tokio.jpg";
import Venice from "../../assets/Venice.jpg";
import Santorini from "../../assets/Santorini.jpg";
import Paris from "../../assets/Paris.jpg";
import Bangkok from "../../assets/Bangkok.jpg";

const Slider = () => {
  const posts = [
    {
      id: 7,
      title: "Լոնդոնի շքեղությունը",
      location: "Լոնդոն",
      date: "Սեպտեմբերի 10, 2024",
      descriptionId: 7,
      imageUrl: London,
      source: "travel",
    },
    {
      id: 2,
      title: "Տոկիոյի ժամանակակից գեղեցկությունը",
      location: "Տոկիո",
      date: "Մարտի 10, 2024",
      descriptionId: 2,
      imageUrl: Tokio,
      source: "travel",
    },
    {
      id: 10,
      title: "Վենետիկի ջրային երջանկությունը",
      location: "Վենետիկ",
      date: "Մարտի 18, 2025",
      descriptionId: 10,
      imageUrl: Venice,
      source: "travel",
    },
    {
      id: 5,
      title: "Սանտորինիի արևածագը",
      location: "Սանտորինի",
      date: "Հուլիսի 12, 2024",
      descriptionId: 5,
      imageUrl: Santorini,
      source: "travel",
    },
    {
      id: 1,
      title: "Փարիզի հմայքը",
      location: "Փարիզ",
      date: "Հունիսի 15, 2024",
      descriptionId: 1,
      imageUrl: Paris,
      source: "travel",
    },
    {
      id: 12,
      title: "Բանգկոկի կոլորիտը",
      location: "Բանգկոկ",
      date: "Փետրվարի 20, 2025",
      descriptionId: 12,
      imageUrl: Bangkok,
      source: "travel",
    },
  ];

  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % posts.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + posts.length) % posts.length);
  };

  const getVisiblePosts = () => {
    let visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(posts[(index + i) % posts.length]);
    }
    return visible;
  };

  return (
    <div className={styles.sliderWrapper}>
      <button
        className={`${styles.navButton} ${styles.prev}`}
        onClick={prevSlide}
      >
        &#10094;
      </button>

      <div className={styles.sliderTrack}>
        {getVisiblePosts().map((post) => (
          <div key={post.id} className={styles.tripContainer}>
            <Link
              to={`/post/${post.source}/${post.id}`}
              className={styles.travelCard}
            >
              <div className={styles.imageWrapper}>
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{post.title}</h3>
                <p className={styles.cardLocation}>{post.location}</p>
                <p className={styles.cardDate}>{post.date}</p>
                <p className={styles.cardDescription}>
                  {getDescriptionById(post.descriptionId).slice(0, 70)}...
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <button
        className={`${styles.navButton} ${styles.next}`}
        onClick={nextSlide}
      >
        &#10095;
      </button>
    </div>
  );
};

export default Slider;
