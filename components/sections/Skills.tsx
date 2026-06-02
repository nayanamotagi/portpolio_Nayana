"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import skillsData from "@/data/skills.json";

/**
 * Skills Section Component
 * 
 * Displays skills organized by category:
 * - Frontend Technologies
 * - Backend Technologies
 * - Tools & Others
 * - Each skill shows icon and name
 */
export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-50 dark:bg-dark-800">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Skills & Technologies"
          subtitle="Technologies and tools I work with to bring ideas to life"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.categories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-white dark:bg-dark-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-dark-200 dark:border-dark-700"
            >
              <h3 className="text-2xl font-bold text-dark-900 dark:text-dark-50 mb-6 flex items-center gap-2">
                <span className="text-3xl">{category.icon}</span>
                {category.name}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-lg font-medium text-sm hover:bg-primary-200 dark:hover:bg-primary-900/50 transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

