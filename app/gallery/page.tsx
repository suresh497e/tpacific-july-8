"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const galleryData = [
  {
    title: "Meetup",
    images: [
      "/gallery/event1/nagendar_white_bg.png",
      "/gallery/event1/usa_main.png",
      "/gallery/event1/nagendar_white_bg.png",
      "/gallery/event1/nagendar_white_bg.png",
    ],
  },
  {
    title: "Farewell",
    images: [
      "/gallery/event2/nagendar_white_bg.png",
      "/gallery/event2/usa_main.png",
      "/gallery/event2/nagendar_white_bg.png",
    ],
  },
];

export default function GalleryPage() {
  const [selectedImages, setSelectedImages] = useState<string[] | null>(null);
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides =
    selectedImages?.map((src) => ({
      src,
    })) ?? [];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Gallery</h1>

      {!selectedImages && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryData.map((event, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-lg p-4 cursor-pointer hover:bg-gray-50"
              onClick={() => {
                setSelectedImages(event.images);
              }}
            >
              <h2 className="text-xl font-semibold">{event.title}</h2>
              <p className="text-gray-500">{event.images.length} Photos</p>
            </div>
          ))}
        </div>
      )}

      {selectedImages && (
        <div className="mt-6">
          <button
            onClick={() => {
              setSelectedImages(null);
              setOpen(false);
            }}
            className="mb-4 px-4 py-2 bg-primary text-white rounded"
          >
            ← Back to Folders
          </button>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {selectedImages.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Image ${i + 1}`}
                className="rounded shadow-sm object-cover w-full h-48 cursor-pointer"
                onClick={() => {
                  setIndex(i);
                  setOpen(true);
                }}
              />
            ))}
          </div>
        </div>
      )}

      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={slides}
          index={index}
          plugins={[Thumbnails]}
        />
      )}
    </div>
  );
}






// 'use client';
// import React, { useState } from 'react';
// import Image from 'next/image';
// import Lightbox from 'yet-another-react-lightbox';
// import 'yet-another-react-lightbox/styles.css';
// import { Captions, Fullscreen, Thumbnails } from 'yet-another-react-lightbox/plugins';

// import { galleryData } from './galleryData';

// export default function GalleryPage() {
//   const [open, setOpen] = useState(false);
//   const [activeImages, setActiveImages] = useState([]);
//   const [index, setIndex] = useState(0);

//   const handleOpen = (images: any[], startIndex: number = 0) => {
//     setActiveImages(images);
//     setIndex(startIndex);
//     setOpen(true);
//   };

//   return (
//     <div className="min-h-screen px-4 py-8">
//       <h1 className="text-3xl font-bold mb-6 text-center">Event Gallery</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {galleryData.map((event) => (
//           <div
//             key={event.id}
//             onClick={() => handleOpen(event.images)}
//             className="cursor-pointer group"
//           >
//             <div className="relative h-48 w-full overflow-hidden rounded-lg shadow hover:scale-105 transition-transform duration-300">
//               <Image
//                 src={event.thumbnail}
//                 alt={event.title}
//                 layout="fill"
//                 objectFit="cover"
//                 className="rounded-lg"
//               />
//             </div>
//             <h2 className="text-xl font-semibold mt-2 text-center">{event.title}</h2>
//           </div>
//         ))}
//       </div>

//       <Lightbox
//         open={open}
//         close={() => setOpen(false)}
//         slides={activeImages}
//         index={index}
//         plugins={[Captions, Fullscreen, Thumbnails]}
//       />
//     </div>
//   );
// }
