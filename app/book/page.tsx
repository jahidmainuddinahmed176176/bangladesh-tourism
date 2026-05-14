"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, Users, MapPin, Phone, Mail, User, MessageSquare, ArrowRight, Check, Clock, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const destinations = [
  { id: "coxs-bazar", name: "Cox's Bazar - World's Longest Beach" },
  { id: "sundarbans", name: "Sundarbans - Mangrove Safari" },
  { id: "sylhet", name: "Sylhet - Tea Garden Paradise" },
  { id: "bandarban", name: "Bandarban - Mountain Adventure" },
  { id: "srimangal", name: "Srimangal - Tea Capital" },
  { id: "rangamati", name: "Rangamati - Lake District" },
  { id: "saint-martin", name: "Saint Martin's Island" },
]

const tourTypes = [
  { id: "adventure", name: "Adventure & Trekking" },
  { id: "beach", name: "Beach & Relaxation" },
  { id: "wildlife", name: "Wildlife Safari" },
  { id: "cultural", name: "Cultural Heritage" },
  { id: "photography", name: "Photography Tour" },
  { id: "honeymoon", name: "Honeymoon Package" },
  { id: "family", name: "Family Vacation" },
]

const features = [
  { icon: Shield, text: "100% Secure Booking" },
  { icon: Clock, text: "24/7 Customer Support" },
  { icon: Check, text: "Free Cancellation" },
]

export default function BookPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-32 pb-20">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8"
            >
              <Check className="h-12 w-12 text-primary" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Booking Request Received!</h1>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Thank you for choosing Bangladesh Explorer. Our travel experts will contact you within 24 hours to finalize your tour details.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/">
                  <Button variant="outline">Return to Home</Button>
                </Link>
                <Link href="/packages">
                  <Button>Explore More Tours</Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/coxs-bazar.jpg"
            alt="Book your tour"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="text-accent font-medium text-sm uppercase tracking-wider">Book Your Adventure</span>
              <h1 className="text-3xl md:text-5xl font-bold mt-3 mb-4 text-balance">
                Start Your Journey Today
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
                Fill out the form below and our travel experts will craft the perfect Bangladesh experience tailored just for you.
              </p>
            </motion.div>
          </div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            {features.map((feature) => (
              <div key={feature.text} className="flex items-center gap-2 text-sm">
                <feature.icon className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">{feature.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Tour Booking Form</CardTitle>
                <CardDescription>
                  Please provide your details and preferences. All fields marked with * are required.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <User className="h-5 w-5 text-primary" />
                      Personal Information
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" placeholder="John" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" placeholder="Doe" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input id="email" type="email" placeholder="you@example.com" className="pl-10" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input id="phone" type="tel" placeholder="+1 234 567 8900" className="pl-10" required />
                        </div>
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="country">Country of Residence *</Label>
                        <Input id="country" placeholder="United States" required />
                      </div>
                    </div>
                  </div>

                  {/* Tour Details */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      Tour Details
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="destination">Preferred Destination *</Label>
                        <Select required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a destination" />
                          </SelectTrigger>
                          <SelectContent>
                            {destinations.map((dest) => (
                              <SelectItem key={dest.id} value={dest.id}>
                                {dest.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="tourType">Tour Type *</Label>
                        <Select required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select tour type" />
                          </SelectTrigger>
                          <SelectContent>
                            {tourTypes.map((type) => (
                              <SelectItem key={type.id} value={type.id}>
                                {type.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="startDate">Preferred Start Date *</Label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input id="startDate" type="date" className="pl-10" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="duration">Tour Duration *</Label>
                        <Select required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select duration" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="2-3">2-3 Days</SelectItem>
                            <SelectItem value="4-5">4-5 Days</SelectItem>
                            <SelectItem value="6-7">6-7 Days</SelectItem>
                            <SelectItem value="8-10">8-10 Days</SelectItem>
                            <SelectItem value="10+">More than 10 Days</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Group Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      Group Information
                    </h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="adults">Number of Adults *</Label>
                        <Input id="adults" type="number" min="1" placeholder="2" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="children">Number of Children</Label>
                        <Input id="children" type="number" min="0" placeholder="0" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="budget">Budget per Person (USD)</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select budget" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="economy">Economy ($200-$400)</SelectItem>
                            <SelectItem value="standard">Standard ($400-$700)</SelectItem>
                            <SelectItem value="premium">Premium ($700-$1000)</SelectItem>
                            <SelectItem value="luxury">Luxury ($1000+)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <MessageSquare className="h-5 w-5 text-primary" />
                      Additional Information
                    </h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="specialRequests">Special Requests or Requirements</Label>
                        <Textarea
                          id="specialRequests"
                          placeholder="Tell us about any dietary requirements, accessibility needs, or special interests..."
                          rows={4}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="hearAbout">How did you hear about us?</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="google">Google Search</SelectItem>
                            <SelectItem value="social">Social Media</SelectItem>
                            <SelectItem value="friend">Friend/Family</SelectItem>
                            <SelectItem value="blog">Travel Blog</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <Button type="submit" size="lg" className="w-full md:w-auto" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="h-4 w-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                          Submitting Request...
                        </span>
                      ) : (
                        <>
                          Submit Booking Request
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                    <p className="text-sm text-muted-foreground mt-4">
                      By submitting this form, you agree to our{" "}
                      <Link href="/terms" className="text-primary hover:underline">Terms of Service</Link>
                      {" "}and{" "}
                      <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <p className="text-muted-foreground mb-4">
              Prefer to talk to someone? Contact our travel experts directly:
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="tel:+8801234567890" className="flex items-center gap-2 text-primary hover:underline">
                <Phone className="h-5 w-5" />
                +880 1234-567890
              </a>
              <a href="mailto:bookings@bangladeshexplorer.com" className="flex items-center gap-2 text-primary hover:underline">
                <Mail className="h-5 w-5" />
                bookings@bangladeshexplorer.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
