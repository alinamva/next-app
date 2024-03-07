"use client";
import { useState } from "react";
import NavLink from "./navLink";
interface Link {
  path: string;
  title: string;
}

export interface LinkProps {
  item: Link;
}
const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];
const Links = () => {
  const [open, setOpen] = useState(false);

  const session = true;
  const isAdmin = true;
  return (
    <div>
      <div className="hidden md:flex gap-2">
        {links.map((link) => (
          <NavLink
            item={link}
            key={link.title}
          />
        ))}
        {session ? (
          <>
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <button className="p-2 cursor-pointer font-bold bg-text text-bg rounded">
              Logout
            </button>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex md:hidden"
      >
        Menu
      </button>
      {open && (
        <div className="absolute top-24 min-h-[87%] w-1/2 right-0 flex flex-col items-center justify-center gap-3 overflow-hidden md:hidden ">
          {links.map((link) => (
            <NavLink
              item={link}
              key={link.title}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
