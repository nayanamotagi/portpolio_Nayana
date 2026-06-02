"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, GraduationCap, Briefcase } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import experienceData from "@/data/experience.json";

/**
 * Experience Section Component
 * 
 * Displays:
 * - Work experience timeline
 * - Education timeline
 * - Each entry shows date, location, and description
 */
export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-50 dark:bg-dark-800">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Experience & Education"
          subtitle="My professional journey and educational background"
        />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <h3 className="text-2xl font-bold text-dark-900 dark:text-dark-50 mb-8 flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              Work Experience
            </h3>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-800" />
              
              <div className="space-y-8">
                {experienceData.experience.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pl-16"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-4 top-2 w-4 h-4 bg-primary-600 dark:bg-primary-400 rounded-full border-4 border-white dark:border-dark-800" />
                    
                    <div className="bg-white dark:bg-dark-900 rounded-lg p-6 shadow-lg border border-dark-200 dark:border-dark-700">
                      <h4 className="text-xl font-bold text-dark-900 dark:text-dark-50 mb-2">
                        {exp.position}
                      </h4>
                      <p className="text-primary-600 dark:text-primary-400 font-semibold mb-3">
                        {exp.company}
                      </p>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-dark-600 dark:text-dark-400 mb-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                        {exp.location && (
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </span>
                        )}
                      </div>
                      
                      <p className="text-dark-600 dark:text-dark-400 leading-relaxed">
                        {exp.description}
                      </p>
                      
                      {exp.achievements && exp.achievements.length > 0 && (
                        <ul className="mt-4 space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2 text-dark-600 dark:text-dark-400">
                              <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-dark-900 dark:text-dark-50 mb-8 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-accent-600 dark:text-accent-400" />
              Education
            </h3>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-accent-200 dark:bg-accent-800" />
              
              <div className="space-y-8">
                {experienceData.education.map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pl-16"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-4 top-2 w-4 h-4 bg-accent-600 dark:bg-accent-400 rounded-full border-4 border-white dark:border-dark-800" />
                    
                    <div className="bg-white dark:bg-dark-900 rounded-lg p-6 shadow-lg border border-dark-200 dark:border-dark-700">
                      <h4 className="text-xl font-bold text-dark-900 dark:text-dark-50 mb-2">
                        {edu.degree}
                      </h4>
                      <p className="text-accent-600 dark:text-accent-400 font-semibold mb-3">
                        {edu.institution}
                      </p>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-dark-600 dark:text-dark-400 mb-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {edu.period}
                        </span>
                        {edu.location && (
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {edu.location}
                          </span>
                        )}
                      </div>
                      
                      {edu.description && (
                        <p className="text-dark-600 dark:text-dark-400 leading-relaxed">
                          {edu.description}
                        </p>
                      )}
                      
                      {edu.gpa && (
                        <p className="mt-2 text-sm font-semibold text-dark-700 dark:text-dark-300">
                          GPA: {edu.gpa}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

