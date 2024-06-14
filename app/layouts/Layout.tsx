import { Link, useLocation } from "@remix-run/react";
import { PropsWithChildren, useState } from "react";
import {IconX, IconAlignJustified} from "@tabler/icons-react"

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
						<IconX />
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
                <IconAlignJustified />
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
