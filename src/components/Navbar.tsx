import { Menu, X, Github, Linkedin, Moon, Sun, FileText } from "lucide-react";
import { useState } from "react";

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export default function Navbar({ isDarkMode, toggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#hero"
            className="text-2xl font-bold text-gray-900 dark:text-white"
          >
            Portfolio
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}

            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              {/* Resume Link */}
              <a
                href="https://drive.google.com/file/d/1KueZZlQMSgGRcJP2J7KKR6YxqCVWOcsu/view?usp=share_link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <FileText className="w-5 h-5" />
              </a>

              <a
                href="https://github.com/harmansingh001"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/harmansingh001"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://leetcode.com/u/HarmanSingh_001/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {/* LeetCode SVG Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                  fill="currentColor"
                >
                  <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l10.1 10.1c.514.514 1.366.497 1.901-.038.535-.535.553-1.387.039-1.901l-2.467-2.503c.757-.164 1.485-.5 2.103-1.117l2.697-2.607c.514-.514.496-1.366-.039-1.901-.535-.535-1.387-.552-1.902-.038z" />
                </svg>
              </a>
            </div>

            {/* Theme Toggle Button */}
            <div
              onClick={toggleTheme}
              className={`flex items-center cursor-pointer transition-transform duration-500 ${
                isDarkMode ? "rotate-180" : "rotate-0"
              }`}
            >
              {isDarkMode ? (
                <Sun className="h-6 w-6 text-yellow-500" />
              ) : (
                <Moon className="h-6 w-6 text-blue-500" />
              )}
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center space-x-4">
            <div
              onClick={toggleTheme}
              className={`flex items-center cursor-pointer transition-transform duration-500 ${
                isDarkMode ? "rotate-180" : "rotate-0"
              }`}
            >
              {isDarkMode ? (
                <Sun className="h-6 w-6 text-yellow-500" />
              ) : (
                <Moon className="h-6 w-6 text-blue-500" />
              )}
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 px-2 pt-2 pb-3">
              {["About", "Skills", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}

              <div className="flex space-x-4 py-2">
                {[
                  {
                    href: "https://github.com/harmansingh001",
                    icon: <Github className="w-5 h-5" />,
                  },
                  {
                    href: "https://linkedin.com/in/harmansingh001",
                    icon: <Linkedin className="w-5 h-5" />,
                  },
                  {
                    href: "https://leetcode.com/u/HarmanSingh_001/",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="w-5 h-5"
                        fill="currentColor"
                      >
                        <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l10.1 10.1c.514.514 1.366.497 1.901-.038.535-.535.553-1.387.039-1.901l-2.467-2.503c.757-.164 1.485-.5 2.103-1.117l2.697-2.607c.514-.514.496-1.366-.039-1.901-.535-.535-1.387-.552-1.902-.038z" />
                      </svg>
                    ),
                  },
                  {
                    href: "/path-to-your-resume.pdf", // Replace with the path to your resume
                    icon: <FileText className="w-5 h-5" />,
                  },
                ].map(({ href, icon }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
