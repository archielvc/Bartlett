import { useState, useCallback, createContext, useEffect, useContext } from "react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { ScrollWrapper } from "./components/ScrollWrapper";
import { PropertyShowcase } from "./components/PropertyShowcase";
import { FeaturesSections } from "./components/FeaturesSections";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { TestimonialsCarousel } from "./components/TestimonialsCarousel";
import { testimonials } from "./data/testimonials";
import { FooterNew } from "./components/FooterNew";
import Properties from "./pages/Properties";
import AboutUs from "./pages/AboutUs";
import PropertyDetail from "./pages/PropertyDetail";
import Insights from "./pages/Insights";
import Contact from "./pages/Contact";
import BlogPost from "./pages/BlogPost";
import { FavoritesProvider } from "./contexts/FavoritesContext";

// Create navigation context
export const NavigationContext = createContext<{
  currentPage: string;
  navigateTo: (page: string) => void;
}>({
  currentPage: 'home',
  navigateTo: () => {},
});

// Custom hook for navigation
export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within NavigationContext');
  }
  return context;
};

// Home page component
function HomePage() {
  const { currentPage } = useContext(NavigationContext);
  
  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} />
      <Hero />
      <ScrollWrapper>
        <PropertyShowcase />
        <FeaturesSections />
        <WhyChooseUs />
        <TestimonialsCarousel testimonials={testimonials} />
        <FooterNew />
      </ScrollWrapper>
    </div>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [propertySlug, setPropertySlug] = useState<string>('');
  const [blogPostId, setBlogPostId] = useState<string>('');

  const navigateTo = useCallback((page: string) => {
    // Check if it's a property detail page
    if (page.startsWith('property/')) {
      const slug = page.replace('property/', '');
      setPropertySlug(slug);
      setCurrentPage('propertyDetail');
    } else if (page.startsWith('blog/')) {
      // Handle blog post navigation
      const id = page.replace('blog/', '');
      setBlogPostId(id);
      setCurrentPage('blogPost');
    } else {
      setCurrentPage(page);
      setPropertySlug('');
      setBlogPostId('');
    }
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Page changed
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'properties':
        return <Properties />;
      case 'about':
        return <AboutUs />;
      case 'insights':
        return <Insights />;
      case 'contact':
        return <Contact />;
      case 'propertyDetail':
        return <PropertyDetail slug={propertySlug} />;
      case 'blogPost':
        return <BlogPost postId={blogPostId} />;
      default:
        return <HomePage />;
    }
  };

  return (
    <NavigationContext.Provider value={{ currentPage, navigateTo }}>
      <FavoritesProvider>
        {renderPage()}
      </FavoritesProvider>
    </NavigationContext.Provider>
  );
}