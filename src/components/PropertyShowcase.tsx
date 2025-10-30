import svgPaths from "../imports/svg-mbh4dop5we";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { ChevronRight, ArrowUpRight, Heart, Bed, Bath, Maximize, MapPin } from "lucide-react";
import { useContext } from "react";
import { NavigationContext } from "../App";
import { useFavorites } from "../contexts/FavoritesContext";
import { AnimatedText, AnimatedStagger, AnimatedStaggerItem } from "./AnimatedText";

const properties = [
  {
    id: 1,
    title: "The Richmond Manor",
    description: "Elegant Victorian property with period features and modern amenities in the heart of Richmond.",
    tags: ["4 Bed", "3 Bath", "Garden"],
    image: "https://images.unsplash.com/photo-1706808849780-7a04fbac83ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc2MTIxMDU3Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    location: "Richmond",
    price: "£1,850,000",
    priceValue: 1850000,
    beds: 4,
    baths: 3,
    sqft: "2,800",
    type: "House",
    status: "Available",
    slug: "richmond-manor"
  },
  {
    id: 2,
    title: "Riverside Townhouse",
    description: "Contemporary townhouse offering stunning Thames views with three floors of luxury living space.",
    tags: ["3 Bed", "2 Bath", "Terrace"],
    image: "https://images.unsplash.com/photo-1624343385944-b99336163b50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0b3duaG91c2V8ZW58MXx8fHwxNzYxMjIyNTI0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    location: "Richmond Riverside",
    price: "£1,250,000",
    priceValue: 1250000,
    beds: 3,
    baths: 2,
    sqft: "1,750",
    type: "House",
    status: "Available",
    slug: "riverside-townhouse"
  },
  {
    id: 3,
    title: "Kew Gardens Apartment",
    description: "Sophisticated apartment in a historic building with high ceilings and botanical garden proximity.",
    tags: ["2 Bed", "2 Bath", "Balcony"],
    image: "https://images.unsplash.com/photo-1563891315366-4606cd73a33f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwYXBhcnRtZW50JTIwYnVpbGRpbmd8ZW58MXx8fHwxNzYxMjIyNTI0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    location: "Kew Gardens",
    price: "£625,000",
    priceValue: 625000,
    beds: 2,
    baths: 2,
    sqft: "1,100",
    type: "Apartment",
    status: "Available",
    slug: "kew-gardens-apartment"
  },
  {
    id: 4,
    title: "Hampton Court Estate",
    description: "Exceptional modern residence with open-plan living spaces and designer finishes throughout.",
    tags: ["5 Bed", "4 Bath", "Pool"],
    image: "https://images.unsplash.com/photo-1638369022547-1c763b1b9b3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBob3VzZXxlbnwxfHx8fDE3NjExNjg3Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    location: "Hampton Court",
    price: "£3,200,000",
    priceValue: 3200000,
    beds: 5,
    baths: 4,
    sqft: "4,500",
    type: "House",
    status: "Available",
    slug: "hampton-court-estate"
  },
  {
    id: 5,
    title: "Twickenham Heritage Home",
    description: "Beautifully restored Georgian townhouse combining original character with contemporary comfort.",
    tags: ["4 Bed", "3 Bath", "Patio"],
    image: "https://images.unsplash.com/photo-1745808930196-e03bf5fe6c02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwdG93bmhvdXNlJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzYxMTM3ODI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    location: "Twickenham",
    price: "£1,650,000",
    priceValue: 1650000,
    beds: 4,
    baths: 3,
    sqft: "2,100",
    type: "House",
    status: "Available",
    slug: "twickenham-heritage-home"
  },
  {
    id: 6,
    title: "Teddington Penthouse",
    description: "Luxurious penthouse with panoramic views, private elevator access, and premium specifications.",
    tags: ["3 Bed", "2 Bath", "Roof Terrace"],
    image: "https://images.unsplash.com/photo-1741764014072-68953e93cd48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjExNzc1MDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    location: "Teddington",
    price: "£875,000",
    priceValue: 875000,
    beds: 3,
    baths: 2,
    sqft: "1,450",
    type: "Penthouse",
    status: "Available",
    slug: "teddington-penthouse"
  }
];

function Content() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[16px] sm:gap-[24px] items-center relative shrink-0 text-[#1A2551] text-center w-full" data-name="Content">
      <AnimatedText delay={0}>
        <p className="font-['Playfair_Display',_serif] leading-[1.2] relative shrink-0 tracking-[-0.6px] w-full px-4" style={{ fontSize: 'clamp(1.75rem, 6vw, 3.75rem)', fontWeight: 400 }}>Featured Properties</p>
      </AnimatedText>
    </div>
  );
}

function SectionTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center max-w-[768px] relative shrink-0 w-full" data-name="Section Title">
      <Content />
    </div>
  );
}

