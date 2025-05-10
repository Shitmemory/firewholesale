import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Star } from "lucide-react"

export default function FeedbackPage() {
  return (
    <main className="min-h-screen bg-black text-white py-12 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto max-w-4xl">
        {/* Page Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Customer Feedback</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We value your feedback. Please share your thoughts on our products and services to help us improve.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="bg-[#1A1A1A] border-gray-800">
            <CardContent className="p-6 text-center">
              <div className="mb-4 mx-auto w-16 h-16 bg-[#FF6B35]/10 rounded-full flex items-center justify-center">
                <Star className="h-8 w-8 text-[#FF6B35]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Product Reviews</h3>
              <p className="text-gray-400">
                Share your experience with our products and help other customers make informed decisions.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-[#1A1A1A] border-gray-800">
            <CardContent className="p-6 text-center">
              <div className="mb-4 mx-auto w-16 h-16 bg-[#FF6B35]/10 rounded-full flex items-center justify-center">
                <Star className="h-8 w-8 text-[#FF6B35]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Service Feedback</h3>
              <p className="text-gray-400">
                Let us know about your experience with our customer service, delivery, and overall satisfaction.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-[#1A1A1A] border-gray-800">
            <CardContent className="p-6 text-center">
              <div className="mb-4 mx-auto w-16 h-16 bg-[#FF6B35]/10 rounded-full flex items-center justify-center">
                <Star className="h-8 w-8 text-[#FF6B35]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Suggestions</h3>
              <p className="text-gray-400">
                Have ideas for new products or improvements? We'd love to hear your suggestions.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-[#1A1A1A] border-gray-800">
          <CardHeader>
            <CardTitle>Submit Your Feedback</CardTitle>
            <CardDescription>Please fill out the form below to share your thoughts with us.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="bg-[#111] border-gray-700 focus:border-[#FF6B35]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    className="bg-[#111] border-gray-700 focus:border-[#FF6B35]"
                  />
                </div>
              </div>

              {/* Feedback Type */}
              <div className="space-y-2">
                <Label>Feedback Type</Label>
                <RadioGroup defaultValue="product" className="flex flex-col space-y-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="product" id="product" />
                    <Label htmlFor="product">Product Review</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="service" id="service" />
                    <Label htmlFor="service">Service Feedback</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="suggestion" id="suggestion" />
                    <Label htmlFor="suggestion">Suggestion</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Rating */}
              <div className="space-y-2">
                <Label>Overall Rating</Label>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                      key={rating}
                      type="button"
                      className="p-2 hover:bg-[#FF6B35]/10 rounded-full transition-colors"
                    >
                      <Star className="h-8 w-8 text-gray-500 hover:text-[#FF6B35] hover:fill-[#FF6B35]" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Feedback Details */}
              <div className="space-y-2">
                <Label htmlFor="feedback">Your Feedback</Label>
                <Textarea
                  id="feedback"
                  placeholder="Please share your detailed feedback here..."
                  className="bg-[#111] border-gray-700 focus:border-[#FF6B35]"
                  rows={6}
                />
              </div>

              {/* Product Selection (conditional) */}
              <div className="space-y-2">
                <Label htmlFor="product-name">Product Name (if applicable)</Label>
                <Input
                  id="product-name"
                  placeholder="Enter the product name"
                  className="bg-[#111] border-gray-700 focus:border-[#FF6B35]"
                />
              </div>

              {/* Submit Button */}
              <Button type="submit" className="w-full bg-[#FF6B35] hover:bg-[#FF8C5A] text-white py-6">
                Submit Feedback
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
