// import Image from "next/image";
// import Script from "next/script";

// export default function StatsBanner() {
//   return (
//     <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-full max-w-7xl px-4">
//       <div className="bg-white shadow-lg rounded-xl py-6 px-6 flex flex-col md:flex-row items-center justify-between gap-6">
//         {/* Logos */}
//         <div className="flex items-center space-x-4">
//           <span id="iasBadge" data-account-id="6544"></span>
//           <Script
//             src="https://www-cdn.icef.com/scripts/iasbadgeid.js"
//             strategy="afterInteractive"
//             crossOrigin="anonymous"
//           />
//         </div>

//         {/* Stats */}
//         <div className="hidden lg:grid lg:grid-cols-4 lg:gap-6 text-center">
//           <div>
//             <p className="text-2xl font-bold text-blue-900">20,000+</p>
//             <p className="text-gray-600">Happy Students</p>
//           </div>
//           <div>
//             <p className="text-2xl font-bold text-blue-900">10+</p>
//             <p className="text-gray-600">Study Destinations</p>
//           </div>
//           <div>
//             <p className="text-2xl font-bold text-blue-900">8+</p>
//             <p className="text-gray-600">Branches</p>
//           </div>
//           <div>
//             <p className="text-2xl font-bold text-blue-900">100%</p>
//             <p className="text-gray-600">Student Satisfaction</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import Image from "next/image";
import Script from "next/script";
import CertifiedProfessionals2 from "./certified-professionals2";

export default function StatsBanner() {
  return (
    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-full max-w-7xl px-4">
      {/* Full version for md and above */}
      <div className="flex bg-white shadow-lg rounded-xl py-6 px-6 flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <span id="iasBadge" data-account-id="6544"></span>
          <Script
            src="https://www-cdn.icef.com/scripts/iasbadgeid.js"
            strategy="afterInteractive"
            crossOrigin="anonymous"
          />
        </div>

        {/* Stats */}
        <div className="hidden md:grid md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-4xl font-bold text-blue-900">12+</p>
            <p className="text-gray-600 md:text-lg">Years of Experience</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-blue-900">9+</p>
            <p className="text-gray-600 md:text-lg">Countries</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-blue-900">4</p>
            <p className="text-gray-600 md:text-lg">Branches</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-blue-900">100%</p>
            <p className="text-gray-600 md:text-lg">Student Satisfaction</p>
          </div>
        </div>
      </div>

      {/* Mobile version: only logos */}
      {/* <div className="flex md:hidden bg-white shadow-lg rounded-xl py-4 px-4 items-center justify-center">
        <div className="w-auto h-20 object-contain">
         <span id="iasBadge" data-account-id="6544"></span>
          <Script
            src="https://www-cdn.icef.com/scripts/iasbadgeid.js"
            strategy="afterInteractive"
            crossOrigin="anonymous"
          />
          </div>
      </div> */}
      
    </div>
  );
}
