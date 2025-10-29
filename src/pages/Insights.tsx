import { Navigation } from "../components/Navigation";
import { FooterNew } from "../components/FooterNew";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { OptimizedImage } from "../components/OptimizedImage";
import { OptimizedVideo } from "../components/OptimizedVideo";
import { TestimonialsCarousel } from "../components/TestimonialsCarousel";
import { testimonials } from "../data/testimonials";
import { ChevronLeft, ChevronRight, Mail } from "lucide-react";
import { useState, useContext } from "react";
import { NavigationContext } from "../App";

const blogPosts = [
  {
    id: 1,
    title: "Understanding Richmond's Property Market in 2025",
    excerpt: "Explore the latest trends and insights shaping Richmond's dynamic property landscape this year.",
    image: "https://images.unsplash.com/photo-1720247520862-7e4b14176fa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzYxMTY4NDY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Market Insights",
    date: "March 15, 2025"
  },
  {
    id: 2,
    title: "First-Time Buyer's Guide to Richmond",
    excerpt: "Everything you need to know about purchasing your first property in Richmond and the surrounding areas.",
    image: "https://images.unsplash.com/photo-1641998277833-3a911b7b56d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwcm9wZXJ0eSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjEyNDg5OTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Buying Guide",
    date: "March 10, 2025"
  },
  {
    id: 3,
    title: "Investment Opportunities in South West London",
    excerpt: "Discover why South West London continues to be one of the UK's most sought-after investment locations.",
    image: "https://images.unsplash.com/photo-1736320011788-a95a11524fe0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwbWFya2V0JTIwY2hhcnR8ZW58MXx8fHwxNzYxMjQ4OTk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Investment",
    date: "March 5, 2025"
  },
  {
    id: 4,
    title: "Renovating Period Properties: What You Need to Know",
    excerpt: "Expert advice on restoring and modernizing Richmond's beautiful period homes while preserving their character.",
    image: "https://images.unsplash.com/photo-1760650396717-771ebebd58c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwcmVub3ZhdGlvbiUyMGludGVyaW9yfGVufDF8fHx8MTc2MTI0ODk5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Renovation",
    date: "February 28, 2025"
  }
];

export default function Insights() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { navigateTo } = useContext(NavigationContext);

  const nextSlide = () => {
    if (currentIndex < blogPosts.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="insights" />
      
      {/* Page Content - No Hero */}
      <section className="w-full bg-white pt-32 pb-12 px-8 md:px-10 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          {/* Page Title */}
          <h1 
            className="text-[#1A2551] mb-16"
            style={{ 
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 400,
              lineHeight: "1.1"
            }}
          >
            Property Wisdom for Richmond
          </h1>

          {/* Blog Posts Carousel */}
          <div className="mb-20">
            <div className="relative overflow-hidden">
              {/* Desktop: 3 cards visible, Mobile: 1 card */}
              <div 
                className="flex gap-6 transition-transform duration-700 ease-out"
                style={{ 
                  transform: `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 1.5}rem))`
                }}
              >
                {blogPosts.map((post) => (
                  <div 
                    key={post.id}
                    onClick={() => navigateTo(`blog/${post.id}`)}
                    className="flex-shrink-0 w-full md:w-[calc(33.33%-1rem)] cursor-pointer group"
                  >
                    {/* Image */}
                    <div className="relative overflow-hidden bg-gray-200 mb-6" style={{ aspectRatio: "4/3" }}>
                      <OptimizedImage
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>

                    {/* Category & Date */}
                    <div className="flex items-center gap-3 mb-4">
                      <span 
                        className="text-[#1A2551]"
                        style={{ 
                          fontFamily: "'Figtree', sans-serif",
                          fontSize: "0.875rem",
                          textTransform: "uppercase",
                          letterSpacing: "0.05em"
                        }}
                      >
                        {post.category}
                      </span>
                      <span className="text-[#6B7280]" style={{ fontFamily: "'Figtree', sans-serif", fontSize: "0.875rem" }}>
                        •
                      </span>
                      <span 
                        className="text-[#6B7280]"
                        style={{ fontFamily: "'Figtree', sans-serif", fontSize: "0.875rem" }}
                      >
                        {post.date}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 
                      className="text-[#1A2551] mb-3"
                      style={{ 
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "clamp(1.25rem, 3vw, 1.5rem)",
                        fontWeight: 400,
                        lineHeight: "1.3"
                      }}
                    >
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p 
                      className="text-[#3A3A3A]"
                      style={{ 
                        fontFamily: "'Figtree', sans-serif",
                        fontSize: "0.9375rem",
                        lineHeight: "1.6"
                      }}
                    >
                      {post.excerpt}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex gap-3 mt-8">
              <button
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 active:bg-gray-100 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Previous posts"
              >
                <ChevronLeft className="w-5 h-5 text-[#1A2551]" />
              </button>
              <button
                onClick={nextSlide}
                disabled={currentIndex >= blogPosts.length - 1}
                className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 active:bg-gray-100 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Next posts"
              >
                <ChevronRight className="w-5 h-5 text-[#1A2551]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* What Our Clients Say Section */}
      <TestimonialsCarousel testimonials={testimonials} />

      <FooterNew />
    </div>
  );
}