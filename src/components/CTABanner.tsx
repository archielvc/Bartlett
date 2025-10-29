import { Button } from "./ui/button";
import { BookEvaluationDialog } from "./BookEvaluationDialog";

export function CTABanner() {
  return (
    <section className="w-full bg-[#1A2551] px-6 sm:px-8 md:px-10 lg:px-12 py-8 sm:py-10 lg:py-12">
      <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
        <h2 
          className="text-white max-w-2xl text-center lg:text-left"
          style={{ 
            fontFamily: "'Playfair Display', serif", 
            fontSize: "clamp(1.5rem, 4.5vw, 2.25rem)", 
            lineHeight: "1.3",
            letterSpacing: "0.02em",
            fontWeight: 400
          }}
        >
          Ready to find your dream property in Richmond?
        </h2>
        
        <BookEvaluationDialog 
          trigger={
            <Button 
              variant="secondary"
              className="shrink-0 w-full sm:w-auto"
            >
              BOOK VALUATION
            </Button>
          }
        />
      </div>
    </section>
  );
}