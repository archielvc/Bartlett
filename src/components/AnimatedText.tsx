import { motion, useInView } from "motion/react";
import { useRef, ReactNode } from "react";

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
}

// Premium easing curves for luxury feel
const premiumEase = [0.25, 0.1, 0.25, 1];

export function AnimatedText({ 
  children, 
  className = "", 
  delay = 0,
  once = true 
}: AnimatedTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once,
    margin: "-100px" // Trigger 100px before element enters viewport
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 1.2,
        ease: premiumEase,
        delay
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// For staggered children animations (like nav items)
export function AnimatedStagger({ 
  children, 
  className = "", 
  delay = 0,
  stagger = 0.1,
  once = true 
}: AnimatedTextProps & { stagger?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once,
    margin: "-100px"
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        visible: {
          transition: {
            staggerChildren: stagger,
            delayChildren: delay
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedStaggerItem({ 
  children, 
  className = ""
}: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: {
            duration: 0.8,
            ease: premiumEase
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
