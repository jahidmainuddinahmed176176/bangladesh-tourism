"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Star, Clock, Users, Check, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const packages = [
  {
    id: "beach-escape",
    name: "Beach Escape",
    tagline: "Sun, Sand & Sea",
    description: "Perfect beach holiday at Cox's Bazar with Saint Martin's Island",
    duration: "5 Days / 4 Nights",
    groupSize: "2-12 people",
    price: 349,
    originalPrice: 449,
    rating: 4.9,
    reviews: 156,
    image: "/images/coxs-bazar.jpg",
    highlights: ["Cox's Bazar Beach", "Saint Martin's Island", "Inani Beach", "Seafood Feast", "Beach Resort Stay"],
    popular: true,
  },
  {
    id: "wildlife-safari",
    name: "Wildlife Safari",
    tagline: "Into the Wild",
    description: "Explore the Sundarbans mangrove forest and spot Royal Bengal Tigers",
    duration: "4 Days / 3 Nights",
    groupSize: "4-10 people",
    price: 399,
    originalPrice: 499,
    rating: 4.8,
    reviews: 98,
    image: "/images/sundarbans.jpg",
    highlights: ["Tiger Spotting", "Boat Safari", "Bird Watching", "Mangrove Cruise", "Riverside Camping"],
    popular: false,
  },
  {
    id: "tea-trail",
    name: "Tea Trail Adventure",
    tagline: "Scenic & Serene",
    description: "Journey through the rolling tea gardens and swamp forests of Sylhet",
    duration: "4 Days / 3 Nights",
    groupSize: "2-8 people",
    price: 299,
    originalPrice: 379,
    rating: 4.7,
    reviews: 187,
    image: "/images/sylhet.jpg",
    highlights: ["Tea Garden Tour", "Ratargul Forest", "Lalakhal River", "Tea Tasting", "Shrine Visit"],
    popular: true,
  },
  {
    id: "mountain-expedition",
    name: "Mountain Expedition",
    tagline: "Above the Clouds",
    description: "Trek the highest peaks and discover indigenous tribal cultures",
    duration: "6 Days / 5 Nights",
    groupSize: "4-10 people",
    price: 499,
    originalPrice: 649,
    rating: 4.9,
    reviews: 124,
    image: "/images/bandarban.jpg",
    highlights: ["Nilgiri Sunrise", "Nafakhum Trek", "Tribal Villages", "Golden Temple", "Mountain Camping"],
    popular: true,
  },
  {
    id: "complete-bangladesh",
    name: "Complete Bangladesh",
    tagline: "Ultimate Experience",
    description: "The comprehensive tour covering all major destinations in Bangladesh",
    duration: "12 Days / 11 Nights",
    groupSize: "4-12 people",
    price: 999,
    originalPrice: 1299,
    rating: 5.0,
    reviews: 67,
    image: "/images/hero-bangladesh.jpg",
    highlights: ["All 4 Major Destinations", "Cultural Immersion", "Adventure Activities", "Luxury Stays", "Private Guide"],
    popular: false,
  },
  {
    id: "honeymoon-special",
    name: "Honeymoon Special",
    tagline: "Romance & Adventure",
    description: "Romantic getaway combining beach, hills, and luxury experiences",
    duration: "7 Days / 6 Nights",
    groupSize: "2 people",
    price: 699,
    originalPrice: 899,
    rating: 4.9,
    reviews: 89,
    image: "/images/coxs-bazar.jpg",
    highlights: ["Private Beach Dinner", "Couple Spa", "Sunset Cruise", "Hill Resort", "Candlelit Experiences"],
    popular: false,
  },
]

export default function PackagesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/sundarbans.jpg"
            alt="Tour Packages"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="text-accent font-medium text-sm uppercase tracking-wider">Our Packages</span>
            <h1 className="text-3xl md:text-5xl font-bold mt-3 mb-4 text-balance">
              Curated Tour Packages
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              Choose from our carefully crafted tour packages designed to give you the best Bangladesh experience within your time and budget.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  <div className="relative h-56">
                    <Image
                      src={pkg.image}
                      alt={pkg.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                    
                    {pkg.popular && (
                      <div className="absolute top-4 left-4 px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full flex items-center gap-1">
                        <Sparkles className="h-3 w-3" />
                        Popular
                      </div>
                    )}
                    
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 text-background mb-2">
                        <span className="text-sm bg-background/20 backdrop-blur-sm px-2 py-1 rounded">{pkg.tagline}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-background">{pkg.name}</h3>
                    </div>
                  </div>

                  <CardContent className="p-6 flex-1 flex flex-col">
                    <p className="text-muted-foreground mb-4">{pkg.description}</p>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {pkg.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {pkg.groupSize}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                      <Star className="h-4 w-4 fill-accent text-accent" />
                      <span className="font-medium">{pkg.rating}</span>
                      <span className="text-muted-foreground text-sm">({pkg.reviews} reviews)</span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {pkg.highlights.slice(0, 3).map((highlight) => (
                        <span
                          key={highlight}
                          className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs"
                        >
                          {highlight}
                        </span>
                      ))}
                      {pkg.highlights.length > 3 && (
                        <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs">
                          +{pkg.highlights.length - 3} more
                        </span>
                      )}
                    </div>

                    <div className="mt-auto">
                      <div className="flex items-baseline gap-2 mb-4">
                        <span className="text-3xl font-bold text-primary">${pkg.price}</span>
                        <span className="text-muted-foreground line-through">${pkg.originalPrice}</span>
                        <span className="text-accent text-sm font-medium">
                          Save {Math.round((1 - pkg.price / pkg.originalPrice) * 100)}%
                        </span>
                      </div>
                      
                      <Link href="/book">
                        <Button className="w-full">
                          Book This Package
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Package CTA */}
      <section className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            Need a Custom Package?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our travel experts can create a personalized itinerary based on your specific interests, timeline, and budget. Contact us to design your perfect Bangladesh adventure.
          </p>
          <Link href="/book">
            <Button size="lg">
              Request Custom Itinerary
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">All Packages Include</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              "Accommodation",
              "Breakfast Daily",
              "Airport Transfers",
              "Local Guide",
              "Entry Fees",
              "24/7 Support"
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-primary" />
                </div>
                <span className="font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
