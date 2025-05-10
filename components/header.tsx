"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Menu, X } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-black text-white py-4 px-4 md:px-8 border-b border-gray-800">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-[#FF6B35]">FIRE</span>
            <span className="ml-2 text-sm text-gray-400">WHOLESALE</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-[#FF6B35] transition-colors">
              Home
            </Link>
            <Link href="/products" className="hover:text-[#FF6B35] transition-colors">
              Products
            </Link>
            <Link href="/about" className="hover:text-[#FF6B35] transition-colors">
              About Us
            </Link>
            <Link href="/testimonials" className="hover:text-[#FF6B35] transition-colors">
              Testimonials
            </Link>
            <Link href="/contact" className="hover:text-[#FF6B35] transition-colors">
              Contact
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              asChild
              variant="outline"
              className="border-gray-700 text-white hover:bg-[#FF6B35] hover:text-white hover:border-[#FF6B35]"
            >
              <Link href="/cart">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Cart
              </Link>
            </Button>
            <Button asChild className="bg-[#FF6B35] hover:bg-[#FF8C5A] text-white">
              <Link href="/login">Log In</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="hover:text-[#FF6B35] transition-colors" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link
                href="/products"
                className="hover:text-[#FF6B35] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/about"
                className="hover:text-[#FF6B35] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/testimonials"
                className="hover:text-[#FF6B35] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link
                href="/contact"
                className="hover:text-[#FF6B35] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="flex space-x-4 pt-4">
                <Button
                  asChild
                  variant="outline"
                  className="border-gray-700 text-white hover:bg-[#FF6B35] hover:text-white hover:border-[#FF6B35]"
                >
                  <Link href="/cart">
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Cart
                  </Link>
                </Button>
                <Button asChild className="bg-[#FF6B35] hover:bg-[#FF8C5A] text-white">
                  <Link href="/login">Log In</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
