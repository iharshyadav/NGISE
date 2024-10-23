import React, { useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [isMenuOpen1, setIsMenuOpen1] = React.useState(false);

  const toggleMenu1 = () => {
    setIsMenuOpen1(!isMenuOpen1);
  };

  const [isMenuOpen2, setIsMenuOpen2] = React.useState(false);
  const toggleMenu2 = () => {
    setIsMenuOpen2(!isMenuOpen2);
  };

  const [isMenuOpen3, setIsMenuOpen3] = React.useState(false);
  const toggleMenu3 = () => {
    setIsMenuOpen3(!isMenuOpen3);
  };
  // const [isMenuOpen4, setIsMenuOpen4] = React.useState(false);
  // const toggleMenu4 = () => {
  //   setIsMenuOpen4(!isMenuOpen4);
  // };

  const [isMenuOpen5, setIsMenuOpen5] = React.useState(false);
  const toggleMenu5 = () => {
    setIsMenuOpen5(!isMenuOpen5);
  };

  useEffect(() => {
    const hash = location.hash;
    if (hash === "#fees" || hash === "#submission") {
      const section = document.getElementById(hash.substring(1));
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const currentPathname = location.pathname;
  console.log(currentPathname);

  useEffect(() => {
    const hash = location.hash;
    if (hash === "#organizing-committee") {
      const section = document.getElementById("organizing-committee");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  
  useEffect(() => {
    const hash = location.hash;
    if (hash === "#program-committee") {
      const section = document.getElementById("program-committee");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className=" w-full sm:h-20 border border-gray-300 sticky bg-opacity- bg-[#fffce6] z-50">
      <div className="mx-auto sm:h-20 flex max-w-7xl items-center lg:justify-between px-4 py-2">
        <Link to="/" className="inline-flex items-center space-x-2">
          <img
            className="md:w-[10vw] sm:[13vw] w-[25vw] bg-transparent"
            src="/WhatsApp_Image_2024-08-24_at_10.25.14_00d5ffd9-removebg-preview.png"
            alt=""
          />
        </Link>
        <div className="hidden lg:block">
          <ul className="inline-flex space-x-9">
            <Link to="/">
              <li
                className={`text-base font-semibold ${
                  currentPathname === "/" ? "text-[#46ce9c]" : "text-gray-800"
                } hover:text-[#00cc99]`}
              >
                Home
              </li>
            </Link>
            <Link to="/about">
              <li
                className={`text-base font-semibold ${
                  currentPathname === "/about"
                    ? "text-[#46ce9c]"
                    : "text-gray-800"
                } hover:text-[#00cc99]`}
              >
                Venue
              </li>
            </Link>
            <Link to="/callforpaper">
              <li
                className={`text-base font-semibold ${
                  currentPathname === "/callforpaper"
                    ? "text-[#46ce9c]"
                    : "text-gray-800"
                } hover:text-[#00cc99]`}
              >
                Call for Papers
              </li>
              </Link>
            {/* <li className="relative z-50 group">
              <button
                className={`flex items-center text-lg font-semibold cursor-pointer ${
                  currentPathname === "/callforpaper"
                    ? "text-[#46ce9c]"
                    : "text-gray-800"
                } hover:text-[#00cc99]`}
              >
                Call for paper <RiArrowDropDownLine className="text-2xl" />
              </button>
              <ul className="absolute w-56 left-0 hidden group-hover:block pt-2 bg-white shadow-lg">
                <li className="py-[0.5vh] px-2 hover:text-[#00cc99]">
                  <Link to="/callforpaper">Paper Submission </Link>
                </li>
                <li className="py-2 px-2 hover:text-[#00cc99]">
                  <Link to="/plagiarism">Author Guidelines</Link>
                </li>
                <li className="py-1 px-2 hover:text-[#00cc99]">
                  <Link to="/impDates">Important dates</Link>
                </li>
              </ul>
            </li> */}
            {/* <Link to="/papersubmission">
              <li
                className={`text-lg font-semibold ${
                  currentPathname === "/papersubmission"
                    ? "text-[#46ce9c]"
                    : "text-gray-800"
                } hover:text-[#00cc99]`}
              >
                Paper Submission
              </li>
            </Link> */}
           <li className="relative z-50 group">
              <button
                className={`flex items-center text-base font-semibold cursor-pointer ${
                  currentPathname === "/commitee"
                    ? "text-[#46ce9c]"
                    : "text-gray-800"
                } hover:text-[#00cc99]`}
              >
                Committee <RiArrowDropDownLine className="text-2xl" />
              </button>
              <ul className="absolute w-56 left-0 hidden group-hover:block pt-2 bg-white shadow-lg">
                <li className="py-[0.5vh] px-2 hover:text-[#00cc99]">
                  <Link to="/programcommittee">Program Committee</Link>
                </li>
                <li className="py-2 px-2 hover:text-[#00cc99]">
                  <Link to="/organizingcommittee">Organizing Committee</Link>
                </li>
              </ul>
            </li> 

            {/* <Link to="/speakers">
              <li
                className={`text-base font-semibold ${
                  currentPathname === "/speakers"
                    ? "text-[#46ce9c]"
                    : "text-gray-800"
                } hover:text-[#00cc99]`}
              >
                Speakers
              </li>
            </Link> */}
            <li className="relative z-50 group">
              <span
                className={`flex items-center text-base font-semibold cursor-pointer ${
                  currentPathname === "/commitee"
                    ? "text-[#46ce9c]"
                    : "text-gray-800"
                } hover:text-[#00cc99]`}
              >
                Registration <RiArrowDropDownLine className="text-2xl" />
              </span>
              <ul className="absolute w-56 left-0 hidden group-hover:block pt-2 bg-white shadow-lg">
                <li className="py-[0.5vh] px-2 font-medium hover:text-[#00cc99]">
                  <Link to="/registration">Registration Fee</Link>
                </li>
                <li className="py-2 px-2 font-medium hover:text-[#00cc99]">
                  <Link to="/fee">Payment Details</Link>
                </li>
              </ul>
            </li>
            <li className="relative z-50 group">
              <span
                className={`flex items-center text-base font-semibold cursor-pointer ${
                  currentPathname === "/locale"
                    ? "text-[#46ce9c]"
                    : "text-gray-800"
                } hover:text-[#00cc99]`}
              >
                Locale <RiArrowDropDownLine className="text-2xl" />
              </span>
              <ul className="absolute w-56 left-0 hidden group-hover:block pt-2 bg-white shadow-lg">
                {/* <li className="py-[0.5vh] px-2 hover:text-[#00cc99]">
                  <Link to="/locale/about">About City</Link>
                </li> */}
                <li className="py-[0.5vh] px-2 font-medium hover:text-[#00cc99]">
                  <Link to="/locale/place">About The City</Link>
                </li>
                <li className="py-2 px-2 font-medium hover:text-[#00cc99]">
                  <Link to="/locale/nearby-hotel">Nearby Hotels</Link>
                </li>
              </ul>
            </li>
            <li className="relative z-50 group">
              <Link
                to="/contact"
                className={`flex items-center text-base font-semibold cursor-pointer ${
                  currentPathname === "/contact"
                    ? "text-[#46ce9c]"
                    : "text-gray-800"
                } hover:text-[#00cc99]`}
              >
                Contact Us
                {/* <RiArrowDropDownLine className="text-2xl" /> */}
              </Link>
              {/* <ul className="absolute w-56 left-0 hidden group-hover:block pt-2 bg-white shadow-lg">
     <li className="py-[0.5vh] px-2 hover:text-[#00cc99]">
       <Link to="/contact/query">Query</Link>
     </li>
     <li className="py-2 px-2 hover:text-[#00cc99]">
       <Link to="/contact">Reach Us</Link>
     </li>
   </ul> */}
            </li>
          </ul>
        </div>
        <div className="">
          <img
            className="md:w-[10vw] sm:[13vw] w-[22vw] pl-2 bg-transparent"
            src="/WhatsApp_Image_2024-08-24_at_15.16.55_df7f44ea-removebg-preview.png"
            alt=""
          />

          {/* <button
            type="button"
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Button text
          </button> */}
        </div>
        <div className="lg:hidden absolute right-2">
          <Menu onClick={toggleMenu} className="h-7 w-7 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex w-[9.5vw] items-center space-x-2">
                    <img
                      className="w-[9.5vw]"
                      src="https://www.akgec.ac.in/wp-content/themes/twentysixteen/img/AKGEC_1_0.png"
                      alt=""
                    />
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    <Link to="/">
                      <li
                        onClick={() => setIsMenuOpen(false)}
                        className="flex text-base font-semibold text-gray-800 hover:text-[#46ce9c] "
                      >
                        Home
                      </li>
                    </Link>
                    <Link to="/about">
                      <li
                        onClick={() => setIsMenuOpen(false)}
                        className="flex text-base font-semibold hover:cursor-pointer  hover:text-gray-900"
                      >
                        Venue
                      </li>
                    </Link>
                    <Link to="/callforpaper">
                      <li
                        onClick={() => setIsMenuOpen(false)}
                        className="flex text-base font-semibold hover:cursor-pointer  hover:text-gray-900"
                      >
                        Call for Papers
                      </li>
                    </Link>

                    {/* <Link to="/papersubmission">
                      <li
                        onClick={() => setIsMenuOpen(false)}
                        className="flex text-base font-semibold hover:cursor-pointer  text-gray-800 hover:text-gray-900"
                      >
                        Paper Submission
                      </li>
                    </Link> */}
                    <li className="relative z-40 flex ">
                      <span
                        className={`flex items-center text-base font-medium cursor-pointer hover:text-[#00cc99] `}
                        onClick={toggleMenu1}
                      >
                        Committee <RiArrowDropDownLine className="text-2xl" />{" "}
                      </span>
                      {isMenuOpen1 && (
                        <ul className="bg-white w-3/4 pb-2 ring-1 ring-white ring-opacity-20  absolute mt-8 font-semibold  shadow-lg">
                          <li
                            className="py-1 px-2 hover:text-[#00cc99]"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <Link
                              to="/programcommittee"
                              onClick={() => setIsMenuOpen1(false)}
                            >
                              Program Committee
                            </Link>
                          </li>
                          <li
                            className="py-1 px-2 hover:text-[#00cc99]"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <Link
                              to="/organizingcommittee"
                              onClick={() => {
                                setIsMenuOpen1(false);
                              }}
                            >
                              {" "}
                              Organizing Committee{" "}
                            </Link>
                          </li>
                        </ul>
                      )}
                    </li>

                    {/* <Link to="/speakers">
                      <li
                        onClick={() => setIsMenuOpen(false)}
                        className="flex text-base font-semibold hover:cursor-pointer  text-gray-800 hover:text-gray-900"
                      >
                        Speakers
                      </li>
                    </Link> */}
                    <li className="relative z-30 flex ">
                      <span
                        className={`flex items-center text-base font-semibold cursor-pointer hover:text-[#00cc99] `}
                        onClick={toggleMenu3}
                      >
                        Registration
                        <RiArrowDropDownLine className="text-2xl" />{" "}
                      </span>
                      {isMenuOpen3 && (
                        <ul className="bg-white w-3/4 pb-2 ring-1 ring-white ring-opacity-20  absolute mt-8 font-semibold  shadow-lg">
                          <li
                            className="py-1 px-2 hover:text-[#00cc99]"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <Link
                              to="/registration"
                              onClick={() => {
                                setIsMenuOpen3(false);
                              }}
                            >
                              Registration Fees
                            </Link>
                          </li>
                          <li
                            className="py-1 px-2 hover:text-[#00cc99]"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <Link
                              to="/fee"
                              onClick={() => setIsMenuOpen3(false)}
                            >
                              Payment Details
                            </Link>
                          </li>
                        </ul>
                      )}
                    </li>
                    <li className="relative z-20 flex ">
                      <span
                        className={`flex items-center text-base font-semibold cursor-pointer hover:text-[#00cc99] `}
                        onClick={toggleMenu5}
                      >
                        Locale <RiArrowDropDownLine className="text-2xl" />{" "}
                      </span>
                      {isMenuOpen5 && (
                        <ul className="bg-white w-[34vw] ring-1 ring-white ring-opacity-20  absolute mt-8 font-semibold  shadow-lg"
                        onClick={() => setIsMenuOpen(false)} >
                          {/* <li
                            className="py-2 px-4 hover:text-[#00cc99]"
                            onClick={() => setIsMenuOpen5(false)}
                          >
                            <Link to="/locale/about">About City</Link>
                          </li> */}
                          <li
                            className="py-2 px-4 hover:text-[#00cc99]"
                            onClick={() => setIsMenuOpen5(false)}
                          >
                            <Link to="/locale/place">About The City</Link>
                          </li>
                          <li
                            className="py-2 px-4 hover:text-[#00cc99]"
                            onClick={() => setIsMenuOpen5(false)}
                          >
                            <Link to="/locale/nearby-hotel">Nearby Hotels</Link>
                          </li>
                        </ul>
                      )}
                    </li>

                    <li className="relative z-10 flex "
                    onClick={() => setIsMenuOpen(false)} >
                      <Link
                        to="/contact"
                        className={`flex items-center text-base font-semibold cursor-pointer hover:text-[#00cc99] `}
                        onClick={toggleMenu2}
                      >
                        Contact Us
                        {/* <RiArrowDropDownLine className="text-2xl" />{" "} */}
                      </Link>

                      {/* {isMenuOpen2 && (
      <ul className="bg-white w-3/4 ring-1 ring-white ring-opacity-20  absolute mt-8 font-semibold  shadow-lg">
        <li
          className="py-2 px-4 hover:text-[#00cc99]"
          onClick={() => setIsMenuOpen2(false)}
        >
          <Link to="/contact/query">Query </Link>
        </li>
        <li
          className="py-2 px-4 hover:text-[#00cc99]"
          onClick={() => setIsMenuOpen2(false)}
        >
          <Link to="/contact">Reach Us</Link>
        </li>
       
      </ul>
    )} */}
                    </li>
                  </nav>
                </div>
                {/* <button
                  type="button"
                  className="mt-4 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Button text
                </button> */}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
