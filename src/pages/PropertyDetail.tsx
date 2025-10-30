import image_e93c0b68313ae06ec506ba3f0d3e8a66538ce0a1 from 'figma:asset/e93c0b68313ae06ec506ba3f0d3e8a66538ce0a1.png';
import { Navigation } from "../components/Navigation";
import { FooterNew } from "../components/FooterNew";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { FloorPlanViewer } from "../components/FloorPlanViewer";
import { PropertyInquiryDialog } from "../components/PropertyInquiryDialog";
import { Bed, Bath, Maximize, MapPin, Star, ChevronLeft, ChevronRight, ArrowLeft, Heart, X } from "lucide-react";
import { useState, useContext } from "react";
import { NavigationContext } from "../App";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "../components/ui/dialog";
import { Button } from "../components/ui/button";
import { useFavorites } from "../contexts/FavoritesContext";

interface PropertyDetailProps {
  slug: string;
}

const property = {
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
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
  features: [
    "River views",
    "Private balcony",
    "Secure parking",
    "24-hour concierge",
    "Gym access",
    "Storage unit included"
  ],
  images: [
    "https://images.unsplash.com/photo-1515263487990-61b07816b324?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjExODYxMjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1638454668466-e8dbd5462f20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjEyMDcxMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1639405069836-f82aa6dcb900?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBraXRjaGVuJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYxMTI1NDA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1625579002297-aeebbf69de89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWRyb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYxMjE1NDQzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1638799869566-b17fa794c4de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiYXRocm9vbSUyMGludGVyaW9yfGVufDF8fHx8MTc2MTIyMzMyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1623051786509-57224cdc43e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBiYWxjb255fGVufDF8fHx8MTc2MTQwNDIyMHww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1564586880927-99376cbf0f4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBkaW5pbmclMjByb29tfGVufDF8fHx8MTc2MTQ5ODQzNHww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1665827488607-2c8f6ed98a69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBjbG9zZXR8ZW58MXx8fHwxNzYxNDk4NDM1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1631861461360-c3c573ab7896?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBob21lJTIwb2ZmaWNlfGVufDF8fHx8MTc2MTQ5ODQzNXww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1758448511533-e1502259fff6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBhbGF3d2F5fGVufDF8fHx8MTc2MTQ5ODQzNXww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1751724850192-e7020be8f999?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBsYXVuZHJ5fGVufDF8fHx8MTc2MTQ5ODQzNXww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1664190052386-b9feac724117?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBidWlsZGluZyUyMGxvYmJ5fGVufDF8fHx8MTc2MTQ5ODQzNXww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1757924284732-4189190321cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBneW0lMjBmaXRuZXNzfGVufDF8fHx8MTc2MTQ5ODQzNXww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1664190052514-6b4271caf147?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjByb29mdG9wJTIwdGVycmFjZXxlbnwxfHx8fDE3NjE0OTg0MzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1589554882513-691f8f071f72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBwb3dkZXIlMjByb29tfGVufDF8fHx8MTc2MTQ5ODQzNXww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1761165308179-d8de8f78bc49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBlbnRyeXdheXxlbnwxfHx8fDE3NjE0OTg0MzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1758548157275-d939cf0f0e32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBzdG9yYWdlfGVufDF8fHx8MTc2MTQ5ODQzNnww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1704655295066-681e61ecca6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBjb25jaWVyZ2UlMjBkZXNrfGVufDF8fHx8MTc2MTQ5ODQzNnww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1760611656188-8a1289f7dfb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjB3aW5kb3clMjB2aWV3fGVufDF8fHx8MTc2MTQ4NjYyNHww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1614255976202-8ce52bfcb655?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBmaXJlcGxhY2V8ZW58MXx8fHwxNzYxNDk4NDM3fDA&ixlib=rb-4.1.0&q=80&w=1080"
  ],
  floorPlan: image_e93c0b68313ae06ec506ba3f0d3e8a66538ce0a1
};

const relatedProperties = [
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
    id: 5,
    title: "Luxury Penthouse",
    location: "Richmond Town Centre",
    price: "£1,650,000",
    priceValue: 1650000,
    beds: 3,
    baths: 3,
    sqft: "2,100",
    type: "Penthouse",
    status: "Available",
    slug: "luxury-penthouse",
    image: "https://images.unsplash.com/photo-1677553512940-f79af72efd1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW50aG91c2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjEyMDkzMjd8MA&ixlib=rb-4.1.0&q=80&w=1080"
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
  }
];

