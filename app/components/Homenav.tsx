import { useState } from "react";

export default function HomeNav() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span>
          </a>
          <button
            className="flex md:hidden flex-col h-10 w-10 justify-center items-center group"
            onClick={() => setMenuOpen(!isMenuOpen)}
          >
            <div
              className={`h-1 w-6 my-0.5 rounded-full bg-blue-600 transition ease transform duration-300 ${
                isMenuOpen
                  ? "rotate-45 translate-y-2 opacity-50 group-hover:opacity-100"
                  : "opacity-50 group-hover:opacity-100"
              }`}
            />
            <div
              className={`h-1 w-6 my-0.5 rounded-full bg-blue-600 transition ease transform duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
              }`}
            />
            <div
              className={`h-1 w-6 my-0.5 rounded-full bg-blue-600 transition ease transform duration-300 ${
                isMenuOpen
                  ? "-rotate-45 -translate-y-2 opacity-50 group-hover:opacity-100"
                  : "opacity-50 group-hover:opacity-100"
              }`}
            />
          </button>
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              isMenuOpen ? "" : "hidden"
            }`}
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
              <li>
                <a
                  href="/home"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/myevents"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  My Events
                </a>
              </li>
              <li>
                <a
                  href="/setting"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="/account"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Account
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
