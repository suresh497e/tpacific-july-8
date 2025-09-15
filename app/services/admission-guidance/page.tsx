import { ServiceHero } from "@/components/service-hero";
import { ServiceContent } from "@/components/service-content";
import { CTASection } from "@/components/cta-section";

export default function AdmissionGuidancePage() {
 

  const content = `Every university has specific admission criteria, deadlines, and documentation processes. We provide students with a clear roadmap covering entrance exam requirements, minimum academic percentages, timelines for applications, and institution-specific guidelines.

Our detailed checklists for SOPs, resumes, transcripts, and recommendation letters ensure students' applications are complete, accurate, and competitive.

Our admission guidance includes:
• Application strategy development
• Document preparation checklists
• SOP and essay writing support
• Resume and CV optimization
• Recommendation letter guidance
• Interview preparation
• Application tracking and follow-up`;

  return (
    <div className="min-h-screen bg-background">
      <ServiceHero
        title="Admission Guidance"
        description="Comprehensive support to ensure your university applications are complete, competitive, and successful."
        ctaText="Get Admission Support"
        ctaLink="/contact"
        imageSrc="/university-admission-guidance.jpg"
        imageAlt="Admission guidance session"
      />
      <ServiceContent content={content} />
      <CTASection />
    </div>
  );
}
