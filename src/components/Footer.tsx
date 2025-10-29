import { Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-[#F5F5F5] px-8 md:px-10 lg:px-12 py-12 border-t border-gray-200">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex items-center">
            <span 
              className="text-[#1A2551]" 
              style={{ 
                fontFamily: "'Playfair Display', serif", 
                fontSize: "1.5rem", 
                letterSpacing: "0.02em" 
              }}
            >
              ESTATE
            </span>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-[#3A3A3A] text-sm sm:text-base">
            <a href="#" className="hover:text-[#1A2551] transition-colors">
              Privacy Policy
            </a>
            <span className="text-gray-300 hidden sm:inline">|</span>
            <a href="#" className="hover:text-[#1A2551] transition-colors">
              Terms of Service
            </a>
            <span className="text-gray-300 hidden sm:inline">|</span>
            <a href="#" className="hover:text-[#1A2551] transition-colors">
              Careers
            </a>
            <span className="text-gray-300 hidden sm:inline">|</span>
            <a href="#" className="hover:text-[#1A2551] transition-colors">
              Contact
            </a>
          </div>
          
          <div className="flex items-center gap-4">
            <a href="#" className="text-[#3A3A3A] hover:text-[#1A2551] transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-[#3A3A3A] hover:text-[#1A2551] transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-[#3A3A3A] hover:text-[#1A2551] transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}