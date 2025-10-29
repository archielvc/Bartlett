import { Navigation } from "../components/Navigation";
import { FooterNew } from "../components/FooterNew";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ScrollWrapper } from "../components/ScrollWrapper";
import { TestimonialsCarousel } from "../components/TestimonialsCarousel";
import { testimonials } from "../data/testimonials";
import { PropertyInquiryDialog } from "../components/PropertyInquiryDialog";
import { Bed, Bath, Maximize, MapPin, SlidersHorizontal, Heart } from "lucide-react";
import { useState, useContext, useRef } from "react";
import { NavigationContext } from "../App";
import { useFavorites } from "../contexts/FavoritesContext";

const properties = [
  {
    id: 1,
    title: "Modern Riverside Apartment",
    location: "Richmond Riverside",
    price: "£875,000",
    priceValue: 875000,
    beds: 3,
    baths: 2,
    sqft: "1,450",
    type: "Apartment",
    status: "Available",
    slug: "modern-riverside-apartment",
    image: "https://images.unsplash.com/photo-1515263487990-61b07816b324?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjExODYxMjR8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 2,
    title: "Georgian Townhouse",
    location: "Richmond Hill",
    price: "£2,450,000",
    priceValue: 2450000,
    beds: 5,
    baths: 4,
    sqft: "3,200",
    type: "House",
    status: "Available",
    slug: "georgian-townhouse",
    image: "https://images.unsplash.com/photo-1689149528161-1a308a01990a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWN0b3JpYW4lMjB0b3duaG91c2V8ZW58MXx8fHwxNzYxMjM2OTY0fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 3,
    title: "Contemporary Garden Flat",
    location: "Kew Gardens",
    price: "£625,000",
    priceValue: 625000,
    beds: 2,
    baths: 2,
    sqft: "1,100",
    type: "Apartment",
    status: "Available",
    slug: "contemporary-garden-flat",
    image: "https://images.unsplash.com/photo-1756435292384-1bf32eff7baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBob21lfGVufDF8fHx8MTc2MTIzNjk2NHww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 4,
    title: "Victorian Family Home",
    location: "Twickenham",
    price: "£1,850,000",
    priceValue: 1850000,
    beds: 4,
    baths: 3,
    sqft: "2,800",
    type: "House",
    status: "Sale Agreed",
    slug: "victorian-family-home",
    image: "https://images.unsplash.com/photo-1706808849780-7a04fbac83ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc2MTIxMDU3Mnww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 5,
    title: "Luxury Penthouse",
    location: "Richmond Town Centre",
    price: "£1,650,000",
    priceValue: 1650000,
    beds: 3,
    baths: 3,
    sqft: "2,100",
    type: "Penthouse",
    status: "Sale Agreed",
    slug: "luxury-penthouse",
    image: "https://images.unsplash.com/photo-1677553512940-f79af72efd1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW50aG91c2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjEyMDkzMjd8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 6,
    title: "Riverside Cottage",
    location: "Teddington",
    price: "£1,250,000",
    priceValue: 1250000,
    beds: 3,
    baths: 2,
    sqft: "1,750",
    type: "House",
    status: "Sale Agreed",
    slug: "riverside-cottage",
    image: "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3R0YWdlJTIwaG91c2V8ZW58MXx8fHwxNzYxMjA3MjAzfDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 7,
    title: "Modern Studio",
    location: "Richmond",
    price: "£425,000",
    priceValue: 425000,
    beds: 1,
    baths: 1,
    sqft: "580",
    type: "Apartment",
    status: "Sold",
    slug: "modern-studio",
    image: "https://images.unsplash.com/photo-1633505765486-e404bbbec654?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzdHVkaW8lMjBhcGFydG1lbnR8ZW58MXx8fHwxNzYxMTM2MjQ4fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 8,
    title: "Period Conversion",
    location: "Hampton",
    price: "£950,000",
    priceValue: 950000,
    beds: 2,
    baths: 2,
    sqft: "1,350",
    type: "Apartment",
    status: "Sold",
    slug: "period-conversion",
    image: "https://images.unsplash.com/photo-1760660357998-9f4c37197f02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaXZlcnNpZGUlMjBwcm9wZXJ0eXxlbnwxfHx8fDE3NjEyMzY5NjV8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 9,
    title: "Executive Family Home",
    location: "Barnes",
    price: "£3,200,000",
    priceValue: 3200000,
    beds: 6,
    baths: 5,
    sqft: "4,500",
    type: "House",
    status: "Sold",
    slug: "executive-family-home",
    image: "https://images.unsplash.com/photo-1592183664157-cfc9a2562e12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBmYW1pbHklMjBob21lfGVufDF8fHx8MTc2MTIzNjk2Nnww&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

export default function Properties() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { navigateTo } = useContext(NavigationContext);
  const { isFavorite, toggleFavorite } = useFavorites();
  const propertiesGridRef = useRef<HTMLElement>(null);
  
  const propertiesPerPage = 6;

  // Helper function to change page and scroll to top
  const changePage = (newPage: number) => {
    setCurrentPage(newPage);
    // Scroll to properties grid section with offset for sticky header
    if (propertiesGridRef.current) {
      const navHeight = 80; // Approximate navigation height
      const heroHeight = 160; // Approximate hero section height
      const offset = navHeight + heroHeight;
      const elementPosition = propertiesGridRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Toggle availability filter
  const toggleAvailability = (status: string) => {
    setSelectedAvailability(prev => 
      prev.includes(status) 
        ? prev.filter(s => s !== status)
        : [...prev, status]
    );
    changePage(1);
  };

  // Toggle price range filter
  const togglePriceRange = (range: string) => {
    setSelectedPriceRanges(prev => 
      prev.includes(range) 
        ? prev.filter(r => r !== range)
        : [...prev, range]
    );
    changePage(1);
  };

  // Check if property matches price range
  const matchesPriceRange = (priceValue: number, range: string) => {
    switch(range) {
      case "Under £750K": return priceValue < 750000;
      case "£750K - £1.5M": return priceValue >= 750000 && priceValue < 1500000;
      case "£1.5M - £2.5M": return priceValue >= 1500000 && priceValue < 2500000;
      case "Over £2.5M": return priceValue >= 2500000;
      default: return false;
    }
  };

  // Filter and sort properties
  const filteredProperties = properties
    .filter(property => {
      // If no filters selected, show all
      const hasAvailabilityFilter = selectedAvailability.length > 0;
      const hasPriceFilter = selectedPriceRanges.length > 0;
      
      if (!hasAvailabilityFilter && !hasPriceFilter) return true;
      
      // Check availability filter
      const matchesAvailability = !hasAvailabilityFilter || selectedAvailability.includes(property.status);
      
      // Check price range filter
      const matchesPrice = !hasPriceFilter || selectedPriceRanges.some(range => matchesPriceRange(property.priceValue, range));
      
      // AND logic: must match both filters if both are active
      return matchesAvailability && matchesPrice;
    })
    .sort((a, b) => {
      // Sort by status: Available, Sale Agreed, Sold
      const statusOrder: {[key: string]: number} = { "Available": 1, "Sale Agreed": 2, "Sold": 3 };
      return statusOrder[a.status] - statusOrder[b.status];
    });
  
  // Pagination calculations
  const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage);
  const startIndex = (currentPage - 1) * propertiesPerPage;
  const endIndex = startIndex + propertiesPerPage;
  const currentProperties = filteredProperties.slice(startIndex, endIndex);

  // Get status badge styling
  const getStatusStyle = (status: string) => {
    switch(status) {
      case "Available":
        return "bg-[#8E8567] text-white";
      case "Sale Agreed":
        return "bg-[#1A2551] text-white";
      case "Sold":
        return "bg-[#1A2551] text-white";
      default:
        return "bg-[#1A2551] text-white";
    }
  };

  const activeFilterCount = selectedAvailability.length + selectedPriceRanges.length;

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="properties" />
      
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
              Discover Your Perfect Property
            </h1>
          </div>
        </div>
      </section>

      <ScrollWrapper>
        {/* Filter Section */}
        <section className="w-full bg-white py-6 px-8 md:px-10 lg:px-12 border-b border-gray-200">
          <div className="max-w-[1600px] mx-auto flex justify-between items-center">
            <p 
              className="text-[#3A3A3A]"
              style={{ 
                fontFamily: "'Figtree', sans-serif",
                fontSize: "0.9375rem"
              }}
            >
              Showing {filteredProperties.length} {filteredProperties.length === 1 ? 'property' : 'properties'}
            </p>
            
            <div className="flex items-center gap-4">
              {activeFilterCount > 0 && (
                <button
                  onClick={() => {
                    setSelectedAvailability([]);
                    setSelectedPriceRanges([]);
                    changePage(1);
                  }}
                  className="text-[#1A2551] hover:underline"
                  style={{ 
                    fontFamily: "'Figtree', sans-serif",
                    fontSize: "0.875rem"
                  }}
                >
                  Clear all filters
                </button>
              )}
              
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center gap-2 border-2 border-gray-300 text-[#3A3A3A] px-6 py-3 rounded-full hover:border-[#1A2551] hover:text-[#1A2551] transition-colors relative cursor-pointer"
                style={{ 
                  fontFamily: "'Figtree', sans-serif",
                  fontSize: "0.875rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em"
                }}
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span className="premium-hover" data-text="FILTERS">
                  <span>FILTERS</span>
                </span>
                {activeFilterCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#1A2551] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">
                    {activeFilterCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </section>

        {/* Filter Panel */}
        {isFilterOpen && (
          <div className="w-full bg-white border-b border-gray-200">
            <div className="max-w-[1600px] mx-auto px-8 md:px-10 lg:px-12 py-8">
              <div className="grid md:grid-cols-2 gap-8 md:max-w-[50%]">
                {/* Availability Filter */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 
                      className="text-[#1A2551]"
                      style={{ 
                        fontFamily: "'Figtree', sans-serif",
                        fontSize: "1.125rem",
                        fontWeight: 400
                      }}
                    >
                      Availability
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {["Available", "Sale Agreed", "Sold"].map((status) => (
                      <label key={status} className="flex items-center gap-3 cursor-pointer group">
                        <div className="relative flex items-center justify-center">
                          <input
                            type="checkbox"
                            checked={selectedAvailability.includes(status)}
                            onChange={() => toggleAvailability(status)}
                            className="w-5 h-5 border-2 border-gray-300 rounded appearance-none checked:bg-[#1A2551] checked:border-[#1A2551] cursor-pointer transition-colors"
                          />
                          {selectedAvailability.includes(status) && (
                            <svg className="absolute w-3 h-3 text-white pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                        <span 
                          className="text-[#3A3A3A] group-hover:text-[#1A2551] transition-colors"
                          style={{ 
                            fontFamily: "'Figtree', sans-serif",
                            fontSize: "0.9375rem"
                          }}
                        >
                          {status}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range Filter */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 
                      className="text-[#1A2551]"
                      style={{ 
                        fontFamily: "'Figtree', sans-serif",
                        fontSize: "1.125rem",
                        fontWeight: 400
                      }}
                    >
                      Price
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {["Under £750K", "£750K - £1.5M", "£1.5M - £2.5M", "Over £2.5M"].map((range) => (
                      <label key={range} className="flex items-center gap-3 cursor-pointer group">
                        <div className="relative flex items-center justify-center">
                          <input
                            type="checkbox"
                            checked={selectedPriceRanges.includes(range)}
                            onChange={() => togglePriceRange(range)}
                            className="w-5 h-5 border-2 border-gray-300 rounded appearance-none checked:bg-[#1A2551] checked:border-[#1A2551] cursor-pointer transition-colors"
                          />
                          {selectedPriceRanges.includes(range) && (
                            <svg className="absolute w-3 h-3 text-white pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                        <span 
                          className="text-[#3A3A3A] group-hover:text-[#1A2551] transition-colors"
                          style={{ 
                            fontFamily: "'Figtree', sans-serif",
                            fontSize: "0.9375rem"
                          }}
                        >
                          {range}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Properties Grid */}
        <section ref={propertiesGridRef} className="w-full bg-white px-8 md:px-10 lg:px-12 py-16">
          <div className="max-w-[1600px] mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px] md:gap-[32px]">
              {currentProperties.map((property) => {
                const isFavorited = isFavorite(property.id);
                
                return (
                  <div 
                    key={property.id} 
                    className="flex flex-col gap-[24px] group transition-all duration-500 ease-out hover:scale-[1.02] hover:-translate-y-2 cursor-pointer"
                    onClick={() => navigateTo(`property/${property.slug}`)}
                  >
                    <div 
                      className="aspect-square relative overflow-hidden bg-gray-100 shadow-md group-hover:shadow-2xl transition-shadow duration-500" 
                    >
                      <ImageWithFallback
                        src={property.image}
                        alt={property.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      
                      {/* Status badge - top left */}
                      <div className="absolute top-4 left-4 z-10">
                        <span 
                          className={`px-3 rounded-full text-xs h-9 flex items-center ${getStatusStyle(property.status)}`}
                          style={{ 
                            fontFamily: "'Figtree', sans-serif",
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                            fontWeight: 600
                          }}
                        >
                          {property.status}
                        </span>
                      </div>
                      
                      {/* Top right - Favorite Heart Button only */}
                      <div className="absolute top-4 right-4 z-10">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleFavorite(property);
                          }}
                          className={`rounded-full p-2 shadow-lg transition-all duration-300 pointer-events-auto hover:scale-110 ${
                            isFavorited 
                              ? 'bg-[#DC2626] text-white' 
                              : 'bg-white text-[#1A2551] hover:bg-[#DC2626] hover:text-white'
                          }`}
                          aria-label={isFavorited ? "Remove from favorites" : "Add to favorites"}
                        >
                          <Heart 
                            className={`w-5 h-5 transition-all duration-300 ${isFavorited ? 'fill-current' : ''}`}
                          />
                        </button>
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-[16px]">
                      <div className="flex flex-col gap-[8px]">
                        <div className="flex items-start justify-between gap-4 w-full">
                          <div className="flex-1">
                            <h3 
                              className="text-[#1A2551]"
                              style={{ 
                                fontFamily: "'Playfair Display', serif",
                                fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
                                fontWeight: 400,
                                lineHeight: "1.3"
                              }}
                            >
                              {property.title}
                            </h3>
                            <div className="flex items-center gap-2 text-[#6B7280] mt-2" style={{ fontFamily: "'Figtree', sans-serif", fontSize: "clamp(0.875rem, 1.5vw, 1rem)" }}>
                              <MapPin className="w-4 h-4" />
                              <span>{property.location}</span>
                            </div>
                          </div>
                          <p 
                            className="text-[#1A2551] whitespace-nowrap"
                            style={{ 
                              fontFamily: "'Figtree', sans-serif",
                              fontSize: "1.25rem",
                              fontWeight: 600
                            }}
                          >
                            {property.price}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-6 text-[#3A3A3A]" style={{ fontFamily: "'Figtree', sans-serif" }}>
                        <div className="flex items-center gap-2">
                          <Bed className="w-4 h-4" />
                          <span>{property.beds} beds</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Bath className="w-4 h-4" />
                          <span>{property.baths} baths</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Maximize className="w-4 h-4" />
                          <span>{property.sqft} sqft</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-16">
                <button 
                  onClick={() => changePage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className={`px-6 py-2 rounded-full border-2 transition-all duration-300 relative ${
                    currentPage === 1 
                      ? 'border-gray-300 text-gray-400 cursor-not-allowed' 
                      : 'border-[#1A2551] text-[#1A2551] hover:bg-[#1A2551] hover:text-white cursor-pointer'
                  }`}
                  style={{ 
                    fontFamily: "'Figtree', sans-serif",
                    fontSize: "0.875rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em"
                  }}
                >
                  <span className="premium-hover" data-text="PREVIOUS">
                    <span>Previous</span>
                  </span>
                </button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => changePage(page)}
                    className={`px-4 py-2 rounded-full border-2 transition-all duration-300 relative ${
                      currentPage === page
                        ? 'bg-[#1A2551] border-[#1A2551] text-white'
                        : 'border-[#1A2551] text-[#1A2551] hover:bg-[#1A2551] hover:text-white cursor-pointer'
                    }`}
                    style={{ 
                      fontFamily: "'Figtree', sans-serif",
                      fontSize: "0.875rem",
                      fontWeight: 600
                    }}
                  >
                    {page}
                  </button>
                ))}
                
                <button 
                  onClick={() => changePage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className={`px-6 py-2 rounded-full border-2 transition-all duration-300 relative ${
                    currentPage === totalPages 
                      ? 'border-gray-300 text-gray-400 cursor-not-allowed' 
                      : 'border-[#1A2551] text-[#1A2551] hover:bg-[#1A2551] hover:text-white cursor-pointer'
                  }`}
                  style={{ 
                    fontFamily: "'Figtree', sans-serif",
                    fontSize: "0.875rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em"
                  }}
                >
                  <span className="premium-hover" data-text="NEXT">
                    <span>Next</span>
                  </span>
                </button>
              </div>
            )}
          </div>
        </section>

        <TestimonialsCarousel testimonials={testimonials} />
        <FooterNew />
      </ScrollWrapper>
    </div>
  );
}
