"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Star, Clock, MapPin, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const destinations = [
  {
    id: "coxs-bazar",
    name: "Cox's Bazar",
    tagline: "World's Longest Beach",
    description: "Experience 120km of pristine golden sand beaches, stunning sunsets over the Bay of Bengal, and the freshest seafood you'll ever taste.",
    longDescription: "Cox's Bazar is home to the world's longest natural sea beach, stretching 120 kilometers along the Bay of Bengal. This coastal paradise offers breathtaking sunsets, fresh seafood, and a perfect blend of relaxation and adventure. Explore nearby attractions like Himchari National Park, Inani Beach, and take a boat trip to the coral island of Saint Martin's.",
    image: "/images/coxs-bazar.jpg",
    duration: "3-5 Days",
    price: "From $299",
    rating: 4.9,
    reviews: 328,
    highlights: ["World's Longest Beach", "Inani Rocky Beach", "Himchari Waterfalls", "Saint Martin's Island", "Fresh Seafood"],
    bestTime: "November to February",
  },
  {
    id: "sundarbans",
    name: "Sundarbans",
    tagline: "Home of the Royal Bengal Tiger",
    description: "Venture into the world's largest mangrove forest, a UNESCO World Heritage site and home to the majestic Royal Bengal Tiger.",
    longDescription: "The Sundarbans is the largest mangrove forest in the world, spanning Bangladesh and India. This UNESCO World Heritage Site is a biodiversity hotspot, home to the endangered Royal Bengal Tiger, saltwater crocodiles, and hundreds of bird species. Navigate through the intricate waterways on a traditional boat and witness nature at its most pristine.",
    image: "/images/sundarbans.jpg",
    duration: "2-4 Days",
    price: "From $349",
    rating: 4.8,
    reviews: 256,
    highlights: ["Royal Bengal Tiger Safari", "Mangrove Forest Cruise", "Bird Watching", "Kotka Beach", "Dublar Char Island"],
    bestTime: "October to March",
  },
  {
    id: "sylhet",
    name: "Sylhet",
    tagline: "Tea Garden Paradise",
    description: "Discover rolling hills blanketed with emerald tea gardens, mystical waterfalls, and sacred shrines in the northeast.",
    longDescription: "Sylhet is Bangladesh's tea country, where endless rolling hills are covered with lush green tea estates. Visit the famous Lawachara National Park for wildlife, take a boat ride on Lalakhal's crystal-clear waters, and pay respects at the ancient shrine of Hazrat Shah Jalal. The region's natural beauty and spiritual significance make it a must-visit destination.",
    image: "/images/sylhet.jpg",
    duration: "3-4 Days",
    price: "From $249",
    rating: 4.7,
    reviews: 412,
    highlights: ["Srimangal Tea Gardens", "Ratargul Swamp Forest", "Lalakhal River", "Madhabpur Lake", "Jaflong Stone Quarry"],
    bestTime: "October to March",
  },
  {
    id: "bandarban",
    name: "Bandarban",
    tagline: "Land of the Clouds",
    description: "Trek through dramatic mountain peaks, discover indigenous tribal cultures, and witness breathtaking sunrise views.",
    longDescription: "Bandarban is Bangladesh's mountainous paradise, home to the country's highest peaks including Keokradong and Tahjindong. Experience the unique cultures of indigenous Marma, Bawm, and Mru tribes, trek through dense forests to hidden waterfalls, and watch sunrise paint the sky from Nilgiri or Chimbuk hills. Adventure seekers will find their calling here.",
    image: "/images/bandarban.jpg",
    duration: "4-6 Days",
    price: "From $399",
    rating: 4.9,
    reviews: 289,
    highlights: ["Nilgiri Hills", "Golden Temple", "Meghla Parjatan Complex", "Nafakhum Waterfall", "Boga Lake Trekking"],
    bestTime: "November to February",
  },
]

export default function DestinationsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hero-bangladesh.jpg"
            alt="Bangladesh Destinations"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="text-accent font-medium text-sm uppercase tracking-wider">Explore Bangladesh</span>
            <h1 className="text-3xl md:text-5xl font-bold mt-3 mb-4 text-balance">
              Discover Breathtaking Destinations
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              From pristine beaches to mystical forests, explore the diverse landscapes that make Bangladesh a hidden treasure of South Asia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-16">
            {destinations.map((dest, index) => (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                  {/* Image */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                      <Image
                        src={dest.image}
                        alt={dest.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-background">
                          <Star className="h-5 w-5 fill-accent text-accent" />
                          <span className="font-semibold">{dest.rating}</span>
                          <span className="text-background/70">({dest.reviews} reviews)</span>
                        </div>
                        <div className="px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-semibold">
                          {dest.price}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <span className="text-primary font-medium text-sm uppercase tracking-wider">{dest.tagline}</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">{dest.name}</h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {dest.longDescription}
                    </p>

                    {/* Meta info */}
                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>{dest.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>Best: {dest.bestTime}</span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Highlights</h4>
                      <div className="flex flex-wrap gap-2">
                        {dest.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <Link href={`/destinations/${dest.id}`}>
                        <Button>
                          Explore {dest.name}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                      <Link href="/book">
                        <Button variant="outline">Book This Tour</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            Can&apos;t Decide? Let Us Help!
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Our travel experts can create a customized itinerary combining multiple destinations based on your interests, time, and budget.
          </p>
          <Link href="/book">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Get Custom Itinerary
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
