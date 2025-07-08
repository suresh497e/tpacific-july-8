// import { Navigation } from "@/components/navigation"
// import { Footer } from "@/components/footer"
import Link from "next/link"

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* <Navigation /> */}

      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <span className="text-4xl mr-3">🍪</span>
            <h1 className="text-4xl md:text-5xl font-bold">Cookies Policy</h1>
          </div>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto stats-intro-text">
            Learn how we use cookies and similar technologies to enhance your browsing experience
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            {/* Last Updated */}
            <div className="mb-8 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
              <p className="text-sm text-blue-700 font-medium">
                <strong>Last Updated:</strong> June 16, 2025
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="text-gray-700 mb-8 text-lg leading-relaxed">
                This policy explains how Transpacific uses cookies and similar technologies on tpacific.co.nz.
              </div>

              {/* Section 1 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                    1
                  </span>
                  What Are Cookies?
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Cookies are small text files placed on your device to enable site functionality, analyze performance,
                  and support targeted advertising.
                </p>
              </div>

              {/* Section 2 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                    2
                  </span>
                  Types of Cookies We Use
                </h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-green-400 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Strictly Necessary</h3>
                    <p className="text-gray-700">Essential for basic site operations (e.g., login, shopping cart).</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Performance & Analytics</h3>
                    <p className="text-gray-700">Collect anonymized usage statistics (e.g., via Google Analytics).</p>
                  </div>
                  <div className="border-l-4 border-purple-400 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Functionality</h3>
                    <p className="text-gray-700">Remember preferences such as language, region.</p>
                  </div>
                  <div className="border-l-4 border-orange-400 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Marketing & Targeting</h3>
                    <p className="text-gray-700">Track browsing to deliver personalized advertising.</p>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                    3
                  </span>
                  Third-Party Cookies
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We use third-party services (e.g., Google, Facebook, analytics vendors) that may set cookies. These
                  are governed by those providers' privacy policies.
                </p>
              </div>

              {/* Section 4 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                    4
                  </span>
                  How to Control Cookies
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You can manage or disable cookies through your browser settings.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-4">
                  <h3 className="font-semibold text-gray-900 mb-3">For broad opt-outs:</h3>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="https://tools.google.com/dlpage/gaoptout"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline font-medium"
                      >
                        Google Analytics Opt-Out
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.networkadvertising.org/choices/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline font-medium"
                      >
                        Network Advertising Initiative
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                  <p className="text-yellow-800">
                    <strong>Note:</strong> Disabling cookies may affect website usability.
                  </p>
                </div>
              </div>

              {/* Section 5 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                    5
                  </span>
                  Updates
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We may revise this policy. Please review it periodically for any changes. Continued use implies
                  acceptance.
                </p>
              </div>

              {/* Contact Section */}
              <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Questions About Our Cookie Policy?</h3>
                <p className="text-gray-700 mb-4">
                  If you have any questions about how we use cookies, please contact us:
                </p>
                <div className="space-y-2">
                  <p className="text-gray-700">
                    <strong>Email:</strong>
                    <a href="mailto:info@tpacific.co.nz" className="text-blue-600 hover:text-blue-800 ml-2">
                      privacy@transpacific.in
                    </a>
                  </p>
                  <p className="text-gray-700">
                    <strong>Privacy Policy:</strong>
                    <Link href="/privacy" className="text-blue-600 hover:text-blue-800 ml-2">
                      View our Privacy Policy
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  )
}