import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

interface HeaderProps {
  isLocked: boolean;
  setIsLocked: React.Dispatch<React.SetStateAction<boolean>>;
}

interface HeaderItem {
  name: string;
  linkTo: string;
  subItems?: { name: string; linkTo: string }[];
}

interface MobileMenuProps {
  isMobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  headerItems: HeaderItem[];
  handleNavClick: (section: string) => void;
}

const totalAnimationDuration = 2000;

const sunContainerVariants = {
  initial: { bottom: "40%", y: "50%", scale: 1 },
  risen: {
    bottom: "60%",
    y: "0%",
    scale: 1,
    transition: { duration: totalAnimationDuration / 1000, ease: "easeOut" },
  },
  collapsed: {
    bottom: "50%",
    y: "37%",
    scale: 0.175,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const MobileMenu: React.FC<MobileMenuProps> = ({
  isMobileMenuOpen,
  setMobileMenuOpen,
  headerItems,
  handleNavClick,
}) => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          className="fixed inset-0 z-[100] bg-slate-900/90 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="flex flex-col items-center justify-center h-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-6 right-6 text-white"
              aria-label="Close menu"
            >
              <X size={32} />
            </button>
            <nav className="flex flex-col items-center gap-y-6 w-full px-4">
              {headerItems.map((item) =>
                item.subItems ? (
                  <div key={item.name} className="w-full">
                    <button
                      onClick={() =>
                        setOpenItem(openItem === item.name ? null : item.name)
                      }
                      className="text-amber-100 font-medium text-2xl py-2 bg-white/10 w-full rounded-lg flex justify-center items-center gap-2"
                    >
                      {item.name}
                      <ChevronDown
                        size={24}
                        className={`transition-transform ${
                          openItem === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {openItem === item.name && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="flex flex-col items-center gap-y-2 w-full pl-4 mt-2"
                        >
                          {item.subItems.map((subItem) => (
                            <button
                              key={subItem.name}
                              onClick={() => {
                                handleNavClick(subItem.linkTo);
                                setMobileMenuOpen(false);
                              }}
                              className="text-amber-100 font-medium text-xl py-2 hover:text-amber-300 transition-colors duration-200 bg-white/5 w-full rounded-lg"
                            >
                              {subItem.name}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <button
                    key={item.name}
                    onClick={() => {
                      handleNavClick(item.linkTo);
                      setMobileMenuOpen(false);
                    }}
                    className="text-amber-100 font-medium text-2xl py-2 hover:text-amber-300 transition-colors duration-200 bg-white/10 w-full rounded-lg"
                  >
                    {item.name}
                  </button>
                )
              )}
              <button
                onClick={() => {
                  handleNavClick("donate");
                  setMobileMenuOpen(false);
                }}
                className="w-full mt-6 px-8 py-3  bg-white hover:bg-amber-50 text-black font-bold rounded-lg shadow-lg text-xl"
              >
                Donate
              </button>
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Header: React.FC<HeaderProps> = ({ isLocked, setIsLocked }) => {
  const { scrollY } = useScroll();
  const location = useLocation();
  const navigate = useNavigate();
  const [headerCollapsed, setHeaderCollapsed] = useState(false);
  const [animationProgress, setAnimationProgress] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentStep, setCurrentStep] = useState(0); // 0: start, 1: animated, 2: collapsed
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSunRisen, setIsSunRisen] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const animationTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const isHomePage = location.pathname === "/";
  const isLightBg = currentStep >= 1;

  // Set header state based on page and trigger auto-animation
  useEffect(() => {
    // Cleanup previous timeouts
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    if (animationTimeoutRef.current) clearTimeout(animationTimeoutRef.current);

    if (!isHomePage) {
      setHeaderCollapsed(true);
      setHasScrolled(true);
      setCurrentStep(2);
      setIsLocked(true);
      setAnimationProgress(1);
      setIsSunRisen(true);
    } else {
      // Reset state for home page
      setHeaderCollapsed(false);
      setHasScrolled(true);
      setCurrentStep(1);
      setIsLocked(false);
      setAnimationProgress(1);
      setIsAnimating(false);
      setIsSunRisen(true);
    }

    return () => {
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      if (animationTimeoutRef.current)
        clearTimeout(animationTimeoutRef.current);
    };
  }, [isHomePage, setIsLocked]);

  // Define scroll thresholds for each step
  const SCROLL_THRESHOLDS = {
    COLLAPSED: 100, // Scroll down 100px to collapse
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (isAnimating || !isHomePage) return;

    if (latest > SCROLL_THRESHOLDS.COLLAPSED) {
      if (!headerCollapsed) {
        setHeaderCollapsed(true);
        setIsLocked(true);
        setCurrentStep(2);
      }
    } else {
      if (headerCollapsed) {
        setHeaderCollapsed(false);
        setIsLocked(false);
        setCurrentStep(1);
      }
    }
  });

  const handleScrollDown = () => {
    if (isAnimating) return;
    setHeaderCollapsed(true);
    setIsLocked(true);
    setCurrentStep(2);
  };

  const handleNavClick = (section: string) => {
    // Navigate to the respective page
    navigate(`/${section}`);
  };

  const headerItems: HeaderItem[] = [
    { name: "Our Story", linkTo: "about" },
    {
      name: "Impact",
      linkTo: "impact",
      subItems: [
        { name: "Children's Programs", linkTo: "impact/children" },
        { name: "Women's Programs", linkTo: "impact/women" },
      ],
    },
    { name: "Contact", linkTo: "contact" },
  ];

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      <MobileMenu
        isMobileMenuOpen={isMobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        headerItems={headerItems}
        handleNavClick={handleNavClick}
      />
      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        initial={{ height: "100vh" }}
        animate={{ height: headerCollapsed ? "80px" : "100vh" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Main container with gradient background */}
        <div
          className={`relative w-full h-full ${
            headerCollapsed ? "overflow-visible" : "overflow-hidden"
          }`}
        >
          {/* Sky gradient background - Night Sky */}
          <motion.div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, #0f172a 0%, #1e293b 50%, #334155 100%)",
            }}
          />
          {/* Day Sky - fades in */}
          <motion.div
            className="absolute inset-0"
            style={{ backgroundColor: "#99bec7" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: currentStep >= 1 ? 1 : 0 }}
            transition={{ duration: totalAnimationDuration / 1000 }}
          />

          {/* Horizon line */}
          <motion.div
            className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-200 to-transparent "
            initial={{ bottom: "40%", opacity: 0.3 }}
            animate={{
              bottom: headerCollapsed ? "0%" : "40%",
              opacity: currentStep >= 1 ? 0 : 0.8,
            }}
            transition={{ duration: 0.6 }}
          />

          {/* Sun container */}
          <motion.div
            className="absolute  inset-x-0 flex justify-center z-10"
            variants={sunContainerVariants}
            initial="initial"
            animate={
              headerCollapsed
                ? "collapsed"
                : currentStep >= 1
                ? "risen"
                : "initial"
            }
            onClick={() => handleNavClick("")}
          >
            <div className="absolute inset-x-0 flex justify-center items-center hover:cursor-pointer z-0">
              {/* Left Flag */}
              <motion.div
                className="relative flex-shrink-0"
                style={{ marginRight: "0px" }}
                initial={{ scale: 0, opacity: 0, y: 20, rotate: -20 }}
                animate={{
                  scale: isSunRisen ? 1 : 0,
                  opacity: isSunRisen ? 1 : 0,
                  y: -50,
                  rotate: -25,
                }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{
                  duration: 0.6,
                  delay: totalAnimationDuration / 1000 + 0.2,
                }}
              >
                <img
                  src="/flag_4.png"
                  alt="Indian Flag"
                  className="-scale-x-100 w-64 h-50 object-contain drop-shadow-lg"
                />
              </motion.div>

              {/* Sun spacer - invisible element to maintain spacing */}
              <div className="w-24 h-24" />

              {/* Right Flag */}
              <motion.div
                className="relative flex-shrink-0"
                style={{ marginLeft: "0px" }}
                initial={{ scale: 0, opacity: 0, y: 20, rotate: 20 }}
                animate={{
                  scale: isSunRisen ? 1 : 0,
                  opacity: isSunRisen ? 1 : 0,
                  y: -50,
                  rotate: 25,
                }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{
                  duration: 0.6,
                  delay: totalAnimationDuration / 1000 + 0.3,
                }}
              >
                <img
                  src="/flag_4.png"
                  alt="Indian Flag"
                  className="w-64 h-50 object-contain drop-shadow-lg"
                />
              </motion.div>
            </div>
            <div className="relative w-24 h-24">
              {/* Sun rays - behind the sun */}
              <div className="absolute inset-0 flex items-center justify-center ">
                {[...Array(16)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute"
                    style={{
                      transform: `rotate(${i * 22.5}deg)`,
                      transformOrigin: "center",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <motion.div
                      className="absolute"
                      style={{
                        bottom: "50%",
                        left: "50%",
                        transform: "translateX(-50%)",
                      }}
                      initial={{ scaleY: 0, opacity: 0 }}
                      animate={{
                        scaleY: isSunRisen ? 1 : 0,
                        opacity: isSunRisen ? 1 : 0,
                      }}
                      transition={{
                        delay: totalAnimationDuration / 1000 + i * 0.03,
                        duration: 0.5,
                        ease: "easeOut",
                      }}
                    >
                      <div
                        style={{
                          position: "relative",
                          width: "32px",
                          height: "124px",
                          marginLeft: "-16px",
                        }}
                      >
                        {/* Outline for the sun ray */}
                        <div
                          className="absolute top-0 left-0 w-0 h-0"
                          style={{
                            borderLeft: "16px solid transparent",
                            borderRight: "16px solid transparent",
                            borderBottom: "124px solid black",
                          }}
                        />
                        {/* Sun ray */}
                        <div
                          className="absolute top-[4px] left-[2px] w-0 h-0"
                          style={{
                            borderLeft: "14px solid transparent",
                            borderRight: "14px solid transparent",
                            borderBottom: "120px solid #fbbf24",
                          }}
                        />
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>

              {/* Un-animated Sun */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: "#fde68a",
                  boxShadow:
                    "0 0 40px rgba(251, 191, 36, 0.5), 0 0 5px rgba(0, 0, 0, 0.5)",
                  transform: "scale(0.90)",
                  opacity: 0.7,
                }}
              />

              {/* Sun core - in front of rays */}
              <motion.div
                className="absolute inset-0 z-10 rounded-full"
                initial={{
                  scale: 0.8,
                  opacity: 0.9,
                  background: "#fde68a",
                  boxShadow:
                    "0 0 40px rgba(251, 191, 36, 0.5), 0 0 5px rgba(0, 0, 0, 0.5)",
                  borderWidth: "2px",
                  borderStyle: "solid",
                  borderColor: "#f59e0b",
                }}
                animate={{
                  scale: currentStep >= 1 ? 1 : 0.8,
                  opacity: currentStep >= 1 ? 1 : 0,
                  background: currentStep >= 1 ? "#fbbf24" : "#fde68a",
                  boxShadow:
                    currentStep >= 1
                      ? ""
                      : "0 0 40px rgba(251, 191, 36, 0.5), 0 0 5px rgba(0, 0, 0, 0.5)",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderColor: currentStep >= 1 ? "black" : "#f59e0b",
                }}
                transition={{ duration: 0.8 }}
              />

              {/* Sun face image */}
              <motion.img
                src="/sun_face.png"
                alt="Sun face"
                className="absolute inset-0 w-full p-[2px] h-full object-contain z-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: isSunRisen ? 1 : 0 }}
                transition={{
                  duration: 0.8,
                  delay: totalAnimationDuration / 1000 + 0.3,
                }}
              />
            </div>

            {/* Banner image */}
            <motion.img
              src="/banner_6.png"
              alt="Banner"
              className="absolute w-[26rem] object-contain pointer-events-none drop-shadow-lg z-10"
              style={{ top: "-30px" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: isSunRisen ? 1 : 0 }}
              transition={{
                duration: 0.8,
                delay: totalAnimationDuration / 1000 + 0.3,
              }}
              onClick={() => handleNavClick("/")}
            />
            {/* Trust Title */}
            {/* <motion.h1
              className="uppercase absolute font-garamond font-bold text-gray-800 text-2xl pointer-events-none"
              style={{
                top: "300px",
                textShadow: "1px 1px 3px rgba(0,0,0,0.2)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: currentStep >= 1 ? 1 : 0,
                y: currentStep >= 1 ? 0 : 20,
              }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {`Bhimraj\n Kamlawati Kothari Trust`}
            </motion.h1> */}
          </motion.div>

          {/* Scroll indicator */}
          <AnimatePresence>
            {currentStep === 1 && !headerCollapsed && (
              <div className="absolute bottom-20 inset-x-0 flex justify-center z-30">
                <motion.button
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 0 }}
                  transition={{ duration: 0.5, delay: 0 }}
                  onClick={handleScrollDown}
                >
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="text-gray-800 hover:text-black transition-colors cursor-pointer"
                  >
                    <ChevronDown size={40} strokeWidth={1.5} />
                  </motion.div>
                </motion.button>
              </div>
            )}
          </AnimatePresence>

          {/* Navigation Bar */}
          <motion.nav
            className="absolute bottom-0 left-0 right-0 "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center justify-between px-4 sm:px-8 py-4">
              <motion.div
                className="font-bold text-base cursor-pointer uppercase"
                onClick={() => handleNavClick("")}
                animate={{
                  opacity: headerCollapsed ? 1 : 0,
                  x: headerCollapsed ? 0 : -20,
                  color: isLightBg ? "#1a1a1a" : "#ffffff",
                }}
                transition={{ duration: 0.3 }}
              >
                <span className="hidden sm:inline">BKK Charitable Trust</span>
                <span className="inline sm:hidden">BKK Trust</span>
              </motion.div>

              <div className="hidden md:flex items-center gap-8">
                {headerItems.map((item) => (
                  <motion.div
                    key={item.name}
                    className="relative"
                    whileHover="hover"
                    animate="rest"
                    initial="rest"
                  >
                    <motion.button
                      onClick={() => handleNavClick(item.linkTo)}
                      className="font-medium transition-colors duration-200 flex items-center gap-1"
                      animate={{
                        color: isLightBg ? "#2d2d2d" : "#fef3c7",
                      }}
                      variants={{
                        hover: { color: isLightBg ? "#000000" : "#ffffff" },
                      }}
                    >
                      {item.name}
                      {item.subItems && <ChevronDown size={16} />}
                    </motion.button>
                    <motion.div
                      className="absolute bottom-[-5px] left-0 w-full h-[2px]"
                      style={{
                        backgroundColor: isLightBg ? "#000000" : "#ffffff",
                      }}
                      variants={{
                        hover: { scaleX: 1 },
                        rest: { scaleX: 0 },
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    {item.subItems && (
                      <motion.div
                        className="absolute top-full  mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden z-50"
                        variants={{
                          rest: {
                            opacity: 0,
                            y: -10,
                            pointerEvents: "none",
                          },
                          hover: {
                            opacity: 1,
                            y: 0,
                            pointerEvents: "auto",
                          },
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <ul className="py-1">
                          {item.subItems.map((subItem) => (
                            <li key={subItem.name}>
                              <button
                                onClick={() => handleNavClick(subItem.linkTo)}
                                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              >
                                {subItem.name}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
                <motion.button
                  onClick={() => handleNavClick("donate")}
                  className="px-6 py-2 font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                  animate={{
                    background: isLightBg ? "#1a1a1a" : "#ffffff",
                    color: isLightBg ? "#ffffff" : "#000000",
                  }}
                  whileHover={{
                    background: isLightBg
                      ? "#333333"
                      : "linear-gradient(to right, #d97706, #b45309)",
                  }}
                >
                  Donate
                </motion.button>
              </div>
              <div className="md:hidden">
                <motion.button
                  onClick={() => setMobileMenuOpen(true)}
                  className=""
                  aria-label="Open menu"
                  animate={{ color: isLightBg ? "#1a1a1a" : "#ffffff" }}
                >
                  <Menu size={28} />
                </motion.button>
              </div>
            </div>
          </motion.nav>
        </div>
      </motion.header>
    </>
  );
};

export default Header;
