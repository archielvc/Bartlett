import { Navigation } from "../components/Navigation";
import { FooterNew } from "../components/FooterNew";
import { ScrollWrapper } from "../components/ScrollWrapper";
import { TestimonialsCarousel } from "../components/TestimonialsCarousel";
import { testimonials } from "../data/testimonials";
import { useState } from "react";

export default function Services() {
  const [activeServiceIndex, setActiveServiceIndex] = useState<number | null>(null);

  const services = [
    {
      title: "Property Acquisition",
      description: "Expert guidance through every step of purchasing your ideal property in Richmond, from search to completion.",
      image: "https://images.unsplash.com/photo-1696960493371-2cbb7d31f80d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwbGFwdG9wfGVufDF8fHx8MTc2MTM5MTA1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Investment Advisory",
      description: "Strategic property investment counsel to maximize returns and build your portfolio with confidence.",
      image: "https://images.unsplash.com/photo-1709715357520-5e1047a2b691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nfGVufDF8fHx8MTc2MTM0MjY1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Property Valuation",
      description: "Comprehensive market analysis and accurate property valuations based on local expertise and current market trends.",
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
      description: "Professional guidance through legal processes and documentation to ensure smooth transactions.",
      image: "https://images.unsplash.com/photo-1623932078828-c768e94bc64b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRpbmclMjBkZXNrfGVufDF8fHx8MTc2MTQxNjQ3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="services" />
      
      {/* Hero Section - Made Sticky */}
      <section className="sticky top-0 w-full bg-[#1A2551] px-8 md:px-10 lg:px-12 flex items-center relative overflow-hidden pt-32 pb-8 z-0">
        <div className="max-w-[1600px] mx-auto w-full">
          <div className="max-w-[900px]">
            <h1 
              className="text-white mb-2"
              style={{ 
                fontFamily: "'Playfair Display', serif", 
                fontSize: "clamp(2.5rem, 5vw, 4rem)", 
                fontWeight: 400,
                lineHeight: "1.1",
                whiteSpace: "nowrap"
              }}
            >
              Comprehensive Property Services
            </h1>
          </div>
        </div>
      </section>

      <ScrollWrapper>
        {/* Services Grid Section */}
        <section className="w-full bg-white px-6 sm:px-8 md:px-10 lg:px-12 py-10 md:py-14">
          <div className="max-w-[1600px] mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
              {services.map((service, index) => {
                const isActive = activeServiceIndex === index;
                
                return (
                  <div 
                    key={index} 
                    className="group cursor-pointer"
                    onClick={() => setActiveServiceIndex(isActive ? null : index)}
                  >
                    {/* Square Image with Overlay and Text */}
                    <div className="aspect-square w-full overflow-hidden relative">
                      {/* Background Image */}
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      
                      {/* Darkened Overlay - darker on hover or when active */}
                      <div className={`absolute inset-0 transition-colors duration-500 ${
                        isActive ? 'bg-black/65' : 'bg-black/50 group-hover:bg-black/65'
                      }`} />
                      
                      {/* Text Content Overlay */}
                      <div className="absolute inset-0 p-6 sm:p-8 flex flex-col">
                        {/* Title - Always Visible */}
                        <h3 
                          className="text-white mb-4"
                          style={{ 
                            fontFamily: "'Playfair Display', serif",
                            fontSize: "clamp(1.5rem, 3vw, 2rem)",
                            letterSpacing: "-0.01em",
                            fontWeight: 400,
                            lineHeight: "1.2"
                          }}
                        >
                          {service.title}
                        </h3>
                        
                        {/* Description - Visible on Hover or when Active */}
                        <p 
                          className={`text-white/90 transition-opacity duration-500 ${
                            isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                          }`}
                          style={{ 
                            fontFamily: "'Figtree', sans-serif",
                            fontSize: "1rem",
                            lineHeight: "1.7"
                          }}
                        >
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* What Our Clients Say Section */}
        <TestimonialsCarousel testimonials={testimonials} />

        <FooterNew />
      </ScrollWrapper>
    </div>
  );
}