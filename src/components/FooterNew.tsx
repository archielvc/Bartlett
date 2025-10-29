import { Facebook, Instagram, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import whiteLogo from "figma:asset/a49a304c14bdb50701e6c3c6ec4ac8419c70162c.png";
import accreditation1 from "figma:asset/c871281ba89915299095d1acb405af1269fd12c8.png";
import accreditation2 from "figma:asset/befb57e6127cf9c51ac594208e78e62fa716d7ae.png";
import accreditation3 from "figma:asset/d901f468f65556224c5e173ba89ac6c618f6443a.png";

export function FooterNew() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log("Subscribe:", email);
  };

  return (
    <footer className="w-full bg-[#1A2551] px-6 sm:px-8 md:px-10 lg:px-12 py-12 sm:py-16">
      <div className="max-w-[1600px] mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-8 lg:gap-12 mb-12 sm:mb-16">
          {/* Logo and Newsletter */}
          <div>
            <img 
              src={whiteLogo} 
              alt="Bartlett & Partners" 
              className="mb-6"
              style={{ height: "clamp(3rem, 6vw, 3.795rem)" }}
            />
            
            <p 
              className="text-white/90 mb-6 max-w-sm"
              style={{ 
                fontFamily: "'Figtree', sans-serif",
                fontSize: "0.9375rem",
                lineHeight: "1.6"
              }}
            >
              Stay informed about Richmond's property market and expert insights
            </p>

            <form onSubmit={handleSubscribe} className="flex gap-2 mb-3 max-w-md">
              <Input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white border-0 h-11"
                style={{ 
                  fontFamily: "'Figtree', sans-serif",
                  fontSize: "0.9375rem"
                }}
              />
              <Button 
                type="submit"
                className="bg-white text-[#1A2551] hover:bg-white/90 px-6 h-11 shrink-0 cursor-pointer"
                style={{ 
                  fontFamily: "'Figtree', sans-serif",
                  fontSize: "0.9375rem",
                  fontWeight: 600
                }}
              >
                <span className="premium-hover" data-text="Subscribe">
                  <span>Subscribe</span>
                </span>
              </Button>
            </form>

            <p 
              className="text-white/50 text-xs max-w-md"
              style={{ 
                fontFamily: "'Figtree', sans-serif",
                fontSize: "0.75rem",
                lineHeight: "1.5"
              }}
            >
              By subscribing, you agree to our privacy policy and consent to updates
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 
              className="text-white mb-4 sm:mb-6"
              style={{ 
                fontFamily: "'Figtree', sans-serif",
                fontSize: "1rem",
                fontWeight: 600,
                letterSpacing: "0.02em"
              }}
            >
              Navigation
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a 
                  href="#" 
                  className="text-white/70 hover:text-white transition-colors cursor-pointer"
                  style={{ 
                    fontFamily: "'Figtree', sans-serif",
                    fontSize: "0.9375rem"
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-white/70 hover:text-white transition-colors cursor-pointer"
                  style={{ 
                    fontFamily: "'Figtree', sans-serif",
                    fontSize: "0.9375rem"
                  }}
                >
                  Properties
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-white/70 hover:text-white transition-colors cursor-pointer"
                  style={{ 
                    fontFamily: "'Figtree', sans-serif",
                    fontSize: "0.9375rem"
                  }}
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-white/70 hover:text-white transition-colors cursor-pointer"
                  style={{ 
                    fontFamily: "'Figtree', sans-serif",
                    fontSize: "0.9375rem"
                  }}
                >
                  Insights
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-white/70 hover:text-white transition-colors cursor-pointer"
                  style={{ 
                    fontFamily: "'Figtree', sans-serif",
                    fontSize: "0.9375rem"
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 
              className="text-white mb-4 sm:mb-6"
              style={{ 
                fontFamily: "'Figtree', sans-serif",
                fontSize: "1rem",
                fontWeight: 600,
                letterSpacing: "0.02em"
              }}
            >
              Follow Us
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a 
                  href="https://www.facebook.com/bartlettandpartners"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors flex items-center gap-2 cursor-pointer"
                  style={{ 
                    fontFamily: "'Figtree', sans-serif",
                    fontSize: "0.9375rem"
                  }}
                >
                  <Facebook className="w-4 h-4" />
                  Facebook
                </a>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/bartlettandpartners"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors flex items-center gap-2 cursor-pointer"
                  style={{ 
                    fontFamily: "'Figtree', sans-serif",
                    fontSize: "0.9375rem"
                  }}
                >
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
              </li>
              <li>
                <a 
                  href="https://x.com/bartlett_and_p"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors flex items-center gap-2 cursor-pointer"
                  style={{ 
                    fontFamily: "'Figtree', sans-serif",
                    fontSize: "0.9375rem"
                  }}
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  X
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/company/bartlettandpartners/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors flex items-center gap-2 cursor-pointer"
                  style={{ 
                    fontFamily: "'Figtree', sans-serif",
                    fontSize: "0.9375rem"
                  }}
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mb-8 sm:mb-10"></div>

        {/* Accreditation Logos - Full Width */}
        <div className="grid grid-cols-3 gap-16 mb-8 sm:mb-10 max-w-4xl mx-auto">
          <div className="flex items-center justify-center">
            <a 
              href="https://www.rightmove.co.uk/property-for-sale/find/Bartlett-and-Partners---Luxury-Real-Estate-Consultancy/Covering-Richmond-upon-Thames.html?locationIdentifier=BRANCH%5E239564&includeSSTC=true&_includeSSTC=on"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer transition-opacity hover:opacity-100"
            >
              <img 
                src={accreditation3} 
                alt="Rightmove" 
                className="h-12 w-auto object-contain opacity-70"
              />
            </a>
          </div>
          <div className="flex items-center justify-center">
            <a 
              href="https://www.zoopla.co.uk/find-agents/branch/bartlett-and-partners-richmond-126269/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer transition-opacity hover:opacity-100"
            >
              <img 
                src={accreditation1} 
                alt="Zoopla" 
                className="h-7 w-auto object-contain opacity-70"
              />
            </a>
          </div>
          <div className="flex items-center justify-center">
            <a 
              href="https://www.primelocation.com/find-agents/branch/bartlett-and-partners-richmond-126269/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer transition-opacity hover:opacity-100"
            >
              <img 
                src={accreditation2} 
                alt="Prime Location" 
                className="h-12 w-auto object-contain opacity-70"
              />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mb-6 sm:mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          {/* Copyright */}
          <p 
            className="text-white/60"
            style={{ 
              fontFamily: "'Figtree', sans-serif",
              fontSize: "0.875rem"
            }}
          >
            © 2024 Bartlett & Partners. All rights reserved.
          </p>

          {/* Legal Links */}
          <div className="flex flex-wrap gap-6 items-center">
            <a 
              href="#" 
              className="text-white/60 hover:text-white transition-colors underline cursor-pointer"
              style={{ 
                fontFamily: "'Figtree', sans-serif",
                fontSize: "0.875rem"
              }}
            >
              Privacy policy
            </a>
            <a 
              href="#" 
              className="text-white/60 hover:text-white transition-colors underline cursor-pointer"
              style={{ 
                fontFamily: "'Figtree', sans-serif",
                fontSize: "0.875rem"
              }}
            >
              Terms of service
            </a>
            <a 
              href="#" 
              className="text-white/60 hover:text-white transition-colors underline cursor-pointer"
              style={{ 
                fontFamily: "'Figtree', sans-serif",
                fontSize: "0.875rem"
              }}
            >
              Cookies settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}