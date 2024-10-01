import Link from "next/link";
import Image from "next/image";
import React from "react";

const Navebar = () => {
  const nav = (
    <>
      <div className="main-container">
        <div className="logo">
          <Link href="/">
            <Image src="/globe.jpg" width={50} height={50} alt="Logo" />
          </Link>
        </div>
        <ul className="container flex">
          <Link href="/"><li>Home</li></Link>
          <Link href="/about"><li>About</li></Link>
          <Link href="/portfolio"><li>Portfolio</li></Link>
          <Link href="/login"><li>Login</li></Link>
        </ul>
      </div>
    </>
  );
  return nav;
};

export default Navebar;
