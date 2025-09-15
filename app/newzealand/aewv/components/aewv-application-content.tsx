import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, Building, Globe, FileText, Shield } from "lucide-react"

export function AEWVApplicationContent() {
  return (
    <div className="py-16">
      {/* Why Accreditation Matters */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Why Accreditation Matters</h2>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
            <p className="text-blue-800">
              <strong>From July 2022</strong>, New Zealand employers must be accredited to hire migrant workers on AEWV.
              Without accreditation, you cannot:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-red-200">
              <CardContent className="p-6">
                <div className="text-red-500 mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Sponsor Overseas Workers</h3>
                <p className="text-slate-600">Cannot bring skilled workers from overseas to fill roles.</p>
              </CardContent>
            </Card>

            <Card className="border-red-200">
              <CardContent className="p-6">
                <div className="text-red-500 mb-4">
                  <FileText className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Apply for Job Checks</h3>
                <p className="text-slate-600">Cannot submit job check applications for migrant positions.</p>
              </CardContent>
            </Card>

            <Card className="border-red-200">
              <CardContent className="p-6">
                <div className="text-red-500 mb-4">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Support Employee Visas</h3>
                <p className="text-slate-600">Cannot support employees in their visa applications.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Types of Accreditation */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Types of Accreditation</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="text-blue-500 mb-4">
                    <Building className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Standard Accreditation</h3>
                  <p className="text-slate-600 mb-4">For up to 5 AEWV workers.</p>
                  <div className="text-sm text-slate-500">
                    Ideal for small to medium businesses with limited migrant worker needs.
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="text-purple-500 mb-4">
                    <Users className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">High-Volume Accreditation</h3>
                  <p className="text-slate-600 mb-4">For 6 or more workers.</p>
                  <div className="text-sm text-slate-500">
                    Perfect for larger businesses with significant workforce requirements.
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="text-purple-500 mb-4">
                    <Globe className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Franchisee / Triangular</h3>
                  <p className="text-slate-600 mb-4">For businesses placing workers with third parties.</p>
                  <div className="text-sm text-slate-500">
                    Specialized for recruitment agencies and franchisee operations.
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Application Requirements */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">What the Application Requires</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">To gain accreditation, employers must:</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3" />
                  <p className="text-slate-700">Prove they are a genuine, financially sustainable business</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3" />
                  <p className="text-slate-700">Meet all employment law obligations (contracts, payroll, holidays)</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3" />
                  <p className="text-slate-700">Commit to settlement support for migrant workers</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3" />
                  <p className="text-slate-700">Not have recent history of immigration or employment law breaches</p>
                </div>
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">How Transpacific Helps</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <p className="text-slate-700">Eligibility Check</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <p className="text-slate-700">Step-by-Step Guidance</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <p className="text-slate-700">Compliance Setup</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <p className="text-slate-700">Application Submission</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <p className="text-slate-700">Future Planning</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-slate-900 mb-2">Who needs to apply for AEWV accreditation?</h3>
                  <p className="text-slate-700">Any NZ employer who wants to hire migrant workers.</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-slate-900 mb-2">How long is accreditation valid?</h3>
                  <p className="text-slate-700">
                    Initial accreditation is valid for 12 months. Renewals can extend up to 24 months.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-slate-900 mb-2">Can small businesses apply?</h3>
                  <p className="text-slate-700">
                    Yes. Even if you want to hire just one migrant worker, accreditation is mandatory.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-slate-900 mb-2">How long does the process take?</h3>
                  <p className="text-slate-700">
                    Processing times vary, but with the right documents prepared, approval can be fast.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-slate-900 mb-2">Can Transpacific help after accreditation?</h3>
                  <p className="text-slate-700">Yes — we also manage job checks and migrant visa support.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Globe className="h-16 w-16 text-primary-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Start Hiring Global Talent with Confidence</h2>
            <p className="text-xl text-slate-300 mb-8">
              Get your AEWV accreditation and unlock access to skilled workers worldwide.
            </p>
            <Button size="lg" className="bg-primary text-white">
              Apply for Accreditation with Transpacific
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
