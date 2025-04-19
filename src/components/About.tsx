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
              src="/image.png"
              alt="Harmanpreet Singh"
              className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
            />
          </motion.div>

          <motion.div className="space-y-6" variants={staggerContainer}>
            <motion.p
              className="text-lg text-gray-600 dark:text-gray-300"
              variants={fadeInUp}
            >
              I’m Harmanpreet Singh, a MERN Stack Developer currently pursuing a
              Bachelor of Engineering in Computer Science at Chandigarh
              University. I’m passionate about building scalable, secure, and
              user-focused web applications that deliver real-world impact. I
              also completed a Full Stack Developer internship at Stream
              Infotech, where I worked in a SCRUM-based environment and
              contributed to over 7 projects. My responsibilities included
              implementing secure JWT authentication, designing responsive UI
              components, and optimizing backend APIs for performance.
            </motion.p>

            <motion.p
              className="text-lg text-gray-600 dark:text-gray-300"
              variants={fadeInUp}
            >
              Beyond development, I’ve solved over 280 problems on LeetCode to
              strengthen my DSA skills. I’ve also contributed to multiple
              research papers. When I’m not coding, I enjoy reading tech blogs
              and exploring new frameworks. I believe in continuous learning,
              meaningful collaboration, and writing clean, purposeful code.
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
                  LeetCode Problems Solved
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
