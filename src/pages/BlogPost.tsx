import { Navigation } from "../components/Navigation";
import { FooterNew } from "../components/FooterNew";
import { OptimizedImage } from "../components/OptimizedImage";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { useNavigation } from "../App";

interface BlogPostProps {
  postId: string;
}

// Blog post data - in a real app, this would come from a CMS or database
const blogPostsData: { [key: string]: any } = {
  "1": {
    id: 1,
    title: "Understanding Richmond's Property Market in 2025",
    excerpt: "Explore the latest trends and insights shaping Richmond's dynamic property landscape this year.",
    image: "https://images.unsplash.com/photo-1720247520862-7e4b14176fa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzYxMTY4NDY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Market Insights",
    date: "March 15, 2025",
    author: "James Bartlett",
    readTime: "8 min read"
  },
  "2": {
    id: 2,
    title: "First-Time Buyer's Guide to Richmond",
    excerpt: "Everything you need to know about purchasing your first property in Richmond and the surrounding areas.",
    image: "https://images.unsplash.com/photo-1641998277833-3a911b7b56d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwcm9wZXJ0eSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjEyNDg5OTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Buying Guide",
    date: "March 10, 2025",
    author: "Sarah Mitchell",
    readTime: "6 min read"
  },
  "3": {
    id: 3,
    title: "Investment Opportunities in South West London",
    excerpt: "Discover why South West London continues to be one of the UK's most sought-after investment locations.",
    image: "https://images.unsplash.com/photo-1736320011788-a95a11524fe0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwbWFya2V0JTIwY2hhcnR8ZW58MXx8fHwxNzYxMjQ4OTk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Investment",
    date: "March 5, 2025",
    author: "David Chen",
    readTime: "10 min read"
  },
  "4": {
    id: 4,
    title: "Renovating Period Properties: What You Need to Know",
    excerpt: "Expert advice on restoring and modernizing Richmond's beautiful period homes while preserving their character.",
    image: "https://images.unsplash.com/photo-1760650396717-771ebebd58c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwcmVub3ZhdGlvbiUyMGludGVyaW9yfGVufDF8fHx8MTc2MTI0ODk5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Renovation",
    date: "February 28, 2025",
    author: "Emma Thompson",
    readTime: "7 min read"
  }
};

