import { CodeXml, Youtube } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="text-[var(--sub-color)] leading-none flex gap-2 justify-between items-center flex-wrap">
      <ul className="flex gap-5 items-center">
        <Link to={"#"}>
          <li className="hover:text-[var(--text-color)] duration-200 flex gap-1 items-center">
            <Youtube className="w-[14px] h-[14px] list-none" />
            <span>youtube</span>
          </li>
        </Link>
        <Link to={"#"}>
          <li className="hover:text-[var(--text-color)] duration-200 flex gap-1 items-center">
            <CodeXml className="w-[14px] h-[14px] list-none" />
            <span>github</span>
          </li>
        </Link>
      </ul>
      <ul className="flex gap-5 items-center">
        <Link to={"#"}>
          <li className="hover:text-[var(--text-color)] duration-200 flex gap-1 items-center text-xs">
            <span>&copy; 2024 F16s</span>
          </li>
        </Link>
      </ul>
    </div>
  );
}
