"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Layout, Server, Database, Brain } from "lucide-react";
import {
  siTensorflow,
  siScikitlearn,
  siKeras,
  siSqlite,
  siMongodb,
  siDjango,
  siReact,
  siNextdotjs,
  siPython,
  siJavascript,
  siTypescript,
} from "simple-icons";

const techStack = [
  {
    category: "ML",
    icon: <Brain className="h-6 w-6" />,
    technologies: [
      { name: "TensorFlow", icon: siTensorflow },
      { name: "Scikit-learn", icon: siScikitlearn },
      { name: "Keras", icon: siKeras },
    ],
    color: "bg-gradient-to-br from-indigo-700 to-purple-800",
    textColor: "text-white"
  },
  {
    category: "Database",
    icon: <Database className="h-6 w-6" />,
    technologies: [
      { name: "SQLite", icon: siSqlite },
      { name: "MongoDB", icon: siMongodb },
    ],
    color: "bg-gradient-to-br from-amber-600 to-orange-700",
    textColor: "text-white"
  },
  {
    category: "Backend",
    icon: <Server className="h-6 w-6" />,
    technologies: [{ name: "Django", icon: siDjango }],
    color: "bg-gradient-to-br from-red-600 to-rose-700",
    textColor: "text-white"
  },
  {
    category: "Frontend",
    icon: <Layout className="h-6 w-6" />,
    technologies: [
      { name: "React.js", icon: siReact },
      { name: "Next.js", icon: siNextdotjs },
    ],
    color: "bg-gradient-to-br from-emerald-600 to-teal-700",
    textColor: "text-white"
  },
  {
    category: "Programming Languages",
    icon: <Code className="h-6 w-6" />,
    technologies: [
      { name: "Python", icon: siPython },
      { name: "Java", icon: siJavascript },
      { name: "TypeScript", icon: siTypescript },
    ],
    color: "bg-gradient-to-br from-blue-600 to-indigo-700",
    textColor: "text-white"
  },
];

export function TechStackStacked() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col items-center space-y-4">
      {techStack.map((category, index) => (
        <motion.div
          key={category.category}
          className={`w-full max-w-md cursor-pointer ${
            expandedIndex === index ? "z-10" : "z-0"
          }`}
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          onClick={() =>
            setExpandedIndex(expandedIndex === index ? null : index)
          }
        >
          <div
            className={`p-4 rounded-lg shadow-lg ${category.color} ${category.textColor}`}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold">{category.category}</h3>
              {category.icon}
            </div>
            <AnimatePresence>
              {expandedIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-2"
                >
                  <ul className="space-y-2">
                    {category.technologies.map((tech) => (
                      <li 
                        key={tech.name} 
                        className="flex items-center space-x-2 text-sm"
                      >
                        <img 
                          src={`https://cdn.simpleicons.org/${tech.icon.slug}/white`} 
                          alt={tech.name} 
                          className="h-4 w-4"
                        />
                        <span>{tech.name}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      ))}
    </div>
  );
}