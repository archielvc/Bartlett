import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote: "The team at ESTATE made our property search effortless. Their knowledge of the Richmond area is truly unparalleled, and they guided us every step of the way.",
    author: "Sarah & Michael Thompson",
    role: "Homeowners, Richmond"
  },
  {
    quote: "Professional, attentive, and genuinely committed to finding the perfect property for our needs. We couldn't have asked for better service.",
    author: "James Patterson",
    role: "Property Investor"
  },
  {
    quote: "From our first consultation to completion, the service was exceptional. They truly understand luxury property and what discerning buyers are looking for.",
    author: "Emily Clarke",
    role: "First-time Buyer"
  }
];

export function ClientTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full bg-white py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
        <div className="mb-12">
          <h2 
            className="text-[#1A2551] mb-4"
            style={{ 
              fontFamily: "'Playfair Display', serif", 
              fontSize: "clamp(2rem, 5vw, 3rem)", 
              letterSpacing: "-0.01em",
              fontWeight: 400,
              lineHeight: "1.2"
            }}
          >
            What our clients say
          </h2>
        </div>

        <div className="relative">
          {/* Testimonial Content */}
          <div className="max-w-[900px]">
            <blockquote 
              className="text-[#3A3A3A] mb-8"
              style={{ 
                fontFamily: "'Figtree', sans-serif",
                fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)",
                lineHeight: "1.7",
                fontStyle: "italic"
              }}
            >
              "{testimonials[currentIndex].quote}"
            </blockquote>
            <div>
              <p 
                className="text-[#1A2551] mb-1"
                style={{ 
                  fontFamily: "'Playfair Display', serif", 
                  fontSize: "1.125rem",
                  fontWeight: 400
                }}
              >
                {testimonials[currentIndex].author}
              </p>
              <p 
                className="text-[#3A3A3A]"
                style={{ 
                  fontFamily: "'Figtree', sans-serif",
                  fontSize: "0.9375rem"
                }}
              >
                {testimonials[currentIndex].role}
              </p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-4 mt-12">
            <button
              onClick={handlePrevious}
              className="w-12 h-12 rounded-full border-2 border-[#1A2551] flex items-center justify-center text-[#1A2551] hover:bg-[#1A2551] hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border-2 border-[#1A2551] flex items-center justify-center text-[#1A2551] hover:bg-[#1A2551] hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}