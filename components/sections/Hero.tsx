"use client";

import { motion } from "framer-motion";
import { Download, ArrowDown } from "lucide-react";
import Button from "@/components/Button";

/**
 * Hero Section Component
 * 
 * First section visitors see:
 * - Name and title
 * - Brief introduction
 * - Call-to-action buttons
 * - Scroll indicator
 */
export default function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-primary-50/30 to-accent-50/30 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">
      <div className="max-w-4xl mx-auto text-center">
        {/* Animated greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-primary-600 dark:text-primary-400 font-medium mb-4"
        >
          Hello, I&apos;m
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          <span className="bg-gradient-to-r from-primary-600 via-accent-600 to-primary-600 bg-clip-text text-transparent animate-gradient">
            Nayana
          </span>
        </motion.h1>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl md:text-4xl font-semibold text-dark-700 dark:text-dark-300 mb-6"
        >
          Full Stack Developer & UI/UX Designer
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg md:text-xl text-dark-600 dark:text-dark-400 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          I create beautiful, functional, and user-centered digital experiences.
          Passionate about clean code, modern design, and innovative solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Button href="#contact" variant="primary" size="lg">
            Get In Touch
          </Button>
          <Button href="#projects" variant="outline" size="lg">
            View My Work
          </Button>
          <Button
            href="/resume.pdf"
            variant="secondary"
            size="lg"
            className="flex items-center gap-2"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="p-2 rounded-full bg-white dark:bg-dark-800 shadow-lg hover:shadow-xl transition-shadow"
            aria-label="Scroll down"
          >
            <ArrowDown className="w-6 h-6 text-dark-700 dark:text-dark-300" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

