"use client"

import { useState } from "react"
import { Elements } from "@stripe/react-stripe-js"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { stripePromise } from "@/lib/stripe"
import CheckoutForm from "./checkout-form"
import { Loader2 } from "lucide-react"

interface CheckoutModalProps {
  isOpen: boolean
  onClose: () => void
  onSuccess: (accessToken: string, email: string) => void
}

export default function CheckoutModal({ isOpen, onClose, onSuccess }: CheckoutModalProps) {
  const [clientSecret, setClientSecret] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleOpenChange = async (open: boolean) => {
    if (open && !clientSecret) {
      setIsLoading(true)
      try {
        // Create payment intent when modal opens
        const response = await fetch("/api/create-payment-intent", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: "", // Will be filled in the form
            name: "",
          }),
        })

        const data = await response.json()
        setClientSecret(data.clientSecret)
      } catch (error) {
        console.error("Error creating payment intent:", error)
      } finally {
        setIsLoading(false)
      }
    } else if (!open) {
      onClose()
    }
  }

  const stripeOptions = {
    clientSecret: clientSecret || "",
    appearance: {
      theme: "stripe" as const,
      variables: {
        colorPrimary: "#f97316", // Orange color
      },
    },
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Get Your Mongolia Travel Guide</DialogTitle>
        </DialogHeader>

        {isLoading ? (
          <div className="flex items-center justify-center py-8">
            <Loader2 className="w-8 h-8 animate-spin text-orange-500" />
            <span className="ml-2">Setting up secure checkout...</span>
          </div>
        ) : clientSecret ? (
          <Elements stripe={stripePromise} options={stripeOptions}>
            <CheckoutForm onSuccess={onSuccess} />
          </Elements>
        ) : (
          <div className="text-center py-8 text-red-600">Failed to initialize checkout. Please try again.</div>
        )}
      </DialogContent>
    </Dialog>
  )
}
