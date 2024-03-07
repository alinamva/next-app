"use client";
import Link from "next/link";
import { LinkProps } from "./Links";
import { usePathname } from "next/navigation";

const NavLink = ({ item }: LinkProps) => {
  const pathName = usePathname();
  return (
    <Link
      href={item.path}
      key={item.title}
      className={`hover:bg-text hover:text-bg min-w-20 flex justify-center items-center text-sm px-3 py-1 rounded-3xl ${
        pathName === item.path && "bg-text text-bg "
      } `}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
