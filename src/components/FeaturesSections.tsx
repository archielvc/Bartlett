import { useState } from "react";
import { AnimatedText } from "./AnimatedText";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Property Acquisition",
    description: "Expert guidance through every step of purchasing your ideal property in Richmond, from initial search to final completion.",
    image: "https://images.unsplash.com/photo-1696960493371-2cbb7d31f80d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwbGFwdG9wfGVufDF8fHx8MTc2MTM5MTA1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "Investment Advisory",
    description: "Strategic property investment counsel to maximize returns and build your portfolio with confidence and precision.",
    image: "https://images.unsplash.com/photo-1709715357520-5e1047a2b691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nfGVufDF8fHx8MTc2MTM0MjY1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "Property Valuation",
    description: "Comprehensive market analysis and accurate property valuations based on deep local expertise and current market trends.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjEzNzIzMjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "Property Sales",
    description: "Tailored marketing strategies and expert negotiation to achieve the best possible price for your property.",
    image: "https://images.unsplash.com/photo-1681505531034-8d67054e07f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBoYW5kc2hha2V8ZW58MXx8fHwxNzYxNDAwMDQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "Market Research",
    description: "In-depth market analysis and insights to inform your property decisions with data-driven intelligence.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByZXNlbnRhdGlvbnxlbnwxfHx8fDE3NjE0MDA3MDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "Legal Advisory",
    description: "Professional guidance through legal processes and documentation to ensure smooth, compliant transactions.",
    image: "https://images.unsplash.com/photo-1623932078828-c768e94bc64b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRpbmclMjBkZXNrfGVufDF8fHx8MTc2MTQxNjQ3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export function FeaturesSections() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];

  return (
    <section className="w-full bg-white py-20 md:py-24">
      {/* Section Heading */}
      <div className="w-full px-8 md:px-10 lg:px-12 pb-12 md:pb-16">
        <div className="max-w-[1600px] mx-auto">
          <AnimatedText delay={0}>
            <h2 
              className="text-[#1A2551]"
              style={{ 
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.75rem, 6vw, 3.75rem)",
                fontWeight: 400,
                lineHeight: "1.2"
              }}
            >
              Our Services
            </h2>
          </AnimatedText>
        </div>
      </div>

      {/* Split-Screen Layout */}
      <div className="w-full">
        <div className="max-w-[1600px] mx-auto px-8 md:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            
            {/* LEFT PANEL - Service List (40%) */}
            <div className="lg:col-span-2 space-y-2">
              {services.map((service, index) => {
                const isActive = activeIndex === index;
                
                return (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className="w-full text-left group relative overflow-hidden"
                  >
                    {/* Service Item Container */}
                    <div className="relative py-6 px-6 transition-all duration-500 ease-out">
                      {/* Active indicator line - left border */}
                      <motion.div 
                        className="absolute left-0 top-0 bottom-0 w-1 bg-[#1A2551]"
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: isActive ? 1 : 0 }}
                        transition={{ 
                          duration: 0.5,
                          ease: [0.4, 0, 0.2, 1]
                        }}
                        style={{ originY: 0 }}
                      />

                      {/* Background highlight for active state */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-[#1A2551]/5 to-transparent"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isActive ? 1 : 0 }}
                        transition={{ 
                          duration: 0.5,
                          ease: [0.4, 0, 0.2, 1]
                        }}
                      />

                      {/* Content */}
                      <div className="relative z-10">
                        {/* Number + Title */}
                        <div className="flex items-baseline gap-4 mb-2">
                          <span 
                            className={`transition-all duration-500 ease-out ${
                              isActive 
                                ? 'text-[#1A2551]' 
                                : 'text-gray-400 group-hover:text-[#1A2551]/60'
                            }`}
                            style={{ 
                              fontFamily: "'Figtree', sans-serif",
                              fontSize: "0.75rem",
                              fontWeight: 600,
                              letterSpacing: "0.1em"
                            }}
                          >
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          
                          <h3 
                            className={`flex-1 transition-all duration-500 ease-out ${
                              isActive 
                                ? 'text-[#1A2551]' 
                                : 'text-[#3A3A3A] group-hover:text-[#1A2551]'
                            }`}
                            style={{ 
                              fontFamily: "'Playfair Display', serif",
                              fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
                              fontWeight: 400,
                              lineHeight: "1.3"
                            }}
                          >
                            {service.title}
                          </h3>
                        </div>

                        {/* Description - only shows when active */}
                        <AnimatePresence mode="wait">
                          {isActive && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ 
                                opacity: 1, 
                                height: "auto",
                                transition: {
                                  height: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
                                  opacity: { duration: 0.4, delay: 0.1, ease: [0.4, 0, 0.2, 1] }
                                }
                              }}
                              exit={{ 
                                opacity: 0, 
                                height: 0,
                                transition: {
                                  opacity: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
                                  height: { duration: 0.4, delay: 0.1, ease: [0.4, 0, 0.2, 1] }
                                }
                              }}
                              className="overflow-hidden"
                            >
                              <p 
                                className="text-[#6B7280] mt-3 pl-12"
                                style={{ 
                                  fontFamily: "'Figtree', sans-serif",
                                  fontSize: "0.9375rem",
                                  lineHeight: "1.7"
                                }}
                              >
                                {service.description}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Hover underline effect - subtle */}
                      <div 
                        className={`absolute bottom-0 left-6 right-6 h-px bg-gray-200 transition-all duration-500 ease-out ${
                          isActive ? 'opacity-0' : 'opacity-100 group-hover:opacity-0'
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* RIGHT PANEL - Image Display (60%) */}
            <div className="lg:col-span-3 relative">
              <div className="relative w-full h-full min-h-[400px] rounded-2xl overflow-hidden bg-gray-100">
                {/* Image crossfade */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1,
                      transition: {
                        opacity: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
                        scale: { duration: 1.2, ease: [0.4, 0, 0.2, 1] }
                      }
                    }}
                    exit={{ 
                      opacity: 0,
                      transition: {
                        duration: 0.4,
                        ease: [0.4, 0, 0.2, 1]
                      }
                    }}
                    className="absolute inset-0"
                  >
                    <img
                      src={activeService.image}
                      alt={activeService.title}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Subtle gradient overlay for depth */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/20" />
                  </motion.div>
                </AnimatePresence>

                {/* Progress indicator dots */}
                <div className="absolute top-6 right-6 flex flex-col gap-2">
                  {services.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className="group relative"
                      aria-label={`Go to service ${index + 1}`}
                    >
                      <div 
                        className={`w-2 h-2 rounded-full transition-all duration-500 ease-out ${
                          activeIndex === index
                            ? 'bg-white scale-125'
                            : 'bg-white/40 group-hover:bg-white/70'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}