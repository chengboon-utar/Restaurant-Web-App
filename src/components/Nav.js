import { useState, useEffect, useContext } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
} from "@material-tailwind/react";

import { Link, Outlet } from "react-router-dom";
import { Button } from "react-bootstrap";


import { getAuth } from "firebase/auth";
import { app } from "../firebase-config";
import { connect, useSelector } from "react-redux";



function Nav() {

  const [openNav, setOpenNav] = useState(false);
  useEffect(() => { window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false)); }, []);

  const firebaseAuth = getAuth(app);

  const list = [
    ['Home', '/'],
    ['Menu', '/menu'],
    ['Order', '/order'],
    ['About Us', '/about'],
    ['Contact', '/contact']
  ]

  const navList = list.map(([name, path], index) => (
    <Typography key={index} variant="small" color="blue-gray" className="p-1 font-normal">
      <Link to={path} onClick={() => setOpenNav(false)} className="flex items-center">{name}</Link>
    </Typography>
  ));

  return (
    <>
    <Navbar
      className="
      sticky top-0 z-50 mx-auto bg-green-900 text-white 
      px-4 py-2 lg:px-8 lg:py-4
    "
    >
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">

        <span></span>

        <div className="hidden lg:block">
          <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            {navList}
          </ul>
        </div>

        <span>
          <Typography variant="small" color="blue-gray" className="p-1 font-normal">
            <Link className="hidden lg:block" to="/login" onClick={() => setOpenNav(false)}>Sign In</Link>
          </Typography>
        </span>

        <Button variant="text" onClick={() => setOpenNav(!openNav)}
          className="ml-auto flex items-center justify-between h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden">
          {openNav
            ?
            (<svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            )
            :
            (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
            )
          }
        </Button>


      </div>

      <MobileNav open={openNav}>
        <div className="relative items-center mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">

          {navList}

          {useSelector(state => state.auth)
            ? (<Button variant="outline-primary" className="mx-2" onClick={() => firebaseAuth.signOut()}>Logout</Button>)
            : (<Typography variant="small" color="blue-gray" className="p-1 font-normal"><Link onClick={() => setOpenNav(false)} to="/login">Sign In</Link></Typography>)}

        </div>
      </MobileNav>
    </Navbar>
    <Outlet />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(Nav);
