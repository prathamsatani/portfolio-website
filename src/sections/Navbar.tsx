'use client'

import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { 
  siGithub, 
  siLinkedin, 
  siInstagram, 
  siX, 
  siMailboxdotorg 
} from 'simple-icons/icons';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion, AnimatePresence } from 'framer-motion';

const SOCIAL_LINKS = [
  { 
    href: "https://github.com/prathamsatani", 
    icon: siGithub, 
    label: "GitHub",
    color: "#181717" 
  },
  { 
    href: "https://linkedin.com/in/prathamsatani", 
    icon: siLinkedin, 
    label: "LinkedIn",
    color: "#0A66C2" 
  },
  { 
    href: "https://x.com/prathahahaham", 
    icon: siX, 
    label: "Twitter",
    color: "#000000" 
  },
  { 
    href: "https://www.instagram.com/oye.pratham", 
    icon: siInstagram, 
    label: "Instagram",
    color: "#E4405F" 
  },
  { 
    href: "mailto:iamprathamsatani2002@gmail.com", 
    icon: siMailboxdotorg, 
    label: "Email",
    color: "#EA4335" 
  },
] as const;

const SocialLink = ({ href, icon: Icon, label, color, index }: { 
  href: string; 
  icon: typeof siGithub; 
  label: string; 
  color: string;
  index: number;
}) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <Link 
            href={href} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block transition-transform duration-300 ease-in-out hover:scale-110"
          >
            <Button 
              variant="ghost" 
              size="icon" 
              className="w-10 h-10 text-gray-600 hover:text-black hover:bg-gray-200"
            >
              <svg 
                role="img" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5"
                fill={color}
              >
                <path d={Icon.path} />
              </svg>
              <span className="sr-only">{label}</span>
            </Button>
          </Link>
        </motion.div>
      </TooltipTrigger>
      <TooltipContent>{label}</TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <TooltipProvider>
      <motion.header 
        className={`fixed top-0 left-0 w-full z-50 ${isScrolled ? 'bg-white/80 backdrop-blur-sm shadow-sm' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        {/* Mobile Menu Toggle */}
        <motion.div 
          className="fixed top-4 right-4 z-60 md:hidden"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700 hover:text-black"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90 }}
                  animate={{ rotate: 0 }}
                  exit={{ rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90 }}
                  animate={{ rotate: 0 }}
                  exit={{ rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu />
                </motion.div>
              )}
            </AnimatePresence>
          </Button>
        </motion.div>

        {/* Social Icons - Desktop (Left Side) */}
        <div className="hidden md:flex fixed top-5 left-5 z-50 flex-col space-y-4">
          {SOCIAL_LINKS.map((link, index) => (
            <SocialLink key={link.label} {...link} index={index} />
          ))}
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              className="md:hidden fixed top-16 right-4 bg-white shadow-md rounded-md p-4"
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col space-y-4">
                {SOCIAL_LINKS.map((link, index) => (
                  <SocialLink key={link.label} {...link} index={index} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </TooltipProvider>
  );
}

