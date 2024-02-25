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
        BSc Final Year Student in{" "}
        <span className="font-medium">Computer Science and Mathematics </span>at
        Aston University currently working towards achieving a 2:1. A highly
        motivated and hardworking individual, achieving excellent GCSEs and A
        Levels at one of the top grammar schools. Looking to use my passion for
        technology and considerable experience within IT and programming for a
        graduate role in a{" "}
        <span className="font-medium">
          technological based corporate environment
        </span>
        . Having led a team in a business environment, I can carry many
        leadership qualities into this field. Applying my problem-solving and
        critical thinking skills gained from the mathematics modules helps to
        ensure the complex technological requirements from the customer are met.
        <span className="italic">
          {" "}
          Building technological relations between the user and the platform is
          quintessential to the success of this role, benefitted by my years of
          experience forming relationships.
        </span>{" "}
        Having the ability to deliver technical expertise through presentations
        and demonstrations will help customers understand the value of specific
        technologies to their company.
      </p>
    </motion.section>
  );
}
