const Footer = () => {
  return (
    <div>
      <section className="relative h-auto text-white bg-gray-500 pt-4 pb-6">
        <div className="container relative z-10 mx-auto px-4">
          <div className="flex flex-col mb-16 lg:flex-row lg:gap-72 justify-center items-center">
            <div className="w-auto p-8  flex items-center justify-center">
              <a href="https://www.akgec.ac.in/">
                <div className="inline-flex items-center">
                  <img
                    className="sm:w-[20vw] w-[30vw] lg:w-[7.5vw]"
                    src="https://www.akgec.ac.in/wp-content/themes/twentysixteen/img/AKGEC_1_0.png"
                    alt="AKGEC Logo"
                  />
                </div>
              </a>
            </div>

            <div className="flex flex-col text-center items-center p-4">
              <h4 className="mb-1 text-lg font-semibold">Links:</h4>
              <ul className="space-y-1">
                <li>
                  <a href="/" className="hover:text-blue-400 transition-colors text-sm font-normal">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/registration" className="hover:text-blue-400 transition-colors text-sm font-normal">
                    Registrations
                  </a>
                </li>
                <li>
                  <a href="/callforpaper" className="hover:text-blue-400 transition-colors text-sm font-normal">
                    Paper Submission
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-center p-8">
              <ul className="flex flex-col items-center gap-4">
                <li>
                  <a className="font-medium text-white text-lg" href="/contact">
                    Contact Us
                  </a>
                </li>
                <div className="flex space-x-4">
                  <a href="https://www.facebook.com/Official.AKGEC/">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400">
                      <svg
                        width="8"
                        height="14"
                        viewBox="0 0 8 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.55736 5.2L5.55736 3.88C5.55736 3.308 5.69631 3 6.66894 3H7.87315V0.800003L6.02052 0.800003C3.70473 0.800003 2.77841 2.252 2.77841 3.88V5.2H0.925781L0.925781 7.4H2.77841L2.77841 14H5.55736L5.55736 7.4H7.59526L7.87315 5.2H5.55736Z"
                          fill="#ffff"
                        ></path>
                      </svg>
                    </div>
                  </a>
                  <a href="https://twitter.com/Official_AKGEC">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400">
                      <svg
                        width="14"
                        height="11"
                        viewBox="0 0 14 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.6655 1.39641C13.1901 1.60149 12.6728 1.74907 12.1399 1.80656C12.6931 1.47788 13.1074 0.958619 13.3051 0.346204C12.7859 0.655036 12.2172 0.871595 11.6241 0.986274C11.3762 0.721276 11.0764 0.510168 10.7434 0.366102C10.4104 0.222036 10.0512 0.1481 9.68836 0.148902C8.22024 0.148902 7.03953 1.33893 7.03953 2.79928C7.03953 3.00436 7.06439 3.20943 7.10478 3.40673C4.90649 3.29177 2.94589 2.24155 1.64246 0.633614C1.40495 1.03927 1.2805 1.50117 1.28203 1.97123C1.28203 2.89094 1.74965 3.70191 2.46274 4.17885C2.0425 4.1623 1.63211 4.0468 1.26494 3.84173V3.87435C1.26494 5.16226 2.17533 6.22956 3.38866 6.47502C3.16084 6.5342 2.92649 6.56447 2.69111 6.56513C2.51866 6.56513 2.35554 6.54804 2.19086 6.52474C2.52643 7.57495 3.50362 8.33775 4.66724 8.3626C3.75685 9.07569 2.61654 9.49515 1.37835 9.49515C1.15619 9.49515 0.951119 9.48738 0.738281 9.46253C1.91278 10.216 3.30632 10.651 4.80706 10.651C9.67904 10.651 12.345 6.61484 12.345 3.11155C12.345 2.99659 12.345 2.88162 12.3372 2.76666C12.853 2.38914 13.3051 1.92152 13.6655 1.39641Z"
                          fill="#ffff"
                        ></path>
                      </svg>
                    </div>
                  </a>
                  <a href="https://www.instagram.com/official.akgec/">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400">
                      <svg
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.00094 0.360001C6.09046 0.360001 5.85022 0.368801 5.09958 0.402241C4.34894 0.437441 3.83766 0.555361 3.38974 0.729601C2.9199 0.906321 2.49433 1.18353 2.14278 1.54184C1.78468 1.89357 1.50751 2.31909 1.33054 2.7888C1.1563 3.23584 1.0375 3.748 1.00318 4.496C0.969738 5.2484 0.960937 5.48776 0.960937 7.40088C0.960937 9.31224 0.969738 9.5516 1.00318 10.3022C1.03838 11.052 1.1563 11.5633 1.33054 12.0112C1.51094 12.4741 1.75118 12.8666 2.14278 13.2582C2.5335 13.6498 2.92598 13.8909 3.38886 14.0704C3.83766 14.2446 4.34806 14.3634 5.09782 14.3978C5.84934 14.4312 6.0887 14.44 8.00094 14.44C9.91318 14.44 10.1517 14.4312 10.9032 14.3978C11.6521 14.3626 12.1651 14.2446 12.6115 14.0704C13.0806 13.8909 13.5078 13.6137 13.8577 13.2582C14.2094 12.8666 14.485 12.4411 14.662 11.9714C14.8362 11.5244 14.955 11.0122 14.9895 10.2632C15.0229 9.5116 15.0317 9.27224 15.0317 7.36001C15.0317 5.44777 15.0229 5.20841 14.9895 4.45681C14.955 3.70881 14.8362 3.19664 14.662 2.74872C14.4816 2.28584 14.2414 1.89336 13.8577 1.50176C13.4661 1.11016 13.0736 0.869921 12.6115 0.690481C12.1636 0.516241 11.6521 0.397441 10.9032 0.363001C10.1517 0.328801 9.91318 0.320001 8.00094 0.320001V0.360001ZM8.00094 1.564C9.86902 1.564 10.0879 1.5712 10.8336 1.60464C11.5153 1.63456 11.9133 1.74072 12.1927 1.84944C12.5943 2.00328 12.8938 2.22376 13.2003 2.53032C13.5069 2.83768 13.7274 3.13712 13.8812 3.53872C13.9899 3.81808 14.0961 4.21608 14.126 4.89768C14.1594 5.64344 14.1666 5.86232 14.1666 7.73041C14.1666 9.59848 14.1594 9.81736 14.126 10.5631C14.0961 11.2447 13.9899 11.6427 13.8812 11.922C13.7274 12.324 13.5069 12.6234 13.2003 12.9301C12.8938 13.2366 12.5943 13.4571 12.1927 13.611C11.9133 13.7197 11.5153 13.8258 10.8336 13.8558C10.0879 13.8892 9.86902 13.8964 8.00094 13.8964C6.13287 13.8964 5.91399 13.8892 5.16823 13.8558C4.48663 13.8258 4.08863 13.7197 3.80895 13.611C3.40735 13.4571 3.10791 13.2366 2.80135 12.9301C2.49479 12.6234 2.27432 12.324 2.12048 11.922C2.01176 11.6427 1.9056 11.2447 1.87568 10.5631C1.84224 9.81736 1.83504 9.59848 1.83504 7.73041C1.83504 5.86232 1.84224 5.64344 1.87568 4.89768C1.9056 4.21608 2.01176 3.81808 2.12048 3.53872C2.27432 3.13712 2.49479 2.83768 2.80135 2.53032C3.10791 2.22376 3.40735 2.00328 3.80895 1.84944C4.08863 1.74072 4.48663 1.63456 5.16823 1.60464C5.91399 1.5712 6.13287 1.564 8.00094 1.564ZM8.00094 3.44161C6.06758 3.44161 4.50094 5.00825 4.50094 6.94161C4.50094 8.875 6.06758 10.4416 8.00094 10.4416C9.9343 10.4416 11.5009 8.875 11.5009 6.94161C11.5009 5.00825 9.9343 3.44161 8.00094 3.44161ZM8.00094 4.64642C9.38064 4.64642 10.4418 5.70765 10.4418 7.08735C10.4418 8.46705 9.38064 9.52828 8.00094 9.52828C6.62124 9.52828 5.56001 8.46705 5.56001 7.08735C5.56001 5.70765 6.62124 4.64642 8.00094 4.64642ZM12.1778 2.83488C12.1778 3.18991 11.8891 3.4786 11.5341 3.4786C11.1791 3.4786 10.8904 3.18991 10.8904 2.83488C10.8904 2.47985 11.1791 2.19116 11.5341 2.19116C11.8891 2.19116 12.1778 2.47985 12.1778 2.83488Z"
                          fill="#ffff"
                        ></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </ul>
            </div>
          </div>
        </div>
        <hr className=" bg-black w-[70%] sm:w-[80%] ml-16 mb-5 md:ml-20 lg:ml-28 h-0 absolute bottom-16 border-t-2 border-t-gray-200" />
        <div className="absolute bottom-4 w-full flex flex-wrap items-center justify-center">
          <h1 className="uppercase text-base font-sans font-semibold">
            Designed & Developed By :{" "}
          </h1>
          <img
            className="w-[10vw] sm:w-[4vw]  p-1 "
            src="https://itbt-website.vercel.app/Images/Screenshot_2023-11-29_202207-removebg-preview.png"
            alt=""
          />
          <h1 className="uppercase text-base font-sans font-semibold">
            Big data centre of excellence
          </h1>
        </div>
      </section>
    </div>
  );
};

export default Footer;
