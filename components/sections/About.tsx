"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";

/**
 * About Section Component
 * 
 * Displays:
 * - Personal introduction
 * - Professional background
 * - Image (optional)
 * - Key highlights
 */
export default function About() {
  const highlights = [
    "1+ Years of Experience",
    "15+ Projects Completed",
    "Full Stack Expertise",
    "UI/UX Design Skills",
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-dark-900">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="About Me"
          subtitle="Get to know more about my background and passion for development"
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl border border-primary-100 dark:border-primary-800 bg-dark-100 dark:bg-dark-800">
              <Image
                src="/profile.jpeg"
                alt="Nayana"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
            </div>
            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/20 to-accent-600/20 rounded-2xl -z-10 transform rotate-6" />
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-dark-900 dark:text-dark-50">
              Passionate Developer & Creative Problem Solver
            </h3>
            <p className="text-lg text-dark-600 dark:text-dark-400 leading-relaxed">
              I&apos;m a passionate Developer & Creative Problem Solver with 1 year of experience in
              Frontend and Full Stack Development. I enjoy building responsive, user-friendly,
              and scalable web applications using modern technologies like React.js, JavaScript,
              HTML, CSS, Node.js, Express.js, and MongoDB. I&apos;m dedicated to creating innovative
              digital solutions, enhancing user experiences, and continuously learning new
              technologies to solve real-world challenges.
            </p>

            <p className="text-lg text-dark-600 dark:text-dark-400 leading-relaxed">
              My expertise includes modern JavaScript frameworks, responsive design, and
              creating seamless user experiences. I&apos;m always eager to learn new technologies
              and take on challenging projects that push my boundaries.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg border border-primary-200 dark:border-primary-800"
                >
                  <p className="font-semibold text-primary-700 dark:text-primary-300">
                    {highlight}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