function Text({ title, location }: { title: string; location: string }) {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[8px] items-start relative shrink-0 text-[#1A2551] w-full" data-name="Text">
      <p className="font-['Playfair_Display',_serif] leading-[1.3] relative shrink-0 tracking-[-0.32px] w-full" style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', fontWeight: 400 }}>{title}</p>
      <div className="flex items-center gap-2 text-[#6B7280]" style={{ fontFamily: "'Figtree', sans-serif", fontSize: 'clamp(0.875rem, 1.5vw, 1rem)' }}>
        <MapPin className="w-4 h-4" />
        <span>{location}</span>
      </div>
    </div>
  );
}

function Tag({ text }: { text: string }) {
  return (
    <div className="bg-[#F5F5F5] box-border content-stretch flex items-start px-[10px] py-[4px] relative shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none" />
      <p className="font-['Figtree',_sans-serif] leading-[1.5] relative shrink-0 text-[16px] text-[#3A3A3A] text-nowrap whitespace-pre" style={{ fontWeight: 600 }}>{text}</p>
    </div>
  );
}

function Tags({ tags }: { tags: string[] }) {
  return (
    <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full" data-name="Tags">
      {tags.map((tag, index) => (
        <Tag key={index} text={tag} />
      ))}
    </div>
  );
}

function ContentTop({ property }: { property: typeof properties[0] }) {
  return (
    <div className="content-stretch flex flex-col h-full justify-between items-start relative w-full gap-[16px]" data-name="Content Top">
      <div className="flex flex-col gap-[8px] w-full">
        <div className="flex items-start justify-between gap-4 w-full">
          <div className="flex-1">
            <Text title={property.title} location={property.location} />
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
      
      {/* Property Details - matching Properties page style */}
      <div className="flex items-center gap-6 text-[#3A3A3A] w-full" style={{ fontFamily: "'Figtree', sans-serif" }}>
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
  );
}

function Card({ property, index }: { property: typeof properties[0]; index: number }) {
  // Hide properties 5-9 (index 4-8) on mobile and tablet, show on desktop
  const hideOnMobile = index >= 4 ? "hidden lg:flex" : "";
  const { isFavorite, toggleFavorite } = useFavorites();
  const isPropertyFavorite = isFavorite(property.id);
  const { navigateTo } = useContext(NavigationContext);
  
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
  
  const handleCardClick = () => {
    navigateTo(`property/${property.slug}`);
  };
  
  return (
    <div 
      className={`basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px relative shrink-0 h-full group/card transition-all duration-500 ease-out hover:scale-[1.02] hover:-translate-y-2 cursor-pointer ${hideOnMobile}`} 
      data-name="Card"
      onClick={handleCardClick}
    >
      <div className="aspect-square relative shrink-0 w-full overflow-hidden shadow-md group-hover/card:shadow-2xl transition-shadow duration-500" data-name="Placeholder Image">
        <ImageWithFallback alt={property.title} className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full transition-transform duration-700 ease-out group-hover/card:scale-110" src={property.image} />
        
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
              isPropertyFavorite 
                ? 'bg-[#DC2626] text-white' 
                : 'bg-white text-[#1A2551] hover:bg-[#DC2626] hover:text-white'
            }`}
            aria-label={isPropertyFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            <Heart 
              className={`w-5 h-5 transition-all duration-300 ${isPropertyFavorite ? 'fill-current' : ''}`}
            />
          </button>
        </div>
      </div>
      <div className="flex-1 flex flex-col w-full">
        <ContentTop property={property} />
      </div>
    </div>
  );
}

function PortfolioList() {
  // Show only first 3 properties
  const featuredProperties = properties.slice(0, 3);
  
  return (
    <AnimatedStagger stagger={0.15} delay={0.1} className="content-stretch grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px] md:gap-[32px] items-stretch relative shrink-0 w-full" data-name="Portfolio List">
      {featuredProperties.map((property, i) => (
        <AnimatedStaggerItem key={i}>
          <Card property={property} index={i} />
        </AnimatedStaggerItem>
      ))}
    </AnimatedStagger>
  );
}

function Actions1() {
  const { navigateTo } = useContext(NavigationContext);
  return (
    <AnimatedText delay={0.2}>
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Actions">
        <Button 
          variant="outline" 
          className="border-2 border-[#1A2551] text-[#1A2551] hover:bg-[#1A2551] hover:text-white cursor-pointer" 
          onClick={() => navigateTo('properties')}
        >
          <span className="premium-hover" data-text="View all properties">
            <span>View all properties</span>
          </span>
        </Button>
      </div>
    </AnimatedText>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-center relative shrink-0 w-full" data-name="Content">
      <PortfolioList />
      <Actions1 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-center max-w-[1600px] relative shrink-0 w-full" data-name="Container">
      <SectionTitle />
      <Content2 />
    </div>
  );
}

export function PropertyShowcase() {
  return (
    <div className="bg-white relative w-full" data-name="Portfolio / 11 /">
      <div className="flex flex-col items-center w-full">
        <div className="box-border content-stretch flex flex-col gap-[48px] sm:gap-[64px] lg:gap-[80px] items-center px-8 md:px-10 lg:px-12 py-10 sm:py-12 lg:py-16 relative w-full">
          <Container />
        </div>
      </div>
    </div>
  );
}