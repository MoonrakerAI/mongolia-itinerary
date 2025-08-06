import { type NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
})

export async function POST(request: NextRequest) {
  try {
    const { paymentIntentId } = await request.json()

    // Retrieve the payment intent to verify it was successful
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId)

    if (paymentIntent.status === "succeeded") {
      // Here you would typically:
      // 1. Store the purchase in your database
      // 2. Send confirmation email
      // 3. Generate access token

      return NextResponse.json({
        success: true,
        customer_email: paymentIntent.metadata.customer_email,
        access_token: generateAccessToken(paymentIntent.id), // You'll implement this
      })
    } else {
      return NextResponse.json({ error: "Payment not completed" }, { status: 400 })
    }
  } catch (error) {
    console.error("Error verifying payment:", error)
    return NextResponse.json({ error: "Failed to verify payment" }, { status: 500 })
  }
}

// Simple access token generation (in production, use a proper JWT library)
function generateAccessToken(paymentIntentId: string): string {
  return Buffer.from(`${paymentIntentId}-${Date.now()}`).toString("base64")
}
