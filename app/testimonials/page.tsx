import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Quote } from "lucide-react"

export default function TestimonialsPage() {
  const testimonials = [
    {
      id: 1,
      name: "Manchester Eats",
      role: "Restaurant Chain",
      content:
        "FIRE's wholesale program has transformed our menu offerings. The quality is consistent, delivery is always on time, and our customers love the authentic flavors. We've seen a 30% increase in customer satisfaction since partnering with FIRE.",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      name: "Northern Catering Co.",
      role: "Catering Service",
      content:
        "We've been using FIRE's wholesale products for our events for over a year now. The ordering process is seamless and the customer support is exceptional. Their team is always responsive and goes above and beyond to ensure we have everything we need for our events.",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      name: "Urban Bites",
      role: "Food Truck",
      content:
        "As a mobile food business, consistency and quality are crucial. FIRE's wholesale program delivers on both fronts, helping us maintain our reputation for excellence. Their flexible delivery options work perfectly with our changing locations.",
      rating: 4,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 4,
      name: "Spice Fusion",
      role: "Restaurant",
      content:
        "The quality of FIRE's wholesale products is unmatched. We've tried other suppliers, but none compare to the authentic flavors and consistency that FIRE provides. Our customers can taste the difference, and it keeps them coming back.",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 5,
      name: "Campus Eats",
      role: "University Cafeteria",
      content:
        "Working with FIRE has been a game-changer for our campus food service. Students love the flavors, and the bulk ordering system makes it easy to manage our inventory. The analytics dashboard has been particularly helpful for planning our menu cycles.",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 6,
      name: "Fresh & Fast",
      role: "Convenience Store Chain",
      content:
        "Since adding FIRE products to our ready-meal section, we've seen a significant increase in sales. The wholesale pricing allows us to maintain healthy margins while offering quality food to our customers. The ordering app makes reordering a breeze.",
      rating: 4,
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <main className="min-h-screen bg-black text-white py-12 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Customer Testimonials</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our wholesale partners have to say about working with FIRE.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="mb-16 bg-gradient-to-r from-[#1A1A1A] to-black p-8 rounded-lg border border-gray-800">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="md:w-1/3 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                <img
                  src="/placeholder.svg?height=100&width=100"
                  alt="Featured Customer"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Premier Catering</h3>
              <p className="text-gray-400">Event Catering Service</p>
              <div className="flex mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-[#FF6B35] fill-[#FF6B35]" />
                ))}
              </div>
            </div>
            <div className="md:w-2/3">
              <Quote className="h-12 w-12 text-[#FF6B35] opacity-50 mb-4" />
              <p className="text-xl italic mb-6">
                "Partnering with FIRE has been one of the best business decisions we've made. Their wholesale program
                offers exceptional quality products at competitive prices, and their customer service is second to none.
                The analytics dashboard has given us valuable insights into our customers' preferences, allowing us to
                tailor our offerings and increase our revenue by 40% in just six months."
              </p>
              <p className="text-gray-300">
                We particularly appreciate the flexibility in delivery options and the user-friendly ordering system.
                Whether we're catering for a small corporate event or a large wedding, FIRE consistently delivers
                products that impress our clients and keep them coming back for more.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-[#1A1A1A] border-gray-800 hover:border-[#FF6B35] transition-all">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? "text-[#FF6B35] fill-[#FF6B35]" : "text-gray-600"}`}
                    />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Join Our Satisfied Partners?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Experience the FIRE difference for yourself. Register for a wholesale account today and see why businesses
            across Manchester choose us as their preferred supplier.
          </p>
          <Button asChild className="bg-[#FF6B35] hover:bg-[#FF8C5A] text-white px-8 py-6 text-lg rounded-md">
            <a href="/register">Register Now</a>
          </Button>
        </div>
      </div>
    </main>
  )
}
