// "use client"

// import { useState, useEffect } from "react"
// import Link from "next/link"
// import Image from "next/image"
// import { usePathname } from "next/navigation"
// import { Menu, X, ChevronDown, Globe, GraduationCap, Phone, FileText } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { ModeToggle } from "@/components/mode-toggle"
// import { cn } from "@/lib/utils"
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// // Applying Hick's Law - Organizing navigation into clear categories
// const routes = [
//   { name: "Home", path: "/", },
//   {
//     name: "Study Destinations",
//     path: "/countries",
//     //icon: <Globe className="h-4 w-4" />,
//     dropdown: true,
//     items: [
//       { name: "New Zealand", path: "/countries/new-zealand" },
//       { name: "Australia", path: "/countries/australia" },
//       { name: "Canada", path: "/countries/canada" },
//       { name: "United Kingdom", path: "/countries/united-kingdom" },
//       { name: "United States", path: "/countries/united-states" },
//       { name: "Ireland", path: "/countries/ireland" },
//     ],
//   },
//   // {
//   //   name: "Services",
//   //   path: "/services",
//   //  // icon: <GraduationCap className="h-4 w-4" />,
//   //   dropdown: true,
//   //   items: [
//   //     { name: "University Applications", path: "/services/university-applications" },
//   //     { name: "Visa Assistance", path: "/services/visa-assistance" },
//   //     { name: "IELTS Preparation", path: "/services/ielts-preparation" },
//   //     { name: "Accommodation", path: "/services/accommodation" },
//   //     { name: "Career Guidance", path: "/services/career-guidance" },
//   //   ],
//   // },
//   { name: "About", path: "/about",   },
//   { name: "Contact", path: "/contact",  },
// ]

// export default function Navigation() {
//   const [isOpen, setIsOpen] = useState(false)
//   const [scrolled, setScrolled] = useState(false)
//   const pathname = usePathname()

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10)
//     }

//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   // Applying Doherty Threshold - Close mobile menu when route changes
//   useEffect(() => {
//     setIsOpen(false)
//   }, [pathname])

//   return (
//     <header
//       className={cn(
//         "sticky top-0 z-50 w-full transition-all duration-200",
//         scrolled ? "bg-background/95 backdrop-blur-md border-b shadow-sm" : "bg-transparent",
//       )}
//     >
//       <div className="container-custom">
//         <div className="flex h-20 items-center justify-between">
//           <div className="flex items-center">
//             <Link href="/" className="flex items-center space-x-2">
//               <Image
//                 src="/bluelogo.png"
//                 alt="Transpacific Immigration Services"
//                 width={180}
//                 height={48}
//                 priority
//                 className="h-12 md:h-28 w-auto"
//                 unoptimized
//               />
//             </Link>
//           </div>

//           {/* Desktop Navigation - Applying Law of Proximity by grouping related items */}
//           <nav className="hidden md:flex items-center space-x-8">
//             {routes.map((route) =>
//               route.dropdown ? (
//                 <DropdownMenu key={route.path}>
//                   <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary">
//                     <span className="flex items-center gap-1.5">
//                       {route.icon}
//                       {route.name}
//                     </span>
//                     <ChevronDown className="h-4 w-4" />
//                   </DropdownMenuTrigger>
//                   <DropdownMenuContent align="center" className="w-56">
//                     {route.items?.map((item) => (
//                       <DropdownMenuItem key={item.path} asChild>
//                         <Link
//                           href={item.path}
//                           className={cn(
//                             "w-full cursor-pointer p-2",
//                             pathname === item.path ? "font-semibold text-primary" : "",
//                           )}
//                         >
//                           {item.name}
//                         </Link>
//                       </DropdownMenuItem>
//                     ))}
//                   </DropdownMenuContent>
//                 </DropdownMenu>
//               ) : (
//                 <Link
//                   key={route.path}
//                   href={route.path}
//                   className={cn(
//                     "text-sm font-medium transition-colors hover:text-primary flex items-center gap-1.5",
//                     pathname === route.path ? "text-primary font-semibold" : "text-foreground/80",
//                   )}
//                 >
//                   {route.icon}
//                   {route.name}
//                 </Link>
//               ),
//             )}
//           </nav>

//           {/* Applying Fitts's Law - Important CTA is prominent */}
//           <div className="hidden md:flex items-center space-x-4">
//             <ModeToggle />
//             <Button asChild size="lg" className="px-6">
//               <Link href="/contact">Free Consultation</Link>
//             </Button>
//           </div>

