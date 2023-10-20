"use client";

import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
  NavigationMenuLink,
} from "./ui/navigation-menu";
import Link from "next/link";
import { Navigation } from "@/data/content-data";

const Navbar = () => {
  return (
    <div className='flex flex-row justify-center md:justify-between p-4 sticky top-0 z-[1000]'>
      {/* use image/next for the logo */}
      {/* <Image src={""} alt="" className='hidden md:block'/> */}
      {/*comment the line below when include the logo*/}
      <div className='hidden md:block'>LOGO</div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem className='space-x-2'>
            {Navigation.map((data, key) => {
              return (
                <>
                  <Link href={data.Link} legacyBehavior passHref key={key}>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      {data.Name}
                    </NavigationMenuLink>
                  </Link>
                </>
              );
            })}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navbar;
