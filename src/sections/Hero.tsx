"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { siGithub, siLinkedin, siX, siInstagram } from "simple-icons/icons";
import { FlipWords } from "@/components/ui/flip-words";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Modal, ModalTrigger } from "@/components/ui/animated-modal";
import { CardContainer } from "@/components/ui/3d-card";

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text animations
      gsap.fromTo(
        ".hero-title",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.5 }
      );
      gsap.fromTo(
        ".hero-subtitle",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.7 }
      );
      gsap.fromTo(
        ".hero-description",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.9 }
      );
      // Image animations
      gsap.fromTo(
        ".hero-image",
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 1, ease: "power3.out", delay: 0.2 }
      );
      // Button animations
      gsap.fromTo(
        ".hero-buttons",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          delay: 1.1,
          stagger: 0.2,
        }
      );
      // Social link animations
      gsap.fromTo(
        ".hero-socials",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          delay: 1.3,
          stagger: 0.2,
        }
      );
    }, heroRef);

    return () => ctx.revert(); // Cleanup GSAP context on component unmount
  }, []);

  return (
    <BackgroundBeamsWithCollision>
      <section
        ref={heroRef}
        className="min-h-screen w-full h-full flex items-center justify-center bg-gradient-to-b from-white to-gray-100"
      >
        <div className="container grid grid-cols-1 md:grid-cols-12 items-center gap-8">
          <div className="h-full w-full col-span-12 md:col-span-5 flex justify-center md:justify-start relative hero-image">
            <CardContainer>
              <div className="w-[300px] md:w-[400px] lg:w-[500px] aspect-square relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full translate-y-[14%] scale-90" />
                <Image
                  src="/images/Pratham-NoBG.png"
                  alt="Pratham Satani"
                  fill
                  className="object-contain z-10"
                  priority
                />
              </div>
            </CardContainer>
          </div>

          <div className="col-span-12 md:col-span-7 space-y-6 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 hero-title">
              Pratham Satani
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-600 hero-subtitle">
              <FlipWords
                words={[
                  "Aspiring Machine Learning Engineer",
                  "AI Enthusiast",
                  "Creative Developer",
                  "Data Scientist",
                  "Algo Expert"
                ]}
              />
            </h2>

            <TextGenerateEffect
              words={
                "I am passionate about leveraging machine learning and AI to create innovative solutions that address real-world challenges. By combining advanced algorithms with creative thinking, I develop intelligent systems that are impactful, scalable, and user-centric. My goal is to push the boundaries of AI, transforming raw data into actionable insights and seamless experiences."
              }
              duration={0.5}
              className="text-gray-700 text-sm text-justify sm:text-base hero-description"
            />

            <div className="flex flex-wrap justify-center md:justify-start gap-4 hero-buttons">
              <Modal>
                <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex outline justify-center group/modal-btn">
                  <Link
                    href="/"
                    target="_blank"
                    className="group-hover/modal-btn:translate-x-40 text-center transition duration-500"
                  >
                    ML Projects
                  </Link>
                  <Link
                    href="/"
                    target="_blank"
                    className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20"
                  >
                    🧠
                  </Link>
                </ModalTrigger>
              </Modal>
              <Modal>
                <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex outline justify-center group/modal-btn">
                  <Link
                    href="/"
                    target="_blank"
                    className="group-hover/modal-btn:translate-x-40 text-center transition duration-500"
                  >
                    Tech Stack
                  </Link>
                  <Link
                    href="/"
                    target="_blank"
                    className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20"
                  >
                    💻
                  </Link>
                </ModalTrigger>
              </Modal>
              <Modal>
                <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex outline justify-center group/modal-btn">
                  <Link
                    href="/"
                    target="_blank"
                    className="group-hover/modal-btn:translate-x-40 text-center transition duration-500"
                  >
                    Research
                  </Link>
                  <Link
                    href="/"
                    target="_blank"
                    className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20"
                  >
                    📝
                  </Link>
                </ModalTrigger>
              </Modal>
              <Modal>
                <ModalTrigger className="bg-white dark:bg-white dark:text-black  text-black flex outline outline-1 justify-center group/modal-btn">
                  <Link
                    href="/docs/Pratham Satani.pdf"
                    target="_blank"
                    className="group-hover/modal-btn:translate-x-40 text-center transition duration-500"
                  >
                    Download Resume
                  </Link>
                  <Link
                    href="/docs/Pratham Satani.pdf"
                    target="_blank"
                    className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20"
                  >
                    📑
                  </Link>
                </ModalTrigger>
              </Modal>
            </div>

            <div className="flex justify-center md:justify-start space-x-10 hero-socials">
              <SocialLink
                href="https://github.com/prathamsatani"
                icon={siGithub}
                label="GitHub"
                color="#181717"
              />
              <SocialLink
                href="https://linkedin.com/in/prathamsatani"
                icon={siLinkedin}
                label="LinkedIn"
                color="#0A66C2"
              />
              <SocialLink
                href="https://x.com/prathahahaham"
                icon={siX}
                label="Twitter"
                color="#000000"
              />
              <SocialLink
                href="https://www.instagram.com/oye.pratham"
                icon={siInstagram}
                label="Instagram"
                color="#E4405F"
              />
            </div>
          </div>
        </div>
      </section>
    </BackgroundBeamsWithCollision>
  );
}

function SocialLink({
  href,
  icon: Icon,
  label,
  target = "_blank",
  color,
}: {
  href: string;
  icon: typeof siGithub;
  label: string;
  target?: "_blank" | "_self";
  color: string;
}) {
  return (
    <Link
      href={href}
      className="text-gray-600 hover:text-gray-800 transition-colors"
      target={target}
    >
      <span className="sr-only">{label}</span>
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill={color}
      >
        <path d={Icon.path} />
      </svg>
    </Link>
  );
}
