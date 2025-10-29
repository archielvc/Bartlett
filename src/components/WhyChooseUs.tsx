import { Users, Award, Heart, Shield } from "lucide-react";
import { AnimatedText, AnimatedStagger, AnimatedStaggerItem } from "./AnimatedText";

const benefits = [
  {
    icon: Users,
    title: "Dedicated Support",
    description: "A single point of contact throughout your entire property journey, ensuring personalized attention and seamless communication."
  },
  {
    icon: Award,
    title: "Boutique Excellence",
    description: "Refined service standards that prioritize quality over quantity, delivering an unmatched level of care and professionalism."
  },
  {
    icon: Heart,
    title: "Tailored Approach",
    description: "Every client receives a bespoke strategy designed specifically for their unique needs, goals, and circumstances."
  },
  {
    icon: Shield,
    title: "Trusted Partnership",
    description: "Building lasting relationships founded on transparency, integrity, and a genuine commitment to your success."
  }
];

export function WhyChooseUs() {
  return (
    <section className="w-full bg-white px-6 sm:px-8 md:px-10 lg:px-12 py-10 sm:py-12 lg:py-14">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Desktop Layout: 50% / 50% Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-start">
          
          {/* Left: Heading */}
          <AnimatedText delay={0}>
            <div className="max-w-[400px]">
              <h2 
                className="leading-tight"
                style={{ 
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.75rem, 5vw, 3.5rem)",
                  fontWeight: 400,
                  lineHeight: "1.1"
                }}
              >
                <span className="text-[#1A1A1A]">
                  Elevated standards.{" "}
                </span>
                <span className="text-[#1A2551]">
                  Exceptional results.{" "}
                </span>
                <span className="text-[#8E8567]">
                  Uncompromising dedication.
                </span>
              </h2>
            </div>
          </AnimatedText>

          {/* Right: 2x2 Grid of Benefits */}
          <AnimatedStagger stagger={0.15} delay={0.2} className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-[600px]">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <AnimatedStaggerItem key={index}>
                  <div 
                    className="flex flex-col gap-4 group cursor-default"
                  >
                  {/* Icon with premium styling and hover animation */}
                  <div 
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1A2551]/5 to-[#8E8567]/5 flex items-center justify-center relative overflow-hidden transition-all duration-700 ease-out group-hover:scale-110 group-hover:shadow-xl"
                  >
                    {/* Animated background gradient on hover */}
                    <div 
                      className="absolute inset-0 bg-gradient-to-br from-[#1A2551] to-[#8E8567] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out"
                    />
                    
                    {/* Icon */}
                    <Icon 
                      className="w-7 h-7 text-[#1A2551] relative z-10 transition-all duration-700 ease-out group-hover:text-white group-hover:scale-110" 
                      strokeWidth={1.5} 
                    />
                  </div>

                  {/* Title */}
                  <h3 
                    className="text-[#1A2551] transition-colors duration-500"
                    style={{ 
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "clamp(1.25rem, 2.5vw, 1.5rem)",
                      fontWeight: 400,
                      lineHeight: "1.2"
                    }}
                  >
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p 
                    className="text-[#5A5A5A] transition-colors duration-500 group-hover:text-[#3A3A3A]"
                    style={{ 
                      fontFamily: "'Figtree', sans-serif",
                      fontSize: "0.9375rem",
                      lineHeight: "1.6"
                    }}
                  >
                    {benefit.description}
                  </p>
                  </div>
                </AnimatedStaggerItem>
              );
            })}
          </AnimatedStagger>
        </div>
      </div>
    </section>
  );
}