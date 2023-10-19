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

const Navbar = () => {
  return (
    <div className='flex flex-row justify-between p-4 backdrop-blur-sm sticky top-0 z-[1000]'>
      {/* use image/next for the logo */}
      <div>logo</div>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href='/' legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Documentation
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navbar;
