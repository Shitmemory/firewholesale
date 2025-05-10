import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white pt-16 pb-8 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              FIRE <span className="text-[#FF6B35]">Wholesale</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Premium food products for restaurants, caterers, and food service businesses.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#FF6B35]">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FF6B35]">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FF6B35]">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-gray-400 hover:text-[#FF6B35]">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-[#FF6B35]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-400 hover:text-[#FF6B35]">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-gray-400 hover:text-[#FF6B35]">
                  Register
                </Link>
              </li>
              <li>
                <Link href="/download" className="text-gray-400 hover:text-[#FF6B35]">
                  Download App
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[#FF6B35] mr-2 mt-1" />
                <span className="text-gray-400">133 Park Road, Manchester M32 8FB</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-[#FF6B35] mr-2" />
                <span className="text-gray-400">+44 (0) 161 123 4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-[#FF6B35] mr-2" />
                <span className="text-gray-400">wholesale@firefoods.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest products and promotions.</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 bg-[#1A1A1A] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
              />
              <button
                type="submit"
                className="w-full bg-[#FF6B35] hover:bg-[#FF8C5A] text-white py-2 rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-gray-800 text-center md:flex md:justify-between md:items-center">
          <p className="text-gray-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} FIRE Wholesale. All rights reserved.
          </p>
          <div className="flex justify-center md:justify-end space-x-6">
            <Link href="/terms" className="text-gray-500 hover:text-[#FF6B35]">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-gray-500 hover:text-[#FF6B35]">
              Privacy Policy
            </Link>
            <Link href="/gdpr" className="text-gray-500 hover:text-[#FF6B35]">
              GDPR
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
