import { Navigation } from "../components/Navigation";
import { FooterNew } from "../components/FooterNew";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ScrollWrapper } from "../components/ScrollWrapper";
import { TestimonialsCarousel } from "../components/TestimonialsCarousel";
import { BookEvaluationDialog } from "../components/BookEvaluationDialog";
import { testimonials } from "../data/testimonials";
import { Award, Users, Home, TrendingUp, Linkedin, Twitter, Mail, Phone, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const team = [
  {
    name: "Sarah Mitchell",
    role: "Founder & Managing Director",
    bio: "With over 25 years in luxury real estate, Sarah founded Estate to bring a more personalized approach to property sales."
  },
  {
    name: "James Patterson",
    role: "Senior Sales Director",
    bio: "James specializes in high-end residential properties and has completed over £200M in sales throughout his career."
  },
  {
    name: "Emily Chen",
    role: "Head of Client Relations",
    bio: "Emily ensures every client receives white-glove service from initial consultation through to completion."
  }
];

const journeySteps = [
  {
    title: "Understanding you",
    description: "We start by understanding your unique requirements, budget, and timeline to create a personalized property strategy that aligns with your goals."
  },
  {
    title: "Finding your fit",
    description: "Access our exclusive portfolio and off-market listings while we handle all viewings and negotiations on your behalf with expert guidance."
  },
  {
    title: "Solidifying terms",
    description: "Our experienced team guides you through every legal step, ensuring a smooth and stress-free transaction from offer to completion."
  },
  {
    title: "Moving home",
    description: "From completion to moving day and beyond, we provide comprehensive support to ensure your transition is seamless and worry-free."
  }
];

const stats = [
  {
    icon: Home,
    number: "500+",
    label: "Properties Sold"
  },
  {
    icon: Users,
    number: "1,200+",
    label: "Happy Clients"
  },
  {
    icon: Award,
    number: "20+",
    label: "Years Experience"
  },
  {
    icon: TrendingUp,
    number: "98%",
    label: "Client Satisfaction"
  }
];

export default function AboutUs() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="about" />
      
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
              Our Story and Commitment
            </h1>
          </div>
        </div>
      </section>

      <ScrollWrapper>
        {/* Stacking Cards Container */}
        <div className="relative">
          {/* Commitment Section 1 */}
          <section className="sticky top-0 w-full bg-[#F9FAFB]" style={{ zIndex: 1 }}>
            <div className="flex items-stretch min-h-[600px]">
              <div className="w-full lg:w-1/2 flex justify-end">
                <div className="w-full max-w-[640px] flex flex-col justify-center py-16 lg:py-20 px-6 lg:px-16">
                  <h2 
                    className="text-[#1A2551] mb-6"
                    style={{ 
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "clamp(2rem, 4vw, 3rem)",
                      fontWeight: 400,
                      lineHeight: "1.2"
                    }}
                  >
                    We Always Stay Committed to Excellence
                  </h2>
                  <p 
                    className="text-[#3A3A3A]"
                    style={{ 
                      fontFamily: "'Figtree', sans-serif",
                      fontSize: "1.125rem",
                      lineHeight: "1.7"
                    }}
                  >
                    Founded in 2003, Estate was born from a simple vision: to transform the property buying and selling experience through exceptional service and genuine client relationships.
                  </p>
                </div>
              </div>
              <div className="hidden lg:block lg:w-1/2 relative min-h-[400px]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80"
                  alt="Modern Estate Property"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>

          {/* Insights Section 2 */}
          <section className="sticky top-0 w-full bg-[#F9FAFB]" style={{ zIndex: 2 }}>
            <div className="flex items-stretch min-h-[600px]">
              <div className="hidden lg:block lg:w-1/2 relative min-h-[400px]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1000&q=80"
                  alt="Estate Office Interior"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full lg:w-1/2 flex justify-start">
                <div className="w-full max-w-[640px] flex flex-col justify-center py-16 lg:py-20 px-6 lg:px-16">
                  <h2 
                    className="text-[#1A2551] mb-6"
                    style={{ 
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "clamp(2rem, 4vw, 3rem)",
                      fontWeight: 400,
                      lineHeight: "1.2"
                    }}
                  >
                    Deep Market Knowledge That Delivers Results
                  </h2>
                  <p 
                    className="text-[#3A3A3A]"
                    style={{ 
                      fontFamily: "'Figtree', sans-serif",
                      fontSize: "1.125rem",
                      lineHeight: "1.7"
                    }}
                  >
                    Our team's unparalleled knowledge of the Richmond property market ensures you receive expert guidance backed by decades of local experience.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Service Section 3 */}
          <section className="sticky top-0 w-full bg-[#F9FAFB]" style={{ zIndex: 3 }}>
            <div className="flex items-stretch min-h-[600px]">
              <div className="w-full lg:w-1/2 flex justify-end">
                <div className="w-full max-w-[640px] flex flex-col justify-center py-16 lg:py-20 px-6 lg:px-16">
                  <h2 
                    className="text-[#1A2551] mb-6"
                    style={{ 
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "clamp(2rem, 4vw, 3rem)",
                      fontWeight: 400,
                      lineHeight: "1.2"
                    }}
                  >
                    Maintain the Highest Standards of Client Care
                  </h2>
                  <p 
                    className="text-[#3A3A3A]"
                    style={{ 
                      fontFamily: "'Figtree', sans-serif",
                      fontSize: "1.125rem",
                      lineHeight: "1.7"
                    }}
                  >
                    Every client receives white-glove service tailored to their unique needs. From first-time buyers to seasoned investors, we ensure a seamless experience.
                  </p>
                </div>
              </div>
              <div className="hidden lg:block lg:w-1/2 relative min-h-[400px]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1000&q=80"
                  alt="Luxury Property Interior"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>
        </div>

        {/* Our Team Section */}
        <section className="w-full bg-white py-12 sm:py-14 lg:py-16 px-8 md:px-10 lg:px-12">
          <div className="max-w-[1600px] mx-auto">
            <div className="mb-16">
              <h2 
                className="text-[#1A2551] mb-3"
                style={{ 
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 400,
                  lineHeight: "1.2"
                }}
              >
                Our Team
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {team.map((member, index) => (
                <div 
                  key={index}
                  className="group"
                >
                  <div className="relative mb-6 bg-gray-200 aspect-square overflow-hidden transition-all duration-500 group-hover:shadow-2xl">
                    <ImageWithFallback
                      src={`https://images.unsplash.com/photo-${1560250097000 + index * 1000}-${index}?auto=format&fit=crop&w=400&q=80`}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-[#1A2551]/0 group-hover:bg-[#1A2551]/10 transition-all duration-500"></div>
                  </div>
                  <h3 
                    className="text-[#1A2551] mb-2 transition-colors duration-300 group-hover:text-[#1A2551]/80"
                    style={{ 
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.25rem",
                      fontWeight: 400
                    }}
                  >
                    {member.name}
                  </h3>
                  <p 
                    className="text-[#6B7280] mb-3 transition-colors duration-300"
                    style={{ 
                      fontFamily: "'Figtree', sans-serif",
                      fontSize: "0.875rem"
                    }}
                  >
                    {member.role}
                  </p>
                  <p 
                    className="text-[#6B7280] mb-4 transition-all duration-300 group-hover:text-[#3A3A3A]"
                    style={{ 
                      fontFamily: "'Figtree', sans-serif",
                      fontSize: "0.875rem",
                      lineHeight: "1.6"
                    }}
                  >
                    {member.bio}
                  </p>
                  <div className="flex gap-3">
                    <button className="w-8 h-8 bg-[#1A2551] rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#1A2551]/90 hover:scale-110 hover:shadow-lg cursor-pointer">
                      <Linkedin className="w-4 h-4 text-white" />
                    </button>
                    <a 
                      href="tel:+441234567890" 
                      className="w-8 h-8 bg-[#1A2551] rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#1A2551]/90 hover:scale-110 hover:shadow-lg cursor-pointer"
                    >
                      <Phone className="w-4 h-4 text-white" />
                    </a>
                    <button className="w-8 h-8 bg-[#1A2551] rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#1A2551]/90 hover:scale-110 hover:shadow-lg cursor-pointer">
                      <Mail className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Your Property Journey Section */}
        <section className="w-full bg-white py-20 px-8 md:px-10 lg:px-12">
          <div className="max-w-[1600px] mx-auto">
            <div className="grid lg:grid-cols-3 gap-12 items-start">
              {/* Sticky Left Section */}
              <div className="lg:col-span-1 sticky top-24">
                <h2 
                  className="text-[#1A2551] mb-3"
                  style={{ 
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    fontWeight: 400,
                    lineHeight: "1.2"
                  }}
                >
                  Your Property Journey
                </h2>
                <p 
                  className="text-[#6B7280] mb-6"
                  style={{ 
                    fontFamily: "'Figtree', sans-serif",
                    fontSize: "1rem",
                    lineHeight: "1.7"
                  }}
                >
                  From first consultation to moving day, we guide you through every step
                </p>
                <BookEvaluationDialog
                  trigger={
                    <button
                      className="bg-[#1A2551] text-white px-8 py-2.5 rounded-full hover:bg-[#1A2551]/90 transition-colors"
                      style={{ 
                        fontFamily: "'Figtree', sans-serif",
                        fontSize: "0.875rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em"
                      }}
                    >
                      <span className="premium-hover" data-text="BOOK VALUATION">
                        <span>BOOK VALUATION</span>
                      </span>
                    </button>
                  }
                />
              </div>
              
              {/* Stacking Journey Steps */}
              <div 
                className="lg:col-span-2 relative"
                style={{ minHeight: `${240 * (journeySteps.length - 1) + 100}px` }}
              >
                {journeySteps.map((step, index) => (
                  <div 
                    key={index} 
                    className="bg-white border border-gray-200 p-6 lg:p-8 sticky mb-8 group cursor-default"
                    style={{
                      top: `80px`,
                      zIndex: index + 1
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        {/* Icon with premium styling and hover animation - same as WhyChooseUs */}
                        <div 
                          className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1A2551]/5 to-[#8E8567]/5 flex items-center justify-center relative overflow-hidden transition-all duration-700 ease-out group-hover:scale-110 group-hover:shadow-xl border-2 border-dotted border-[#1A2551]/20 group-hover:border-[#1A2551]/0"
                        >
                          {/* Animated background gradient on hover */}
                          <div 
                            className="absolute inset-0 bg-gradient-to-br from-[#1A2551] to-[#8E8567] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out"
                          />
                          
                          {/* Number */}
                          <span 
                            className="text-[#1A2551] relative z-10 transition-all duration-700 ease-out group-hover:text-white group-hover:scale-110 flex items-center justify-center"
                            style={{ 
                              fontFamily: "'Figtree', sans-serif",
                              fontSize: "1.5rem",
                              fontWeight: 600
                            }}
                          >
                            {index + 1}
                          </span>
                        </div>
                      </div>
                      <div>
                        <h3 
                          className="text-[#1A2551] mb-2"
                          style={{ 
                            fontFamily: "'Playfair Display', serif",
                            fontSize: "1.25rem",
                            fontWeight: 400
                          }}
                        >
                          {step.title}
                        </h3>
                        <p 
                          className="text-[#6B7280]"
                          style={{ 
                            fontFamily: "'Figtree', sans-serif",
                            fontSize: "0.9375rem",
                            lineHeight: "1.6"
                          }}
                        >
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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