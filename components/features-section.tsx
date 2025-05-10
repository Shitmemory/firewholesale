import { ShoppingBag, Users, BarChart3, TruckIcon, CreditCard, Shield } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      icon: <ShoppingBag className="h-10 w-10 text-[#FF6B35]" />,
      title: "Bulk Ordering",
      description: "Place large orders at wholesale prices with our streamlined ordering system",
    },
    {
      icon: <Users className="h-10 w-10 text-[#FF6B35]" />,
      title: "Dedicated Support",
      description: "Get personalized assistance from our wholesale customer service team",
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-[#FF6B35]" />,
      title: "Analytics Dashboard",
      description: "Track your orders, spending patterns, and product performance",
    },
    {
      icon: <TruckIcon className="h-10 w-10 text-[#FF6B35]" />,
      title: "Flexible Delivery",
      description: "Choose between delivery or collection options for your convenience",
    },
    {
      icon: <CreditCard className="h-10 w-10 text-[#FF6B35]" />,
      title: "Secure Payments",
      description: "Integrated Stripe payment system accepting all major credit cards",
    },
    {
      icon: <Shield className="h-10 w-10 text-[#FF6B35]" />,
      title: "GDPR Compliant",
      description: "Your data is protected with our GDPR-compliant systems and processes",
    },
  ]

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#111]">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Choose FIRE Wholesale</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-black p-6 rounded-lg border border-gray-800 hover:border-[#FF6B35] transition-all"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
