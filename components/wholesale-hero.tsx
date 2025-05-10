import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function WholesaleHero() {
  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <img
          src="/meat.jpg"
          alt="FIRE Wholesale Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-20">
        <div className="max-w-3xl">
          <div className="bg-[#FF6B35] inline-block px-4 py-2 mb-4">
            <h2 className="text-xl font-bold">FIRE WHOLESALE</h2>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Premium Food Products for Your Business
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Bring authentic FIRE flavors to your customers with our premium
            wholesale food products. Exclusive pricing, reliable delivery, and
            exceptional quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              className="bg-[#FF6B35] hover:bg-[#FF8C5A] text-white px-8 py-6 text-lg rounded-md"
            >
              <Link href="/products">Browse Products</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg rounded-md"
            >
              <Link href="/register">
                <Download className="mr-2 h-5 w-5" />
                Register Now
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
