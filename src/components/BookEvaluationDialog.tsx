import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";

interface BookEvaluationDialogProps {
  trigger: React.ReactNode;
}

export function BookEvaluationDialog({ trigger }: BookEvaluationDialogProps) {
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0 gap-0 overflow-hidden" aria-describedby={undefined}>
        <div className="relative h-full max-h-[90vh] flex flex-col">
          {/* Scrollable content container */}
          <div className="overflow-y-auto flex-1 px-8 custom-scrollbar">
            <DialogHeader className="pt-6 pb-4">
              <DialogTitle 
                className="text-[#1A2551]"
                style={{ 
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.75rem",
                  fontWeight: 400,
                  lineHeight: "1.2"
                }}
              >
                Book Your Property Valuation
              </DialogTitle>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 pb-6">
              {/* First Name and Last Name - Side by Side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                    First name*
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    placeholder="Name"
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
                    Last name*
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Last Name"
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A2551] focus:border-transparent"
                    style={{ 
                      fontFamily: "'Figtree', sans-serif",
                      fontSize: "0.9375rem"
                    }}
                  />
                </div>
              </div>

              {/* Phone Number and Email - Side by Side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone Number */}
                <div>
                  <label 
                    htmlFor="phoneNumber"
                    className="block text-[#1A2551] mb-1.5"
                    style={{ 
                      fontFamily: "'Figtree', sans-serif",
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em"
                    }}
                  >
                    Phone number
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    placeholder="Number"
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
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Email Address"
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A2551] focus:border-transparent"
                    style={{ 
                      fontFamily: "'Figtree', sans-serif",
                      fontSize: "0.9375rem"
                    }}
                  />
                </div>
              </div>

              {/* Address and Postcode - Side by Side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Address */}
                <div>
                  <label 
                    htmlFor="address"
                    className="block text-[#1A2551] mb-1.5"
                    style={{ 
                      fontFamily: "'Figtree', sans-serif",
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em"
                    }}
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    placeholder="Address"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A2551] focus:border-transparent"
                    style={{ 
                      fontFamily: "'Figtree', sans-serif",
                      fontSize: "0.9375rem"
                    }}
                  />
                </div>

                {/* Postcode */}
                <div>
                  <label 
                    htmlFor="postcode"
                    className="block text-[#1A2551] mb-1.5"
                    style={{ 
                      fontFamily: "'Figtree', sans-serif",
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em"
                    }}
                  >
                    Postcode
                  </label>
                  <input
                    type="text"
                    id="postcode"
                    placeholder="Postcode"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A2551] focus:border-transparent"
                    style={{ 
                      fontFamily: "'Figtree', sans-serif",
                      fontSize: "0.9375rem"
                    }}
                  />
                </div>
              </div>

              {/* Property Size - Full Width */}
              <div>
                <label 
                  htmlFor="propertySize"
                  className="block text-[#1A2551] mb-1.5"
                  style={{ 
                    fontFamily: "'Figtree', sans-serif",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em"
                  }}
                >
                  Do you know the approx. internal size of the home? (sqft)*
                </label>
                <input
                  type="text"
                  id="propertySize"
                  placeholder="Size"
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A2551] focus:border-transparent"
                  style={{ 
                    fontFamily: "'Figtree', sans-serif",
                    fontSize: "0.9375rem"
                  }}
                />
              </div>

              {/* Tell Us About Your Property - Full Width */}
              <div>
                <label 
                  htmlFor="propertyDescription"
                  className="block text-[#1A2551] mb-1.5"
                  style={{ 
                    fontFamily: "'Figtree', sans-serif",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em"
                  }}
                >
                  Tell us about your property
                </label>
                <textarea
                  id="propertyDescription"
                  rows={3}
                  placeholder="Tell us about your property..."
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
                <span className="premium-hover" data-text="BOOK VALUATION">
                  <span>BOOK VALUATION</span>
                </span>
              </button>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}