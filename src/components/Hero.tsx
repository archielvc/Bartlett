import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import stagLogo from "figma:asset/eff7752e202363e477a1693bdffb4a157ae49ec2.png";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [hideBlueCard, setHideBlueCard] = useState(false);
  const rafRef = useRef<number>();

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  // Hide blue card after animation completes
  useEffect(() => {
    const timer = setTimeout(() => {
      setHideBlueCard(true);
    }, 3100); // After blue card slides up (1800ms delay + 1200ms duration + 100ms buffer)
    
    return () => clearTimeout(timer);
  }, []);

  // Calculate parallax - subtle movement
  const parallaxY = scrollY * 0.5;
  
  // Calculate scale for zoom effect
  const scale = 1 + (scrollY / 2000) * 0.05; // Subtle zoom as you scroll

  // Luxury easing curves
  const luxuryEasing = [0.33, 1, 0.68, 1];
  const smoothEasing = [0.65, 0, 0.35, 1];
  const premiumEase = [0.25, 0.1, 0.25, 1];

  return (
    <section 
      className="sticky top-0 w-full h-screen relative overflow-hidden bg-black"
      style={{
        perspective: '1200px',
        perspectiveOrigin: 'center top',
      }}
    >
      {/* Background Image with Parallax */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 1.8,
          ease: smoothEasing,
          delay: 1.6
        }}
        className="absolute inset-0"
        style={{
          transform: `translateY(${parallaxY}px) scale(${scale})`,
          willChange: scrollY > 0 && scrollY < 1000 ? "transform" : "auto",
        }}
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1590266830010-7bf5c3339536?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicml0aXNoJTIwY291bnRyeXNpZGUlMjBtYW5vciUyMGhvdXNlfGVufDF8fHx8MTc2MTc1NzE3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="British countryside manor house"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Gradient Overlay - Darker at top and edges for text readability */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.25) 100%),
            radial-gradient(ellipse at center, transparent 20%, rgba(0,0,0,0.2) 80%)
          `
        }}
      />

      {/* Blue Card that slides up - hidden after animation */}
      {!hideBlueCard && (
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: "-100%" }}
          transition={{
            duration: 1.2,
            ease: premiumEase,
            delay: 1.8
          }}
          className="absolute inset-0 z-40 bg-[#1A2551]"
        />
      )}

      {/* Stag Logo - Stays centered while blue slides up */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1.05 }}
        transition={{
          duration: 1.8,
          ease: smoothEasing,
          delay: 1.6
        }}
        className="absolute inset-0 z-50 flex items-center justify-center"
      >
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ 
            y: 0, 
            opacity: 1
          }}
          transition={{
            duration: 1.2,
            ease: premiumEase,
            delay: 0.3
          }}
          className="relative"
        >
          {/* Very Subtle Glow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.12, 0.08] }}
            transition={{
              duration: 2.0,
              ease: smoothEasing,
              delay: 0.8,
              times: [0, 0.5, 1]
            }}
            className="absolute inset-0"
            style={{
              background: "radial-gradient(circle at center, rgba(255, 255, 255, 0.4) 0%, transparent 65%)",
              filter: "blur(25px)",
              transform: "scale(1.3)",
            }}
          />
          
          {/* Stag Image */}
          <motion.img
            initial={{ scale: 0.9, filter: "blur(2px) brightness(0.9)" }}
            animate={{ 
              scale: 1,
              filter: "blur(0px) brightness(1)"
            }}
            transition={{
              duration: 1.0,
              ease: luxuryEasing,
              delay: 0.6
            }}
            src={stagLogo}
            alt="Bartlett & Partners"
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-contain relative z-10"
          />

          {/* Minimal Gold Underline */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: [0, 0.5, 0.35], scaleX: [0, 1, 1] }}
            transition={{
              duration: 1.5,
              ease: smoothEasing,
              delay: 1.3,
              times: [0, 0.5, 1]
            }}
            className="absolute -bottom-6 left-1/2 -translate-x-1/2 h-[1px] w-20 bg-gradient-to-r from-transparent via-[#8E8567] to-transparent"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
