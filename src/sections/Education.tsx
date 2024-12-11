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
            <li>
              <b>Programming Languages:</b> Python, Java, C++, TypeScript
            </li>
            <li>
              <b>Frameworks:</b> Tensorflow, Keras, Scikit-Learn, Django,
              Next.js, React.js
            </li>
            <li>
              <b>Projects</b>
              <ol className="ml-8 list-decimal">
                <li>Stock Price Prediction using Machine Learning Methods</li>
                <li>KrishiMitra: AI-based Smart Farming Tool</li>
                <li>TripScript: AI-based Travel Itinerary Generator</li>
                <li>Smart Attendance System using Facial Recognition</li>
              </ol>
            </li>
            <li>
              <b>Extracurricular Activities</b>
              <ol className="ml-8 list-decimal">
                <li>
                  <b>Chairperson:</b> Machine Learning Club
                </li>
                <li>
                  <b>Secretary:</b> IEEE Computer Society BVM SB
                </li>
              </ol>
            </li>
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
          <h3 className="text-xl font-bold">
            Board: Central Board of Secondary Education
          </h3>
          <h3 className="text-xl">The Aditya Birla Public School</h3>
          <ul className="mt-4 ml-8 list-disc">
            <li>
              <b>Stream: </b>PCM + Computer Science
            </li>
            <li>
              <b>Programming Language:</b> Python
            </li>
            <li>
              <b>Extracurricular Activities</b>
              <ol className="ml-8 list-decimal">
                <li>House Sports Captain</li>
                <li>Actively participated in Sports Activities</li>
                <li>Took part in Literary Activities</li>
              </ol>
            </li>
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
          <h3 className="text-xl font-bold">
            Board: Central Board of Secondary Education
          </h3>
          <h3 className="text-xl">The Aditya Birla Public School</h3>
          <ul className="mt-4 ml-8 list-disc">
            <li>
              <b>Scripting Languages:</b> HTML, CSS
            </li>
            <li>
              <b>Strong subjects:</b> Maths, Science, Computer Science
            </li>
            <li>
              <b>Extracurricular Activities</b>
              <ol className="ml-8 list-decimal">
                <li>House Vice-Captain</li>
                <li>Actively participated in Sports Activities</li>
                <li>Took part in Literary Activities</li>
              </ol>
            </li>
          </ul>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full bg-white" id="education">
      <Timeline data={data} />
    </div>
  );
}
