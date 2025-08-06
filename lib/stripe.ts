import { loadStripe } from "@stripe/stripe-js"

export const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

export const PRODUCT_PRICE = 2500 // $25.00 in cents
export const PRODUCT_NAME = "Mongolia 30-Day Travel Guide"
export const PRODUCT_DESCRIPTION =
  "Complete day-by-day itinerary with 200+ photos, videos, GPS coordinates, and insider tips"