const testimonials = [
  {
    quote: "Bartlett & Partners transformed our property search with their deep local knowledge and personalised approach.",
    author: "Emma Richardson",
    role: "First-time Buyer"
  },
  {
    quote: "Professional, efficient and always supportive throughout our entire selling process.",
    author: "Michael Thompson",
    role: "Seller, Richmond"
  },
  {
    quote: "Exceptional service that goes beyond just selling a property. Truly understand the local market.",
    author: "Sarah Williams",
    role: "Landlord, Twickenham"
  },
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum.",
    author: "David Chen",
    role: "Property Investor"
  }
];

export default function PropertyDetail({ slug }: PropertyDetailProps) {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [mapOpen, setMapOpen] = useState(false);
  const [floorPlanOpen, setFloorPlanOpen] = useState(false);
  const { navigateTo } = useContext(NavigationContext);
  const { isFavorite, toggleFavorite } = useFavorites();

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

  // Sort related properties to prioritize available ones
  const sortedRelatedProperties = [...relatedProperties]
    .sort((a, b) => {
      if (a.status === "Available" && b.status !== "Available") return -1;
      if (a.status !== "Available" && b.status === "Available") return 1;
      return 0;
    })
    .slice(0, 3); // Show only 3 properties

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="property-detail" />
      
      {/* Property Detail Section */}
      <section className="w-full bg-white pt-32 pb-12 px-6 lg:px-16">
        <div className="max-w-[1280px] mx-auto">
          {/* Back Button */}
          <button
            onClick={() => navigateTo('properties')}
            className="flex items-center gap-2 text-[#1A2551] mb-8 hover:opacity-70 transition-opacity group cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span
              style={{
                fontFamily: "'Figtree', sans-serif",
                fontSize: "0.9375rem",
                letterSpacing: "0.02em"
              }}
            >
              Back to Properties
            </span>
          </button>

          {/* Image Gallery - New Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-12">
            {/* Left - Large Main Image */}
            <div className="relative overflow-hidden bg-gray-200 h-full">
              <ImageWithFallback
                src={property.images[0]}
                alt={property.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right - 2x2 Grid */}
            <div className="grid grid-cols-2 gap-4">
              {property.images.slice(1, 5).map((image, index) => (
                <div key={index} className="relative overflow-hidden bg-gray-200" style={{ aspectRatio: "1/1" }}>
                  <ImageWithFallback
                    src={image}
                    alt={`${property.title} - Image ${index + 2}`}
                    className="w-full h-full object-cover"
                  />
                  {index === 3 && (
                    <div 
                      className="absolute inset-0 bg-black/60 flex items-center justify-center cursor-pointer hover:bg-black/70 transition-colors"
                      onClick={() => setGalleryOpen(true)}
                    >
                      <span 
                        className="text-white px-4 py-2 border border-white"
                        style={{ 
                          fontFamily: "'Figtree', sans-serif",
                          fontSize: "0.75rem",
                          textTransform: "uppercase",
                          letterSpacing: "0.05em"
                        }}
                      >
                        Show all photos
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Gallery Modal - Transparent Background */}
          {galleryOpen && (
            <div 
              className="fixed inset-0 z-50 flex items-center justify-center"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.95)' }}
              onClick={() => {
                setGalleryOpen(false);
                setSelectedImageIndex(0);
              }}
            >
              {/* Close Button - Top Right */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setGalleryOpen(false);
                  setSelectedImageIndex(0);
                }}
                className="absolute top-6 right-6 w-14 h-14 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all z-20"
                aria-label="Close gallery"
              >
                <X className="w-7 h-7" />
              </button>

              {/* Previous Arrow */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImageIndex((selectedImageIndex - 1 + property.images.length) % property.images.length);
                }}
                className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all z-10"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-7 h-7" />
              </button>

              {/* Current Image */}
              <div 
                className="w-full h-full flex items-center justify-center p-8"
                onClick={(e) => e.stopPropagation()}
              >
                <ImageWithFallback
                  src={property.images[selectedImageIndex]}
                  alt={`${property.title} - Image ${selectedImageIndex + 1}`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {/* Next Arrow */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImageIndex((selectedImageIndex + 1) % property.images.length);
                }}
                className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all z-10"
                aria-label="Next image"
              >
                <ChevronRight className="w-7 h-7" />
              </button>
            </div>
          )}

          {/* Property Details Section */}
          <div className="mb-12">
            {/* Title, Location, Price and Enquire Button */}
            <div className="flex items-start justify-between gap-8 mb-8">
              <div className="flex-1">
                <h1 
                  className="text-[#1A2551] mb-2"
                  style={{ 
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(2rem, 4vw, 2.5rem)",
                    fontWeight: 400,
                    lineHeight: "1.2"
                  }}
                >
                  {property.title}
                </h1>
                <div className="flex items-center gap-2 text-[#6B7280] mb-4" style={{ fontFamily: "'Figtree', sans-serif" }}>
                  <MapPin className="w-4 h-4" />
                  <span>{property.location}</span>
                </div>
                <p 
                  className="text-[#1A2551]"
                  style={{ 
                    fontFamily: "'Figtree', sans-serif",
                    fontSize: "2rem",
                    fontWeight: 600
                  }}
                >
                  {property.price}
                </p>
              </div>

              {/* Buttons Column */}
              <div className="flex flex-col gap-3">
                {/* Enquire Button - Conditional based on property status */}
                {property.status === "Available" ? (
                  <PropertyInquiryDialog
                    property={{
                      id: property.id,
                      title: property.title,
                      location: property.location,
                      price: property.price,
                      type: property.type
                    }}
                    trigger={
                      <Button
                        className="bg-[#1A2551] text-white px-8 py-3 rounded-full hover:bg-[#1A2551]/90 transition-colors flex-shrink-0"
                        style={{ 
                          fontFamily: "'Figtree', sans-serif",
                          fontSize: "0.875rem",
                          textTransform: "uppercase",
                          letterSpacing: "0.05em"
                        }}
                      >
                        <span className="premium-hover" data-text="ENQUIRE NOW">
                          <span>ENQUIRE NOW</span>
                        </span>
                      </Button>
                    }
                  />
                ) : (
                  <Button
                    disabled
                    className="bg-[#6B7280] text-white px-8 py-3 rounded-full flex-shrink-0 cursor-not-allowed opacity-70"
                    style={{ 
                      fontFamily: "'Figtree', sans-serif",
                      fontSize: "0.875rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em"
                    }}
                  >
                    {property.status.toUpperCase()}
                  </Button>
                )}

                {/* Favourite Button */}
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite({
                      id: property.id,
                      title: property.title,
                      location: property.location,
                      price: property.price,
                      priceValue: property.priceValue,
                      beds: property.beds,
                      baths: property.baths,
                      sqft: property.sqft,
                      type: property.type,
                      status: property.status,
                      slug: "modern-riverside-apartment",
                      image: property.images[0]
                    });
                  }}
                  className={`px-8 py-3 rounded-full transition-colors flex-shrink-0 flex items-center justify-center gap-2 ${
                    isFavorite(property.id)
                      ? 'bg-[#DC2626] text-white hover:bg-[#DC2626]/90'
                      : 'bg-transparent border-2 border-[#1A2551] text-[#1A2551] hover:bg-[#1A2551] hover:text-white'
                  }`}
                  style={{ 
                    fontFamily: "'Figtree', sans-serif",
                    fontSize: "0.875rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em"
                  }}
                >
                  <Heart className={`w-4 h-4 ${isFavorite(property.id) ? 'fill-current' : ''}`} />
                  <span className="premium-hover" data-text={isFavorite(property.id) ? "FAVOURITED" : "FAVOURITE"}>
                    <span>{isFavorite(property.id) ? "FAVOURITED" : "FAVOURITE"}</span>
                  </span>
                </Button>
              </div>
            </div>

            {/* Property Stats */}
            <div className="flex items-center gap-8 text-[#3A3A3A] py-4 border-y border-gray-200 mb-8" style={{ fontFamily: "'Figtree', sans-serif" }}>
              <div className="flex items-center gap-2">
                <Bed className="w-5 h-5" />
                <span>{property.beds} beds</span>
              </div>
              <div className="flex items-center gap-2">
                <Bath className="w-5 h-5" />
                <span>{property.baths} baths</span>
              </div>
              <div className="flex items-center gap-2">
                <Maximize className="w-5 h-5" />
                <span>{property.sqft} sqft</span>
              </div>
            </div>

            {/* Two-Column Layout: Description + Features (Left) | Location + Floor Plan (Right) */}
            <div className="grid lg:grid-cols-2 gap-12 mb-8">
              {/* Left Column: Description & Key Features */}
              <div className="space-y-8">
                {/* Description */}
                <div>
                  <h2 
                    className="text-[#1A2551] mb-4"
                    style={{ 
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.5rem",
                      fontWeight: 400
                    }}
                  >
                    Description
                  </h2>
                  <p 
                    className="text-[#3A3A3A]"
                    style={{ 
                      fontFamily: "'Figtree', sans-serif",
                      fontSize: "0.9375rem",
                      lineHeight: "1.7"
                    }}
                  >
                    {property.description}
                  </p>
                </div>

                {/* Key Features - 2 columns x 3 rows */}
                <div>
                  <h2 
                    className="text-[#1A2551] mb-4"
                    style={{ 
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.5rem",
                      fontWeight: 400
                    }}
                  >
                    Key Features
                  </h2>
                  <ul className="grid grid-cols-2 gap-3">
                    {property.features.map((feature, index) => (
                      <li 
                        key={index}
                        className="flex items-center gap-2 text-[#3A3A3A]"
                        style={{ 
                          fontFamily: "'Figtree', sans-serif",
                          fontSize: "0.9375rem"
                        }}
                      >
                        <div className="w-1.5 h-1.5 bg-[#1A2551] rounded-full flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column: Location & Floor Plan (Side by side in 2 columns) */}
              <div className="flex flex-col">
                {/* Single row with Location and Floor Plan headings aligned */}
                <div className="grid grid-cols-2 gap-6 flex-1">
                  {/* Location */}
                  <div className="flex flex-col">
                    <h2 
                      className="text-[#1A2551] mb-4"
                      style={{ 
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "1.5rem",
                        fontWeight: 400
                      }}
                    >
                      Location
                    </h2>
                    <div
                      onClick={() => setMapOpen(true)}
                      className="block w-full flex-1 bg-gray-200 rounded overflow-hidden cursor-pointer hover:opacity-90 transition-opacity group"
                    >
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2486.0234567890123!2d-0.30583368422944464!3d51.45833297962597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760de8e5a9f7ab%3A0x8e6c8e8e8e8e8e8e!2sRichmond%20Riverside!5e0!3m2!1sen!2suk!4v1234567890123!5m2!1sen!2suk"
                        width="100%"
                        height="100%"
                        style={{ border: 0, pointerEvents: 'none' }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="group-hover:opacity-80 transition-opacity"
                      ></iframe>
                    </div>
                  </div>

                  {/* Floor Plan */}
                  <div className="flex flex-col">
                    <h2 
                      className="text-[#1A2551] mb-4"
                      style={{ 
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "1.5rem",
                        fontWeight: 400
                      }}
                    >
                      Floor Plan
                    </h2>
                    <div 
                      onClick={() => setFloorPlanOpen(true)}
                      className="w-full flex-1 bg-gray-200 rounded overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                    >
                      <ImageWithFallback
                        src={property.floorPlan}
                        alt="Floor Plan"
                        className="w-full h-full object-cover pointer-events-none"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* You May Also Like Section */}
      <section className="w-full bg-[#F5F5F5] py-12 sm:py-14 lg:py-16 px-6 lg:px-16">
        <div className="max-w-[1280px] mx-auto">
          <h2 
            className="text-[#1A2551] mb-12"
            style={{ 
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 400,
              lineHeight: "1.2"
            }}
          >
            You may also like
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {sortedRelatedProperties.map((relatedProperty) => (
              <div 
                key={relatedProperty.id} 
                className="group"
              >
                <div className="relative overflow-hidden bg-gray-100 mb-4" style={{ aspectRatio: "4/3" }}>
                  <div 
                    className="w-full h-full cursor-pointer" 
                    onClick={() => navigateTo(`property/${relatedProperty.slug}`)}
                  >
                    <ImageWithFallback
                      src={relatedProperty.image}
                      alt={relatedProperty.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span 
                      className={`px-3 rounded-full text-xs h-9 flex items-center ${getStatusStyle(relatedProperty.status)}`}
                      style={{ fontFamily: "'Figtree', sans-serif", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 600 }}
                    >
                      {relatedProperty.status}
                    </span>
                  </div>

                  {/* Favorite Heart Button */}
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(relatedProperty);
                    }}
                    className={`absolute top-4 right-4 rounded-full p-2 shadow-lg transition-all duration-300 z-10 hover:scale-110 ${
                      isFavorite(relatedProperty.id) 
                        ? 'bg-[#DC2626] text-white' 
                        : 'bg-white text-[#1A2551] hover:bg-[#DC2626] hover:text-white'
                    }`}
                    aria-label={isFavorite(relatedProperty.id) ? "Remove from favorites" : "Add to favorites"}
                  >
                    <Heart 
                      className={`w-5 h-5 transition-all duration-300 ${isFavorite(relatedProperty.id) ? 'fill-current' : ''}`}
                    />
                  </button>
                </div>
                
                <div 
                  className="space-y-3 cursor-pointer"
                  onClick={() => navigateTo(`property/${relatedProperty.slug}`)}
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 
                      className="text-[#1A2551]"
                      style={{ 
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "1.5rem",
                        fontWeight: 400,
                        lineHeight: "1.2"
                      }}
                    >
                      {relatedProperty.title}
                    </h3>
                    <p 
                      className="text-[#1A2551] whitespace-nowrap"
                      style={{ 
                        fontFamily: "'Figtree', sans-serif",
                        fontSize: "1.25rem",
                        fontWeight: 600
                      }}
                    >
                      {relatedProperty.price}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-[#6B7280]" style={{ fontFamily: "'Figtree', sans-serif" }}>
                    <MapPin className="w-4 h-4" />
                    <span>{relatedProperty.location}</span>
                  </div>
                  
                  <div className="flex items-center gap-6 text-[#3A3A3A] pt-2" style={{ fontFamily: "'Figtree', sans-serif" }}>
                    <div className="flex items-center gap-2">
                      <Bed className="w-4 h-4" />
                      <span>{relatedProperty.beds} beds</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bath className="w-4 h-4" />
                      <span>{relatedProperty.baths} baths</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Maximize className="w-4 h-4" />
                      <span>{relatedProperty.sqft} sqft</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Our Clients Say Section */}
      <section className="w-full bg-white py-20 px-6 lg:px-16">
        <div className="max-w-[1280px] mx-auto">
          <div className="mb-12">
            <h2 
              className="text-[#1A2551] mb-3"
              style={{ 
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 400,
                lineHeight: "1.2"
              }}
            >
              What our clients say
            </h2>
          </div>

          {/* Testimonials Carousel */}
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out gap-6"
                style={{ transform: `translateX(-${currentTestimonialIndex * (100 / 3)}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index}
                    className="flex-shrink-0 bg-[#F5F5F5] p-8"
                    style={{ width: `calc((100% - ${(3 - 1) * 1.5}rem) / ${3})` }}
                  >
                    {/* 5 Stars */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#8E8567] text-[#8E8567]" />
                      ))}
                    </div>

                    {/* Quote */}
                    <p 
                      className="text-[#3A3A3A] mb-8"
                      style={{ 
                        fontFamily: "'Figtree', sans-serif",
                        fontSize: "0.9375rem",
                        lineHeight: "1.6",
                        minHeight: "80px"
                      }}
                    >
                      {testimonial.quote}
                    </p>

                    {/* Author */}
                    <div>
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
            <div className="flex justify-between items-center mt-8">
              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonialIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentTestimonialIndex 
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
                  onClick={prevTestimonial}
                  className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5 text-[#1A2551]" />
                </button>
                <button
                  onClick={nextTestimonial}
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

      <FooterNew />
      
      {/* Map Dialog */}
      <Dialog open={mapOpen} onOpenChange={setMapOpen}>
        <DialogContent className="!max-w-none !top-8 !bottom-8 !left-8 !right-8 !translate-x-0 !translate-y-0 w-auto h-auto p-0 overflow-hidden flex flex-col">
          <div className="px-8 pt-8 pb-4 flex-shrink-0">
            <DialogTitle className="text-[#1A2551]" style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", fontWeight: 400 }}>
              Location
            </DialogTitle>
            <DialogDescription className="text-[#6B7280] mt-2" style={{ fontFamily: "'Figtree', sans-serif", fontSize: "0.875rem" }}>
              {property.location}
            </DialogDescription>
          </div>
          <div className="flex-1 px-8 pb-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2486.0234567890123!2d-0.30583368422944464!3d51.45833297962597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760de8e5a9f7ab%3A0x8e6c8e8e8e8e8e8e!2sRichmond%20Riverside!5e0!3m2!1sen!2suk!4v1234567890123!5m2!1sen!2suk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded"
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>

      {/* Floor Plan Dialog */}
      <Dialog open={floorPlanOpen} onOpenChange={setFloorPlanOpen}>
        <DialogContent className="!max-w-none !top-8 !bottom-8 !left-8 !right-8 !translate-x-0 !translate-y-0 w-auto h-auto p-0 overflow-hidden flex flex-col">
          <div className="px-8 pt-8 pb-4 flex-shrink-0">
            <DialogTitle className="text-[#1A2551]" style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", fontWeight: 400 }}>
              Floor Plan
            </DialogTitle>
            <DialogDescription className="text-[#6B7280] mt-2" style={{ fontFamily: "'Figtree', sans-serif", fontSize: "0.875rem" }}>
              Scroll to zoom • Drag to pan
            </DialogDescription>
          </div>
          <div className="flex-1 px-8 pb-8">
            <FloorPlanViewer
              src={property.floorPlan}
              alt="Floor Plan - Interactive View"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}