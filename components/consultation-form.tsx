"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle } from "lucide-react"
import { Progress } from "@/components/ui/progress"

// Applying Miller's Law - Breaking form into manageable steps
const formSteps = [
  {
    title: "Personal Information",
    fields: ["firstName", "lastName", "email", "phone"],
  },
  {
    title: "Study Preferences",
    fields: ["country", "studyLevel", "startDate"],
  },
  {
    title: "Additional Details",
    fields: ["message"],
  },
]

export default function ConsultationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    studyLevel: "",
    startDate: "",
    message: "",
  })

  // Applying Zeigarnik Effect - Progress tracking
  const progress = ((currentStep + 1) / formSteps.length) * 100

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSelectChange = (id: string, value: string) => {
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleNextStep = () => {
    if (currentStep < formSteps.length - 1) {
      setCurrentStep((prev) => prev + 1)
    }
  }

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-8 space-y-4">
        <div className="h-16 w-16 rounded-full bg-primary-foreground flex items-center justify-center">
          <CheckCircle className="h-8 w-8 text-primary" />
        </div>
        <h3 className="font-galano text-2xl font-semibold">Thank You!</h3>
        <p className="text-primary-foreground/90 max-w-md">
          Your consultation request has been received. One of our education experts will contact you within 24 hours to
          schedule your free consultation.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h3 className="font-galano text-2xl font-semibold text-center">Request a Free Consultation</h3>

      {/* Applying Zeigarnik Effect - Visual progress indicator */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>
            Step {currentStep + 1} of {formSteps.length}
          </span>
          <span>{formSteps[currentStep].title}</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Step 1: Personal Information */}
      {currentStep === 0 && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                placeholder="Enter your first name"
                required
                value={formData.firstName}
                onChange={handleInputChange}
                className="bg-primary-foreground/5 border-primary-foreground/20 placeholder:text-primary-foreground/50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                placeholder="Enter your last name"
                required
                value={formData.lastName}
                onChange={handleInputChange}
                className="bg-primary-foreground/5 border-primary-foreground/20 placeholder:text-primary-foreground/50"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email address"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="bg-primary-foreground/5 border-primary-foreground/20 placeholder:text-primary-foreground/50"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              placeholder="Enter your phone number"
              required
              value={formData.phone}
              onChange={handleInputChange}
              className="bg-primary-foreground/5 border-primary-foreground/20 placeholder:text-primary-foreground/50"
            />
          </div>
        </div>
      )}

      {/* Step 2: Study Preferences */}
      {currentStep === 1 && (
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="country">Preferred Study Destination</Label>
            <Select value={formData.country} onValueChange={(value) => handleSelectChange("country", value)}>
              <SelectTrigger className="bg-primary-foreground/5 border-primary-foreground/20">
                <SelectValue placeholder="Select a country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="new-zealand">New Zealand</SelectItem>
                <SelectItem value="australia">Australia</SelectItem>
                <SelectItem value="canada">Canada</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="usa">United States</SelectItem>
                <SelectItem value="ireland">Ireland</SelectItem>
                <SelectItem value="not-sure">Not Sure Yet</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="studyLevel">Study Level</Label>
            <Select value={formData.studyLevel} onValueChange={(value) => handleSelectChange("studyLevel", value)}>
              <SelectTrigger className="bg-primary-foreground/5 border-primary-foreground/20">
                <SelectValue placeholder="Select study level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="undergraduate">Undergraduate</SelectItem>
                <SelectItem value="postgraduate">Postgraduate</SelectItem>
                <SelectItem value="phd">PhD</SelectItem>
                <SelectItem value="diploma">Diploma</SelectItem>
                <SelectItem value="not-sure">Not Sure Yet</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="startDate">Preferred Start Date</Label>
            <Select value={formData.startDate} onValueChange={(value) => handleSelectChange("startDate", value)}>
              <SelectTrigger className="bg-primary-foreground/5 border-primary-foreground/20">
                <SelectValue placeholder="Select start date" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="asap">As Soon As Possible</SelectItem>
                <SelectItem value="3-months">Within 3 Months</SelectItem>
                <SelectItem value="6-months">Within 6 Months</SelectItem>
                <SelectItem value="next-year">Next Year</SelectItem>
                <SelectItem value="not-sure">Not Sure Yet</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      )}

      {/* Step 3: Additional Information */}
      {currentStep === 2 && (
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="message">Additional Information</Label>
            <Textarea
              id="message"
              placeholder="Tell us about your education background and goals"
              className="bg-primary-foreground/5 border-primary-foreground/20 placeholder:text-primary-foreground/50"
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
            />
          </div>
        </div>
      )}

      {/* Navigation buttons - Applying Fitts's Law with proper sizing and spacing */}
      <div className="flex justify-between pt-4">
        {currentStep > 0 ? (
          <Button type="button" variant="outline" onClick={handlePrevStep} className="min-w-[100px]">
            Back
          </Button>
        ) : (
          <div></div> // Empty div for spacing
        )}

        {currentStep < formSteps.length - 1 ? (
          <Button type="button" onClick={handleNextStep} className="min-w-[100px]">
            Next
          </Button>
        ) : (
          <Button type="submit" className="min-w-[100px]" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        )}
      </div>

      <p className="text-xs text-center text-primary-foreground/70">
        By submitting this form, you agree to our privacy policy and terms of service.
      </p>
    </form>
  )
}
