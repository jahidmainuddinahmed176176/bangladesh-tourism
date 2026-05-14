"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Star, Users, Calendar, Shield, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const destinations = [
  {
    id: "coxs-bazar",
    name: "Cox's Bazar",
    tagline: "World's Longest Beach",
    description: "120km of pristine golden sand beaches, stunning sunsets, and fresh seafood paradise.",
    image: "/images/coxs-bazar.jpg",
    duration: "3-5 Days",
    price: "From $299",
    rating: 4.9,
  },
  {
    id: "sundarbans",
    name: "Sundarbans",
    tagline: "Home of the Royal Bengal Tiger",
    description: "UNESCO World Heritage mangrove forest, wildlife safari, and untouched natural beauty.",
    image: "/images/sundarbans.jpg",
    duration: "2-4 Days",
    price: "From $349",
    rating: 4.8,
  },
  {
    id: "sylhet",
    name: "Sylhet",
    tagline: "Tea Garden Paradise",
    description: "Rolling hills of emerald tea gardens, serene waterfalls, and spiritual shrines.",
    image: "/images/sylhet.jpg",
    duration: "3-4 Days",
    price: "From $249",
    rating: 4.7,
  },
  {
    id: "bandarban",
    name: "Bandarban",
    tagline: "Land of the Clouds",
    description: "Dramatic mountain peaks, indigenous culture, and breathtaking trekking trails.",
    image: "/images/bandarban.jpg",
    duration: "4-6 Days",
    price: "From $399",
    rating: 4.9,
  },
]

const features = [
  {
    icon: Users,
    title: "Expert Local Guides",
    description: "Our experienced guides know every hidden gem and cultural story of Bangladesh.",
  },
  {
    icon: Shield,
    title: "Safe & Secure Travel",
    description: "Your safety is our priority with 24/7 support and comprehensive travel insurance.",
  },
  {
    icon: Calendar,
    title: "Flexible Booking",
    description: "Change your plans with free cancellation up to 48 hours before your tour.",
  },
]

const testimonials = [
  {
    name: "Sarah Chen",
    location: "Singapore",
    text: "An incredible experience! The Sundarbans tour exceeded all my expectations. The guides were knowledgeable and passionate.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    name: "Michael Roberts",
    location: "United Kingdom",
    text: "Cox's Bazar is absolutely stunning. Bangladesh Explorer made everything seamless from start to finish.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    name: "Priya Sharma",
    location: "India",
    text: "The tea gardens of Sylhet were magical. A perfect blend of adventure and relaxation.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
]

const stats = [
  { value: "10,000+", label: "Happy Travelers" },
  { value: "50+", label: "Tour Packages" },
  { value: "15+", label: "Years Experience" },
  { value: "4.9", label: "Average Rating" },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bangladesh.jpg"
            alt="Beautiful Bangladesh landscape"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-background">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-accent/90 text-accent-foreground text-sm font-medium rounded-full mb-6">
              Discover the Hidden Gem of South Asia
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-balance">
              Experience the Beauty of Bangladesh
            </h1>
            <p className="text-lg md:text-xl text-background/90 max-w-2xl mx-auto mb-8 text-pretty">
              From the world&apos;s longest beach to ancient mangrove forests, embark on unforgettable journeys with our expert-guided tours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/packages">
                <Button size="lg" className="text-base px-8 bg-accent hover:bg-accent/90 text-accent-foreground">
                  Explore Tours
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/book">
                <Button size="lg" variant="outline" className="text-base px-8 border-background/50 text-background hover:bg-background/20">
                  Book Your Adventure
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-background/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-background/70 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</div>
                <div className="text-primary-foreground/70 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">Our Destinations</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4 text-balance">
              Discover Breathtaking Places
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              From pristine beaches to mystical forests, explore the diverse landscapes that make Bangladesh a hidden treasure of South Asia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((dest, index) => (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/destinations/${dest.id}`}>
                  <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={dest.image}
                        alt={dest.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 text-background">
                        <div className="flex items-center gap-1 mb-2">
                          <Star className="h-4 w-4 fill-accent text-accent" />
                          <span className="text-sm font-medium">{dest.rating}</span>
                        </div>
                        <h3 className="text-xl font-bold">{dest.name}</h3>
                        <p className="text-sm text-background/80">{dest.tagline}</p>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{dest.description}</p>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          {dest.duration}
                        </div>
                        <span className="font-bold text-primary">{dest.price}</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/destinations">
              <Button variant="outline" size="lg">
                View All Destinations
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4 text-balance">
              Travel with Confidence
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We are committed to providing exceptional travel experiences with personalized service and local expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center p-8 h-full border-0 shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/sundarbans.jpg"
            alt="Sundarbans"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary/85" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-primary-foreground">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join thousands of travelers who have discovered the magic of Bangladesh with us. Book your tour today and create memories that last a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8">
                Book Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10 px-8">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4 text-balance">
              What Our Travelers Say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real stories from real travelers who experienced the beauty of Bangladesh with us.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full border-0 shadow-md">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">&quot;{testimonial.text}&quot;</p>
                  <div className="flex items-center gap-3">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