export default function BlogPost({ postId }: BlogPostProps) {
  const { navigateTo } = useNavigation();
  const post = blogPostsData[postId] || blogPostsData["1"];

  // Get three most recent blog posts (excluding current post)
  const relatedPosts = Object.values(blogPostsData)
    .filter((p: any) => p.id.toString() !== postId)
    .sort((a: any, b: any) => {
      // Sort by date (most recent first)
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB.getTime() - dateA.getTime();
    })
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="insights" />

      {/* Hero Section with Featured Image */}
      <section className="w-full bg-white pt-32 pb-0 px-6 sm:px-8 md:px-10 lg:px-12">
        <div className="max-w-[1200px] mx-auto">
          {/* Back Button */}
          <button
            onClick={() => navigateTo("insights")}
            className="flex items-center gap-2 text-[#1A2551] mb-8 hover:opacity-70 transition-opacity group cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span
              style={{
                fontFamily: "'Figtree', sans-serif",
                fontSize: "0.9375rem",
                letterSpacing: "0.02em"
              }}
            >
              Back to Insights
            </span>
          </button>

          {/* Category Badge */}
          <div className="mb-6">
            <span
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#1A2551]/5 text-[#1A2551] rounded-full"
              style={{
                fontFamily: "'Figtree', sans-serif",
                fontSize: "0.875rem",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                fontWeight: 500
              }}
            >
              <Tag className="w-4 h-4" />
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1
            className="text-[#1A2551] mb-6 max-w-[900px]"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 400,
              lineHeight: "1.15",
              letterSpacing: "-0.01em"
            }}
          >
            {post.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 mb-12 pb-12 border-b border-gray-200">
            <div className="flex items-center gap-2 text-[#666666]">
              <User className="w-4 h-4" />
              <span
                style={{
                  fontFamily: "'Figtree', sans-serif",
                  fontSize: "0.9375rem"
                }}
              >
                {post.author}
              </span>
            </div>
            <div className="flex items-center gap-2 text-[#666666]">
              <Calendar className="w-4 h-4" />
              <span
                style={{
                  fontFamily: "'Figtree', sans-serif",
                  fontSize: "0.9375rem"
                }}
              >
                {post.date}
              </span>
            </div>
            <div className="text-[#666666]">
              <span
                style={{
                  fontFamily: "'Figtree', sans-serif",
                  fontSize: "0.9375rem"
                }}
              >
                {post.readTime}
              </span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="w-full overflow-hidden mb-16" style={{ aspectRatio: "16/9" }}>
            <OptimizedImage
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="w-full bg-white px-6 sm:px-8 md:px-10 lg:px-12 pb-16 md:pb-24">
        <div className="max-w-[800px] mx-auto">
          {/* Introduction */}
          <div className="mb-12">
            <p
              className="text-[#1A1A1A] mb-6"
              style={{
                fontFamily: "'Figtree', sans-serif",
                fontSize: "1.125rem",
                lineHeight: "1.8",
                fontWeight: 400
              }}
            >
              {post.excerpt}
            </p>
          </div>

          {/* Article Body */}
          <div className="prose-custom space-y-8">
            {/* Paragraph 1 */}
            <div>
              <h2
                className="text-[#1A2551] mb-4"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  fontWeight: 400,
                  lineHeight: "1.3",
                  letterSpacing: "-0.01em"
                }}
              >
                Market Overview
              </h2>
              <p
                className="text-[#3A3A3A] mb-4"
                style={{
                  fontFamily: "'Figtree', sans-serif",
                  fontSize: "1.0625rem",
                  lineHeight: "1.8"
                }}
              >
                Richmond's property market continues to demonstrate remarkable resilience and growth potential. With its unique combination of urban convenience and natural beauty, the area attracts discerning buyers seeking both lifestyle quality and investment value.
              </p>
              <p
                className="text-[#3A3A3A]"
                style={{
                  fontFamily: "'Figtree', sans-serif",
                  fontSize: "1.0625rem",
                  lineHeight: "1.8"
                }}
              >
                Recent data shows a sustained interest in period properties, particularly those that have been thoughtfully renovated to combine historic charm with modern amenities. The demand for such properties remains strong, with values appreciating steadily year over year.
              </p>
            </div>

            {/* Quote */}
            <div className="my-12 pl-8 border-l-4 border-[#1A2551]">
              <blockquote
                className="text-[#1A2551] italic"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.25rem, 3vw, 1.5rem)",
                  lineHeight: "1.5",
                  fontWeight: 400
                }}
              >
                "Richmond offers an unparalleled combination of metropolitan accessibility and village charm, making it one of London's most coveted residential locations."
              </blockquote>
            </div>

            {/* Paragraph 2 */}
            <div>
              <h2
                className="text-[#1A2551] mb-4"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  fontWeight: 400,
                  lineHeight: "1.3",
                  letterSpacing: "-0.01em"
                }}
              >
                Key Trends to Watch
              </h2>
              <p
                className="text-[#3A3A3A] mb-4"
                style={{
                  fontFamily: "'Figtree', sans-serif",
                  fontSize: "1.0625rem",
                  lineHeight: "1.8"
                }}
              >
                Several emerging trends are shaping the Richmond property landscape. Sustainability features are increasingly valued, with buyers prioritizing energy efficiency and eco-friendly upgrades. Garden spaces and outdoor amenities have seen a surge in importance, reflecting changing lifestyle priorities.
              </p>
              <p
                className="text-[#3A3A3A]"
                style={{
                  fontFamily: "'Figtree', sans-serif",
                  fontSize: "1.0625rem",
                  lineHeight: "1.8"
                }}
              >
                The work-from-home trend continues to influence property preferences, with home offices and flexible living spaces becoming essential features rather than luxury additions. Properties offering these amenities command premium pricing in the current market.
              </p>
            </div>

            {/* List Section */}
            <div>
              <h3
                className="text-[#1A2551] mb-4"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.25rem, 2.5vw, 1.5rem)",
                  fontWeight: 400,
                  lineHeight: "1.3"
                }}
              >
                What Buyers Are Looking For
              </h3>
              <ul className="space-y-3">
                {[
                  "Period features combined with modern convenience",
                  "Outdoor space and private gardens",
                  "Proximity to excellent schools and transport links",
                  "Energy-efficient homes with sustainability credentials",
                  "Flexible living spaces suitable for hybrid working"
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1A2551] mt-2.5 flex-shrink-0"></span>
                    <span
                      className="text-[#3A3A3A]"
                      style={{
                        fontFamily: "'Figtree', sans-serif",
                        fontSize: "1.0625rem",
                        lineHeight: "1.8"
                      }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Conclusion */}
            <div>
              <h2
                className="text-[#1A2551] mb-4"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  fontWeight: 400,
                  lineHeight: "1.3",
                  letterSpacing: "-0.01em"
                }}
              >
                Looking Ahead
              </h2>
              <p
                className="text-[#3A3A3A]"
                style={{
                  fontFamily: "'Figtree', sans-serif",
                  fontSize: "1.0625rem",
                  lineHeight: "1.8"
                }}
              >
                As we move through 2025, Richmond's property market shows every indication of continued strength. For buyers and investors alike, understanding these trends and working with experienced local agents remains key to making informed decisions and securing the right property at the right price.
              </p>
            </div>
          </div>

          {/* Related Posts Section - removed from here */}
        </div>
      </section>

      {/* Related Posts Section - new section with max-w-[1200px] */}
      <section className="w-full bg-white px-6 sm:px-8 md:px-10 lg:px-12 pb-16 md:pb-24">
        <div className="max-w-[1200px] mx-auto">
          <div className="pt-12 border-t border-gray-200">
            <h3
              className="text-[#1A2551] mb-8"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: 400,
                lineHeight: "1.3",
                letterSpacing: "-0.01em"
              }}
            >
              Continue Reading
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost: any) => (
                <div
                  key={relatedPost.id}
                  onClick={() => navigateTo(`blog/${relatedPost.id}`)}
                  className="cursor-pointer group"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden bg-gray-200 mb-4" style={{ aspectRatio: "4/3" }}>
                    <OptimizedImage
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* Category & Date */}
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="text-[#1A2551]"
                      style={{
                        fontFamily: "'Figtree', sans-serif",
                        fontSize: "0.875rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em"
                      }}
                    >
                      {relatedPost.category}
                    </span>
                    <span className="text-[#6B7280]" style={{ fontFamily: "'Figtree', sans-serif", fontSize: "0.875rem" }}>
                      •
                    </span>
                    <span
                      className="text-[#6B7280]"
                      style={{ fontFamily: "'Figtree', sans-serif", fontSize: "0.875rem" }}
                    >
                      {relatedPost.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h4
                    className="text-[#1A2551] mb-2"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "clamp(1.125rem, 2.5vw, 1.375rem)",
                      fontWeight: 400,
                      lineHeight: "1.3"
                    }}
                  >
                    {relatedPost.title}
                  </h4>

                  {/* Excerpt */}
                  <p
                    className="text-[#3A3A3A]"
                    style={{
                      fontFamily: "'Figtree', sans-serif",
                      fontSize: "0.9375rem",
                      lineHeight: "1.6"
                    }}
                  >
                    {relatedPost.excerpt}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FooterNew />
    </div>
  );
}