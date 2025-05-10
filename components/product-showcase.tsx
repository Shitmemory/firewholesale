import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function ProductShowcase() {
  const products = [
    {
      id: 1,
      name: "Fire Platter Wholesale Pack",
      description:
        "Bulk pack of our signature Fire Platter ingredients. Includes Desi Lamb Doner, Bhangra Sauce, and more.",
      price: 120.0,
      image: "/placeholder.jpg",
    },
    {
      id: 2,
      name: "0161 Platter Wholesale Pack",
      description:
        "Bulk pack with Boneless Fried Chicken, Fries, and our special sauce. Perfect for restaurants and takeaways.",
      price: 110.0,
      image: "/placeholder.jpg",
    },
    {
      id: 3,
      name: "Premium Curry Base",
      description:
        "Our signature curry base in bulk quantities. Create authentic curried lamb and other dishes.",
      price: 85.0,
      image: "/placeholder.jpg",
    },
    {
      id: 4,
      name: "Paneer Tikka Wholesale Kit",
      description:
        "Everything needed to create our popular vegetarian Paneer Tikka dishes in bulk quantities.",
      price: 90.0,
      image: "/placeholder.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Card
          key={product.id}
          className="bg-[#1A1A1A] border-gray-800 overflow-hidden hover:border-[#FF6B35] transition-all"
        >
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-48 object-cover"
          />
          <CardContent className="p-4">
            <h3 className="text-xl font-bold mb-2">{product.name}</h3>
            <p className="text-gray-400 text-sm mb-4 h-20 overflow-hidden">
              {product.description}
            </p>
            <div className="flex justify-between items-center">
              <span className="text-[#FF6B35] font-bold">
                £{product.price.toFixed(2)}
              </span>
              <Button
                asChild
                size="sm"
                className="bg-[#FF6B35] hover:bg-[#FF8C5A]"
              >
                <Link href={`/products/${product.id}`}>
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  View
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
