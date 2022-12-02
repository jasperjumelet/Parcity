import "../index.css";
import { useState, useEffect } from 'react';

const NavBar = () => {

  const [posY0, setPosY0] = useState(true);

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset === 0) {
        setPosY0(true);
      }
      else {
        setPosY0(false);
      }
    }
  })

  return (
    <>
      <div className="fixed z-50 w-full items-center justify-center">
        <div className="grid grid-cols-2">
          <div className="text-nav font-bold text-center p-10 ">
            <div className="flex items-center">
              <a href="#" className="flex items-center">
                <img
                  src="/images/parcity3.svg"
                  className="h-6 mr-6 sm:h-12"
                  alt="Parcity Logo"
                />
              </a>
              <div
                className="hidden w-full nav:block nav:w-auto"
                id="navbar-default"
              >
                <ul className="flex">
                  <li>
                    <a href="#" className="font-jetbrains-mono font-[1100] text-xl text-gray-400 mx-8 py-5">BUY</a>
                  </li>
                  <li>
                    <a href="#" className="font-jetbrains-mono font-[1100] text-xl text-gray-400 mx-8 py-5">SELL</a>
                  </li>
                  <li>
                    {/* <a href="#" className="text-gray-400 mx-8 py-5">OPTIONS</a>  */}
                    {/* dropdown ->  */}
                    <button
                      id="dropdownNavbarLink"
                      data-dropdown-toggle="dropdownNavbar"
                      className="flex items-center justify-between w-full py-2 px-4 pl-3 ml-8 pr-4 font-jetbrains-mono font-[1100] text-xl text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                    >
                      OPTIONS{" "}
                      <svg
                        className="w-5 h-5 ml-1"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        >
                        </path>
                      </svg>
                    </button>

                    {/* menu  */}
                    <div
                      id="dropdownNavbar"
                      className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                    >
                      <ul
                        className="py-1 text-sm text-gray-700 dark:text-gray-400"
                        aria-labelledby="dropdownLargeButton"
                      >
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Dashboard
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Settings
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Earnings
                          </a>
                        </li>
                      </ul>
                      <div className="py-1">
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                        >
                          Sign out
                        </a>
                      </div>
                    </div>
                    {/* end dropdown  */}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="text-nav font-bold text-center p-10">
            <button
              data-collapse-toggle="navbar-dropdown"
              type="button"
              className="flex items-center float-right place-items-end p-2 ml-2 text-gray-100 rounded-md nav:hidden hover:bg-sky-700/50 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-dropdown"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-8 h-8 "
                aria-hidden="true"
                fill="white"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                >
                </path>
              </svg>
            </button>
            <div className="flex items-center justify-end">
              <div className="flex items-center">
                <img
                  src="/parcity3.svg"
                  className="h-6 mr-3 sm:h-12 opacity-0"
                  alt="Parcity Logo"
                />
              </div>
              <div
                className="hidden w-full nav:block nav:w-auto"
                id="navbar-default"
              >
                <ul className="flex">
                  <li>
                    <a href="#" className="font-jetbrains-mono font-[1100] text-xl text-gray-400 mx-8 py-5">LOGIN</a>
                  </li>
                  <li>
                    <a href="#" className="font-jetbrains-mono font-[1100] text-xl text-gray-400 mx-8 py-5">SIGN UP</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
