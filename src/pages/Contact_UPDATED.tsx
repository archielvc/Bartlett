import { Navigation } from "../components/Navigation";
import { FooterNew } from "../components/FooterNew";
import { Mail, Phone, MapPin, MessageCircle, CalendarIcon, Pencil, Heart, X } from "lucide-react";
import { useState } from "react";
import { Calendar } from "../components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { format } from "date-fns";
import { properties } from "../data/properties";
import { useFavorites } from "../contexts/FavoritesContext";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { motion, AnimatePresence } from "motion/react";

export default function Contact() {
  const [selectedReason, setSelectedReason] = useState<string>("Other");
  const [date, setDate] = useState<Date>();
  const [timeOfDay, setTimeOfDay] = useState<string>("");
  const { isFavorite } = useFavorites();
  
  // For "Buy" option - property selection (now supports multiple)
  const [selectedProperties, setSelectedProperties] = useState<any[]>([]);
  const [showPropertySelector, setShowPropertySelector] = useState(false);
  
  // Filter to only show available properties, then sort with favorites first
  const availableProperties = properties.filter(p => p.status === "Available");
  const sortedProperties = [...availableProperties].sort((a, b) => {
    const aIsFav = isFavorite(a.id);
    const bIsFav = isFavorite(b.id);
    if (aIsFav && !bIsFav) return -1;
    if (!aIsFav && bIsFav) return 1;
    return 0;
  });
  
  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="contact" />
      
      {/* Page Content - No Hero */}
      <section className="w-full bg-white pt-32 pb-20 px-8 md:px-10 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          {/* Page Title */}
          <h1 
            className="text-[#1A2551] mb-12 md:mb-16"
            style={{ 
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 5vw, 4rem)",
              fontWeight: 400,
              lineHeight: "1.1"
            }}
          >
            Contact Bartlett & Partners
          </h1>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Company Information */}
            <div>
              <h2 
                className="text-[#1A2551] mb-8"
                style={{ 
                  fontFamily: "'Figtree', sans-serif",
                  fontSize: "1.75rem",
                  fontWeight: 600,
                  lineHeight: "1.3",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em"
                }}
              >
                Get In Touch
              </h2>

              <div className="space-y-8">
                {/* Email */}
                <a 
                  href="mailto:hello@bartlettpartners.co.uk"
                  className="flex items-start gap-4 group cursor-pointer"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1A2551]/5 to-[#8E8567]/5 flex items-center justify-center relative overflow-hidden transition-all duration-700 ease-out group-hover:scale-110 group-hover:shadow-xl flex-shrink-0">
                    {/* Animated background gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1A2551] to-[#8E8567] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out" />
                    
                    {/* Icon */}
                    <Mail className="w-7 h-7 text-[#1A2551] relative z-10 transition-all duration-700 ease-out group-hover:text-white group-hover:scale-110" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 
                      className="text-[#1A2551] mb-2"
                      style={{ 
                        fontFamily: "'Figtree', sans-serif",
                        fontSize: "1rem",
                        fontWeight: 600
                      }}
                    >
                      Email
                    </h3>
                    <span 
                      className="text-[#3A3A3A] group-hover:text-[#1A2551] transition-colors"
                      style={{ 
                        fontFamily: "'Figtree', sans-serif",
                        fontSize: "0.9375rem",
                        lineHeight: "1.6"
                      }}
                    >
                      hello@bartlettpartners.co.uk
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <a 
                  href="tel:+442089408000"
                  className="flex items-start gap-4 group cursor-pointer"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1A2551]/5 to-[#8E8567]/5 flex items-center justify-center relative overflow-hidden transition-all duration-700 ease-out group-hover:scale-110 group-hover:shadow-xl flex-shrink-0">
                    {/* Animated background gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1A2551] to-[#8E8567] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out" />
                    
                    {/* Icon */}
                    <Phone className="w-7 h-7 text-[#1A2551] relative z-10 transition-all duration-700 ease-out group-hover:text-white group-hover:scale-110" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 
                      className="text-[#1A2551] mb-2"
                      style={{ 
                        fontFamily: "'Figtree', sans-serif",
                        fontSize: "1rem",
                        fontWeight: 600
                      }}
                    >
                      Phone
                    </h3>
                    <span 
                      className="text-[#3A3A3A] group-hover:text-[#1A2551] transition-colors"
                      style={{ 
                        fontFamily: "'Figtree', sans-serif",
                        fontSize: "0.9375rem",
                        lineHeight: "1.6"
                      }}
                    >
                      020 8940 8000
                    </span>
                  </div>
                </a>

                {/* WhatsApp */}
                <a 
                  href="https://wa.me/442089408000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group cursor-pointer"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1A2551]/5 to-[#8E8567]/5 flex items-center justify-center relative overflow-hidden transition-all duration-700 ease-out group-hover:scale-110 group-hover:shadow-xl flex-shrink-0">
                    {/* Animated background gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1A2551] to-[#8E8567] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out" />
                    
                    {/* Icon */}
                    <MessageCircle className="w-7 h-7 text-[#1A2551] relative z-10 transition-all duration-700 ease-out group-hover:text-white group-hover:scale-110" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 
                      className="text-[#1A2551] mb-2"
                      style={{ 
                        fontFamily: "'Figtree', sans-serif",
                        fontSize: "1rem",
                        fontWeight: 600
                      }}
                    >
                      WhatsApp
                    </h3>
                    <span 
                      className="text-[#3A3A3A] group-hover:text-[#1A2551] transition-colors"
                      style={{ 
                        fontFamily: "'Figtree', sans-serif",
                        fontSize: "0.9375rem",
                        lineHeight: "1.6"
                      }}
                    >
                      020 8940 8000
                    </span>
                  </div>
                </a>

                {/* Address */}
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=14+The+Quadrant+Richmond+Surrey+TW9+1BP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group cursor-pointer"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1A2551]/5 to-[#8E8567]/5 flex items-center justify-center relative overflow-hidden transition-all duration-700 ease-out group-hover:scale-110 group-hover:shadow-xl flex-shrink-0">
                    {/* Animated background gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1A2551] to-[#8E8567] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out" />
                    
                    {/* Icon */}
                    <MapPin className="w-7 h-7 text-[#1A2551] relative z-10 transition-all duration-700 ease-out group-hover:text-white group-hover:scale-110" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 
                      className="text-[#1A2551] mb-2"
                      style={{ 
                        fontFamily: "'Figtree', sans-serif",
                        fontSize: "1rem",
                        fontWeight: 600
                      }}
                    >
                      Office
                    </h3>
                    <span 
                      className="text-[#3A3A3A] group-hover:text-[#1A2551] transition-colors"
                      style={{ 
                        fontFamily: "'Figtree', sans-serif",
                        fontSize: "0.9375rem",
                        lineHeight: "1.6"
                      }}
                    >
                      14 The Quadrant<br />
                      Richmond<br />
                      Surrey TW9 1BP
                    </span>
                  </div>
                </a>

                {/* Office Hours */}
                <div className="pt-8 border-t border-gray-200">
                  <h3 
                    className="text-[#1A2551] mb-4"
                    style={{ 
                      fontFamily: "'Figtree', sans-serif",
                      fontSize: "1rem",
                      fontWeight: 600
                    }}
                  >
                    Office Hours
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span 
                        className="text-[#3A3A3A]"
                        style={{ fontFamily: "'Figtree', sans-serif", fontSize: "0.9375rem" }}
                      >
                        Monday - Thursday
                      </span>
                      <span 
                        className="text-[#1A2551]"
                        style={{ fontFamily: "'Figtree', sans-serif", fontSize: "0.9375rem", fontWeight: 600 }}
                      >
                        9:00 AM - 6:00 PM
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span 
                        className="text-[#3A3A3A]"
                        style={{ fontFamily: "'Figtree', sans-serif", fontSize: "0.9375rem" }}
                      >
                        Friday
                      </span>
                      <span 
                        className="text-[#1A2551]"
                        style={{ fontFamily: "'Figtree', sans-serif", fontSize: "0.9375rem", fontWeight: 600 }}
                      >
                        9:00 AM - 4:30 PM
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span 
                        className="text-[#3A3A3A]"
                        style={{ fontFamily: "'Figtree', sans-serif", fontSize: "0.9375rem" }}
                      >
                        Saturday
                      </span>
                      <span 
                        className="text-[#1A2551]"
                        style={{ fontFamily: "'Figtree', sans-serif", fontSize: "0.9375rem", fontWeight: 600 }}
                      >
                        9:00 AM - 4:00 PM
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span 
                        className="text-[#3A3A3A]"
                        style={{ fontFamily: "'Figtree', sans-serif", fontSize: "0.9375rem" }}
                      >
                        Sunday
                      </span>
                      <span 
                        className="text-[#1A2551]"
                        style={{ fontFamily: "'Figtree', sans-serif", fontSize: "0.9375rem", fontWeight: 600 }}
                      >
                        Closed
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Dynamic Contact Form */}
            <div className="relative">
              <form className="space-y-6">
                {/* Reason to Contact - Now at Top */}
                <div>
                  <label 
                    className="block text-[#1A2551] mb-3"
                    style={{ 
                      fontFamily: "'Figtree', sans-serif",
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em"
                    }}
                  >
                    Reason to Contact
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {['Buy', 'Sell', 'Other'].map((reason) => (
                      <button
                        key={reason}
                        type="button"
                        onClick={() => setSelectedReason(reason)}
                        className={`px-6 py-2.5 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                          selectedReason === reason
                            ? 'bg-[#1A2551] border-[#1A2551] text-white'
                            : 'bg-white border-gray-300 text-[#1A2551] hover:border-[#1A2551]'
                        }`}
                        style={{ 
                          fontFamily: "'Figtree', sans-serif",
                          fontSize: "0.875rem",
                          fontWeight: 600,
                          textTransform: "uppercase",
                          letterSpacing: "0.05em"
                        }}
                      >
                        <span className="premium-hover" data-text={reason.toUpperCase()}>
                          <span>{reason}</span>
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* First Name and Last Name - Side by Side */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* First Name */}
                  <div>
                    <label 
                      htmlFor="firstName"
                      className="block text-[#1A2551] mb-2"
                      style={{ 
                        fontFamily: "'Figtree', sans-serif",
                        fontSize: "0.875rem",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.05em"
                      }}
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A2551] focus:border-transparent"
                      style={{ 
                        fontFamily: "'Figtree', sans-serif",
                        fontSize: "0.9375rem"
                      }}
                    />
                  </div>

                  {/* Last Name */}
                  <div>
                    <label 
                      htmlFor="lastName"
                      className="block text-[#1A2551] mb-2"
                      style={{ 
                        fontFamily: "'Figtree', sans-serif",
                        fontSize: "0.875rem",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.05em"
                      }}
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A2551] focus:border-transparent"
                      style={{ 
                        fontFamily: "'Figtree', sans-serif",
                        fontSize: "0.9375rem"
                      }}
                    />
                  </div>
                </div>

                {/* Number and Email - Side by Side */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Number */}
                  <div>
                    <label 
                      htmlFor="number"
                      className="block text-[#1A2551] mb-2"
                      style={{ 
                        fontFamily: "'Figtree', sans-serif",
                        fontSize: "0.875rem",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.05em"
                      }}
                    >
                      Number
                    </label>
                    <input
                      type="tel"
                      id="number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A2551] focus:border-transparent"
                      style={{ 
                        fontFamily: "'Figtree', sans-serif",
                        fontSize: "0.9375rem"
                      }}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label 
                      htmlFor="email"
                      className="block text-[#1A2551] mb-2"
                      style={{ 
                        fontFamily: "'Figtree', sans-serif",
                        fontSize: "0.875rem",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.05em"
                      }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A2551] focus:border-transparent"
                      style={{ 
                        fontFamily: "'Figtree', sans-serif",
                        fontSize: "0.9375rem"
                      }}
                    />
                  </div>
                </div>

                {/* Conditional Fields Based on Selected Reason */}
                
                {/* FOR "BUY" - Show Property Selector and Date/Time */}
                {selectedReason === "Buy" && (
                  <>
                    {/* Property Information - Read Only Display with Edit */}
                    <div className="relative">
                      {!showPropertySelector && (
                        <label 
                          className="block text-[#1A2551] mb-2"
                          style={{ 
                            fontFamily: "'Figtree', sans-serif",
                            fontSize: "0.875rem",
                            fontWeight: 600,
                            textTransform: "uppercase",
                            letterSpacing: "0.05em"
                          }}
                        >
                          Properties of Interest
                        </label>
                      )}
                      
                      <button
                        type="button"
                        onClick={() => setShowPropertySelector(true)}
                        className="w-full bg-[#F9FAFB] border border-gray-200 rounded-lg p-4 relative hover:bg-[#F0F4FF] hover:border-[#1A2551]/20 transition-all duration-200 text-left cursor-pointer group"
                      >
                        <div className="absolute top-3 right-3 p-2 text-[#1A2551] group-hover:bg-white rounded-lg transition-colors pointer-events-none">
                          <Pencil className="w-4 h-4" />
                        </div>
                        <div className="mb-1">
                          <span 
                            className="text-[#6B7280]"
                            style={{ 
                              fontFamily: "'Figtree', sans-serif",
                              fontSize: "0.75rem",
                              textTransform: "uppercase",
                              letterSpacing: "0.05em",
                              fontWeight: 600
                            }}
                          >
                            Properties
                          </span>
                        </div>
                        <h3 
                          className="text-[#1A2551] mb-1 pr-8"
                          style={{ 
                            fontFamily: "'Playfair Display', serif",
                            fontSize: "1.25rem",
                            fontWeight: 400,
                            lineHeight: "1.3"
                          }}
                        >
                          {selectedProperties.length > 0 
                            ? selectedProperties.length === 1 
                              ? selectedProperties[0].title 
                              : `${selectedProperties.length} properties selected`
                            : "No properties selected"}
                        </h3>
                        <p 
                          className="text-[#6B7280]"
                          style={{ 
                            fontFamily: "'Figtree', sans-serif",
                            fontSize: "0.875rem"
                          }}
                        >
                          {selectedProperties.length > 0
                            ? selectedProperties.length === 1
                              ? `${selectedProperties[0].location} • ${selectedProperties[0].price}`
                              : selectedProperties.map(p => p.title).join(", ")
                            : "Click to select properties"}
                        </p>
                      </button>

                      {/* Property selector overlay */}
                      <AnimatePresence>
                        {showPropertySelector && (
                          <motion.div 
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ 
                              duration: 0.35,
                              ease: [0.4, 0, 0.2, 1]
                            }}
                            className="absolute z-50 bg-white rounded-xl border border-gray-200 shadow-xl overflow-hidden"
                            style={{ 
                              top: "0",
                              left: "0",
                              right: "0",
                              height: "450px"
                            }}
                          >
                            <div className="h-full flex flex-col">
                              <div className="px-6 py-5 border-b border-gray-200 flex items-center justify-between flex-shrink-0 bg-[#F9FAFB]">
                                <span 
                                  className="text-[#1A2551]"
                                  style={{ 
                                    fontFamily: "'Figtree', sans-serif",
                                    fontSize: "0.875rem",
                                    fontWeight: 600,
                                    textTransform: "uppercase",
                                    letterSpacing: "0.05em"
                                  }}
                                >
                                  Select properties ({selectedProperties.length} selected)
                                </span>
                                <button
                                  type="button"
                                  onClick={() => setShowPropertySelector(false)}
                                  className="text-[#6B7280] hover:text-[#1A2551] transition-all duration-200"
                                  style={{ 
                                    fontFamily: "'Figtree', sans-serif",
                                    fontSize: "0.875rem",
                                    fontWeight: 500
                                  }}
                                >
                                  Done
                                </button>
                              </div>
                              <div className="flex-1 overflow-y-auto bg-white custom-scrollbar">
                                {sortedProperties.map((prop, index) => {
                                  const isSelected = selectedProperties.some(p => p.id === prop.id);
                                  
                                  return (
                                    <motion.button
                                      key={prop.id}
                                      initial={{ opacity: 0, x: -20 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ 
                                        duration: 0.3,
                                        delay: index * 0.04,
                                        ease: [0.4, 0, 0.2, 1]
                                      }}
                                      type="button"
                                      onClick={() => {
                                        setSelectedProperties(prev => {
                                          const exists = prev.some(p => p.id === prop.id);
                                          if (exists) {
                                            return prev.filter(p => p.id !== prop.id);
                                          } else {
                                            return [...prev, prop];
                                          }
                                        });
                                      }}
                                      className={`w-full px-6 py-4 flex items-start gap-4 hover:bg-[#F9FAFB] transition-all duration-200 text-left border-b border-gray-100 last:border-b-0 ${
                                        isSelected ? 'bg-[#F0F4FF]' : ''
                                      }`}
                                    >
                                      <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-gray-200">
                                        <ImageWithFallback
                                          src={prop.image}
                                          alt={prop.title}
                                          className="w-full h-full object-cover"
                                        />
                                        {/* Checkbox indicator */}
                                        {isSelected && (
                                          <div className="absolute inset-0 bg-[#1A2551]/20 flex items-center justify-center">
                                            <div className="bg-[#1A2551] rounded-full p-2">
                                              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                              </svg>
                                            </div>
                                          </div>
                                        )}
                                        {isFavorite(prop.id) && !isSelected && (
                                          <div className="absolute top-1.5 right-1.5 bg-[#DC2626] rounded-full p-1.5">
                                            <Heart className="w-3.5 h-3.5 text-white fill-white" />
                                          </div>
                                        )}
                                      </div>
                                      <div className="flex-1 min-w-0 pt-1">
                                        <h4 
                                          className="text-[#1A2551] mb-1.5"
                                          style={{ 
                                            fontFamily: "'Playfair Display', serif",
                                            fontSize: "1.125rem",
                                            fontWeight: 400,
                                            lineHeight: "1.3"
                                          }}
                                        >
                                          {prop.title}
                                        </h4>
                                        <p 
                                          className="text-[#6B7280] mb-1.5"
                                          style={{ 
                                            fontFamily: "'Figtree', sans-serif",
                                            fontSize: "0.875rem"
                                          }}
                                        >
                                          {prop.location}
                                        </p>
                                        <p 
                                          className="text-[#1A2551]"
                                          style={{ 
                                            fontFamily: "'Figtree', sans-serif",
                                            fontSize: "0.9375rem",
                                            fontWeight: 600
                                          }}
                                        >
                                          {prop.price}
                                        </p>
                                      </div>
                                    </motion.button>
                                  );
                                })}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Preferred Date and Time of Day - Side by Side */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Preferred Date */}
                      <div>
                        <label 
                          className="block text-[#1A2551] mb-2"
                          style={{ 
                            fontFamily: "'Figtree', sans-serif",
                            fontSize: "0.875rem",
                            fontWeight: 600,
                            textTransform: "uppercase",
                            letterSpacing: "0.05em"
                          }}
                        >
                          Preferred viewing date
                        </label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <button
                              type="button"
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A2551] focus:border-transparent text-left flex items-center justify-between"
                              style={{ 
                                fontFamily: "'Figtree', sans-serif",
                                fontSize: "0.9375rem"
                              }}
                            >
                              <span className={date ? "text-[#1A2551]" : "text-gray-400"}>
                                {date ? format(date, "PPP") : "Select a date"}
                              </span>
                              <CalendarIcon className="h-4 w-4 text-gray-400" />
                            </button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={date}
                              onSelect={setDate}
                              initialFocus
                              disabled={(date) => {
                                // Disable past dates
                                if (date < new Date(new Date().setHours(0, 0, 0, 0))) return true;
                                // Disable Sundays (day 0)
                                if (date.getDay() === 0) return true;
                                return false;
                              }}
                            />
                          </PopoverContent>
                        </Popover>
                      </div>

                      {/* Time of Day */}
                      <div>
                        <label 
                          className="block text-[#1A2551] mb-2"
                          style={{ 
                            fontFamily: "'Figtree', sans-serif",
                            fontSize: "0.875rem",
                            fontWeight: 600,
                            textTransform: "uppercase",
                            letterSpacing: "0.05em"
                          }}
                        >
                          Time of Day
                        </label>
                        <Select value={timeOfDay} onValueChange={setTimeOfDay}>
                          <SelectTrigger 
                            className="w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A2551] focus:border-transparent bg-white"
                            style={{ 
                              fontFamily: "'Figtree', sans-serif",
                              fontSize: "0.9375rem",
                              height: "50px",
                              paddingLeft: "1rem",
                              paddingRight: "1rem"
                            }}
                          >
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="morning">Morning</SelectItem>
                            <SelectItem value="afternoon">Afternoon</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </>
                )}

                {/* FOR "SELL" - Show Date and Time of Day */}
                {selectedReason === "Sell" && (
                  <div className="grid grid-cols-2 gap-4">
                    {/* Preferred Date */}
                    <div>
                      <label 
                        className="block text-[#1A2551] mb-2"
                        style={{ 
                          fontFamily: "'Figtree', sans-serif",
                          fontSize: "0.875rem",
                          fontWeight: 600,
                          textTransform: "uppercase",
                          letterSpacing: "0.05em"
                        }}
                      >
                        Preferred Date
                      </label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <button
                            type="button"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-left flex items-center justify-between hover:border-[#1A2551] focus:outline-none focus:ring-2 focus:ring-[#1A2551] focus:border-transparent transition-colors"
                            style={{ 
                              fontFamily: "'Figtree', sans-serif",
                              fontSize: "0.9375rem"
                            }}
                          >
                            <span className={date ? "text-[#1A2551]" : "text-gray-400"}>
                              {date ? format(date, "PPP") : "Select a date"}
                            </span>
                            <CalendarIcon className="h-4 w-4 text-gray-400" />
                          </button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                            disabled={(date) => {
                              // Disable Sundays (day 0)
                              if (date.getDay() === 0) return true;
                              return false;
                            }}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    {/* Time of Day */}
                    <div>
                      <label 
                        className="block text-[#1A2551] mb-2"
                        style={{ 
                          fontFamily: "'Figtree', sans-serif",
                          fontSize: "0.875rem",
                          fontWeight: 600,
                          textTransform: "uppercase",
                          letterSpacing: "0.05em"
                        }}
                      >
                        Time of Day
                      </label>
                      <Select
                        value={timeOfDay}
                        onValueChange={setTimeOfDay}
                      >
                        <SelectTrigger 
                          className="w-full px-4 border border-gray-300 rounded-lg bg-white hover:border-[#1A2551] focus:ring-2 focus:ring-[#1A2551] transition-colors !h-auto"
                          style={{ 
                            fontFamily: "'Figtree', sans-serif",
                            fontSize: "0.9375rem",
                            paddingTop: "0.75rem",
                            paddingBottom: "0.75rem"
                          }}
                        >
                          <SelectValue placeholder="Select time" className="text-gray-400" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning">Morning</SelectItem>
                          <SelectItem value="afternoon">Afternoon</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}

                {/* Message - Always shown */}
                <div>
                  <label 
                    htmlFor="message"
                    className="block text-[#1A2551] mb-2"
                    style={{ 
                      fontFamily: "'Figtree', sans-serif",
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em"
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A2551] focus:border-transparent resize-none custom-scrollbar"
                    style={{ 
                      fontFamily: "'Figtree', sans-serif",
                      fontSize: "0.9375rem"
                    }}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#1A2551] text-white px-8 py-3 rounded-full hover:bg-[#1A2551]/90 transition-colors flex items-center justify-center"
                  style={{ 
                    fontFamily: "'Figtree', sans-serif",
                    fontSize: "0.875rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em"
                  }}
                >
                  <span className="premium-hover" data-text="SEND MESSAGE">
                    <span>SEND MESSAGE</span>
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <FooterNew />
    </div>
  );
}
