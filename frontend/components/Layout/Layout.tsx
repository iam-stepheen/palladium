import React, { PropsWithChildren, ReactElement, useState } from "react";
import Navbar from "./NavBar";
import Sidebar from "./SideBar";

const Layout = (page: ReactElement) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="grid min-h-screen grid-rows-header bg-zinc-100">
      <div>
        <Navbar onMenuButtonClick={() => setSidebarOpen((prev) => !prev)} />
      </div>

      <div className="grid md:grid-cols-sidebar">
        <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
        <div className="bg-background py-8 px-12 overflow-y-scroll pb-16">
          {page}
        </div>
      </div>
    </div>
  );
};

export default Layout;
