import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className="bg-gray-200 h-[75px] flex items-center justify-between px-4">
        {/* Left Logo */}
        <a href="/">
          <img src="/logo.png" alt="apollo" className="w-[200px] h-[100px]" style={{ marginBottom: "-80px", marginLeft: "10px" }} />
        </a>

        {/* Navbar Links */}
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',  // Or 'space-between' or 'space-evenly'
          gap: '40px',
          marginTop: '70px',
          marginRight: '920px' // Adjust gap value as needed
        }}
        >
          <a href="#" className="hover:underline">PRODUCTS</a>
          <a href="#" className="hover:underline">ABOUT US</a>
          <a href="#" className="hover:underline">CONTACT US</a>
        </nav>

        {/* Right Logo */}
        {/*<img src="/malas.png" alt="malas" className="w-[60px] h-[30px]" />*/}
      </div>
      {/*<h1 className="text-center">Product Categories</h1>*/}

    </>
  );
}
