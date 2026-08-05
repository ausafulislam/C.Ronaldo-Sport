"use client";
import React from "react";

const WhatsAppButton = () => {
  const phone = "923322737911";
  const message = encodeURIComponent(
    "Hi C.Ronaldo Sports! I'm interested in your football gear."
  );
  const href = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-[9999] w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-[0_0_20px_5px_rgba(37,211,102,0.6)] hover:scale-110 hover:shadow-[0_0_30px_8px_rgba(37,211,102,0.85)] transition-all ease-out duration-200"
    >
      <svg
        width="30"
        height="30"
        viewBox="0 0 32 32"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16.004 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.257.59 4.462 1.711 6.402L3.2 28.8l6.58-1.724a12.74 12.74 0 0 0 6.224 1.584h.005c7.06 0 12.8-5.74 12.8-12.8 0-3.42-1.331-6.634-3.748-9.052A12.72 12.72 0 0 0 16.004 3.2zm0 23.36h-.004a10.6 10.6 0 0 1-5.4-1.48l-.388-.23-4.02 1.054 1.073-3.92-.253-.4a10.54 10.54 0 0 1-1.624-5.584c0-5.847 4.758-10.604 10.613-10.604 2.835 0 5.5 1.105 7.503 3.111a10.55 10.55 0 0 1 3.105 7.5c0 5.848-4.758 10.553-10.605 10.553zm5.817-7.94c-.319-.16-1.887-.93-2.179-1.037-.292-.106-.505-.16-.717.16-.213.32-.824 1.037-1.01 1.25-.186.213-.372.24-.69.08-.319-.16-1.348-.497-2.567-1.583-.948-.845-1.589-1.89-1.775-2.21-.186-.319-.02-.491.14-.65.143-.143.319-.372.479-.558.16-.186.213-.319.32-.532.106-.213.053-.399-.027-.559-.08-.16-.717-1.727-.982-2.365-.259-.621-.522-.537-.717-.547-.186-.009-.399-.01-.612-.01-.213 0-.558.08-.85.399-.293.319-1.116 1.09-1.116 2.659 0 1.568 1.142 3.083 1.302 3.296.16.212 2.248 3.432 5.447 4.813.761.329 1.355.525 1.818.672.764.243 1.46.209 2.01.127.613-.092 1.887-.772 2.152-1.517.266-.745.266-1.384.186-1.517-.08-.133-.292-.213-.611-.373z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
