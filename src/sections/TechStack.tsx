"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Layout, Server, Database, Brain, } from "lucide-react";
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
  siHtml5,
  siCss3,
  siMysql,
} from "simple-icons";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

const Logo = ({ icon: Icon }: { icon: typeof siDjango }) => (
  <svg 
  role="img" 
  viewBox="0 0 24 24" 
  xmlns="http://www.w3.org/2000/svg" 
  className="h-16 w-16"
>
  <path d={Icon.path} />
</svg>
);

const items = [
  {
    title: "HTML",
    icon: null,
    header: <Logo icon={siHtml5}/>,
    description: "Frontend Development",
  },
  {
    title: "CSS",
    icon: null,
    header: <Logo icon={siCss3}/>,
    description: "Frontend Development",
  },
  {
    title: "TypeScript",
    icon: null,
    header: <Logo icon={siTypescript}/>,
    description: "Frontend Development",
  },
  {
    title: "React",
    icon: null,
    header: <Logo icon={siReact}/>,
    description: "Frontend Development",
  },
  {
    title: "Next.js",
    icon: null,
    header: <Logo icon={siNextdotjs}/>,
    description: "Frontend Development",
  },
  {
    title: "Django",
    icon: null,
    header: <Logo icon={siDjango}/>,
    description: "Backend Development",
  },
  {
    title: "Tensorflow",
    icon: null,
    header: <Logo icon={siTensorflow}/>,
    description: "ML Dev",
  },
  {
    title: "Scikit-learn",
    icon: null,
    header: <Logo icon={siScikitlearn}/>,
    description: "ML Dev",
  },
  {
    title: "Keras",
    icon: null,
    header: <Logo icon={siKeras}/>,
    description: "ML Dev",
  },
  {
    title: "SQLite",
    icon: null,
    header: <Logo icon={siSqlite}/>,
    description: "Database",
  },
  {
    title: "MySQL",
    icon: null,
    header: <Logo icon={siMysql}/>,
    description: "Database",
  },
  {
    title: "MongoDB",
    icon: null,
    header: <Logo icon={siMongodb}/>,
    description: "Database",
  },
];


const setColSpan = (i: number) => {
  if (i === 5 && (i>=0 )){
    return "flex items-center justify-center col-span-2"
  } else if(i === 9){
    return "flex items-center justify-center col-span-2"
  } else if (i === 10){
    return "flex items-center justify-center col-span-2"
  }
}

export function TechStack() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="relative bg-gray-100 py-20 overflow-hidden" id="tech-stack">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-0">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 pb-20">
        🧑‍💻 Tech Stack
        </h1>
      </div>
      <BentoGrid className="max-w-2xl mx-auto items-center justify-center">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={setColSpan(i) || "flex items-center justify-center"}
        />
      ))}
    </BentoGrid>
    </div>
  );
}
