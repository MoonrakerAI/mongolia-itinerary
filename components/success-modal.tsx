"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { CheckCircle, Download, Mail } from "lucide-react"

interface SuccessModalProps {
  isOpen: boolean
  onClose: () => void
  email: string
  accessToken: string
}

export default function SuccessModal({ isOpen, onClose, email, accessToken }: SuccessModalProps) {
  const handleDownload = () => {
    // In a real app, this would download the guide or redirect to the protected content
    window.open("/guide/access?token=" + accessToken, "_blank")
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
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
            <p className="text-green-800 font-medium">{email}</p>
          </div>

          <div className="space-y-3">
            <Button onClick={handleDownload} className="w-full bg-orange-500 hover:bg-orange-600" size="lg">
              <Download className="w-4 h-4 mr-2" />
              Access Your Guide Now
            </Button>

            <p className="text-xs text-gray-500">You'll also receive a download link via email within 5 minutes</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
