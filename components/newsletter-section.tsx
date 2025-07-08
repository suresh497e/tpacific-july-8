import { Button } from "@/components/ui/button"

export default function NewsletterSection() {
  return (
    <div className="bg-blue-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600 mb-8">
            Stay updated with the latest immigration news, visa changes, and educational opportunities
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <Button type="submit" className="whitespace-nowrap">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
