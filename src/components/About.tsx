import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div
            className="aspect-square rounded-2xl overflow-hidden group"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="/harman.png"
              alt="Harmanpreet Singh"
              className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
            />
          </motion.div>

          <motion.div className="space-y-6" variants={staggerContainer}>
            <motion.p
              className="text-lg text-gray-600 dark:text-gray-300"
              variants={fadeInUp}
            >
              I’m Harmanpreet Singh, a passionate and results-oriented MERN
              Stack Developer pursuing a Bachelor of Engineering in Computer
              Science at Chandigarh University. I specialize in building
              scalable and efficient web applications that solve real-world
              problems while ensuring seamless user experiences.
            </motion.p>

            <motion.p
              className="text-lg text-gray-600 dark:text-gray-300"
              variants={fadeInUp}
            >
              During my tenure at Stream Infotech, I played a key role in
              optimizing web applications, reducing load times by 30%, and
              enhancing security by developing a robust JWT decoder tool.
              Additionally, I contributed to UI/UX improvements by designing and
              implementing 10+ responsive UI components using Tailwind CSS,
              leading to a significant boost in user engagement.
            </motion.p>

            <motion.div
              className="grid grid-cols-2 gap-4 pt-4"
              variants={fadeInUp}
            >
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h3 className="font-bold text-xl text-gray-900 dark:text-white">
                  12+
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Projects Completed
                </p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h3 className="font-bold text-xl text-gray-900 dark:text-white">
                  280+
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  LeetCode Solutions
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
