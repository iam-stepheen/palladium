import React, { ReactNode, useEffect, useRef } from "react";
import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";

import { useOnClickOutside } from "usehooks-ts";
import { defaultNavItems } from "./defaultNavItems";
import { useRouter } from "next/router";

// define a NavItem prop
export type NavItem = {
  id: number;
  path: string;
  name: string;
  image: string;
  heading: ReactNode;
};
// add NavItem prop to component prop
type Props = {
  open: boolean;
  navItems?: NavItem[];
  setOpen(open: boolean): void;
};
const Sidebar = ({ open, navItems = defaultNavItems, setOpen }: Props) => {
  const router = useRouter();
  const path = router.pathname.replace("/", "");
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, (e) => {
    setOpen(false);
  });

  const logOut = () => {
    localStorage.clear();
    router.push("/auth");
  };
  return (
    <div
      className={classNames({
        "flex flex-col justify-between": true, // layout
        "bg-white text-zinc-50": true, // colors
        "md:w-full md:sticky md:top-16 md:z-0 top-0 z-20 fixed": true, // positioning
        "md:h-[calc(100vh_-_64px)] h-full w-[300px]": true, // for height and width
        "transition-transform .3s ease-in-out md:-translate-x-0": true, //animations
        "-translate-x-full ": !open, //hide sidebar to the left when closed
      })}
      ref={ref}
    >
      <nav className="md:sticky top-0 md:top-16">
        <div className="flex gap-4 justify-center items-center">
          <h2 className="text-darkBlue font-bold text-3xl my-12"></h2>
        </div>
        {/* nav items */}
        <ul className="flex flex-col gap-8">
          {navItems.map((x) => (
            <li key={x.id} className="text-center px-8">
              <Link
                className={
                  path.includes(x.path)
                    ? "flex flex-row gap-4 items-center justify-start py-2 px-4 text-textGrey text-xl bg-highlighted rounded-md"
                    : "flex flex-row gap-4 items-center justify-start py-2 px-4 text-textGrey text-xl"
                }
                href={`/${x.path}`}
              >
                <img className="w-4 h-4" src={x.image} />
                {x.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="fixed bottom-0 mb-16 flex px-12 gap-3 items-center">
        <img className="w-4 h-4" src="images/logout.png" />
        <button onClick={logOut} className="text-textGrey">
          Log Out
        </button>
      </div>
    </div>
  );
};
export default Sidebar;
