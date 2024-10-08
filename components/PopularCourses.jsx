"use client";
import React, { useState } from "react";
import styles from "../styles/carousel.module.scss";
import Image from "next/image";
import previousDisabled from "../public/images/previous-disabled.svg";
import previousEnabled from "../public/images/previous-enabled.svg";
import nextDisabled from "../public/images/next-disabled.svg";
import nextEnabled from "../public/images/next-enabled.svg";
import { motion } from "framer-motion";
import PricingPlan from "../data/pricingPlans.json";

const Carousel = () => {
  // image index state
  const [activeIndex, setActiveIndex] = useState(0);

  // transition direction state
  const [transitionDirection, setTransitionDirection] = useState("next");

  // function to handle next button click
  const handleNext = () => {
    setTransitionDirection("next");
    setActiveIndex((prevIndex) =>
      prevIndex === PricingPlan.length - 1 ? prevIndex : prevIndex + 1
    );
  };

  // function to handle previous button click
  const handlePrevious = () => {
    setTransitionDirection("previous");
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? prevIndex : prevIndex - 1
    );
  };

  // defining text animation
  const textVariants = {
    hidden: {
      opacity: 0,
      x: transitionDirection === "next" ? 100 : -100,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  // defining stagger text effect
  const textContainerVariant = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <div className={styles.carouselContainer}>
      <motion.div
        className={styles.contentContainer}
        key={activeIndex}
        variants={textContainerVariant}
        initial="hidden"
        animate="visible"
      >
        <div className={styles.titleContainer}>
          <motion.h1 variants={textVariants}>
            {PricingPlan[activeIndex].title}
          </motion.h1>
        </div>
        <div className={styles.descriptionContainer}>
          <motion.p variants={textVariants}>
            {PricingPlan[activeIndex].intro}
          </motion.p>
        </div>
        <div className={styles.buttonContainer}>
          <button>Learn More</button>
        </div>
      </motion.div>
      <div className={styles.imagesContainer}>
        {PricingPlan.map((plan, index) => (
          <motion.div
            key={index}
            className={styles[`imageContainer${index}`]} // You can style these containers dynamically in SCSS
            animate={{
              opacity: activeIndex === index ? 1 : 0.5,
              x: activeIndex === index ? "0" : "96px",
              scale: activeIndex === index ? 1 : 0.8,
            }}
            transition={{
              duration: 0.5, // Animation duration in seconds
              ease: "easeInOut", // Easing function for the animation
            }}
          >
            <Image
              className={styles[`image${index}`]}
              alt={plan.alt}
              src={plan.image}
              width={500} // adjust size as needed
              height={500} // adjust size as needed
            />
          </motion.div>
        ))}
        <div className={styles.controls}>
          <button
            className={
              activeIndex !== 0
                ? `${styles.previousContainer}`
                : `${styles.disabled}`
            }
            onClick={handlePrevious}
          >
            <Image
              src={activeIndex !== 0 ? previousEnabled : previousDisabled}
              alt="previous icon"
              className={styles.previous}
            />
          </button>
          <button
            className={
              activeIndex !== PricingPlan.length - 1
                ? `${styles.nextContainer}`
                : `${styles.disabled}`
            }
            onClick={handleNext}
          >
            <Image
              src={
                activeIndex !== PricingPlan.length - 1
                  ? nextEnabled
                  : nextDisabled
              }
              alt="next icon"
              className={styles.next}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
