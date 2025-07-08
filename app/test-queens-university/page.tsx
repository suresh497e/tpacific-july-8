"use client"
import { ReliableImage } from "@/components/reliable-image"

export default function TestQueensUniversity() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Test Queen's University Images</h1>

      <div className="border rounded-lg overflow-hidden shadow-md max-w-2xl mx-auto">
        <div className="relative h-64 w-full">
          <ReliableImage
            src="/images/queens-university-campus.png"
            alt="Queen's University campus"
            fill
            className="object-cover"
            fallbackSrc="/queens-university-campus.png"
          />
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Queen's University</h2>
          <div className="h-20 flex items-center justify-center bg-gray-50 rounded p-3 mb-4">
            <div className="relative h-16 w-40">
              <ReliableImage
                src="/images/logos/queens-university.png"
                alt="Queen's University logo"
                fill
                className="object-contain"
                fallbackSrc="/placeholder.svg?height=100&width=200&query=Queen's University logo"
              />
            </div>
          </div>
          <p className="text-gray-700">
            One of Canada's oldest universities with a reputation for academic excellence and student experience.
            Located in Kingston, Ontario, Queen's is known for its beautiful limestone buildings and strong sense of
            community.
          </p>
          <div className="mt-4">
            <a
              href="https://www.queensu.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
            >
              Visit Website
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
