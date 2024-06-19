import { Link, useLocation } from "@remix-run/react";
import { PropsWithChildren, useState } from "react";

export const Layout = ({ children }: PropsWithChildren) => {
  const { pathname } = useLocation();
  // sidebar stuf
  const [isSidebarEnable, setIsSidebarEnable] = useState(false);

  console.log(pathname);

  const toggleSidebar = () => {
    setIsSidebarEnable(!isSidebarEnable);
    console.log(isSidebarEnable);
  };

  return (
    <div className="flex">
      {/* sidebar */}
      <div
        className={`pl-4 pr-6 bg-stone-200 h-screen fixed md:relative z-40 md:z-10 md:w-64 inset-y-0 ${
          !isSidebarEnable ? "hidden" : ""
        }`}
      >
        <div>
          <div className="flex justify-between">
            <div className="my-3 text-2xl font-bold">MangaKU</div>
            <button onClick={toggleSidebar}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-x"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M18 6l-12 12" />
                <path d="M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div>
            <div className="flex flex-col dark:text-white text-black text-sm z-40">
              <div
                className={`hover:bg-neutral-300 hover:bg-opacity-60 pr-2 rounded-md py-0.5 ${
                  pathname === "/" || pathname === ""
                    ? "bg-orange-500 hover:bg-orange-600 text-white"
                    : ""
                }`}
              >
                <Link className="pl-2 pr-24 flex" to={"/"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-home"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                    <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                    <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                  </svg>
                  <div className="text-center my-1 ml-2">Home</div>
                </Link>
              </div>
              <div
                className={`hover:bg-neutral-300 hover:bg-opacity-60 pr-2 rounded-md py-0.5 ${
                  pathname === "/updates" || pathname === ""
                    ? "bg-orange-500 hover:bg-orange-600 text-white"
                    : ""
                }`}
              >
                <Link className="pl-2 pr-24 flex" to={"/"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-home"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                    <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                    <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                  </svg>
                  <div className="text-center my-1 ml-2">Updates</div>
                </Link>
              </div>
              <div
                className={`hover:bg-neutral-300 hover:bg-opacity-60 pr-2 rounded-md py-0.5 ${
                  pathname === "/updates" || pathname === ""
                    ? "bg-orange-500 hover:bg-orange-600 text-white"
                    : ""
                }`}
              >
                <Link className="pl-2 pr-24 flex" to={"/"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-home"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                    <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                    <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                  </svg>
                  <div className="text-center my-1 ml-2">Home</div>
                </Link>
              </div>
              <div
                className={`hover:bg-neutral-300 hover:bg-opacity-60 pr-2 rounded-md py-0.5 ${
                  pathname === "/updates" || pathname === ""
                    ? "bg-orange-500 hover:bg-orange-600 text-white"
                    : ""
                }`}
              >
                <Link className="pl-2 pr-24 flex" to={"/"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-home"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                    <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                    <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                  </svg>
                  <div className="text-center my-1 ml-2">Home</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* content */}
      <div
        className={`bg-blue-300 flex-1 ${
          isSidebarEnable ? "opacity-50 xl:opacity-100 " : ""
        }`}
      >
        {/* Navbar */}
        <div className="flex flex-col bg-green-200 mx-0 lg:mx-64">
          <div className="flex justify-between items-center py-2">
            <div>
              <button
                className={`${isSidebarEnable ? "hidden" : ""}`}
                onClick={toggleSidebar}
              >
                <div className="flex items-center">
                  <svg
                    width={24}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 6l16 0" />
                    <path d="M4 12l16 0" />
                    <path d="M4 18l12 0" />
                  </svg>
                </div>
              </button>
            </div>
            <div>
              <input type="search" name="" id="" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="mx-0 lg:mx-64 bg-white">{children}</div>
      </div>
    </div>
  );
};
