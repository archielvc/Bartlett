import { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { Star } from "lucide-react";
import { BookEvaluationDialog } from "./BookEvaluationDialog";

const testimonials = [
  {
    rating: 5,
    quote: "The team at ESTATE made our property search effortless. Their knowledge of the Richmond area is unparalleled.",
    name: "Sarah Mitchell",
    role: "Homeowner"
  },
  {
    rating: 5,
    quote: "Professional, attentive, and genuinely committed to finding the perfect property for our needs. Highly recommended.",
    name: "James Thompson",
    role: "Property Investor"
  },
  {
    rating: 5,
    quote: "From our first consultation to completion, the service was exceptional. They truly understand luxury property.",
    name: "Emily Clarke",
    role: "First-time Buyer"
  },
  {
    rating: 5,
    quote: "Outstanding market knowledge and a truly personalized approach. They made the entire process smooth and stress-free.",
    name: "Michael Roberts",
    role: "Homeowner"
  }
];

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0], index: number }) {
  return (
    <div 
      className="bg-[#F5F5F5] p-6 lg:p-8 sticky mb-8"
      style={{
        top: `80px`,
        zIndex: index + 1
      }}
    >
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-[#8E8567] text-[#8E8567]" />
        ))}
      </div>
      <p className="text-[#3A3A3A] mb-4 italic" style={{ lineHeight: "1.7" }}>
        "{testimonial.quote}"
      </p>
      <div>
        <p className="text-[#1A2551]" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}>
          {testimonial.name}
        </p>
        <p className="text-[#3A3A3A] text-sm">
          {testimonial.role}
        </p>
      </div>
    </div>
  );
}

export function Testimonials() {
  // Calculate height for stacking animation
  const cardHeight = 280; // Approximate height of each testimonial card + margin
  const containerHeight = cardHeight * (testimonials.length - 1) + 100; // Reduced extra space for earlier scroll resumption

  return (
    <section className="w-full bg-white px-8 md:px-10 lg:px-12 py-10 sm:py-12 lg:py-14">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Sticky Left Section */}
          <div className="lg:col-span-1 sticky top-24">
            <h2 
              className="text-[#1A2551] mb-4"
              style={{ 
                fontFamily: "'Playfair Display', serif", 
                fontSize: "2.25rem", 
                letterSpacing: "0.02em",
                fontWeight: 400
              }}
            >
              Client Stories
            </h2>
            <p className="text-[#3A3A3A] mb-6" style={{ lineHeight: "1.7" }}>
              Hear from our satisfied clients about their experience working with our team.
            </p>
            <BookEvaluationDialog
              trigger={
                <Button variant="outline" className="border-2 border-[#1A2551] text-[#1A2551] hover:bg-[#1A2551] hover:text-white">
                  BOOK VALUATION
                </Button>
              }
            />
          </div>
          
          {/* Stacking Testimonials */}
          <div 
            className="lg:col-span-2 relative"
            style={{ minHeight: `${containerHeight}px` }}
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}