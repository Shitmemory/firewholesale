import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-black text-white py-12 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto max-w-4xl">
        {/* Page Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Register for Wholesale Access</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Complete the form below to register for a wholesale account. Once approved, you'll gain access to exclusive
            wholesale pricing and our complete product catalog.
          </p>
        </div>

        <Card className="bg-[#1A1A1A] border-gray-800">
          <CardHeader>
            <CardTitle>Business Information</CardTitle>
            <CardDescription>Please provide your business details for verification.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              {/* Business Details */}
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="business-name">Business Name</Label>
                    <Input
                      id="business-name"
                      placeholder="Your Business Name"
                      className="bg-[#111] border-gray-700 focus:border-[#FF6B35]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="business-type">Business Type</Label>
                    <Select>
                      <SelectTrigger className="bg-[#111] border-gray-700">
                        <SelectValue placeholder="Select business type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="restaurant">Restaurant</SelectItem>
                        <SelectItem value="cafe">Café</SelectItem>
                        <SelectItem value="takeaway">Takeaway</SelectItem>
                        <SelectItem value="catering">Catering Service</SelectItem>
                        <SelectItem value="food-truck">Food Truck</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="business-address">Business Address</Label>
                  <Textarea
                    id="business-address"
                    placeholder="Full business address"
                    className="bg-[#111] border-gray-700 focus:border-[#FF6B35]"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="postcode">Postcode</Label>
                    <Input
                      id="postcode"
                      placeholder="Postcode"
                      className="bg-[#111] border-gray-700 focus:border-[#FF6B35]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company-number">Company Registration Number (Optional)</Label>
                    <Input
                      id="company-number"
                      placeholder="Company number"
                      className="bg-[#111] border-gray-700 focus:border-[#FF6B35]"
                    />
                  </div>
                </div>
              </div>

              {/* Contact Details */}
              <div>
                <h3 className="text-lg font-medium mb-4">Contact Details</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="contact-name">Contact Name</Label>
                      <Input
                        id="contact-name"
                        placeholder="Full name"
                        className="bg-[#111] border-gray-700 focus:border-[#FF6B35]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="position">Position</Label>
                      <Input
                        id="position"
                        placeholder="Your position"
                        className="bg-[#111] border-gray-700 focus:border-[#FF6B35]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your email"
                        className="bg-[#111] border-gray-700 focus:border-[#FF6B35]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        placeholder="Your phone number"
                        className="bg-[#111] border-gray-700 focus:border-[#FF6B35]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <h3 className="text-lg font-medium mb-4">Additional Information</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="requirements">Your Requirements</Label>
                    <Textarea
                      id="requirements"
                      placeholder="Tell us about your business and what products you're interested in"
                      className="bg-[#111] border-gray-700 focus:border-[#FF6B35]"
                      rows={4}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="estimated-spend">Estimated Monthly Spend</Label>
                    <Select>
                      <SelectTrigger className="bg-[#111] border-gray-700">
                        <SelectValue placeholder="Select estimated spend" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-500">Under £500</SelectItem>
                        <SelectItem value="500-1000">£500 - £1,000</SelectItem>
                        <SelectItem value="1000-2500">£1,000 - £2,500</SelectItem>
                        <SelectItem value="2500-5000">£2,500 - £5,000</SelectItem>
                        <SelectItem value="over-5000">Over £5,000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="hear-about">How did you hear about us?</Label>
                    <Select>
                      <SelectTrigger className="bg-[#111] border-gray-700">
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="search">Search Engine</SelectItem>
                        <SelectItem value="social">Social Media</SelectItem>
                        <SelectItem value="recommendation">Recommendation</SelectItem>
                        <SelectItem value="existing">Existing Customer</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="space-y-4">
                <div className="flex items-start space-x-2">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms" className="text-sm">
                    I agree to the{" "}
                    <a href="/terms" className="text-[#FF6B35] hover:underline">
                      Terms and Conditions
                    </a>{" "}
                    and{" "}
                    <a href="/privacy" className="text-[#FF6B35] hover:underline">
                      Privacy Policy
                    </a>
                  </Label>
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox id="marketing" />
                  <Label htmlFor="marketing" className="text-sm">
                    I would like to receive marketing communications about products, services, and promotions
                  </Label>
                </div>
              </div>

              <Button type="submit" className="w-full bg-[#FF6B35] hover:bg-[#FF8C5A] text-white py-6">
                Submit Application
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
