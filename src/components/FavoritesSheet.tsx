import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "./ui/sheet";
import { useFavorites } from "../contexts/FavoritesContext";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { X, Bed, Bath, Maximize, MapPin } from "lucide-react";
import { useContext, useState } from "react";
import { NavigationContext } from "../App";
import { PropertyInquiryDialog } from "./PropertyInquiryDialog";

interface FavoritesSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FavoritesSheet({ isOpen, onClose }: FavoritesSheetProps) {
  const { favorites, removeFromFavorites } = useFavorites();
  const { navigateTo } = useContext(NavigationContext);
  const [showInquiryDialog, setShowInquiryDialog] = useState(false);

  const handlePropertyClick = (slug: string) => {
    navigateTo(`property/${slug}`);
    onClose();
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent 
        side="right" 
        className="w-full sm:max-w-[500px] p-0 flex flex-col bg-white [&>button]:hidden"
      >
        {/* Header */}
        <SheetHeader className="px-8 pt-8 pb-6 border-b border-gray-200">
          <div className="flex items-start justify-between">
            <div>
              <SheetTitle 
                className="text-[#1A2551] mb-1"
                style={{ 
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.75rem",
                  fontWeight: 400,
                  lineHeight: "1.2"
                }}
              >
                Saved Properties
              </SheetTitle>
              <SheetDescription
                className="text-[#6B7280]"
                style={{ 
                  fontFamily: "'Figtree', sans-serif",
                  fontSize: "0.9375rem",
                  lineHeight: "1.5"
                }}
              >
                {favorites.length} {favorites.length === 1 ? 'property' : 'properties'} saved
              </SheetDescription>
            </div>
            
            {/* Circle X Close Button */}
            <button
              onClick={onClose}
              className="w-12 h-12 rounded-full border-2 border-[#1A2551] flex items-center justify-center hover:bg-[#1A2551] hover:text-white transition-colors flex-shrink-0"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-[#1A2551] hover:text-white" />
            </button>
          </div>
        </SheetHeader>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-8 py-6">
          {favorites.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center px-4">
              <div className="w-16 h-16 rounded-full bg-[#F5F5F5] flex items-center justify-center mb-4">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#1A2551]"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </div>
              <p 
                className="text-[#1A2551] mb-2"
                style={{ 
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.25rem",
                  fontWeight: 400
                }}
              >
                No saved properties yet
              </p>
              <p 
                className="text-[#6B7280]"
                style={{ 
                  fontFamily: "'Figtree', sans-serif",
                  fontSize: "0.9375rem",
                  lineHeight: "1.6"
                }}
              >
                Start saving properties you love by clicking the heart icon
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {favorites.map((property) => (
                <div 
                  key={property.id}
                  className="group relative bg-white border border-gray-100 rounded overflow-hidden hover:shadow-md transition-all duration-300"
                >
                  {/* Remove button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      removeFromFavorites(property.id);
                    }}
                    className="absolute top-3 right-3 z-10 w-8 h-8 bg-white rounded-full shadow-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-50"
                    aria-label="Remove from favorites"
                  >
                    <X className="w-4 h-4 text-[#1A2551]" />
                  </button>

                  <div 
                    className="flex gap-4 cursor-pointer"
                    onClick={() => handlePropertyClick(property.slug)}
                  >
                    {/* Image */}
                    <div className="relative w-32 h-32 flex-shrink-0 overflow-hidden bg-gray-100">
                      <ImageWithFallback
                        src={property.image}
                        alt={property.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-2 left-2">
                        <span 
                          className={`px-2.5 py-1 rounded-full text-xs ${
                            property.status === 'Available' 
                              ? 'bg-[#8E8567] text-white' 
                              : property.status === 'Sale Agreed'
                              ? 'bg-[#1A2551] text-white'
                              : 'bg-gray-400 text-white'
                          }`}
                          style={{ 
                            fontFamily: "'Figtree', sans-serif",
                            textTransform: "uppercase",
                            letterSpacing: "0.05em"
                          }}
                        >
                          {property.status}
                        </span>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="flex-1 py-3 pr-3 flex flex-col justify-between min-w-0">
                      <div>
                        <h3 
                          className="text-[#1A2551] mb-1 truncate"
                          style={{ 
                            fontFamily: "'Playfair Display', serif",
                            fontSize: "1.125rem",
                            fontWeight: 400,
                            lineHeight: "1.3"
                          }}
                        >
                          {property.title}
                        </h3>
                        <div className="flex items-center gap-1.5 text-[#6B7280] mb-2">
                          <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                          <span 
                            className="truncate"
                            style={{ 
                              fontFamily: "'Figtree', sans-serif",
                              fontSize: "0.875rem"
                            }}
                          >
                            {property.location}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between gap-2">
                        <p 
                          className="text-[#1A2551]"
                          style={{ 
                            fontFamily: "'Figtree', sans-serif",
                            fontSize: "1.125rem",
                            fontWeight: 600
                          }}
                        >
                          {property.price}
                        </p>
                        <div className="flex items-center gap-3 text-[#6B7280]">
                          <div className="flex items-center gap-1">
                            <Bed className="w-3.5 h-3.5" />
                            <span style={{ fontFamily: "'Figtree', sans-serif", fontSize: "0.75rem" }}>
                              {property.beds}
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Bath className="w-3.5 h-3.5" />
                            <span style={{ fontFamily: "'Figtree', sans-serif", fontSize: "0.75rem" }}>
                              {property.baths}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer - Inquire Now or View All Properties Button */}
        {favorites.length > 0 && (
          <div className="px-8 py-6 border-t border-gray-200">
            {favorites.length > 1 ? (
              <PropertyInquiryDialog
                trigger={
                  <button
                    className="w-full bg-[#1A2551] text-white px-8 py-4 rounded-full hover:bg-[#1A2551]/90 transition-colors flex items-center justify-center relative"
                    style={{ 
                      fontFamily: "'Figtree', sans-serif",
                      fontSize: "0.9375rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em"
                    }}
                  >
                    <span className="premium-hover" data-text="INQUIRE NOW">
                      <span>INQUIRE NOW</span>
                    </span>
                  </button>
                }
                properties={favorites}
                isMultiProperty={true}
              />
            ) : (
              <button
                onClick={() => {
                  navigateTo('properties');
                  onClose();
                }}
                className="w-full bg-[#1A2551] text-white px-8 py-4 rounded-full hover:bg-[#1A2551]/90 transition-colors flex items-center justify-center relative"
                style={{ 
                  fontFamily: "'Figtree', sans-serif",
                  fontSize: "0.9375rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em"
                }}
              >
                <span className="premium-hover" data-text="VIEW ALL PROPERTIES">
                  <span>VIEW ALL PROPERTIES</span>
                </span>
              </button>
            )}
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}