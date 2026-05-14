"use client"

import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { motion } from "framer-motion"
import { ArrowRight, Star, Clock, MapPin, Calendar, Check, Users, Camera, Utensils, Hotel, Car } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { use } from "react"

const destinationsData: Record<string, {
  name: string
  tagline: string
  description: string
  image: string
  duration: string
  price: string
  rating: number
  reviews: number
  bestTime: string
  overview: string
  highlights: string[]
  itinerary: { day: number; title: string; description: string }[]
  included: string[]
  gallery: string[]
}> = {
  "coxs-bazar": {
    name: "Cox's Bazar",
    tagline: "World's Longest Beach",
    description: "Experience 120km of pristine golden sand beaches, stunning sunsets, and fresh seafood paradise.",
    image: "/images/coxs-bazar.jpg",
    duration: "3-5 Days",
    price: "$299",
    rating: 4.9,
    reviews: 328,
    bestTime: "November to February",
    overview: "Cox's Bazar is home to the world's longest natural sea beach, stretching an incredible 120 kilometers along the Bay of Bengal. This coastal paradise offers breathtaking sunsets, some of the freshest seafood in Asia, and a perfect blend of relaxation and adventure. From the main beach's golden sands to the rocky shores of Inani, from the waterfalls of Himchari to the coral island of Saint Martin's, Cox's Bazar region has something for every traveler.",
    highlights: [
      "World's longest unbroken sea beach (120km)",
      "Stunning sunrise and sunset views",
      "Inani Beach with unique rock formations",
      "Himchari National Park and waterfalls",
      "Day trip to Saint Martin's Island",
      "Buddhist temples and monasteries",
      "Fresh seafood and local cuisine",
      "Beach activities and water sports"
    ],
    itinerary: [
      { day: 1, title: "Arrival & Beach Welcome", description: "Arrive at Cox's Bazar, check into your beachfront resort. Evening walk on Laboni Beach to witness the famous sunset. Welcome dinner with fresh seafood." },
      { day: 2, title: "Himchari & Inani Exploration", description: "Visit Himchari National Park and its beautiful waterfall. Continue to Inani Beach to see the unique rock formations. Enjoy a beach picnic lunch." },
      { day: 3, title: "Saint Martin's Island Adventure", description: "Early morning departure to Saint Martin's Island (Bangladesh's only coral island). Snorkeling, swimming, and beach time. Fresh coconut water and seafood lunch." },
      { day: 4, title: "Cultural Discovery & Departure", description: "Visit Ramu Buddhist temples and the 100-foot reclining Buddha. Shopping for local handicrafts and dried fish. Departure with unforgettable memories." }
    ],
    included: ["Airport transfers", "3-4 star accommodation", "Daily breakfast", "All sightseeing", "English-speaking guide", "Boat to Saint Martin's", "Entry fees"],
    gallery: ["/images/coxs-bazar.jpg", "/images/sundarbans.jpg", "/images/sylhet.jpg"]
  },
  "sundarbans": {
    name: "Sundarbans",
    tagline: "Home of the Royal Bengal Tiger",
    description: "Venture into the world's largest mangrove forest, home to the majestic Royal Bengal Tiger.",
    image: "/images/sundarbans.jpg",
    duration: "2-4 Days",
    price: "$349",
    rating: 4.8,
    reviews: 256,
    bestTime: "October to March",
    overview: "The Sundarbans is a UNESCO World Heritage Site and the world's largest mangrove forest, spanning across Bangladesh and India. This incredible ecosystem is home to the endangered Royal Bengal Tiger, saltwater crocodiles, Gangetic dolphins, and over 260 bird species. Navigate through the intricate network of tidal waterways, mudflats, and small islands covered with salt-tolerant trees. A journey here is like stepping into another world.",
    highlights: [
      "Royal Bengal Tiger spotting",
      "UNESCO World Heritage mangrove forest",
      "Traditional boat cruises through waterways",
      "Kotka and Katka wildlife viewing towers",
      "Spotted deer, crocodiles, and dolphins",
      "300+ species of birds",
      "Sunrise at Dublar Char Island",
      "Local fishing community visits"
    ],
    itinerary: [
      { day: 1, title: "Journey to the Mangroves", description: "Travel to Mongla port and board your vessel. Cruise into the Sundarbans as the landscape transforms. Evening wildlife briefing and dinner on deck." },
      { day: 2, title: "Deep Forest Exploration", description: "Early morning cruise to Kotka for tiger spotting. Climb the viewing tower for panoramic forest views. Afternoon walk through the mangrove trails." },
      { day: 3, title: "Wildlife & Local Life", description: "Visit Katka for more wildlife viewing. See spotted deer, wild boar, and crocodiles. Evening visit to a local fishing village to understand their unique way of life." },
      { day: 4, title: "Farewell to the Wild", description: "Final morning cruise through scenic waterways. Return to Mongla with memories of the wild. Transfer back to Dhaka or Khulna." }
    ],
    included: ["Dhaka pickup", "Vessel accommodation", "All meals onboard", "Forest permits", "Naturalist guide", "Binoculars", "Life jackets"],
    gallery: ["/images/sundarbans.jpg", "/images/coxs-bazar.jpg", "/images/bandarban.jpg"]
  },
  "sylhet": {
    name: "Sylhet",
    tagline: "Tea Garden Paradise",
    description: "Discover rolling hills of emerald tea gardens, mystical waterfalls, and sacred shrines.",
    image: "/images/sylhet.jpg",
    duration: "3-4 Days",
    price: "$249",
    rating: 4.7,
    reviews: 412,
    bestTime: "October to March",
    overview: "Sylhet is Bangladesh's tea country, where endless rolling hills are carpeted with lush green tea estates that produce some of the world's finest tea. Beyond the tea gardens, discover the only swamp forest in Bangladesh at Ratargul, cruise the crystal-clear turquoise waters of Lalakhal, and pay respects at the ancient shrine of Hazrat Shah Jalal. The region's natural beauty, spiritual significance, and warm hospitality make it a beloved destination.",
    highlights: [
      "Srimangal - Tea Capital of Bangladesh",
      "Ratargul Swamp Forest boat ride",
      "Lalakhal River cruise",
      "Madhabpur Lake",
      "Lawachara National Park wildlife",
      "Shrine of Hazrat Shah Jalal",
      "Jaflong stone collection area",
      "Tea garden walks and tea tasting"
    ],
    itinerary: [
      { day: 1, title: "Welcome to Tea Country", description: "Arrive in Sylhet, visit the sacred shrine of Hazrat Shah Jalal. Transfer to Srimangal, the tea capital. Evening walk through tea gardens as the mist rolls in." },
      { day: 2, title: "Forests & Lakes", description: "Early morning visit to Lawachara National Park (home to hoolock gibbons). Afternoon at Madhabpur Lake surrounded by tea estates. Traditional tea tasting session." },
      { day: 3, title: "Swamp Forest Adventure", description: "Boat ride through Ratargul Swamp Forest, Bangladesh's only freshwater swamp forest. Visit Bisnakandi for stunning views of India's Meghalaya mountains." },
      { day: 4, title: "River & Departure", description: "Cruise the turquoise waters of Lalakhal River. Visit Jaflong to see the crystal-clear Piyain River and stone collection. Return to Sylhet for departure." }
    ],
    included: ["Sylhet transfers", "Resort accommodation", "Daily breakfast", "All sightseeing", "Boat rides", "Tea garden entry", "Expert guide"],
    gallery: ["/images/sylhet.jpg", "/images/bandarban.jpg", "/images/sundarbans.jpg"]
  },
  "bandarban": {
    name: "Bandarban",
    tagline: "Land of the Clouds",
    description: "Trek through dramatic peaks, discover indigenous cultures, and witness breathtaking sunrises.",
    image: "/images/bandarban.jpg",
    duration: "4-6 Days",
    price: "$399",
    rating: 4.9,
    reviews: 289,
    bestTime: "November to February",
    overview: "Bandarban is Bangladesh's mountainous paradise, home to the country's highest peaks including Keokradong (883m) and Tahjindong (1,280m). This district in the Chittagong Hill Tracts offers dramatic landscapes of forested mountains, rushing waterfalls, and cloud-wrapped peaks. Experience the unique cultures of indigenous Marma, Bawm, and Mru tribes who have called these hills home for centuries. For adventure seekers and culture enthusiasts alike, Bandarban is unmissable.",
    highlights: [
      "Nilgiri Hills - highest resort in Bangladesh",
      "Golden Temple (largest Buddha statue in Bangladesh)",
      "Nafakhum and Amiakhum Waterfalls trekking",
      "Boga Lake camping under stars",
      "Indigenous tribal village visits",
      "Chimbuk Hill sunrise",
      "Meghla Parjatan Complex",
      "Traditional tribal cuisine"
    ],
    itinerary: [
      { day: 1, title: "Into the Hills", description: "Drive from Chittagong through winding mountain roads. Visit Meghla Parjatan Complex with its hanging bridge and lake. Continue to your hill resort at Nilgiri or Chimbuk." },
      { day: 2, title: "Spiritual & Scenic", description: "Early sunrise from your hilltop resort. Visit the magnificent Golden Temple. Explore Bandarban town and the Sangu River valley. Evening cultural show by local tribes." },
      { day: 3, title: "Waterfall Trek", description: "Begin the trek to Nafakhum, one of Bangladesh's most beautiful waterfalls. Walk through tribal villages and bamboo forests. Camp near the waterfall or return to base." },
      { day: 4, title: "Tribal Immersion", description: "Visit Marma and Bawm tribal villages. Learn about their traditional weaving, customs, and way of life. Try authentic tribal cuisine prepared by local families." },
      { day: 5, title: "Farewell to Mountains", description: "Final morning enjoying mountain views. Shopping for tribal handicrafts and woven products. Return journey with stops for scenic viewpoints." }
    ],
    included: ["Chittagong transfers", "Hill resort stays", "All meals", "Trekking guide", "Permits", "Tribal village visits", "Porter for treks"],
    gallery: ["/images/bandarban.jpg", "/images/sylhet.jpg", "/images/coxs-bazar.jpg"]
  }
}

