'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import DomsLogo from '../../lib/DOMS-logo1.png';

export const HeroSection = () => {
  const { resolvedTheme } = useTheme();
  const [showInitialAnimation, setShowInitialAnimation] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const timer = setTimeout(() => {
      setShowInitialAnimation(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  if (!isMounted) return null;

    const letterVariants = {
      initial: { opacity: 0, y: 20, rotateX: -90, scale: 0.8 },
      animate: (i: number) => ({
        opacity: 1, y: 0, rotateX: 0, scale: 1,
        transition: { delay: 0.5 + i * 0.15, duration: 0.8, type: 'spring', stiffness: 200, damping: 12 }
      }),
      hover: {
        y: -8, scale: 1.2, color: '#fd4f00',
        textShadow: '0 0 20px rgba(253,79,0,0.5)',
        transition: { duration: 0.3, type: 'spring', stiffness: 400, damping: 10 }
      }
    };
  
    const globalVariants = {
      initial: { opacity: 0, x: -20, scale: 0.9 },
      animate: { opacity: 1, x: 0, scale: 1, transition: { delay: 1.2, duration: 0.8, type: 'spring', stiffness: 150, damping: 12 } },
      hover: { scale: 1.1, color: '#fd4f00', textShadow: '0 0 15px rgba(253,79,0,0.3)', transition: { duration: 0.3, type: 'spring', stiffness: 300 } }
    };
  
    const taglineVariants = {
      initial: { opacity: 0, scale: 0.8, y: 10 },
      animate: { opacity: 1, scale: 1, y: 0, transition: { delay: 1.8, duration: 0.6, ease: 'easeOut' } },
      hover: { scale: 1.05, color: '#6b7280', transition: { duration: 0.2 } }
    };

  const activeTheme = isMounted ? resolvedTheme : 'light';

  return (
    <>
     
     <section id="hero" className="relative min-h-screen flex items-center justify-center 
             px-6 sm:px-10 md:px-20 
             text-center bg-background text-foreground overflow-hidden 
             transition-all duration-500
             mt-[40px] sm:mt-0  bg-muted/30"
>
         
        {/* Intro Animation */}
        <AnimatePresence>
          {showInitialAnimation && (
            <motion.div
              initial={{ scale: 10, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 flex items-center justify-center z-50  "
            >
            
              <motion.div
                
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                <Image
                  src={DomsLogo}
                  alt="DOMS GLOBAL Logo"
                  width={300}
                  height={300}
                  className="object-contain"
                />
                <motion.h1

                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="text-3xl font-bodoni font-light  tracking-tight mt-4 text-white"
                >
                  DOMS GLOBAL
                </motion.h1>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Background Decorations */}
        <div className="absolute inset-0 bg-radial-gradient z-0 transition-all duration-500" />
        <div className="absolute inset-0 flex items-center justify-center z-0 opacity-10 pointer-events-none">
          {/* <Image
            src={DomsLogo}
            alt="DOMS Logo"
            width={600}
            height={600}
            className="object-contain mt-6 opacity-2"
          /> */}
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                x: `${Math.random() * 100}%`,
                y: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 0.5, 0],
                x: `${Math.random() * 100}%`,
                y: `${Math.random() * 100 + 100}%`,
                scale: [0.5, 1.2, 0.5],
              }}
              transition={{
                duration: 12 + Math.random() * 10,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'linear',
              }}
              className="absolute rounded-full   from-primary/20 to-secondary/20 transition-all duration-500"
              style={{
                width: `${Math.random() * 150 + 80}px`,
                height: `${Math.random() * 150 + 80}px`,
              }}
              // BUBBLES-BG ;= bg-gradient-to-br
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { delay: 2.2, duration: 0.8, ease: 'easeOut' },
              },
            }}
          >
            
  {/* Brand Text */}
  {/* <div className="flex flex-col items-center  text-center  w-full"> */}
  {/* Main Title */}
  {/* <motion.h1
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3, duration: 0.8 }}
   className="font-bodoni mt-8 font-light leading-tight tracking-tight text-orange-600 text-[clamp(2.5rem,10vw,5rem)] sm:text-[clamp(4rem,9vw,10rem)]  md:text-[clamp(5rem,10vw,14rem)] whitespace-nowrap text-center"
 >
 
    DOMS GLOBAL
  </motion.h1> */}

 {/* Tagline */}
{/* <motion.span
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.6, duration: 0.8 }}
  className="text-lg sm:text-xl text-black dark:text-gray-200 font-semibold tracking-wide leading-relaxed mb-10 text-center block"
>
  Holistic Revenue Generating Company
</motion.span> */}


{/* </div> */}

 <div className="px-4 overflow-hidden">
    {/* Animated Headline */}
    <motion.h1 
      className="text-3xl m-4 mt-4 sm:text-3xl sm:mt-0 md:text-5xl font-bold leading-snug tracking-tight mb-6 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.span
        className="block mt-10 text-[#fd4f00] dark:text-white drop-shadow-[0_2px_4px_rgba(255,145,0,0.3)]"
        initial={{ backgroundPosition: '0% 50%' }}
        animate={{ backgroundPosition: '100% 50%' }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: "linear"
        }}
      >
       Global consulting powerhouse with deep industry expertise and over a decade of proven excellence
      </motion.span>
    </motion.h1>

    {/* Animated Paragraph */}
    <motion.p 
      className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto  mb-10 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.6 }}
    >
      <motion.span
        className="relative inline-block text-zinc-900 dark:text-white text-muted-foreground text-lg "
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.2 }
        }}
      >
        We partner with visionary organizations to create innovative solutions.
        <motion.span
          className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary/30 to-secondary/30"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
      </motion.span>
    </motion.p>
  </div>

            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-primary hover:bg-primary/90 text-white px-6 py-3 text-lg font-medium rounded-xl shadow-md hover:shadow-primary/50 transition-all 
                           dark:bg-primary/80 dark:hover:bg-primary/70 dark:text-black dark:shadow-primary/30"
                onClick={scrollToServices}
              >
                Explore Our Services
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-muted text-foreground hover:bg-muted/80 border border-border px-6 py-3 text-lg font-medium rounded-xl  transition-all
                           dark:bg-muted/80 dark:hover:bg-muted/60 dark:text-white dark:border-muted-foreground/30"
              >
                Watch Our Story
              </motion.button>
            </div> */}

             <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center cursor-pointer text-primary sm:mt-0"
            onClick={scrollToServices}
          >
            <span className="text-sm mb-2 md:mt-38 sm:mt-30 lg:mt-20 opacity-70 text-primary transition-colors duration-500">
              Scroll to explore
            </span>
            <ChevronDown className="w-6 h-6 drop-shadow-[0_0_6px_rgba(255,145,0,0.7)]" />
          </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};
