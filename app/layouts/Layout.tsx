import { Link, useLocation } from "@remix-run/react";
import { PropsWithChildren, useState } from "react";

export const Layout = ({ children }: PropsWithChildren) => {
  const { pathname } = useLocation();
  // sidebar stuf
  const [isSidebarEnable, setIsSidebarEnable] = useState(true);

	console.log(pathname)

  const toggleSidebar = () => {
    setIsSidebarEnable(!isSidebarEnable);
    console.log(isSidebarEnable);
  };

  return (
    <div className="flex flex-grow">
      {/* sidebar */}
      <div
        className={`pl-4 pr-6 bg-stone-200 h-screen transition transform duration-700 ${
          !isSidebarEnable ? "hidden" : ""
        }`}
      >
        <div className="flex justify-between">
          <div>MangaKU</div>
          <button onClick={toggleSidebar}>
          <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
					</button>
        </div>
        <div>
          <div className="flex flex-col dark:text-white text-black text-sm">
            <div className={`hover:bg-neutral-300 hover:bg-opacity-60 pr-2 rounded-md py-1 ${pathname === '/' || pathname === '' ? 'bg-orange-500 hover:bg-orange-600' : ''}`}>
              <Link className="pl-4 pr-24 " to={"/"}>
                Home
              </Link>
            </div>
            <div className="hover:bg-neutral-300 hover:bg-opacity-60 pr-2 rounded-md py-1">
              <Link className="pl-4 pr-24 " to={"/title/1231"}>
                Manga List
              </Link>
            </div>
            <div className="hover:bg-neutral-300 hover:bg-opacity-60 pr-2 rounded-md py-1">
              <Link className="pl-4 pr-24 " to={"/"}>
                Book Mark
              </Link>
            </div>
            <div className="hover:bg-neutral-300 hover:bg-opacity-60 pr-2 rounded-md py-1">
              <Link className="pl-4 pr-24 " to={"/"}>
                Advance Search
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-grow bg-blue-300">
        {/* Navbar */}
        <div className="flex flex-col bg-green-200">
          <div className="flex justify-between">
            <div>
              <button
                className={`${isSidebarEnable ? "hidden" : ""}`}
                onClick={toggleSidebar}
              >
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-align-justified"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l12 0" /></svg>
              </button>
            </div>
            <div>
              <input type="search" name="" id="" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div>{children}</div>
      </div>
    </div>
  );
};
