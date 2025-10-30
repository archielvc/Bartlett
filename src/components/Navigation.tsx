import { Button } from "./ui/button";
import { useState, useEffect, useContext, useRef } from "react";
import { NavigationContext } from "../App";
import { X, Menu, Heart } from "lucide-react";
import blueLogo from "figma:asset/4dc31e3d4d8476a091118f1ea8f376b69a8e629a.png";
import whiteLogo from "figma:asset/a49a304c14bdb50701e6c3c6ec4ac8419c70162c.png";
import { useFavorites } from "../contexts/FavoritesContext";
import { FavoritesSheet } from "./FavoritesSheet";
import { BookEvaluationDialog } from "./BookEvaluationDialog";
import { motion } from "motion/react";

interface NavigationProps {
  currentPage?: string;
}

export function Navigation({ currentPage = 'home' }: NavigationProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [isBookEvaluationOpen, setIsBookEvaluationOpen] = useState(false);
  const { navigateTo } = useContext(NavigationContext);
  const { favorites } = useFavorites();
  const lastScrollY = useRef(0);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Scroll detection with direction tracking
  useEffect(() => {
    if (isMobile) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrolled = currentScrollY > 100;
      
      // Determine scroll direction
      if (currentScrollY > lastScrollY.current) {
        setScrollDirection('down');
        // Close nav on any downscroll
        if (isMenuOpen) {
          setIsMenuOpen(false);
        }
      } else if (currentScrollY < lastScrollY.current) {
        setScrollDirection('up');
      }
      
      lastScrollY.current = currentScrollY;
      setIsScrolled(scrolled);

      // Show nav when scrolled back to top
      if (!scrolled) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile, scrollDirection, isMenuOpen]);

  // Navigation handlers
  const handleNavigate = (page: string) => {
    navigateTo(page);
    setIsMenuOpen(false);
  };

  // Hamburger click handler
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Determine if we're on a page with a dark hero section
  const hasDarkHero = ['home', 'properties', 'about'].includes(currentPage);
  
  // Text colors based on background for original nav
  const textColor = hasDarkHero ? 'text-white' : 'text-[#1A2551]';
  const hoverColor = hasDarkHero ? 'hover:text-gray-300' : 'hover:text-[#1A2551]/70';
  
  // Animation delays - only use long delays on home page (after hero animation)
  const isHomePage = currentPage === 'home';
  const baseDelay = isHomePage ? 3.2 : 0;
  const staggerDelay = isHomePage ? 0.1 : 0.05;

  // Mobile: compact version with hamburger menu
  if (isMobile) {
    return (
      <>
        <nav className="fixed top-4 sm:top-6 right-0 z-50 px-6 sm:px-8">
          <div className="flex items-center gap-2 sm:gap-3">
            <BookEvaluationDialog
              trigger={
                <Button 
                  className="bg-[#1A2551] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full hover:bg-[#1A2551]/90 transition-colors text-xs sm:text-sm cursor-pointer"
                  style={{ 
                    fontFamily: "'Figtree', sans-serif",
                    fontSize: "clamp(0.75rem, 2vw, 0.875rem)",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em"
                  }}
                >
                  <span className="premium-hover" data-text="BOOK VALUATION">
                    <span>BOOK VALUATION</span>
                  </span>
                </Button>
              }
            />
            
            {/* Favorites Button - Mobile */}
            <button
              onClick={() => setIsFavoritesOpen(true)}
              className="relative w-11 h-11 sm:w-12 sm:h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer"
              aria-label="View saved properties"
            >
              <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-[#1A2551]" />
              {favorites.length > 0 && (
                <span 
                  className="absolute -top-1 -right-1 w-5 h-5 bg-[#DC2626] text-white rounded-full flex items-center justify-center"
                  style={{ 
                    fontFamily: "'Figtree', sans-serif",
                    fontSize: "0.625rem",
                    fontWeight: 600
                  }}
                >
                  {favorites.length}
                </span>
              )}
            </button>
            
            <button
              onClick={handleMenuToggle}
              className="w-11 h-11 sm:w-12 sm:h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-[#1A2551]" />
            </button>
          </div>
        </nav>

        {/* Favorites Sheet - Mobile */}
        <FavoritesSheet isOpen={isFavoritesOpen} onClose={() => setIsFavoritesOpen(false)} />

        {/* Full-Page Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-[#1A2551] z-50 flex flex-col overflow-y-auto">
            <div className="absolute top-4 sm:top-6 right-6 sm:right-8">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="w-11 h-11 sm:w-12 sm:h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </button>
            </div>

            <div className="px-6 sm:px-8 pt-6 sm:pt-8 pb-8 sm:pb-12">
              <img 
                src={whiteLogo} 
                alt="Bartlett & Partners" 
                style={{ height: "clamp(3.5rem, 10vw, 5.06rem)", transform: "translateY(-8px)" }}
              />
            </div>

            <nav className="flex-1 flex flex-col justify-center px-6 sm:px-8 space-y-1 sm:space-y-2">
              <button
                onClick={() => handleNavigate('home')}
                className="text-white hover:text-gray-300 transition-colors text-left py-3 sm:py-4 border-b border-white/10"
                style={{ 
                  fontFamily: "'Figtree', sans-serif",
                  fontSize: "clamp(2rem, 8vw, 2.5rem)",
                  fontWeight: 700,
                  lineHeight: "1.2"
                }}
              >
                Home
              </button>
              <button
                onClick={() => handleNavigate('properties')}
                className="text-white hover:text-gray-300 transition-colors text-left py-3 sm:py-4 border-b border-white/10"
                style={{ 
                  fontFamily: "'Figtree', sans-serif",
                  fontSize: "clamp(2rem, 8vw, 2.5rem)",
                  fontWeight: 700,
                  lineHeight: "1.2"
                }}
              >
                Properties
              </button>
              <button
                onClick={() => handleNavigate('about')}
                className="text-white hover:text-gray-300 transition-colors text-left py-3 sm:py-4 border-b border-white/10"
                style={{ 
                  fontFamily: "'Figtree', sans-serif",
                  fontSize: "clamp(2rem, 8vw, 2.5rem)",
                  fontWeight: 700,
                  lineHeight: "1.2"
                }}
              >
                About Us
              </button>
              <button
                onClick={() => handleNavigate('insights')}
                className="text-white hover:text-gray-300 transition-colors text-left py-3 sm:py-4 border-b border-white/10"
                style={{ 
                  fontFamily: "'Figtree', sans-serif",
                  fontSize: "clamp(2rem, 8vw, 2.5rem)",
                  fontWeight: 700,
                  lineHeight: "1.2"
                }}
              >
                Insights
              </button>
              <button
                onClick={() => handleNavigate('contact')}
                className="text-white hover:text-gray-300 transition-colors text-left py-3 sm:py-4 border-b border-white/10"
                style={{ 
                  fontFamily: "'Figtree', sans-serif",
                  fontSize: "clamp(2rem, 8vw, 2.5rem)",
                  fontWeight: 700,
                  lineHeight: "1.2"
                }}
              >
                Contact
              </button>
            </nav>

            <div className="px-6 sm:px-8 pb-6 sm:pb-8 space-y-3 sm:space-y-4">
              <div className="flex flex-col gap-2">
                <a 
                  href="tel:+442089408000"
                  className="text-white/70 hover:text-white transition-colors"
                  style={{ 
                    fontFamily: "'Figtree', sans-serif",
                    fontSize: "0.9375rem"
                  }}
                >
                  020 8940 8000
                </a>
                <a 
                  href="mailto:hello@bartlettpartners.co.uk"
                  className="text-white/70 hover:text-white transition-colors"
                  style={{ 
                    fontFamily: "'Figtree', sans-serif",
                    fontSize: "0.9375rem"
                  }}
                >
                  hello@bartlettpartners.co.uk
                </a>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }

  // Desktop: Animated navigation system
  return (
    <>
      {/* White background overlay - appears when menu is open, spans full width, height only to border */}
      <div 
        className="fixed top-0 left-0 right-0 z-30 bg-white"
        style={{
          height: 'calc(1rem + 5rem + 1rem)', // top padding (1rem) + nav content height (5rem) + bottom padding (1rem)
          opacity: isMenuOpen ? 1 : 0,
          pointerEvents: isMenuOpen ? 'auto' : 'none',
          transition: 'opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          borderBottom: isMenuOpen ? '1px solid rgba(26, 37, 81, 0.1)' : '1px solid transparent',
        }}
      />

      {/* Original Full Navigation Bar - slides up on scroll down, slides back on menu open */}
      <nav 
        className="fixed top-4 left-0 right-0 z-40 px-8 md:px-10 lg:px-12 transition-transform"
        style={{
          transform: (isScrolled && !isMenuOpen) ? 'translateY(-150%)' : 'translateY(0)',
          transitionDuration: '0.4s',
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <div className="max-w-[1600px] mx-auto w-full">
          <div 
            className="flex items-center justify-between h-20"
          >
            <div className="flex items-center gap-12 h-full">
              <button 
                onClick={() => handleNavigate('home')} 
                className="cursor-pointer transition-opacity hover:opacity-80 flex items-center h-full" 
                aria-label="Home"
              >
                <motion.img
                  key={`logo-${currentPage}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: isHomePage ? 1.0 : 0.6,
                    ease: [0.25, 0.1, 0.25, 1],
                    delay: baseDelay
                  }}
                  src={isMenuOpen ? blueLogo : (hasDarkHero ? whiteLogo : blueLogo)}
                  alt="Bartlett & Partners" 
                  className="logo-shimmer"
                  style={{ height: "3.795rem", transform: "translateY(-8px)" }}
                />
              </button>
              
              <div className="flex items-center gap-8">
                <motion.button
                  key={`properties-${currentPage}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: isHomePage ? 0.8 : 0.5,
                    ease: [0.25, 0.1, 0.25, 1],
                    delay: baseDelay + staggerDelay
                  }}
                  onClick={() => handleNavigate('properties')} 
                  className={`${isMenuOpen ? 'text-[#1A2551] hover:text-[#1A2551]/70' : `${textColor} ${hoverColor}`} transition-colors cursor-pointer`} 
                  style={{ 
                    fontFamily: "'Figtree', sans-serif",
                    fontSize: "0.875rem",
                    textTransform: "capitalize",
                    letterSpacing: "0.05em",
                    fontWeight: 600
                  }}
                >
                  <span className="premium-hover" data-text="properties">
                    <span>properties</span>
                  </span>
                </motion.button>
                <motion.button
                  key={`about-${currentPage}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: isHomePage ? 0.8 : 0.5,
                    ease: [0.25, 0.1, 0.25, 1],
                    delay: baseDelay + staggerDelay * 2
                  }}
                  onClick={() => handleNavigate('about')} 
                  className={`${isMenuOpen ? 'text-[#1A2551] hover:text-[#1A2551]/70' : `${textColor} ${hoverColor}`} transition-colors cursor-pointer`} 
                  style={{ 
                    fontFamily: "'Figtree', sans-serif",
                    fontSize: "0.875rem",
                    textTransform: "capitalize",
                    letterSpacing: "0.05em",
                    fontWeight: 600
                  }}
                >
                  <span className="premium-hover" data-text="about us">
                    <span>about us</span>
                  </span>
                </motion.button>
                <motion.button
                  key={`insights-${currentPage}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: isHomePage ? 0.8 : 0.5,
                    ease: [0.25, 0.1, 0.25, 1],
                    delay: baseDelay + staggerDelay * 3
                  }}
                  onClick={() => handleNavigate('insights')} 
                  className={`${isMenuOpen ? 'text-[#1A2551] hover:text-[#1A2551]/70' : `${textColor} ${hoverColor}`} transition-colors cursor-pointer`} 
                  style={{ 
                    fontFamily: "'Figtree', sans-serif",
                    fontSize: "0.875rem",
                    textTransform: "capitalize",
                    letterSpacing: "0.05em",
                    fontWeight: 600
                  }}
                >
                  <span className="premium-hover" data-text="insights">
                    <span>insights</span>
                  </span>
                </motion.button>
                <motion.button
                  key={`contact-${currentPage}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: isHomePage ? 0.8 : 0.5,
                    ease: [0.25, 0.1, 0.25, 1],
                    delay: baseDelay + staggerDelay * 4
                  }}
                  onClick={() => handleNavigate('contact')} 
                  className={`${isMenuOpen ? 'text-[#1A2551] hover:text-[#1A2551]/70' : `${textColor} ${hoverColor}`} transition-colors cursor-pointer`} 
                  style={{ 
                    fontFamily: "'Figtree', sans-serif",
                    fontSize: "0.875rem",
                    textTransform: "capitalize",
                    letterSpacing: "0.05em",
                    fontWeight: 600
                  }}
                >
                  <span className="premium-hover" data-text="contact">
                    <span>contact</span>
                  </span>
                </motion.button>
              </div>
            </div>
            
            {/* Invisible placeholder to maintain layout, actual button is fixed below */}
            <div 
              className="px-8 py-3"
              style={{ 
                visibility: 'hidden',
                fontSize: "0.875rem",
                textTransform: "uppercase",
                letterSpacing: "0.05em"
              }}
            >
              BOOK VALUATION
            </div>
          </div>
        </div>
      </nav>

      {/* Single BOOK VALUATION Button - always visible, slides between positions */}
      <div className="fixed top-4 right-0 z-50 pointer-events-none">
        <div className="pr-8 md:pr-10 lg:pr-12">
          <div 
            className="relative flex items-center h-20 gap-3 justify-end"
            style={{
              transform: isScrolled && !isMenuOpen ? 'translateX(0)' : 'translateX(56px)',
              transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            <motion.div
              key={`book-valuation-${currentPage}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: isHomePage ? 0.8 : 0.5,
                ease: [0.25, 0.1, 0.25, 1],
                delay: baseDelay + staggerDelay * 5
              }}
            >
              <BookEvaluationDialog
                trigger={
                  <Button 
                    className="px-8 py-3 rounded-full transition-all pointer-events-auto border-2 bg-white text-[#1A2551] border-[#1A2551] hover:bg-gray-50"
                    style={{ 
                      fontFamily: "'Figtree', sans-serif",
                      fontSize: "0.875rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    <span className="premium-hover" data-text="BOOK VALUATION">
                      <span>BOOK VALUATION</span>
                    </span>
                  </Button>
                }
              />
            </motion.div>

            {/* Favorites Button - always visible, moves with Book Valuation */}
            <motion.button
              key={`favorites-${currentPage}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: isHomePage ? 0.6 : 0.4,
                ease: [0.34, 1.56, 0.64, 1],
                delay: baseDelay + staggerDelay * 6
              }}
              onClick={() => setIsFavoritesOpen(true)}
              className="relative w-11 h-11 bg-white border-2 border-[#1A2551] rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 pointer-events-auto transition-all"
              aria-label="View saved properties"
            >
              <Heart className="w-5 h-5 text-[#1A2551]" />
              {favorites.length > 0 && (
                <span 
                  className="absolute -top-1 -right-1 w-5 h-5 bg-[#DC2626] text-white rounded-full flex items-center justify-center"
                  style={{ 
                    fontFamily: "'Figtree', sans-serif",
                    fontSize: "0.625rem",
                    fontWeight: 600
                  }}
                >
                  {favorites.length}
                </span>
              )}
            </motion.button>

            {/* Hamburger Button - slides in from right when scrolled */}
            <button
              onClick={handleMenuToggle}
              className="w-11 h-11 bg-white border-2 border-[#1A2551] rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 pointer-events-auto"
              aria-label="Open menu"
              style={{
                transform: isScrolled && !isMenuOpen ? 'scale(1)' : 'scale(0.8)',
                opacity: isScrolled && !isMenuOpen ? 1 : 0,
                transition: 'all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s',
                pointerEvents: isScrolled && !isMenuOpen ? 'auto' : 'none',
              }}
            >
              <Menu className="w-5 h-5 text-[#1A2551]" />
            </button>
          </div>
        </div>
      </div>

      {/* Favorites Sheet */}
      <FavoritesSheet isOpen={isFavoritesOpen} onClose={() => setIsFavoritesOpen(false)} />
    </>
  );
}