import React, { useState } from "react";
// import './App.css';
// import "./index.css";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useSpring,
} from "framer-motion";
import { Link } from "react-router-dom";

const handleScrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const handleScrollToDiv = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const headerItems = [
  { name: "About", linkTo: "about", color: "blue-500" },
  { name: "Impact", linkTo: "impact", color: "green-500" },
  { name: "Contact", linkTo: "contact", color: "yellow-500" },

  //   { name: "Contact Us", linkTo: "life", color: "yellow-500" },
];

function Header() {
  const { scrollYProgress, scrollY } = useScroll();
  const [wide, setWide] = useState(true);
  const variants = {
    wide: { opacity: 1, height: "200px", y: 0 },
    thin: { opacity: 1, height: "200px", y: -180 },
  };
  console.log(wide);
  // const scaleY = useSpring(scrollYProgress);
  useMotionValueEvent(scrollY, "change", (latest) => {
    // console.log("Page scroll: ", latest);
    if (Number(scrollY.get()) !== 0) {
      console.log("more than 0");
      setWide(false);
    } else {
      setWide(true);
    }
  });
  return (
    <header className=" md:sticky md:top-0">
      <motion.div
        // initial={{ opacity: 1, scale: 1, y: 0 }}
        animate={wide ? "wide" : "thin"}
        variants={variants}
        transition={{ duration: 0.5 }}
        // style={{ height: wide ? "500px" : "100px" }}
        // style={{}}
        // transition={{ ease: "phaseOut", duration: 2 }}
        // transition={{ duration: 2 }}
        className="bg-teal-500"
      >
        <div className="h-[80px] bg-teal-500	"></div>
        <div className="text-center h-[100px] bg-teal-500	 text-white text-white font-extrabold text-lg sm:text-5xl uppercase items-center">
          Bhimraj Kamlawati Kothari Charitable Trust
        </div>
        <nav
          className={
            "self-end items-end flex flex-row bg-black justify-between px-8 items-center py-4 uppercase border-sky-800 border-b-4"
          }
        >
          <span
            onClick={handleScrollToTop}
            className={
              wide
                ? "invisible"
                : "text-white font-extrabold text-lg px-8 cursor-pointer"
            }
          >
            Bhimraj Kamlawati Kothari Charitable Trust
          </span>
          <div className="hidden  sm:block">
            {headerItems.map((item) => (
              //   <span
              //     onClick={() => handleScrollToDiv(item.linkTo)}
              //     key={item.name}
              //     className="px-8 text-white font-bold cursor-pointer"
              //     scroll-behavior={"smooth"}
              //   >
              //     {item.name}
              //   </span>
              <Link
                to={item.linkTo}
                className="px-8 text-white font-bold cursor-pointer"
                key={item.name}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to={"donate"}
              className="px-8 py-2 hover:bg-cyan-700 bg-cyan-600 text-white font-extrabold"
            >
              Donate
            </Link>
          </div>
        </nav>
        {/* <motion.div
          initial={{ opacity: 1, scale: 1, y: 0 }}
          animate={{
            opacity: wide ? 1 : 0,
            scale: 1,
            height: wide ? "200px" : "0px",
          }}
          transition={{ duration: 0.1 }}
          // style={{ height: wide ? "500px" : "100px" }}
          // style={{}}
          // transition={{ ease: "easeOut", duration: 2 }}
          // transition={{ duration: 2 }}
          className="text-center pt-32"
        >
          Suyash Kothari
        </motion.div> */}

        {/* <span className={wide ? " text-center pt-16" : "hidden"}>
          Suyash Kothari
        </span> */}
      </motion.div>
    </header>
  );
}

export default Header;
