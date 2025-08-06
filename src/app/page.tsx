

import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className="bg-blue-300 h-[60px] flex items-center justify-between px-4">
        {/* Left Logo */}
        <img src="/apollo.jpeg" alt="apollo" className="w-[80px] h-[50px]" />

        {/* Navbar Links */}
        <nav className="flex gap-6 text-blue-900 font-medium text-lg">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">About Us</a>
          <a href="#" className="hover:underline">Contact Us</a>
        </nav>

        {/* Right Logo */}
        <img src="/malas.png" alt="malas" className="w-[60px] h-[30px]" />
      </div>
      <h1 className="text-center">Product Categories</h1>
    </>
  );
}
