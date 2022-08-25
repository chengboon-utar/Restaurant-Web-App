import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";

import { Link } from "react-router-dom";




export default function Nav() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const list = [
    ['Home', '/'],
    ['Menu', '/menu'],
    ['About Us', '/about'],
    ['Contact', '/contact']
  ]

  const navList = list.map(([name, path]) => (
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
        <Link to={path} className="flex items-center">{name}</Link>
      </Typography>
  ));

  return (
    <Navbar className="sticky top-0 z-50 mx-auto py-2 px-4 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">

        <span></span>
        <div className="hidden lg:block">
          <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            {navList}
          </ul>
        </div>
        <span></span>

        <IconButton variant="text" ripple={false} onClick={() => setOpenNav(!openNav)}
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden">
          {openNav ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </IconButton>

      </div>

      <MobileNav open={openNav}>
        <ul className="relative items-center mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
          {navList}
        </ul>
      </MobileNav>

    </Navbar>
  );
}