//           {/* Mobile Navigation Toggle - Applying Fitts's Law with larger touch target */}
//           <div className="flex md:hidden items-center space-x-4">
//             <ModeToggle />
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="inline-flex items-center justify-center rounded-md p-3 text-foreground hover:bg-accent hover:text-accent-foreground"
//               aria-label="Toggle menu"
//             >
//               {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation Menu - Applying Law of Proximity by grouping related items */}
//       {isOpen && (
//         <div className="md:hidden">
//           <div className="container-custom py-4 pb-8 space-y-4 bg-background">
//             {routes.map((route) =>
//               route.dropdown ? (
//                 <div key={route.path} className="space-y-2">
//                   <div className="font-medium py-3 flex items-center gap-2">
//                     {route.icon}
//                     {route.name}
//                   </div>
//                   <div className="pl-4 border-l-2 border-muted space-y-3">
//                     {route.items?.map((item) => (
//                       <Link
//                         key={item.path}
//                         href={item.path}
//                         onClick={() => setIsOpen(false)}
//                         className={cn(
//                           "block py-2 text-base transition-colors hover:text-primary",
//                           pathname === item.path ? "text-primary font-semibold" : "text-foreground/80",
//                         )}
//                       >
//                         {item.name}
//                       </Link>
//                     ))}
//                   </div>
//                 </div>
//               ) : (
//                 <Link
//                   key={route.path}
//                   href={route.path}
//                   onClick={() => setIsOpen(false)}
//                   className={cn(
//                     "block py-3 text-base font-medium transition-colors hover:text-primary flex items-center gap-2",
//                     pathname === route.path ? "text-primary font-semibold" : "text-foreground/80",
//                   )}
//                 >
//                   {route.icon}
//                   {route.name}
//                 </Link>
//               ),
//             )}
//             <Button asChild className="w-full mt-4">
//               <Link href="/contact">Free Consultation</Link>
//             </Button>
//           </div>
//         </div>
//       )}
//     </header>
//   )
// }










//new version logo and menu swap in mobile

"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const routes = [
  { name: "Home", path: "/" },
  {
    name: "Study Destinations",
    path: "/countries",
    dropdown: true,
    items: [
      { name: "New Zealand", path: "/countries/new-zealand" },
      { name: "Australia", path: "/countries/australia" },
      { name: "Canada", path: "/countries/canada" },
      { name: "United Kingdom", path: "/countries/united-kingdom" },
      { name: "United States", path: "/countries/united-states" },
      { name: "Ireland", path: "/countries/ireland" },
    ],
  },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container-custom">
        <div className="flex h-20 items-center justify-between">
          {/* Desktop View: Logo left, nav center, cta right (unchanged) */}
          <div className="hidden md:flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/bluelogo.png"
                alt="Transpacific Immigration Services"
                width={180}
                height={48}
                priority
                className="h-12 md:h-28 w-auto"
                unoptimized
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {routes.map((route) =>
              route.dropdown ? (
                <DropdownMenu key={route.path}>
                  <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary">
                    <span className="flex items-center gap-1.5">
                      {route.icon}
                      {route.name}
                    </span>
                    <ChevronDown className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="center" className="w-56">
                    {route.items?.map((item) => (
                      <DropdownMenuItem key={item.path} asChild>
                        <Link
                          href={item.path}
                          className={cn(
                            "w-full cursor-pointer p-2",
                            pathname === item.path
                              ? "font-semibold text-primary"
                              : ""
                          )}
                        >
                          {item.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={route.path}
                  href={route.path}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary flex items-center gap-1.5",
                    pathname === route.path
                      ? "text-primary font-semibold"
                      : "text-foreground/80"
                  )}
                >
                  {route.icon}
                  {route.name}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <ModeToggle />
            <Button asChild size="lg" className="px-6">
              <Link href="/contact">Free Consultation</Link>
            </Button>
          </div>

          {/* ✅ Mobile: Swapped order – Hamburger on Left, Logo on Right */}
          <div className="flex md:hidden items-center justify-between w-full">
            {/* Hamburger Menu */}
            <div className="flex items-center space-x-2">
              <ModeToggle />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center rounded-md p-3 text-foreground hover:bg-accent hover:text-accent-foreground"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

            {/* Logo on the right now */}
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/bluelogo.png"
                alt="Transpacific Immigration Services"
                width={160}
                height={40}
                priority
                className="size-28 w-auto"
                unoptimized
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="container-custom py-4 pb-8 space-y-4 bg-background">
            {routes.map((route) =>
              route.dropdown ? (
                <div key={route.path} className="space-y-2">
                  <div className="font-medium py-3 flex items-center gap-2">
                    {route.icon}
                    {route.name}
                  </div>
                  <div className="pl-4 border-l-2 border-muted space-y-3">
                    {route.items?.map((item) => (
                      <Link
                        key={item.path}
                        href={item.path}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "block py-2 text-base transition-colors hover:text-primary",
                          pathname === item.path
                            ? "text-primary font-semibold"
                            : "text-foreground/80"
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={route.path}
                  href={route.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block py-3 text-base font-medium transition-colors hover:text-primary flex items-center gap-2",
                    pathname === route.path
                      ? "text-primary font-semibold"
                      : "text-foreground/80"
                  )}
                >
                  {route.icon}
                  {route.name}
                </Link>
              )
            )}
            <Button asChild className="w-full mt-4">
              <Link href="/contact">Free Consultation</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
