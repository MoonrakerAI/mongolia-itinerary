"use client"

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, MapPin, Calendar, Camera, FileText, Lock, CheckCircle } from "lucide-react"

export default function GuideAccess() {
  const searchParams = useSearchParams()
  const token = searchParams.get("token")
  const [isValidToken, setIsValidToken] = useState<boolean | null>(null)

  useEffect(() => {
    // In a real app, you'd verify the token with your backend
    if (token) {
      setIsValidToken(true) // Simplified for demo
    } else {
      setIsValidToken(false)
    }
  }, [token])

  if (isValidToken === null) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p>Verifying access...</p>
        </div>
      </div>
    )
  }

  if (!isValidToken) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Card className="max-w-md">
          <CardContent className="text-center p-8">
            <Lock className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
            <p className="text-gray-600 mb-6">
              Invalid or expired access token. Please check your email for the correct link or contact support.
            </p>
            <Button onClick={() => (window.location.href = "/")}>Return to Home</Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <CheckCircle className="w-8 h-8 text-green-500" />
            <Badge className="bg-green-500 text-white">Access Granted</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Welcome to Your Mongolia Guide!</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your complete 30-day Mongolia travel guide is now available. Download everything you need for your
            adventure.
          </p>
        </div>

        {/* Download Options */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <FileText className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="font-bold mb-2">Complete Guide PDF</h3>
            <p className="text-sm text-gray-600 mb-4">Full 150-page guide with all 30 days</p>
            <Button className="w-full bg-orange-500 hover:bg-orange-600">
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <Camera className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="font-bold mb-2">Photo Gallery</h3>
            <p className="text-sm text-gray-600 mb-4">200+ high-resolution photos</p>
            <Button className="w-full bg-orange-500 hover:bg-orange-600">
              <Download className="w-4 h-4 mr-2" />
              Download Photos
            </Button>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <MapPin className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="font-bold mb-2">GPS Coordinates</h3>
            <p className="text-sm text-gray-600 mb-4">All locations with exact coordinates</p>
            <Button className="w-full bg-orange-500 hover:bg-orange-600">
              <Download className="w-4 h-4 mr-2" />
              Download GPX
            </Button>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <Calendar className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="font-bold mb-2">Planning Tools</h3>
            <p className="text-sm text-gray-600 mb-4">Checklists, budgets, and templates</p>
            <Button className="w-full bg-orange-500 hover:bg-orange-600">
              <Download className="w-4 h-4 mr-2" />
              Download Tools
            </Button>
          </Card>
        </div>

        {/* Quick Access to Days */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Quick Access - All 30 Days</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
              {Array.from({ length: 30 }, (_, i) => i + 1).map((day) => (
                <Button
                  key={day}
                  variant="outline"
                  size="sm"
                  className="hover:bg-orange-500 hover:text-white bg-transparent"
                >
                  Day {day}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Support Info */}
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-6">
            <h3 className="font-bold mb-2">Need Help?</h3>
            <p className="text-gray-600 mb-4">
              If you have any questions about your Mongolia guide or need assistance planning your trip, I'm here to
              help!
            </p>
            <Button variant="outline">Contact Support</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
