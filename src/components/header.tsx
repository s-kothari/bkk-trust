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

interface MobileMenuProps {
  isMobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  headerItems: { name: string; linkTo: string }[];
  handleNavClick: (section: string) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isMobileMenuOpen,
  setMobileMenuOpen,
  headerItems,
  handleNavClick,
}) => (
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
            {headerItems.map((item) => (
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
            ))}
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
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const isHomePage = location.pathname === "/";
  const isLightBg = currentStep >= 1;

  // Set header state based on page
  useEffect(() => {
    if (!isHomePage) {
      setHeaderCollapsed(true);
      setHasScrolled(true);
      setCurrentStep(2);
      setIsLocked(true);
      setAnimationProgress(1);
    } else {
      // Reset state when navigating back to home page
      setHeaderCollapsed(false);
      setHasScrolled(false);
      setCurrentStep(0);
      setIsLocked(false);
      setAnimationProgress(0);
    }
  }, [isHomePage, setIsLocked]);

  // Define scroll thresholds for each step
  const SCROLL_THRESHOLDS = {
    START: 0,
    ANIMATED: 300,
    COLLAPSED: 600,
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (isAnimating || !isHomePage) return;

    // Determine which step we should be in based on scroll position
    let targetStep;
    if (latest >= SCROLL_THRESHOLDS.COLLAPSED) {
      targetStep = 2;
    } else if (latest >= SCROLL_THRESHOLDS.ANIMATED) {
      targetStep = 1;
    } else {
      // If we've already been past the initial state, don't go back to it on scroll up.
      // Stay at the fully animated state.
      if (hasScrolled) {
        targetStep = 1;
      } else {
        targetStep = 0;
      }
    }

    // If we need to change steps, trigger the animation
    if (targetStep !== currentStep) {
      setIsAnimating(true);
      setCurrentStep(targetStep);

      // Clear any existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Set animation progress based on target step
      if (targetStep === 0) {
        setAnimationProgress(0);
        setHeaderCollapsed(false);
        setHasScrolled(false);
      } else if (targetStep === 1) {
        setAnimationProgress(1);
        setHeaderCollapsed(false);
        setHasScrolled(true);
        setIsLocked(false); // Unlock for content interaction
      } else if (targetStep === 2) {
        setAnimationProgress(1);
        setHeaderCollapsed(true);
        setHasScrolled(true);
        setIsLocked(true); // Lock the header
      }

      // Allow animation to complete before allowing further scroll changes
      scrollTimeoutRef.current = setTimeout(() => {
        setIsAnimating(false);
      }, 1000); // Match the longest animation duration
    }
  });

  const handleScrollDown = () => {
    if (isAnimating) return;

    if (currentStep === 0) {
      window.scrollTo({
        top: SCROLL_THRESHOLDS.COLLAPSED,
        behavior: "smooth",
      });
    }
  };

  const handleScrollToTop = () => {
    if (isAnimating) return;
    // If locked, this will scroll to the top of the content.
    // Otherwise, it scrolls to the top of the animation.
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (section: string) => {
    // Navigate to the respective page
    navigate(`/${section}`);
  };

  const headerItems = [
    { name: "Our Story", linkTo: "about" },
    { name: "Impact", linkTo: "impact" },
    { name: "Contact", linkTo: "contact" },
  ];

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
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
        <div className="relative w-full h-full overflow-hidden">
          {/* Sky gradient background */}
          <motion.div
            className="absolute inset-0"
            initial={{
              background:
                "linear-gradient(to bottom, #0f172a 0%, #1e293b 50%, #334155 100%)",
            }}
            animate={{
              background:
                currentStep >= 1
                  ? "linear-gradient(to bottom, #99bec7 0%, #99bec7 50%, #99bec7 100%)"
                  : "linear-gradient(to bottom, #0f172a 0%, #1e293b 50%, #334155 100%)",
            }}
            transition={{ duration: 1.5 }}
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
            initial={{ bottom: "40%", y: "50%" }}
            animate={{
              bottom: headerCollapsed
                ? "50%"
                : currentStep >= 1
                ? "60%"
                : "40%",
              scale: headerCollapsed ? 0.175 : 1,
              y: headerCollapsed ? "37%" : currentStep >= 1 ? "0%" : "50%",
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
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
                        scaleY: currentStep >= 1 ? 1 : 0,
                        opacity: currentStep >= 1 ? 1 : 0,
                      }}
                      transition={{
                        delay: i * 0.03,
                        duration: 0.5,
                        ease: "easeOut",
                      }}
                    >
                      <div
                        className="w-0 h-0"
                        style={{
                          borderLeft: "15px solid transparent",
                          borderRight: "15px solid transparent",
                          borderBottom: "120px solid #fbbf24",
                          filter:
                            "drop-shadow(0 0 4px rgba(251, 191, 36, 0.5))",
                          marginLeft: "-15px",
                        }}
                      />
                    </motion.div>
                  </div>
                ))}
              </div>

              {/* Sun core - in front of rays */}
              <motion.div
                className="absolute inset-0 z-10 rounded-full"
                initial={{
                  scale: 0.8,
                  opacity: 0.7,
                  background: "#fde68a",
                  boxShadow:
                    "0 0 40px rgba(251, 191, 36, 0.5), 0 0 5px rgba(0, 0, 0, 0.5)",
                }}
                animate={{
                  scale: currentStep >= 1 ? 1 : 0.8,
                  opacity: 1,
                  background: currentStep >= 1 ? "#fbbf24" : "#fde68a",
                  boxShadow:
                    currentStep >= 1
                      ? "0 0 60px rgba(251, 191, 36, 0.8), 0 0 8px rgba(0, 0, 0, 0.6)"
                      : "0 0 40px rgba(251, 191, 36, 0.5), 0 0 5px rgba(0, 0, 0, 0.5)",
                }}
                transition={{ duration: 0.8 }}
              />

              {/* Sun face image */}
              <motion.img
                src="/sun_face.png"
                alt="Sun face"
                className="absolute inset-0 w-full h-full object-contain z-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: currentStep >= 1 ? 1 : 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </div>

            {/* Banner image */}
            <motion.img
              src="/banner.png"
              alt="Banner"
              className="absolute w-[26rem] object-contain pointer-events-none"
              style={{ top: "-30px" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: currentStep >= 1 ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
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

          {/* Indian Flags - Centered positioning */}
          <AnimatePresence>
            {currentStep >= 1 && !headerCollapsed && (
              <div
                className="absolute inset-x-0 flex justify-center items-center"
                style={{ bottom: currentStep >= 1 ? "50%" : "25%" }}
              >
                {/* Left Flag */}
                <motion.div
                  className="relative"
                  style={{ marginRight: "0px" }}
                  initial={{ scale: 0, opacity: 0, y: 20, rotate: -20 }}
                  animate={{ scale: 1, opacity: 1, y: 0, rotate: -25 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <img
                    src="/flag.png"
                    alt="Indian Flag"
                    className="-scale-x-100 w-64 h-50 object-contain drop-shadow-lg"
                  />
                </motion.div>

                {/* Sun spacer - invisible element to maintain spacing */}
                <div className="w-24 h-24" />

                {/* Right Flag */}
                <motion.div
                  className="relative"
                  style={{ marginLeft: "0px" }}
                  initial={{ scale: 0, opacity: 0, y: 20, rotate: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0, rotate: 25 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <img
                    src="/flag.png"
                    alt="Indian Flag"
                    className="w-64 h-50 object-contain drop-shadow-lg"
                  />
                </motion.div>
              </div>
            )}
          </AnimatePresence>

          {/* Scroll indicator */}
          <AnimatePresence>
            {currentStep === 0 && !headerCollapsed && (
              <div className="absolute bottom-20 inset-x-0 flex justify-center z-30">
                <motion.button
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                  onClick={handleScrollDown}
                >
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="text-amber-200 hover:text-amber-100 transition-colors cursor-pointer"
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
                className="font-bold text-lg cursor-pointer font-didact"
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
                      className="font-medium transition-colors duration-200"
                      animate={{
                        color: isLightBg ? "#2d2d2d" : "#fef3c7",
                      }}
                      variants={{
                        hover: { color: isLightBg ? "#000000" : "#ffffff" },
                      }}
                    >
                      {item.name}
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
