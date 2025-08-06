"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  MapPin,
  Calendar,
  Users,
  Star,
  Play,
  Download,
  Clock,
  Mountain,
  Camera,
  Route,
  Tent,
  Utensils,
  DollarSign,
  Shield,
  CreditCard,
  CheckCircle,
  Mail,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function MongoliaTravelGuide() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)
  const [isSuccessOpen, setIsSuccessOpen] = useState(false)
  const [customerEmail, setCustomerEmail] = useState("")
  const [accessToken, setAccessToken] = useState("")

  const days = Array.from({ length: 30 }, (_, i) => i + 1)

  const handlePurchaseClick = () => {
    setIsCheckoutOpen(true)
  }

  const handlePaymentSuccess = (token: string, email: string) => {
    setAccessToken(token)
    setCustomerEmail(email)
    setIsCheckoutOpen(false)
    setIsSuccessOpen(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image
          src="/placeholder.svg?height=1080&width=1920&text=Mongolia+Landscape"
          alt="Mongolia landscape"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <Badge className="mb-4 bg-orange-500/90 text-white border-0">Premium Travel Guide</Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Mongolia
            <span className="block text-3xl md:text-5xl font-light text-orange-200">30 Days of Adventure</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
            The complete day-by-day guide to experiencing the Land of the Eternal Blue Sky. From nomadic families to the
            Gobi Desert.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg"
              onClick={handlePurchaseClick}
            >
              <DollarSign className="w-5 h-5 mr-2" />
              Get Full Access - $25
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg bg-transparent"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Preview
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              30 Days Detailed
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              15+ Locations
            </div>
            <div className="flex items-center gap-2">
              <Camera className="w-4 h-4" />
              200+ Photos & Videos
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">30</div>
              <div className="text-gray-600">Days of Adventure</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">3,200</div>
              <div className="text-gray-600">Miles Traveled</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">15</div>
              <div className="text-gray-600">Unique Locations</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">200+</div>
              <div className="text-gray-600">Photos & Videos</div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-amber-500">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">What's Included</h2>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto">
              Everything you need to recreate our incredible Mongolia adventure
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/95 backdrop-blur border-0 shadow-xl">
              <CardHeader className="text-center pb-4">
                <Route className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <CardTitle className="text-xl">Daily Itineraries</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Detailed daily schedules</li>
                  <li>• GPS coordinates</li>
                  <li>• Travel times & distances</li>
                  <li>• Best photo spots</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/95 backdrop-blur border-0 shadow-xl">
              <CardHeader className="text-center pb-4">
                <Camera className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <CardTitle className="text-xl">Media Library</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• 200+ high-res photos</li>
                  <li>• 30+ video clips</li>
                  <li>• Drone footage</li>
                  <li>• Behind-the-scenes content</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/95 backdrop-blur border-0 shadow-xl">
              <CardHeader className="text-center pb-4">
                <Download className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <CardTitle className="text-xl">Practical Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Packing checklists</li>
                  <li>• Budget breakdowns</li>
                  <li>• Local contacts</li>
                  <li>• Cultural tips</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sample Days Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Sample Days</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get a taste of what's included in the full 30-day guide
            </p>
          </div>

          <Tabs defaultValue="day1" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="day1">Day 1</TabsTrigger>
              <TabsTrigger value="day15">Day 15</TabsTrigger>
              <TabsTrigger value="day30">Day 30</TabsTrigger>
            </TabsList>

            <TabsContent value="day1" className="space-y-6">
              <Card className="overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <Image
                      src="/placeholder.svg?height=400&width=600&text=Ulaanbaatar+City"
                      alt="Ulaanbaatar arrival"
                      width={600}
                      height={400}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge variant="outline">Day 1</Badge>
                      <Badge className="bg-orange-500">Arrival</Badge>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Welcome to Ulaanbaatar</h3>
                    <div className="space-y-4 text-gray-600">
                      <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 mt-0.5 text-orange-500" />
                        <div>
                          <strong>Morning:</strong> Airport pickup, hotel check-in, first impressions of the capital
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Utensils className="w-5 h-5 mt-0.5 text-orange-500" />
                        <div>
                          <strong>Lunch:</strong> Traditional Mongolian BBQ at Modern Nomads
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Mountain className="w-5 h-5 mt-0.5 text-orange-500" />
                        <div>
                          <strong>Afternoon:</strong> Gandan Monastery visit, National Museum tour
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="day15" className="space-y-6">
              <Card className="overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <Image
                      src="/placeholder.svg?height=400&width=600&text=Gobi+Desert+Camels"
                      alt="Gobi Desert"
                      width={600}
                      height={400}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge variant="outline">Day 15</Badge>
                      <Badge className="bg-amber-500">Gobi Desert</Badge>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Khongoryn Els Sand Dunes</h3>
                    <div className="space-y-4 text-gray-600">
                      <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 mt-0.5 text-orange-500" />
                        <div>
                          <strong>Sunrise:</strong> Camel trek across the singing dunes
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Tent className="w-5 h-5 mt-0.5 text-orange-500" />
                        <div>
                          <strong>Day:</strong> Desert camping, sandboarding, nomad family visit
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Camera className="w-5 h-5 mt-0.5 text-orange-500" />
                        <div>
                          <strong>Evening:</strong> Star photography, traditional music around the fire
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="day30" className="space-y-6">
              <Card className="overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <Image
                      src="/placeholder.svg?height=400&width=600&text=Final+Day+Steppe"
                      alt="Final day on the steppe"
                      width={600}
                      height={400}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge variant="outline">Day 30</Badge>
                      <Badge className="bg-green-500">Farewell</Badge>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Last Ride on the Steppe</h3>
                    <div className="space-y-4 text-gray-600">
                      <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 mt-0.5 text-orange-500" />
                        <div>
                          <strong>Morning:</strong> Final horseback ride across endless grasslands
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Users className="w-5 h-5 mt-0.5 text-orange-500" />
                        <div>
                          <strong>Afternoon:</strong> Farewell ceremony with host family
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 mt-0.5 text-orange-500" />
                        <div>
                          <strong>Evening:</strong> Return to Ulaanbaatar, reflection on the journey
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Full Itinerary Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Complete 30-Day Journey</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every single day mapped out with detailed activities, locations, and insider tips
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-4">
            {days.map((day) => (
              <Card key={day} className="text-center p-4 hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="text-2xl font-bold text-orange-500 mb-2 group-hover:scale-110 transition-transform">
                  {day}
                </div>
                <div className="text-xs text-gray-500">
                  {day <= 5 && "Ulaanbaatar"}
                  {day > 5 && day <= 12 && "Central Mongolia"}
                  {day > 12 && day <= 22 && "Gobi Desert"}
                  {day > 22 && day <= 28 && "Western Mongolia"}
                  {day > 28 && "Return Journey"}
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-4 text-lg"
              onClick={handlePurchaseClick}
            >
              Unlock All 30 Days - $25
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What Travelers Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "This guide saved us months of planning. Every detail was perfect, from the nomad family stays to the
                hidden gems in the Gobi."
              </p>
              <div className="font-semibold">Sarah M.</div>
              <div className="text-sm text-gray-500">Adventure Photographer</div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Worth every penny! The GPS coordinates and local contacts made our trip seamless. We felt like we had a
                personal guide."
              </p>
              <div className="font-semibold">Mike & Jenny K.</div>
              <div className="text-sm text-gray-500">Travel Bloggers</div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "The cultural insights and practical tips were invaluable. This isn't just an itinerary, it's a complete
                travel companion."
              </p>
              <div className="font-semibold">David L.</div>
              <div className="text-sm text-gray-500">Documentary Filmmaker</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-amber-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Start Your Mongolia Adventure</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of travelers who've used this guide to create their own unforgettable Mongolia experience.
          </p>

          <div className="bg-white/10 backdrop-blur rounded-2xl p-8 mb-8">
            <div className="text-3xl font-bold text-white mb-2">Complete Package</div>
            <div className="text-orange-100 mb-4">Everything you need for 30 days in Mongolia</div>
            <div className="text-5xl font-bold text-white mb-4">$25</div>
            <div className="text-orange-100 text-sm">One-time payment • Instant access • Lifetime updates</div>
          </div>

          <Button
            size="lg"
            className="bg-white text-orange-500 hover:bg-gray-100 px-12 py-4 text-xl font-semibold"
            onClick={handlePurchaseClick}
          >
            Get Instant Access Now
          </Button>

          <div className="mt-6 text-orange-100 text-sm">
            30-day money-back guarantee • Secure payment • Instant download
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Mongolia Travel Guide</h3>
              <p className="text-gray-400">
                The most comprehensive day-by-day guide to exploring Mongolia's incredible landscapes and culture.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Sample Itinerary
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    What's Included
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Refund Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Contact Support
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Updates
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2025 Mongolia Travel Guide. All rights reserved. The Backpacker's Passport.   </p>
          </div>
        </div>
      </footer>

      {/* Checkout Modal - Demo Version */}
      <Dialog open={isCheckoutOpen} onOpenChange={setIsCheckoutOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <CreditCard className="w-5 h-5" />
              Get Your Mongolia Travel Guide
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-500 mb-2">$25.00</div>
              <p className="text-sm text-gray-600">Mongolia 30-Day Travel Guide</p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="demo-name">Full Name</Label>
                <Input id="demo-name" type="text" placeholder="Enter your full name" defaultValue="John Doe" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="demo-email">Email Address</Label>
                <Input
                  id="demo-email"
                  type="email"
                  placeholder="Enter your email"
                  defaultValue="john@example.com"
                  onChange={(e) => setCustomerEmail(e.target.value)}
                />
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border-2 border-dashed border-gray-300">
                <div className="text-center text-gray-500">
                  <CreditCard className="w-8 h-8 mx-auto mb-2" />
                  <p className="text-sm">Stripe Payment Form</p>
                  <p className="text-xs">Would appear here in production</p>
                </div>
              </div>
            </div>

            <Button
              onClick={() => handlePaymentSuccess("demo-token-123", customerEmail || "john@example.com")}
              className="w-full bg-orange-500 hover:bg-orange-600"
              size="lg"
            >
              Complete Purchase - $25
            </Button>

            <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
              <Shield className="w-4 h-4" />
              <span>Demo Mode - Click to simulate payment</span>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Success Modal */}
      <Dialog open={isSuccessOpen} onOpenChange={setIsSuccessOpen}>
        <DialogContent className="sm:max-w-md text-center">
          <DialogHeader>
            <div className="mx-auto mb-4">
              <CheckCircle className="w-16 h-16 text-green-500" />
            </div>
            <DialogTitle className="text-2xl">Payment Successful!</DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <p className="text-gray-600">Thank you for purchasing the Mongolia 30-Day Travel Guide!</p>

            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-center justify-center gap-2 text-green-700 mb-2">
                <Mail className="w-4 h-4" />
                <span className="font-medium">Confirmation sent to:</span>
              </div>
              <p className="text-green-800 font-medium">{customerEmail}</p>
            </div>

            <div className="space-y-3">
              <Button
                onClick={() => {
                  window.open(`/guide/access?token=${accessToken}`, "_blank")
                  setIsSuccessOpen(false)
                }}
                className="w-full bg-orange-500 hover:bg-orange-600"
                size="lg"
              >
                <Download className="w-4 h-4 mr-2" />
                Access Your Guide Now
              </Button>

              <p className="text-xs text-gray-500">You'll also receive a download link via email within 5 minutes</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
