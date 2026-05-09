import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategoryGrid from "@/components/CategoryGrid";
import ProductShowcase from "@/components/ProductShowcase";
import SectionDivider from "@/components/SectionDivider";
import PromiseBar from "@/components/PromiseBar";
import Testimonials from "@/components/Testimonials";
import SplitSection from "@/components/SplitSection";
import ResearchJournal from "@/components/ResearchJournal";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

/**
 * @component App
 * @description The root application component that orchestrates the layout and rendering of all main page sections.
 */
function App() {
  return (
    <div className="app-container">
      <Navbar />

      <main className="app-main">
        <Hero />
        <CategoryGrid />
        <ProductShowcase />
        <SectionDivider />
        <PromiseBar />
        <Testimonials />
        <SplitSection />
        <ResearchJournal />
        <NewsletterSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
