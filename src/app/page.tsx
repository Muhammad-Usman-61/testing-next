"use client"

import { useEffect, useState } from "react";

const page = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);



  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        const scrollHeight = document.documentElement.scrollHeight;
        const windowHeight = window.innerHeight;

        // Show the button if scrolled down more than 5px or near the bottom of the page
        if (currentScrollY + windowHeight >= scrollHeight - 100) {
          setShowScrollButton(true);
        } 
        else  if (currentScrollY > 0 && currentScrollY > lastScrollY) {
          setShowScrollButton(true);
        } else if (currentScrollY < lastScrollY) {
          setShowScrollButton(false);
        }

        // Update last scroll position
        setLastScrollY(currentScrollY);
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [lastScrollY]);

  return (
    <div>
      <div>
        {
          Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="h-[100vh] flex items-center justify-center bg-gray-800 mb-24">
              <h1 className="text-4xl font-bold text-white">Scroll Down</h1>
            </div>
          ))
        }
      </div>
      <div
      className={`shine !fixed bottom-0 left-0 z-30 flex w-full gap-5 xl:hidden transition-all duration-300 ${
        showScrollButton
          ? "translate-y-0 opacity-100"
          : "translate-y-10 opacity-0"
      }`}
    >
      <a
        href="https://api.whatsapp.com/send/?phone=971509276515&text=Hi%2C+I+am+Interested+to+Invest+in+a+Property+in+Dubai%2C+https%3A%2F%2Finvest-real-estate-dubai.com%2F&type=phone_number&app_absent=0"
        target="_blank"
        className="bg-[#20b859] p-2.5 w-full flex items-center justify-center gap-2"
      >
        <span className="text-white font-medium">Whatsapp</span>
      </a>
    </div>
    </div>
  );
};

export default page;
