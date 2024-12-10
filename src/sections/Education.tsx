import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function Education() {
  const data = [
    {
      title: "2021 - 2025",
      content: (
        <div>
          <h1 className="text-neutral-800 dark:text-neutral-200 text-3xl md:text-3xl font-bold mb-2">
          🎓 Bachelor of Technology (CPI: 7.53)
          </h1>
          <h3 className="text-xl font-bold">Degree: Information Techology</h3>
          <h3 className="text-xl">Birla Vishvakarma Mahavidyalaya</h3>
          <ul className="mt-4 ml-8 list-disc">
            <li><b>Machine Learning Exposure:</b> Worked on multiple ML projects, including KrishiMitra and TripScript: AI-based Trip Planner.</li>
            <li><b>Leadership in ML Club:</b> Led technical workshops like AIxIoT: The Fusion and CodeIgnite, emphasizing practical applications of AI and IoT.</li>
            <li><b>Hackathon Experience:</b> Participated in the Smart India Hackathon 2023, a turning point for machine learning interest. Worked on <b>Plant Disease Identification System</b>.</li>
            <li><b>Programming Skills:</b> Demonstrated advanced skills in Python and C++, excelling in projects like Stock Price Prediction using ML Techniques.</li>
            <li><b>Academic Excellence in Core Subjects:</b> Learned foundational courses such as Machine Learning and Object-Oriented Programming with C++.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "2019 - 2021",
      content: (
        <div>
          <h1 className="text-neutral-800 dark:text-neutral-200 text-3xl md:text-3xl font-bold mb-2">
          🎒 Higher Secondary Certificate (Percentage: 85.4%)
          </h1>
          <h3 className="text-xl font-bold">Board: Central Board of Secondary Education</h3>
          <h3 className="text-xl">The Aditya Birla Public School</h3>
          <ul className="mt-4 ml-8 list-disc">
            <li>Introduced to <b>Python Programming</b> in Class 11, igniting an early interest in coding. Learned concepts like <b>functional programming</b>, <b>in-built data structures</b></li>
            <li>Built logical thinking through <b>Mathematics</b> and <b>Computer Science</b> subjects, paving the way for technical pursuits in engineering.</li>
            <li>Participated in <b>Science Exhibition</b> and <b>Debate Competitions</b>, honing teamwork, communication and presentation skills.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "2018 - 2019",
      content: (
        <div>
          <h1 className="text-neutral-800 dark:text-neutral-200 text-3xl md:text-3xl font-bold mb-2">
          📚 Secondary School Certificate (Percentage 87.67%)
          </h1>
          <h3 className="text-xl font-bold">Board: Central Board of Secondary Education</h3>
          <h3 className="text-xl">The Aditya Birla Public School</h3>
          <ul className="mt-4 ml-8 list-disc">
            <li>Studied core subjects like <b>Science</b>, <b>Mathematics</b>, <b>Computer Science</b>, and <b>English</b>, laying the foundation for future academic pursuits.</li>
            <li>Gained exposure to <b>HTML</b> and <b>Scratch programming</b>, laying the foundation for an interest in computer science.</li>
            <li>Participated in <b>Inter-School Competitions</b> like <b>Extempore</b>, <b>Debate</b> and <b>Quiz</b>, fostering teamwork and communication skills.</li>
            <li>Actively took part in sports events like <b>Football</b>, <b>Cricket</b> and <b>Table Tennis</b>.</li>
          </ul>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full" id="education">
      <Timeline data={data} />
    </div>
  );
}
