import React, { useState, useEffect } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link } from "react-router-dom";
import './nav.css'
function Navbar() {
  const [showIcon, setShowIcon] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 800) {
        setShowIcon(true);
      } else {
        setShowIcon(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleNav = () => {
    setShowMenu(!showMenu); // Toggle the state to show or hide the menu
  };

  return (
    <main>
      <header className="  w-full py-[20px] px-[10%] flex  justify-between items-center z-[100] h-[76px]
        bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]
      ">
        <a
          href="#"
          className="log text-3xl text-white  none  font-bold 
        "
        >
          Quiz
        </a>
        <nav className="navbar ">
          {showIcon ? (
            <FaBarsStaggered
              onClick={toggleNav}
              className=" cursor-pointer text-3xl  text-white"
            />
          ) : (
            <>
              <Link
                to="/"
                className="text-lg text-white no-underline font-medium ml-8 transition-all
         hover:text-[#c40094] active"
              >
                Home
              </Link>
              <a
                href="#"
                className="text-lg text-white no-underline font-medium ml-8 transition-all
         hover:text-[#c40094] active:text-[]"
              >
                About
              </a>
              <a
                href="#"
                className="text-lg text-white no-underline font-medium ml-8 transition-all
         hover:text-[#c40094] active:text-[]"
              >
                Services
              </a>
              <a
                href="#"
                className="text-lg text-white no-underline font-medium ml-8 transition-all
         hover:text-[#c40094] active:text-[]"
              >
                Login
              </a>
              <a
                href="#"
                className="text-lg text-white no-underline font-medium ml-8 transition-all
         hover:text-[#c40094] active:text-[]"
              >
                Content
              </a>
            </>
          )}
        </nav>

        {/* when user click iconbar then show this nav */}
        {showMenu && (
          <div className="menu w-[50%] flex flex-col  absolute  right-0 top-[76px]   h-[100vh] gap-[50px] pt-4 items-center ease-in  bg-slate-500 z-9999">
            <>
              <a
                href="#"
                className="text-lg text-white no-underline font-medium ml-8 transition-all
         hover:text-[#c40094] active"
              >
                Home
              </a>
              <a
                href="#"
                className="text-lg text-white no-underline font-medium ml-8 transition-all
         hover:text-[#c40094] active:text-[]"
              >
                About
              </a>
              <a
                href="#"
                className="text-lg text-white no-underline font-medium ml-8 transition-all
         hover:text-[#c40094] active:text-[]"
              >
                Services
              </a>
              <a
                href="#"
                className="text-lg text-white no-underline font-medium ml-8 transition-all
         hover:text-[#c40094] active:text-[]"
              >
                Login
              </a>
              <a
                href="#"
                className="text-lg text-white no-underline font-medium ml-8 transition-all
         hover:text-[#c40094] active:text-[]"
              >
                Content
              </a>
            </>
          </div>
        )}
      </header>
    </main>
  );
}

export default Navbar;

