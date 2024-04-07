"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import useSectionInView from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        With a solid foundation in Computer Science, having graduated with a 2:1
        in{" "}
        <span className="font-medium">Computer Science and Mathematics </span>{" "}
        at Aston University, and over two years of proven experience, I bring a
        dynamic blend of technical proficiency and problem-solving acumen to the
        table. As a highly motivated and hardworking individual, achieving
        excellent GCSEs and A Levels at one of the top grammar schools has been
        a significant achievement. Specializing in{" "}
        <span className="font-medium">JavaScript</span> and its supporting
        languages/libraries/frameworks I have honed my skills to tackle
        real-world challenges effectively. My tenure at Vodafone has not only
        fortified my technical ability but has also provided me with invaluable
        insights into industry-standard development practices for which I'm
        seeking an opportunity to apply and contribute to the dynamic growth
        trajectory of a forward-thinking enterprise like yours.
      </p>
    </motion.section>
  );
}
