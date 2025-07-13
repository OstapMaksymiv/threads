"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Input } from "../ui/input";
interface Props {
  routeType: string;
}
const Searchbar = ({ routeType }: Props) => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (search) {
        router.push(`/${routeType}?q=` + search);
      } else {
        router.push(`/${routeType}`);
      }
    }, 300);
    return () => clearTimeout(delayDebounceFn);
  }, [search, routeType]);

  return (
    <div className="searchbar">
      <Image
        src="/assets/search-gray.svg"
        alt="search"
        width={24}
        height={24}
        className="object-contain"
      />
      <Input
        id="text"
        value={search}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearch(e.target.value)
        }
        placeholder={`${
          routeType !== "/search" ? "Search communities" : "Search creators"
        }`}
        className="no-focus searchbar_input"
      />
    </div>
  );
};

export default Searchbar;
