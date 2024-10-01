import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./home.css";

const Home = () => {
    return (
        <div className="homeContainer">
            <div className="textContainer">
                <h1 className="homeTitle">Hi I am Zahida <br />Next Js Developer</h1>
                <p className="homeDescription">
                    A passionate web developer with expertise in HTML, CSS, and TypeScript. Currently, I am expanding my skill set by learning Next.js and React.js, with a strong determination to master them in the near future, Insha Allah. I am always eager to learn and adapt to new web technologies, with a clear goal of excelling and making a meaningful impact in the field of web development.
                </p>
                <button className="exploreButton">
                    <Link href="/portfolio">
                        Read More
                    </Link>
                </button>
            </div>
            <div className="imageContainer">
                <Image
                    src="/my-image.jpg"
                    alt="my Image"
                    width={300}
                    height={300}
                    className="imageStyle"
                />
            </div>
        </div>
    );
};

export default Home;
