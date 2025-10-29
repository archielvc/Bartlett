import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Button } from "./ui/button";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

interface BookEvaluationDialogProps {
  trigger: React.ReactNode;
}

export function BookEvaluationDialog({ trigger }: BookEvaluationDialogProps) {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date>();
  const [timeOfDay, setTimeOfDay] = useState<string>("");

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
      <DialogContent className="max-w-2xl max-h-[90vh] p-0 gap-0 overflow-hidden" aria-describedby={undefined}>
        <div className="relative h-full max-h-[90vh] flex flex-col">
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
                Book Your Property Valuation
              </DialogTitle>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-3.5 pb-5">
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
                    Preferred date
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
                  placeholder="Add any additional information here..."
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