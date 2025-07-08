import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="bg-muted/50 dark:bg-muted/20 border-t">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <img
                src="/images/transpacific-logo-new.png"
                alt="Transpacific Immigration Services"
                className="h-14 w-auto"
              />
            </Link>
            <p className="text-muted-foreground max-w-xs">
              Your trusted partner for global education and visa consultancy
              services since 2010.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/share/1EqsjVFMwt/"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://www.instagram.com/transpacific_india?igsh=Z3V2MTQ2bWc1ODNu"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://linkedin.com/in/transpacific-hyderabad-222627359"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-galano text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-3">
              <Link
                href="/"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/countries"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Study Destinations
              </Link>
              <Link
                href="/consultation"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Free Consultation
              </Link>
              <Link
                href="/contact"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </Link>
              {/* <Link
                href="/faqs"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                FAQs
              </Link> */}
              {/* <Link
                href="/blog"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Blog
              </Link> */}
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="font-galano text-lg font-semibold">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Hyderabad, India</p>
                  <p className="text-sm text-muted-foreground">
                    SRR complex 4th floor H-No-13-9-12 Opposite konark theatre
                    Lalitha Nagar Dilsukh nagar{" "}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <p>+64 2102312849</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a
                  href="mailto:info@tpacific.co.nz"
                  className="hover:text-primary transition-colors"
                >
                  info@tpacific.co.nz
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-galano text-lg font-semibold">Newsletter</h3>
            <p className="text-muted-foreground">
              Subscribe to receive updates on scholarships, visa changes, and
              more.
            </p>
            <div className="flex flex-col space-y-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-background"
              />
              <Button className="w-full">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Transpacific Immigration Services.
              All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                href="/privacy"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
