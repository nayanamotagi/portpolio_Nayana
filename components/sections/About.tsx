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
    "5+ Years of Experience",
    "50+ Projects Completed",
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
            <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop"
                alt="Nayana"
                fill
                className="object-cover"
              />
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
              I&apos;m a full-stack developer with a passion for creating beautiful, functional,
              and user-centered digital experiences. With over 5 years of experience in web
              development, I&apos;ve worked on various projects ranging from small business websites
              to complex web applications.
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

