import type { Metadata } from "next"
import { withMetadataValidation } from "@/lib/metadata-utils"

export const metadata: Metadata = withMetadataValidation({
  title: "Terms of Service",
  description: "Legal terms",
  keywords: ['terms', 'legal', 'conditions'],
  openGraph: {
    title: "Terms of Service",
    description: "Legal terms",
  },
  twitter: {
    title: "Terms of Service",
    description: "Legal terms",
  }
})

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">📋 Terms of Service</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto stats-intro-text">
            Legal terms and conditions governing your use of our website and services
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-8">
                <strong>Last Updated:</strong> June 16, 2025
              </p>

              <p className="text-lg text-gray-700 mb-8">
                These Terms govern your use of tpacific.co.nz ("Site") and all related services offered by Transpacific
                Private Limited.
              </p>

              {/* Section 1 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-700">
                  By accessing or using our Site and services, you agree to these Terms. If you do not agree, please
                  refrain from using the Site.
                </p>
              </div>

              {/* Section 2 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Company Information</h2>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2">
                    <strong>Transpacific Private Limited</strong>
                  </p>
                  <p className="text-gray-700 mb-2">Registered in India under CIN: UXXXXXXXXXX</p>
                  <p className="text-gray-700">Registered Office: [full address], Hyderabad, Telangana, India</p>
                </div>
              </div>

              {/* Section 3 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Eligibility & Accounts</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>You must be 16 or older (or legal age in your jurisdiction) to use the Site.</li>
                  <li>You agree to provide accurate information when registering or ordering.</li>
                  <li>
                    You are responsible for safeguarding your account credentials and all activity under your account.
                  </li>
                </ul>
              </div>

              {/* Section 4 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Ordering & Payment</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Pricing is as listed at the time of purchase.</li>
                  <li>Payments may include applicable GST or other taxes.</li>
                  <li>We accept [list payment methods: credit/debit cards, UPI, net banking, etc.].</li>
                </ul>
              </div>

              {/* Section 5 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Shipping, Returns & Cancellations</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Orders will be shipped to the address you provide.</li>
                  <li>
                    Any cancellations or returns are subject to our separate Shipping & Returns Policy, which aligns
                    with Indian consumer protection laws.
                  </li>
                  <li>
                    Contact:{" "}
                    <a href="mailto:support@transpacific.in" className="text-blue-600 hover:text-blue-800">
                      support@transpacific.in
                    </a>{" "}
                    for requests or questions.
                  </li>
                </ul>
              </div>

              {/* Section 6 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Intellectual Property Rights</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>All content—text, images, designs, logos—is owned or licensed by Transpacific.</li>
                  <li>
                    You may view or download content for personal use only. Copying, redistribution, or creating
                    derivative works is prohibited without permission.
                  </li>
                </ul>
              </div>

              {/* Section 7 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. User‑Generated Content</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    By submitting content (reviews, comments, etc.), you grant Transpacific a royalty‑free, worldwide,
                    perpetual license to use, modify, transmit, and display that content.
                  </li>
                  <li>
                    You represent that you own or have permission to post such content and that it does not violate
                    third-party rights.
                  </li>
                </ul>
              </div>

              {/* Section 8 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Prohibited Conduct</h2>
                <p className="text-gray-700 mb-3">You agree not to:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Use the Site for illegal or unauthorized purposes.</li>
                  <li>Hack, reverse engineer, or breach security.</li>
                  <li>Transmit viruses, malware, or harmful code.</li>
                  <li>Infringe upon any intellectual property or privacy rights.</li>
                </ul>
              </div>

              {/* Section 9 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Disclaimers and Warranty</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    The Site and services are provided on an "AS IS" and "AS AVAILABLE" basis with no warranties—whether
                    express or implied.
                  </li>
                  <li>We do not guarantee uninterrupted, accurate, or secure service.</li>
                </ul>
              </div>

              {/* Section 10 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Limitation of Liability</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    To the maximal extent permitted under applicable law, Transpacific (and its directors, employees,
                    affiliates) is not liable for any indirect, incidental, special, or consequential damages.
                  </li>
                  <li>
                    Our total liability for direct damages is capped at the amount paid by you in the past 12 months
                    under these Terms.
                  </li>
                </ul>
              </div>

              {/* Section 11 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Indemnification</h2>
                <p className="text-gray-700 mb-3">
                  You agree to defend and hold harmless Transpacific from any claims, damages, liabilities, or expenses
                  resulting from:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Violations of these Terms,</li>
                  <li>Use of the Site,</li>
                  <li>User-generated content you submit.</li>
                </ul>
              </div>

              {/* Section 12 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Governing Law & Jurisdiction</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>These Terms are governed by the laws of India.</li>
                  <li>
                    Disputes shall be subject to the exclusive jurisdiction of the courts in Hyderabad, Telangana,
                    India.
                  </li>
                </ul>
              </div>

              {/* Section 13 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Changes to Terms</h2>
                <p className="text-gray-700">
                  Transpacific may modify these Terms at any time. Changes will be effective upon posting. Your
                  continued use after such changes constitutes acceptance. We'll notify significant changes via email or
                  site notifications.
                </p>
              </div>

              {/* Section 14 - Contact */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Contact Us</h2>
                <p className="text-gray-700 mb-4">For questions about these Terms, please reach out at:</p>
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <p className="text-gray-700 mb-2">
                    <strong>Transpacific Private Limited</strong>
                  </p>
                  <p className="text-gray-700 mb-2">
                    Email:{" "}
                    <a href="mailto:info@tpacific.co.nz" className="text-blue-600 hover:text-blue-800">
                      legal@transpacific.in
                    </a>
                  </p>
                  <p className="text-gray-700">
                    Phone:{" "}
                    <a href="tel:+91-XXX-XXX-XXXX" className="text-blue-600 hover:text-blue-800">
                      +91‑XXX‑XXX‑XXXX
                    </a>
                  </p>
                </div>
              </div>

              {/* Footer Note */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-500 text-center">
                  This Terms of Service is effective as of June 16, 2025. Please review these terms regularly as they
                  may be updated from time to time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}