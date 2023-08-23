import React from "react";
import {
  CalendarIcon,
  FolderIcon,
  HomeIcon,
  UserGroupIcon,
} from "@heroicons/react/solid";
import { NavItem } from "./SideBar";

export const defaultNavItems: NavItem[] = [
  {
    id: 1,
    path: "createProduct",
    name: "Create Product",
    image: "images/dashboard.png",
    heading: <p className="text-darkBlue font-bold text-2xl">Hello Stephen</p>,
  },
  {
    id: 2,
    path: "viewProduct",
    name: "All Products",
    image: "images/dashboard.png",
    heading: <p className="text-darkBlue font-bold text-2xl">All Users</p>,
  },
];
