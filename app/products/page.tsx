import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Filter, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function ProductsPage() {
  const categories = [
    "All Products",
    "Platters",
    "Curry Bases",
    "Vegetarian",
    "Sauces",
    "Sides",
    "Desserts",
  ];

  const products = [
    {
      id: 1,
      name: "Fire Platter Wholesale Pack",
      category: "Platters",
      description:
        "Bulk pack of our signature Fire Platter ingredients. Includes Desi Lamb Doner, Bhangra Sauce, and more.",
      price: 120.0,
      image: "/placeholder.jpg",
    },
    {
      id: 2,
      name: "0161 Platter Wholesale Pack",
      category: "Platters",
      description:
        "Bulk pack with Boneless Fried Chicken, Fries, and our special sauce. Perfect for restaurants and takeaways.",
      price: 110.0,
      image: "/placeholder.jpg",
    },
    {
      id: 3,
      name: "Premium Curry Base",
      category: "Curry Bases",
      description:
        "Our signature curry base in bulk quantities. Create authentic curried lamb and other dishes.",
      price: 85.0,
      image: "/placeholder.jpg",
    },
    {
      id: 4,
      name: "Paneer Tikka Wholesale Kit",
      category: "Vegetarian",
      description:
        "Everything needed to create our popular vegetarian Paneer Tikka dishes in bulk quantities.",
      price: 90.0,
      image: "/placeholder.jpg",
    },
    {
      id: 5,
      name: "Bhangra Sauce - 5L",
      category: "Sauces",
      description:
        "Our signature Bhangra sauce in a 5-liter container. Perfect for restaurants and food service.",
      price: 45.0,
      image: "/placeholder.jpg",
    },
    {
      id: 6,
      name: "Butter Chicken Base - 5kg",
      category: "Curry Bases",
      description:
        "Premium butter chicken base in bulk quantity. Just add chicken and cream for an authentic dish.",
      price: 65.0,
      image: "/placeholder.jpg",
    },
    {
      id: 7,
      name: "Vegetarian Platter Wholesale Pack",
      category: "Vegetarian",
      description:
        "Bulk ingredients for our popular vegetarian platter. Includes Indian Paneer, Vegan Kofta, and more.",
      price: 95.0,
      image: "/placeholder.jpg",
    },
    {
      id: 8,
      name: "Garlic Naan Bread - 50 Pack",
      category: "Sides",
      description:
        "Ready-to-cook garlic naan bread in a bulk pack of 50. Perfect accompaniment for curry dishes.",
      price: 40.0,
      image: "/placeholder.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white py-12 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Wholesale Products
          </h1>
          <p className="text-gray-400 max-w-3xl">
            Browse our complete range of wholesale products.oducts. All items
            are available for delivery or collection. Minimum order values
            apply.
          </p>
        </div>

        {/* Filters and Products Grid */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-[#1A1A1A] rounded-lg p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold">Filters</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Reset
                </Button>
              </div>

              {/* Categories */}
              <div className="mb-8">
                <h4 className="font-medium mb-3 text-gray-300">Categories</h4>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <button
                        className={`text-left w-full py-1 ${
                          index === 0
                            ? "text-[#FF6B35]"
                            : "text-gray-400 hover:text-white"
                        }`}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price Range */}
              <div className="mb-8">
                <h4 className="font-medium mb-3 text-gray-300">Price Range</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <input
                      type="range"
                      min="0"
                      max="200"
                      className="w-full accent-[#FF6B35]"
                      defaultValue="200"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">£0</span>
                    <span className="text-gray-400">£200</span>
                  </div>
                </div>
              </div>

              {/* Sort By */}
              <div>
                <h4 className="font-medium mb-3 text-gray-300">Sort By</h4>
                <button className="flex items-center justify-between w-full p-2 bg-[#111] rounded border border-gray-800 text-gray-300">
                  <span>Featured</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    <div className="mb-2">
                      <span className="text-xs text-[#FF6B35] bg-[#FF6B35]/10 px-2 py-1 rounded">
                        {product.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                    <p className="text-gray-400 text-sm mb-4 h-20 overflow-hidden">
                      {product.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-[#FF6B35] font-bold">
                        £{product.price.toFixed(2)}
                      </span>
                      <div className="flex space-x-2">
                        <Button
                          asChild
                          size="sm"
                          variant="outline"
                          className="border-gray-700 hover:border-[#FF6B35] hover:bg-transparent"
                        >
                          <Link href={`/products/${product.id}`}>View</Link>
                        </Button>
                        <Button
                          size="sm"
                          className="bg-[#FF6B35] hover:bg-[#FF8C5A]"
                        >
                          <ShoppingCart className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
