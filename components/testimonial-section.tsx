import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      name: "Manchester Eats",
      role: "Restaurant Chain",
      content:
        "FIRE's wholesale program has transformed our menu offerings. The quality is consistent, delivery is always on time, and our customers love the authentic flavors.",
      rating: 5,
    },
    {
      id: 2,
      name: "Northern Catering Co.",
      role: "Catering Service",
      content:
        "We've been using FIRE's wholesale products for our events for over a year now. The ordering process is seamless and the customer support is exceptional.",
      rating: 5,
    },
    {
      id: 3,
      name: "Urban Bites",
      role: "Food Truck",
      content:
        "As a mobile food business, consistency and quality are crucial. FIRE's wholesale program delivers on both fronts, helping us maintain our reputation for excellence.",
      rating: 4,
    },
  ]

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Partners Say</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our wholesale partners have to say about working with FIRE.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-[#1A1A1A] border-gray-800">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? "text-[#FF6B35] fill-[#FF6B35]" : "text-gray-600"}`}
                    />
                  ))}
                </div>
                <p className="text-gray-300 mb-6">"{testimonial.content}"</p>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button className="bg-transparent hover:bg-transparent text-[#FF6B35] hover:text-[#FF8C5A] underline">
            View All Testimonials
          </Button>
        </div>
      </div>
    </section>
  )
}
