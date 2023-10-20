import Link from "next/link";
import React from "react";
import { InstagramIcon, TwitterIcon, FacebookIcon } from "lucide-react";

const Footer = () => {
  return (
    <div className='bottom-0 sticky flex flex-col w-full space-y-2'>
      <div className='flex justify-between py-2 px-4'>
        {/* use image/next for the logo */}
        {/* <Image src={""} alt="" className='hidden md:block'/> */}
        {/*comment the line below when include the logo*/}
        <div>LOGO</div>
        <div>
          <span className='flex flex-row space-x-4'>
            <Link href={""}>
              <InstagramIcon />
            </Link>
            <Link href={""}>
              <TwitterIcon />
            </Link>
            <Link href={""}>
              <FacebookIcon />
            </Link>
          </span>
        </div>
      </div>
      <div className='flex justify-center bg-black py-1'>
        <p className='text-sm font-light'>Developed by Your Company Name</p>
      </div>
    </div>
  );
};

export default Footer;
