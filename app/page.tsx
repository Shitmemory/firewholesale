import Link from "next/link"
import { Button } from "@/components/ui/button"
import WholesaleHero from "@/components/wholesale-hero"
import ProductShowcase from "@/components/product-showcase"
import TestimonialSection from "@/components/testimonial-section"
import FeaturesSection from "@/components/features-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <WholesaleHero />

      {/* Features Section */}
      <FeaturesSection />

      {/* Product Showcase */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Wholesale Products</h2>
          <ProductShowcase />
          <div className="mt-10 flex justify-center">
            <Button asChild className="bg-[#FF6B35] hover:bg-[#FF8C5A] text-white px-8 py-6 text-lg rounded-md">
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSection />

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-[#1A1A1A] to-black">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Become a Wholesale Partner?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our growing network of wholesale partners and bring the authentic FIRE flavors to your customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-[#FF6B35] hover:bg-[#FF8C5A] text-white px-8 py-6 text-lg rounded-md">
              <Link href="/register">Register Now</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white px-8 py-6 text-lg rounded-md"
            >
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
