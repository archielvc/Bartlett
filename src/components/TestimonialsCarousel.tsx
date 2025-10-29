import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { AnimatedText } from "./AnimatedText";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
  cardsToShow?: number; // Optional prop with default of 4
}

export function TestimonialsCarousel({ testimonials, cardsToShow = 4 }: TestimonialsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [responsiveCardsToShow, setResponsiveCardsToShow] = useState(1);

  // Responsive cards to show based on screen size
  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth < 640) {
        setResponsiveCardsToShow(1); // Mobile: 1 card
      } else if (window.innerWidth < 768) {
        setResponsiveCardsToShow(2); // Small tablet: 2 cards
      } else if (window.innerWidth < 1024) {
        setResponsiveCardsToShow(2); // Tablet: 2 cards
      } else if (window.innerWidth < 1280) {
        setResponsiveCardsToShow(3); // Small desktop: 3 cards
      } else {
        setResponsiveCardsToShow(cardsToShow); // Large desktop: 4 cards (or custom)
      }
    };

    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);
    return () => window.removeEventListener('resize', updateCardsToShow);
  }, [cardsToShow]);

  // Calculate how many slides we can move through
  const maxIndex = Math.max(0, testimonials.length - responsiveCardsToShow);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const gapInRem = 1.5;
  // Calculate scroll distance: (100% / responsiveCardsToShow) + (gap / responsiveCardsToShow)
  // This ensures we move exactly one card width + one gap
  const scrollPercentage = 100 / responsiveCardsToShow;
  const scrollGapAdjustment = gapInRem / responsiveCardsToShow;
  
  return (
    <section className="w-full bg-white py-10 sm:py-12 lg:py-14 px-6 sm:px-8 md:px-10 lg:px-12">
      <div className="max-w-[1600px] mx-auto">
        <div className="mb-8 sm:mb-12">
          <AnimatedText delay={0}>
            <h2 
              className="text-[#1A2551]"
              style={{ 
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.75rem, 5vw, 3rem)",
                fontWeight: 400,
                lineHeight: "1.2"
              }}
            >
              What Our Clients Say
            </h2>
          </AnimatedText>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(calc(-${currentIndex} * (${scrollPercentage}% + ${scrollGapAdjustment}rem)))`,
                gap: `${gapInRem}rem`
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 bg-[#F5F5F5] p-6 sm:p-8 flex flex-col"
                  style={{ width: `calc((100% - ${(responsiveCardsToShow - 1) * gapInRem}rem) / ${responsiveCardsToShow})` }}
                >
                  {/* 5 Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#8E8567] text-[#8E8567]" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p 
                    className="text-[#3A3A3A] mb-8 flex-grow"
                    style={{ 
                      fontFamily: "'Figtree', sans-serif",
                      fontSize: "0.9375rem",
                      lineHeight: "1.6"
                    }}
                  >
                    {testimonial.quote}
                  </p>

                  {/* Author */}
                  <div className="mt-auto">
                    <p 
                      className="text-[#1A2551] mb-1"
                      style={{ 
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "1rem",
                        fontWeight: 400
                      }}
                    >
                      {testimonial.author}
                    </p>
                    <p 
                      className="text-[#6B7280]"
                      style={{ 
                        fontFamily: "'Figtree', sans-serif",
                        fontSize: "0.875rem"
                      }}
                    >
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-6 sm:mt-8">
            {/* Dots */}
            <div className="flex gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${ 
                    index === currentIndex 
                      ? 'bg-[#1A2551] w-8' 
                      : 'bg-gray-300 w-2'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Arrow Buttons */}
            <div className="flex gap-3">
              <button
                onClick={prevSlide}
                className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-[#1A2551]" />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-[#1A2551]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}