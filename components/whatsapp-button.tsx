'use client';

import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

export default function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/919160018125"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300">
        <FaWhatsapp className="text-2xl" />
      </div>
    </Link>
  );
}

