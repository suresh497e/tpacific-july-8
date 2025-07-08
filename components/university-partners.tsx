"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function UniversityPartners() {
  const [searchQuery, setSearchQuery] = useState("")

  const australianUniversities = [
    {
      name: "University of Sydney",
      logo: "/placeholder.svg?height=60&width=180&text=University+of+Sydney",
      website: "https://www.sydney.edu.au/",
      country: "australia",
    },
    {
      name: "University of Melbourne",
      logo: "/placeholder.svg?height=60&width=180&text=University+of+Melbourne",
      website: "https://www.unimelb.edu.au/",
      country: "australia",
    },
    {
      name: "Australian National University",
      logo: "/placeholder.svg?height=60&width=180&text=ANU",
      website: "https://www.anu.edu.au/",
      country: "australia",
    },
    {
      name: "University of Queensland",
      logo: "/placeholder.svg?height=60&width=180&text=UQ",
      website: "https://www.uq.edu.au/",
      country: "australia",
    },
    {
      name: "Monash University",
      logo: "/placeholder.svg?height=60&width=180&text=Monash",
      website: "https://www.monash.edu/study",
      country: "australia",
    },
    {
      name: "University of New South Wales",
      logo: "/placeholder.svg?height=60&width=180&text=UNSW",
      website: "https://www.unsw.edu.au/study",
      country: "australia",
    },
    {
      name: "University of Western Australia",
      logo: "/placeholder.svg?height=60&width=180&text=UWA",
      website: "https://www.uwa.edu.au/",
      country: "australia",
    },
    {
      name: "University of Adelaide",
      logo: "/placeholder.svg?height=60&width=180&text=Adelaide",
      website: "https://www.adelaide.edu.au/",
      country: "australia",
    },
    {
      name: "University of Technology Sydney",
      logo: "/placeholder.svg?height=60&width=180&text=UTS",
      website: "https://www.uts.edu.au/",
      country: "australia",
    },
    {
      name: "Macquarie University",
      logo: "/placeholder.svg?height=60&width=180&text=Macquarie",
      website: "https://www.mq.edu.au/",
      country: "australia",
    },
    {
      name: "RMIT University",
      logo: "/placeholder.svg?height=60&width=180&text=RMIT",
      website: "https://www.rmit.edu.au/",
      country: "australia",
    },
    {
      name: "Curtin University",
      logo: "/placeholder.svg?height=60&width=180&text=Curtin",
      website: "https://www.curtin.edu.au/",
      country: "australia",
    },
  ]

  const ukUniversities = [
    {
      name: "University of Oxford",
      logo: "/placeholder.svg?height=60&width=180&text=Oxford",
      website: "https://www.ox.ac.uk/",
      country: "uk",
    },
    {
      name: "University of Cambridge",
      logo: "/placeholder.svg?height=60&width=180&text=Cambridge",
      website: "https://www.cam.ac.uk/",
      country: "uk",
    },
    {
      name: "Imperial College London",
      logo: "/placeholder.svg?height=60&width=180&text=Imperial",
      website: "https://www.imperial.ac.uk/",
      country: "uk",
    },
    {
      name: "University College London",
      logo: "/placeholder.svg?height=60&width=180&text=UCL",
      website: "https://www.ucl.ac.uk/",
      country: "uk",
    },
    {
      name: "London School of Economics",
      logo: "/placeholder.svg?height=60&width=180&text=LSE",
      website: "https://onlinecourses.london.ac.uk/",
      country: "uk",
    },
    {
      name: "University of Edinburgh",
      logo: "/placeholder.svg?height=60&width=180&text=Edinburgh",
      website: "https://www.ed.ac.uk/",
      country: "uk",
    },
    {
      name: "King's College London",
      logo: "/placeholder.svg?height=60&width=180&text=King's+College",
      website: "https://www.kcl.ac.uk/study/home",
      country: "uk",
    },
    {
      name: "University of Manchester",
      logo: "/placeholder.svg?height=60&width=180&text=Manchester",
      website: "https://www.manchester.ac.uk/",
      country: "uk",
    },
    {
      name: "University of Bristol",
      logo: "/placeholder.svg?height=60&width=180&text=Bristol",
      website: "https://www.bristol.ac.uk/",
      country: "uk",
    },
    {
      name: "University of Warwick",
      logo: "/placeholder.svg?height=60&width=180&text=Warwick",
      website: "https://warwick.ac.uk/",
      country: "uk",
    },
    {
      name: "University of Glasgow",
      logo: "/placeholder.svg?height=60&width=180&text=Glasgow",
      website: "https://www.gla.ac.uk/",
      country: "uk",
    },
    {
      name: "Durham University",
      logo: "/placeholder.svg?height=60&width=180&text=Durham",
      website: "https://www.durham.ac.uk/",
      country: "uk",
    },
  ]

  const usUniversities = [
    {
      name: "Harvard University",
      logo: "/images/harvard-logo.png",
      website: "https://www.harvard.edu/",
      country: "us",
    },
    {
      name: "Stanford University",
      logo: "/images/stanford-logo.png",
      website: "https://www.stanford.edu/",
      country: "us",
    },
    {
      name: "Massachusetts Institute of Technology",
      logo: "/placeholder.svg?height=60&width=180&text=MIT",
      website: "https://www.mit.edu/",
      country: "us",
    },
    {
      name: "California Institute of Technology",
      logo: "/placeholder.svg?height=60&width=180&text=Caltech",
      website: "https://www.caltech.edu/",
      country: "us",
    },
    {
      name: "Princeton University",
      logo: "/placeholder.svg?height=60&width=180&text=Princeton",
      website: "https://www.princeton.edu/",
      country: "us",
    },
    {
      name: "Yale University",
      logo: "/placeholder.svg?height=60&width=180&text=Yale",
      website: "https://www.yale.edu/",
      country: "us",
    },
    {
      name: "Columbia University",
      logo: "/placeholder.svg?height=60&width=180&text=Columbia",
      website: "https://www.columbia.edu/",
      country: "us",
    },
    {
      name: "University of Chicago",
      logo: "/placeholder.svg?height=60&width=180&text=UChicago",
      website: "https://www.uchicago.edu/en",
      country: "us",
    },
    {
      name: "University of Pennsylvania",
      logo: "/placeholder.svg?height=60&width=180&text=UPenn",
      website: "https://www.upenn.edu/",
      country: "us",
    },
    {
      name: "Johns Hopkins University",
      logo: "/placeholder.svg?height=60&width=180&text=Johns+Hopkins",
      website: "https://www.jhu.edu/",
      country: "us",
    },
    {
      name: "Northwestern University",
      logo: "/placeholder.svg?height=60&width=180&text=Northwestern",
      website: "https://www.northwestern.edu/",
      country: "us",
    },
    {
      name: "Duke University",
      logo: "/placeholder.svg?height=60&width=180&text=Duke",
      website: "https://duke.edu/",
      country: "us",
    },
  ]

  const canadianUniversities = [
    {
      name: "University of Toronto",
      logo: "/images/utoronto-logo.png",
      website: "https://www.utoronto.ca/",
      country: "canada",
    },
    {
      name: "University of British Columbia",
      logo: "/images/ubc-logo.png",
      website: "https://www.ubc.ca/",
      country: "canada",
    },
    {
      name: "McGill University",
      logo: "/placeholder.svg?height=60&width=180&text=McGill",
      website: "https://www.mcgill.ca/",
      country: "canada",
    },
    {
      name: "University of Alberta",
      logo: "/placeholder.svg?height=60&width=180&text=UAlberta",
      website: "https://www.ualberta.ca/en/index.html",
      country: "canada",
    },
    {
      name: "University of Montreal",
      logo: "/placeholder.svg?height=60&width=180&text=UMontreal",
      website: "https://www.umontreal.ca/en/",
      country: "canada",
    },
    {
      name: "University of Calgary",
      logo: "/placeholder.svg?height=60&width=180&text=UCalgary",
      website: "https://www.ucalgary.ca/",
      country: "canada",
    },
    {
      name: "University of Waterloo",
      logo: "/placeholder.svg?height=60&width=180&text=Waterloo",
      website: "https://uwaterloo.ca/",
      country: "canada",
    },
    {
      name: "Western University",
      logo: "/placeholder.svg?height=60&width=180&text=Western",
      website: "https://www.uwo.ca/",
      country: "canada",
    },
    {
      name: "Queen's University",
      logo: "/placeholder.svg?height=60&width=180&text=Queen's",
      website: "https://www.queensu.ca/",
      country: "canada",
    },
    {
      name: "University of Ottawa",
      logo: "/placeholder.svg?height=60&width=180&text=UOttawa",
      website: "https://www.uottawa.ca/en",
      country: "canada",
    },
    {
      name: "Simon Fraser University",
      logo: "/placeholder.svg?height=60&width=180&text=SFU",
      website: "https://www.sfu.ca/",
      country: "canada",
    },
    {
      name: "Dalhousie University",
      logo: "/placeholder.svg?height=60&width=180&text=Dalhousie",
      website: "https://www.dal.ca/",
      country: "canada",
    },
  ]

  const irishUniversities = [
    {
      name: "Trinity College Dublin",
      logo: "/images/trinity-logo.png",
      website: "https://www.tcd.ie/",
      country: "ireland",
    },
    {
      name: "University College Dublin",
      logo: "/images/ucd-logo.png",
      website: "https://www.ucd.ie/future/",
      country: "ireland",
    },
    {
      name: "National University of Ireland, Galway",
      logo: "/placeholder.svg?height=60&width=180&text=NUIG",
      website: "https://www.universityofgalway.ie/",
      country: "ireland",
    },
    {
      name: "University College Cork",
      logo: "/placeholder.svg?height=60&width=180&text=UCC",
      website: "https://www.ucc.ie/en/",
      country: "ireland",
    },
    {
      name: "Dublin City University",
      logo: "/placeholder.svg?height=60&width=180&text=DCU",
      website: "https://www.dcu.ie/",
      country: "ireland",
    },
    {
      name: "University of Limerick",
      logo: "/placeholder.svg?height=60&width=180&text=UL",
      website: "https://www.ul.ie/",
      country: "ireland",
    },
    {
      name: "Maynooth University",
      logo: "/placeholder.svg?height=60&width=180&text=Maynooth",
      website: "https://www.maynoothuniversity.ie/",
      country: "ireland",
    },
    {
      name: "Technological University Dublin",
      logo: "/placeholder.svg?height=60&width=180&text=TU+Dublin",
      website: "https://www.tudublin.ie/",
      country: "ireland",
    },
    {
      name: "Royal College of Surgeons in Ireland",
      logo: "/placeholder.svg?height=60&width=180&text=RCSI",
      website: "https://www.rcsi.com/dublin/",
      country: "ireland",
    },
    {
      name: "National College of Ireland",
      logo: "/placeholder.svg?height=60&width=180&text=NCI",
      website: "https://www.ncirl.ie/",
      country: "ireland",
    },
    {
      name: "Griffith College",
      logo: "/placeholder.svg?height=60&width=180&text=Griffith",
      website: "https://www.griffith.ie/",
      country: "ireland",
    },
    {
      name: "Dublin Business School",
      logo: "/placeholder.svg?height=60&width=180&text=DBS",
      website: "https://www.dbs.ie/",
      country: "ireland",
    },
  ]

  const newZealandUniversities = [
    {
      name: "Lincoln University",
      logo: "/placeholder.svg?height=60&width=180&text=Lincoln",
      website: "https://www.lincoln.ac.nz/",
      country: "newzealand",
    },
    {
      name: "University of Canterbury",
      logo: "/placeholder.svg?height=60&width=180&text=Canterbury",
      website: "https://www.canterbury.ac.nz/",
      country: "newzealand",
    },
    {
      name: "University of Auckland",
      logo: "/placeholder.svg?height=60&width=180&text=Auckland",
      website: "https://www.auckland.ac.nz/en.html",
      country: "newzealand",
    },
    {
      name: "Victoria University of Wellington",
      logo: "/placeholder.svg?height=60&width=180&text=Victoria",
      website: "https://www.wgtn.ac.nz/",
      country: "newzealand",
    },
    {
      name: "Toi Ohomai Institute of Technology",
      logo: "/placeholder.svg?height=60&width=180&text=Toi+Ohomai",
      website: "https://www.toiohomai.ac.nz/",
      country: "newzealand",
    },
    {
      name: "Waikato Institute of Technology",
      logo: "/placeholder.svg?height=60&width=180&text=Wintec",
      website: "https://www.wintec.ac.nz/",
      country: "newzealand",
    },
    {
      name: "Whitireia New Zealand",
      logo: "/placeholder.svg?height=60&width=180&text=Whitireia",
      website: "https://www.whitireiaweltec.ac.nz/",
      country: "newzealand",
    },
    {
      name: "Otago Polytechnic",
      logo: "/placeholder.svg?height=60&width=180&text=Otago",
      website: "https://www.op.ac.nz",
      country: "newzealand",
    },
    {
      name: "Nelson Marlborough Institute of Technology",
      logo: "/placeholder.svg?height=60&width=180&text=NMIT",
      website: "https://www.nmit.ac.nz/",
      country: "newzealand",
    },
    {
      name: "Manukau Institute of Technology",
      logo: "/placeholder.svg?height=60&width=180&text=MIT",
      website: "https://www.manukau.ac.nz/",
      country: "newzealand",
    },
    {
      name: "Universal College of Learning",
      logo: "/placeholder.svg?height=60&width=180&text=UCOL",
      website: "https://www.ucol.ac.nz/",
      country: "newzealand",
    },
    {
      name: "Eastern Institute of Technology",
      logo: "/placeholder.svg?height=60&width=180&text=EIT",
      website: "https://www.eit.ac.nz",
      country: "newzealand",
    },
  ]

  const allUniversities = [
    ...australianUniversities,
    ...ukUniversities,
    ...usUniversities,
    ...canadianUniversities,
    ...irishUniversities,
    ...newZealandUniversities,
  ]

  const filteredUniversities = (universities) => {
    if (!searchQuery) return universities

    return universities.filter((university) => university.name.toLowerCase().includes(searchQuery.toLowerCase()))
  }

  return (
    <div className="space-y-6">
      <div className="relative max-w-md mx-auto mb-8">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
        <Input
          type="text"
          placeholder="Search universities..."
          className="pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <Tabs defaultValue="all" className="w-full">
        <div className="overflow-x-auto pb-2">
          <TabsList className="inline-flex min-w-full w-auto">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="australia">Australia</TabsTrigger>
            <TabsTrigger value="uk">UK</TabsTrigger>
            <TabsTrigger value="us">USA</TabsTrigger>
            <TabsTrigger value="canada">Canada</TabsTrigger>
            <TabsTrigger value="ireland">Ireland</TabsTrigger>
            <TabsTrigger value="newzealand">New Zealand</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {filteredUniversities(allUniversities).map((university) => (
              <UniversityCard key={university.name} university={university} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="australia" className="mt-0">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {filteredUniversities(australianUniversities).map((university) => (
              <UniversityCard key={university.name} university={university} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="uk" className="mt-0">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {filteredUniversities(ukUniversities).map((university) => (
              <UniversityCard key={university.name} university={university} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="us" className="mt-0">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {filteredUniversities(usUniversities).map((university) => (
              <UniversityCard key={university.name} university={university} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="canada" className="mt-0">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {filteredUniversities(canadianUniversities).map((university) => (
              <UniversityCard key={university.name} university={university} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="ireland" className="mt-0">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {filteredUniversities(irishUniversities).map((university) => (
              <UniversityCard key={university.name} university={university} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="newzealand" className="mt-0">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {filteredUniversities(newZealandUniversities).map((university) => (
              <UniversityCard key={university.name} university={university} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

interface University {
  name: string
  logo: string
  website: string
  country: string
}

function UniversityCard({ university }: { university: University }) {
  return (
    <a
      href={university.website}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center p-4 bg-background rounded-lg border border-border/50 hover:shadow-md transition-all duration-300 hover:border-primary/30 group"
    >
      <div className="flex flex-col items-center">
        <img
          src={university.logo || "/placeholder.svg"}
          alt={university.name}
          className="h-12 w-auto object-contain grayscale group-hover:grayscale-0 transition-all"
        />
        <span className="mt-2 text-xs text-center text-muted-foreground group-hover:text-foreground transition-colors">
          {university.name}
        </span>
      </div>
    </a>
  )
}
