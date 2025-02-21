import { Briefcase, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { timelineData } from "../data/timeline";

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Experience & Education
        </motion.h2>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200 dark:bg-gray-700" />

          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className="w-1/2 pr-8 pl-8">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md ${
                      index % 2 === 0 ? "text-right" : "text-left"
                    }`}
                  >
                    <span className="inline-block px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300 rounded-full text-sm font-medium mb-2">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-indigo-600 dark:text-indigo-400 font-medium">
                      {item.company}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                      {item.description}
                    </p>
                  </motion.div>
                </div>

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center z-10"
                >
                  {item.icon === "work" ? (
                    <Briefcase className="w-6 h-6 text-white" />
                  ) : (
                    <GraduationCap className="w-6 h-6 text-white" />
                  )}
                </motion.div>

                {/* Empty space for the other side */}
                <div className="w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
