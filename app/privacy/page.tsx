import type { Metadata } from "next"
import { withMetadataValidation } from "@/lib/metadata-utils"

export const metadata: Metadata = withMetadataValidation({
  title: "Privacy Policy",
  description: "Data protection",
  keywords: ['privacy', 'data', 'protection'],
  openGraph: {
    title: "Privacy Policy",
    description: "Data protection",
  },
  twitter: {
    title: "Privacy Policy",
    description: "Data protection",
  }
})

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-blue-100 stats-intro-text">
              Your privacy is important to us. Learn how we protect your personal data.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              {/* Header */}
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">🌐</span>
                  <h2 className="text-3xl font-bold text-gray-900">Privacy Policy</h2>
                </div>
                <p className="text-gray-600 font-medium">Last Updated: June 16, 2025</p>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  Transpacific Private Limited ("Transpacific", "we", "us", "our") respects your privacy and is
                  committed to protecting your personal data. This policy explains how we collect, use, share, and
                  retain information when you visit tpacific.co.nz (the "Site") or use our services.
                </p>
              </div>

              {/* Section 1 */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Personal Data We Collect</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Information You Provide:</h4>
                    <p className="text-gray-700 leading-relaxed">
                      name, email, contact number, postal address, payment details when you sign up, make purchases,
                      fill forms, or contact us.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Automatically Collected Data:</h4>
                    <p className="text-gray-700 leading-relaxed">
                      IP address, device/browser type, pages viewed, timestamps, referral source, clickstream.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Tracking & Analytics:</h4>
                    <p className="text-gray-700 leading-relaxed">
                      through cookies, web beacons, and similar technologies (detailed in our Cookies Policy).
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 2 */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Purposes of Processing</h3>
                <p className="text-gray-700 mb-4">We use your data to:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Provide, manage, and enhance our products and services.</li>
                  <li>Process payments and manage orders.</li>
                  <li>
                    Communicate updates, promotional materials, and service notices (with your consent where required).
                  </li>
                  <li>Personalize content and UX.</li>
                  <li>Analyze performance, maintain security, and detect fraud.</li>
                  <li>Meet legal, fiscal, or regulatory obligations.</li>
                </ul>
              </div>

              {/* Section 3 */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Lawful Bases for Processing</h3>
                <p className="text-gray-700 mb-4">
                  Under applicable laws (e.g., Indian IT Act 2000 and rules; GDPR for EU users; CCPA for Californians),
                  our bases include:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Performance of contract (e.g., processing orders),</li>
                  <li>Compliance with legal obligations,</li>
                  <li>Legitimate interests (operational, security, analytics),</li>
                  <li>Consent (for marketing and non-essential cookies).</li>
                </ul>
              </div>

              {/* Section 4 */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Disclosure of Your Data</h3>
                <p className="text-gray-700 mb-4">We may share your information with:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>
                    <strong>Service Providers:</strong> payment gateways, hosting, email platforms, analytics.
                  </li>
                  <li>
                    <strong>Legal Authorities:</strong> when required by law or to protect rights.
                  </li>
                  <li>
                    <strong>Corporate Transactions:</strong> in connection with a merger, acquisition, or sale.
                  </li>
                  <li>
                    <strong>Affiliates/Partners:</strong> with your consent or as needed to fulfill services.
                  </li>
                </ul>
              </div>

              {/* Section 5 */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">5. International Transfers</h3>
                <p className="text-gray-700 leading-relaxed">
                  Your data may be hosted or processed outside India. We ensure adequate protection through mechanisms
                  like Standard Contractual Clauses or other recognized safeguards.
                </p>
              </div>

              {/* Section 6 */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">6. Data Retention</h3>
                <p className="text-gray-700 leading-relaxed">
                  We retain data only as long as needed for business, legal, tax, or regulatory purposes.
                </p>
              </div>

              {/* Section 7 */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">7. Security Measures</h3>
                <p className="text-gray-700 leading-relaxed">
                  We implement technical and organizational safeguards (e.g., encryption, secured servers) to protect
                  personal data. No system is fully secure, but we continuously work to strengthen protection.
                </p>
              </div>

              {/* Section 8 */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">8. Your Rights</h3>
                <p className="text-gray-700 mb-4">Depending on jurisdiction, you may have the right to:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Access, correct, delete, or port your data;</li>
                  <li>Withdraw consent;</li>
                  <li>Object to or restrict processing;</li>
                  <li>
                    Lodge a complaint with a supervisory authority (e.g., Indian Data Protection Authority, GDPR
                    authorities).
                  </li>
                </ul>
                <p className="text-gray-700 mt-4">
                  To exercise these rights or for data-related requests, contact us at:{" "}
                  <a href="mailto:privacy@transpacific.in" className="text-blue-600 hover:text-blue-800 font-medium">
                    privacy@transpacific.in
                  </a>{" "}
                  or at our office.
                </p>
              </div>

              {/* Section 9 */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">9. Children's Privacy</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our services are not meant for children under 16. We do not knowingly collect personal data from
                  minors.
                </p>
              </div>

              {/* Section 10 */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">10. Updates</h3>
                <p className="text-gray-700 leading-relaxed">
                  We may update this policy periodically. The "Last Updated" date will reflect changes, and significant
                  changes may be notified directly or via prominent website notices.
                </p>
              </div>

              {/* Section 11 - Contact Information */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Information</h3>
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Transpacific Private Limited</h4>
                  <div className="space-y-2 text-gray-700">
                    <p>
                      <strong>Registered Office:</strong> SRR Complex, 4th Floor, H-No-13-9-12, Opposite Konark Theatre,
                      Lalitha Nagar, Dilsukhnagar, Hyderabad - 500060, Telangana, India
                    </p>
                    <p>
                      <strong>Email:</strong>{" "}
                      <a href="mailto:privacy@transpacific.in" className="text-blue-600 hover:text-blue-800">
                        privacy@transpacific.in
                      </a>
                    </p>
                    <p>
                      <strong>Phone:</strong>{" "}
                      <a href="tel:+919105491054" className="text-blue-600 hover:text-blue-800">
                        +91-91054-91054
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer Note */}
              <div className="border-t pt-6 mt-8">
                <p className="text-sm text-gray-600 text-center">
                  This privacy policy is effective as of the date mentioned above and applies to all users of our
                  website and services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}