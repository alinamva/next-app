"use client";
import { useState } from "react";
import NavLink from "./navLink";
import Image from "next/image";
import { handleLogout } from "@/components/lib/actions";
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
const Links = ({ session }) => {
  const [open, setOpen] = useState(false);

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
        {session?.user ? (
          <>
            {session.user?.isAdmin && (
              <NavLink item={{ title: "Admin", path: "/admin" }} />
            )}
            <form action={handleLogout}>
              <button className="p-2 cursor-pointer font-bold bg-text text-bg rounded">
                Logout
              </button>
            </form>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <Image
        width={30}
        height={30}
        src="/menu.png"
        alt="menu"
        onClick={() => setOpen((prev) => !prev)}
        className="flex md:hidden"
      />
      {open && (
        <div className="absolute border-l border-gray-600 bg-bg top-24 min-h-[87%]  w-1/2 right-0 flex flex-col items-center justify-center gap-3 overflow-hidden md:hidden ">
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