export default function DestinationDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params)
  const destination = destinationsData[resolvedParams.slug]

  if (!destination) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-end">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 pb-16 w-full text-background">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block px-4 py-2 bg-accent text-accent-foreground text-sm font-medium rounded-full mb-4">
              {destination.tagline}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{destination.name}</h1>
            <p className="text-xl text-background/90 max-w-2xl mb-6">{destination.description}</p>
            
            <div className="flex flex-wrap gap-6 items-center">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 fill-accent text-accent" />
                <span className="font-semibold">{destination.rating}</span>
                <span className="text-background/70">({destination.reviews} reviews)</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>{destination.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>Best: {destination.bestTime}</span>
              </div>
              <div className="px-4 py-2 bg-accent text-accent-foreground rounded-full font-bold">
                {destination.price}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="bg-primary text-primary-foreground py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6 text-sm">
              <span className="flex items-center gap-2">
                <Hotel className="h-4 w-4" />
                Accommodation Included
              </span>
              <span className="flex items-center gap-2">
                <Car className="h-4 w-4" />
                All Transfers
              </span>
              <span className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                Expert Guides
              </span>
            </div>
            <Link href="/book">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Book This Tour
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Overview</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">{destination.overview}</p>
              
              {/* Highlights */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-6">Tour Highlights</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {destination.highlights.map((highlight, index) => (
                    <motion.div
                      key={highlight}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span>{highlight}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <Card className="sticky top-32 border-0 shadow-xl">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-primary">{destination.price}</div>
                    <div className="text-muted-foreground">per person</div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Duration</span>
                      <span className="font-medium">{destination.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Best Season</span>
                      <span className="font-medium">{destination.bestTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Rating</span>
                      <span className="font-medium flex items-center gap-1">
                        <Star className="h-4 w-4 fill-accent text-accent" />
                        {destination.rating}
                      </span>
                    </div>
                  </div>

                  <Link href="/book" className="block">
                    <Button className="w-full" size="lg">
                      Book Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  
                  <p className="text-xs text-muted-foreground text-center mt-4">
                    Free cancellation up to 48 hours before
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Itinerary */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Day-by-Day Itinerary</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {destination.itinerary.map((item, index) => (
              <motion.div
                key={item.day}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-md overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex">
                      <div className="w-20 bg-primary text-primary-foreground flex flex-col items-center justify-center py-6">
                        <span className="text-sm uppercase">Day</span>
                        <span className="text-3xl font-bold">{item.day}</span>
                      </div>
                      <div className="flex-1 p-6">
                        <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">What&apos;s Included</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {destination.included.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 p-4 bg-secondary rounded-lg"
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span className="font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            Ready to Explore {destination.name}?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Book your adventure today and let us create an unforgettable experience for you. Our local experts are ready to guide you through every step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Book This Tour
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/destinations">
              <Button size="lg" variant="outline" className="border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10">
                View Other Destinations
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
