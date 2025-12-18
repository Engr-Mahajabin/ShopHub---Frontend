import React from "react";
import HeroSection from "./HeroSection";
import StatsSection from "./StatsSection";
import FeaturesSection from "./FeaturesSection";
import FeaturedProductsSection from "./FeaturedProductsSection";
import CategoriesSection from "./CategoriesSection";
import TestimonialsSection from "./TestimonialsSection";
import NewsletterSection from "./NewsletterSection";
// import Navbar from "../../components/Navbar";
// import Footer from "../../components/Footer";

export default function Home() {
    return (
        <div>
            {/* <Navbar /> */}
            <HeroSection />
            <StatsSection />
            <FeaturesSection />
            <FeaturedProductsSection />
            <CategoriesSection />
            <TestimonialsSection />
            <NewsletterSection />
            {/* <Footer /> */}
        </div>
    );
}
