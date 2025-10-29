import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Button } from "./ui/button";
import { CalendarIcon, Pencil, Heart, Check } from "lucide-react";
import { format } from "date-fns";
import { properties as allProperties } from "../data/properties";
import { useFavorites } from "../contexts/FavoritesContext";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion, AnimatePresence } from "motion/react";

interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  type?: string;
  status?: string;
}

interface PropertyInquiryDialogProps {
  trigger: React.ReactNode;
  property?: Property;
  properties?: Property[];
  isMultiProperty?: boolean;
}

export function PropertyInquiryDialog({ trigger, property, properties, isMultiProperty = false }: PropertyInquiryDialogProps) {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date>();
  const [timeOfDay, setTimeOfDay] = useState<string>("");
  const [selectedProperties, setSelectedProperties] = useState<Property[]>(
    isMultiProperty && properties ? properties : property ? [property] : []
  );
  const [selectedProperty, setSelectedProperty] = useState(property || (properties && properties.length > 0 ? properties[0] : {} as Property));
  const [showPropertySelector, setShowPropertySelector] = useState(false);
  const { isFavorite } = useFavorites();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    if (isMultiProperty) {
      console.log("Property inquiry submitted for multiple properties:", selectedProperties.map(p => p.title).join(', '));
    } else {
      console.log("Property inquiry submitted for:", selectedProperty.title);
    }
    setOpen(false);
  };

  const togglePropertySelection = (prop: Property) => {
    if (!isMultiProperty) {
      setSelectedProperty(prop);
      setSelectedProperties([prop]);
    } else {
      setSelectedProperties(prev => {
        const isSelected = prev.some(p => p.id === prop.id);
        if (isSelected) {
          return prev.filter(p => p.id !== prop.id);
        } else {
          return [...prev, prop];
        }
      });
    }
  };

  // Filter to only show available properties, then sort with favorites first
  // Use the properties from props if in multi-property mode, otherwise use all properties
  const propertyList = isMultiProperty && properties ? properties : allProperties;
  const availableProperties = propertyList.filter(p => p.status === "Available");
  const sortedProperties = [...availableProperties].sort((a, b) => {
    const aIsFav = isFavorite(a.id);
    const bIsFav = isFavorite(b.id);
    if (aIsFav && !bIsFav) return -1;
    if (!aIsFav && bIsFav) return 1;
    return 0;
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] p-0 gap-0 overflow-hidden" aria-describedby={undefined}>
        <div className="relative h-full max-h-[90vh] flex flex-col">
          {/* Property selector overlay - positioned relative to the inner container */}
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
                className="absolute inset-0 z-50 bg-white rounded-xl border border-gray-200 shadow-xl overflow-hidden"
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
                      {isMultiProperty ? `Select properties (${selectedProperties.length})` : 'Select a property'}
                    </span>
                    <button
                      type="button"
                      onClick={() => setShowPropertySelector(false)}
                      className="text-white bg-[#1A2551] px-4 py-2 rounded-full hover:bg-[#1A2551]/90 transition-all duration-200"
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
                      const propData = propertyList.find(p => p.id === prop.id);
                      if (!propData) return null;
                      
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
                            togglePropertySelection(prop);
                            if (!isMultiProperty) {
                              setShowPropertySelector(false);
                            }
                          }}
                          className={`w-full px-6 py-4 flex items-start gap-4 hover:bg-[#F9FAFB] transition-all duration-200 text-left border-b border-gray-100 last:border-b-0 ${
                            (isMultiProperty 
                              ? selectedProperties.some(p => p.id === prop.id) 
                              : selectedProperty.id === prop.id
                            ) ? 'bg-[#F0F4FF]' : ''
                          }`}
                        >
                          {isMultiProperty && (
                            <div className="flex-shrink-0 pt-2">
                              <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                                selectedProperties.some(p => p.id === prop.id)
                                  ? 'bg-[#1A2551] border-[#1A2551]'
                                  : 'border-gray-300'
                              }`}>
                                {selectedProperties.some(p => p.id === prop.id) && (
                                  <Check className="w-3.5 h-3.5 text-white" />
                                )}
                              </div>
                            </div>
                          )}
                          <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-gray-200">
                            <ImageWithFallback
                              src={propData.image}
                              alt={prop.title}
                              className="w-full h-full object-cover"
                            />
                            {isFavorite(prop.id) && (
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

          {/* Scrollable content container */}
          <div className="overflow-y-auto flex-1 px-6 custom-scrollbar">
            <DialogHeader className="pt-5 pb-3">
              <DialogTitle 
                className="text-[#1A2551]"
                style={{ 
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.75rem",
                  fontWeight: 400,
                  lineHeight: "1.2"
                }}
              >
                Enquire About This Property
              </DialogTitle>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-3.5 pb-5">
              {/* Property Information - Read Only Display */}
              <button
                type="button"
                onClick={() => setShowPropertySelector(true)}
                className="w-full bg-[#F9FAFB] border border-gray-200 rounded-lg p-3.5 relative hover:bg-[#F0F4FF] hover:border-[#1A2551]/20 transition-all duration-200 text-left cursor-pointer group"
              >
                <div className="absolute top-2.5 right-2.5 p-1.5 text-[#1A2551] group-hover:bg-white rounded-lg transition-colors pointer-events-none">
                  <Pencil className="w-4 h-4" />
                </div>
                <div className="mb-0.5">
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
                    {isMultiProperty ? `Properties (${selectedProperties.length})` : 'Property'}
                  </span>
                </div>
                {isMultiProperty ? (
                  <div className="pr-8">
                    <h3 
                      className="text-[#1A2551] mb-0.5"
                      style={{ 
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "1.125rem",
                        fontWeight: 400,
                        lineHeight: "1.3"
                      }}
                    >
                      Multiple Properties
                    </h3>
                    <p 
                      className="text-[#6B7280]"
                      style={{ 
                        fontFamily: "'Figtree', sans-serif",
                        fontSize: "0.875rem"
                      }}
                    >
                      {selectedProperties.map(p => p.title).join(', ')}
                    </p>
                  </div>
                ) : (
                  <>
                    <h3 
                      className="text-[#1A2551] mb-0.5 pr-8"
                      style={{ 
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "1.125rem",
                        fontWeight: 400,
                        lineHeight: "1.3"
                      }}
                    >
                      {selectedProperty.title}
                    </h3>
                    <p 
                      className="text-[#6B7280]"
                      style={{ 
                        fontFamily: "'Figtree', sans-serif",
                        fontSize: "0.875rem"
                      }}
                    >
                      {selectedProperty.location} • {selectedProperty.price}
                    </p>
                  </>
                )}
              </button>

              {/* First Name and Last Name - Side by Side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* First Name */}
                <div>
                  <label 
                    htmlFor="firstName"
                    className="block text-[#1A2551] mb-1.5"
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
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A2551] focus:border-transparent"
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
                    className="block text-[#1A2551] mb-1.5"
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
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A2551] focus:border-transparent"
                    style={{ 
                      fontFamily: "'Figtree', sans-serif",
                      fontSize: "0.9375rem"
                    }}
                  />
                </div>
              </div>

              {/* Number and Email - Side by Side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Number */}
                <div>
                  <label 
                    htmlFor="number"
                    className="block text-[#1A2551] mb-1.5"
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
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A2551] focus:border-transparent"
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
                    className="block text-[#1A2551] mb-1.5"
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
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A2551] focus:border-transparent"
                    style={{ 
                      fontFamily: "'Figtree', sans-serif",
                      fontSize: "0.9375rem"
                    }}
                  />
                </div>
              </div>

              {/* Preferred Date and Time of Day - Side by Side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Preferred Date */}
                <div>
                  <label 
                    className="block text-[#1A2551] mb-1.5"
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
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A2551] focus:border-transparent text-left flex items-center justify-between"
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
                        disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Time of Day */}
                <div>
                  <label 
                    htmlFor="timeOfDay"
                    className="block text-[#1A2551] mb-1.5"
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
                  <Select value={timeOfDay} onValueChange={setTimeOfDay} required>
                    <SelectTrigger 
                      className="w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A2551] focus:border-transparent bg-white"
                      style={{ 
                        fontFamily: "'Figtree', sans-serif",
                        fontSize: "0.9375rem",
                        height: "46px",
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

              {/* Message */}
              <div>
                <label 
                  htmlFor="message"
                  className="block text-[#1A2551] mb-1.5"
                  style={{ 
                    fontFamily: "'Figtree', sans-serif",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em"
                  }}
                >
                  Message (optional)
                </label>
                <textarea
                  id="message"
                  rows={2}
                  placeholder="Let us know any specific questions or requirements..."
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A2551] focus:border-transparent resize-none"
                  style={{ 
                    fontFamily: "'Figtree', sans-serif",
                    fontSize: "0.9375rem"
                  }}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#1A2551] text-white px-8 py-2.5 rounded-full hover:bg-[#1A2551]/90 transition-colors flex items-center justify-center"
                style={{ 
                  fontFamily: "'Figtree', sans-serif",
                  fontSize: "0.875rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em"
                }}
              >
                <span className="premium-hover" data-text="SEND ENQUIRY">
                  <span>SEND ENQUIRY</span>
                </span>
              </button>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}