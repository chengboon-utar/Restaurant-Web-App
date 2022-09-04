
import React, { useContext, useEffect, useState } from "react";
import Logo from "../assets/logo.png";
import Avatar from "../assets/avatar.png";
import { NavLink, Outlet, useNavigate, Link } from "react-router-dom";
import { MdShoppingCart, MdLogout, MdAdd } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase-config";
import { useStateValue } from "../reducers/StateProvider";
import { actionType } from "../reducers/reducer";
import CheckOutContainer from "./CheckOutContainer";
import { Button } from "react-bootstrap";



const isActiveStyles =
    "w-18 text-green-700 font-semibold text-xl font-semibold relative before:rounded-lg before:animate-pulse  before:absolute before:content before:w-5 before:h-1 before:bottom-0 before:left-4 before:bg-green-700 transition-all ease-in-out duration-100";

const isNotActiveStyles =
    "w-18 text-textColor hover:text-green-700 text-xl font-normal before:rounded-lg relative hover:before:animate-pulse  hover:before:absolute hover:before:content hover:before:w-5 hover:before:h-1 hover:before:bottom-0 hover:before:left-5 hover:before:bg-green-700 transition-all ease-in-out duration-100";

const Header = () => {
    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const [state, dispatch] = useStateValue();

    const { user, cartItems } = state;
    const navigate = useNavigate();

    const [isMobileMenu, setIsMobileMenu] = useState(false);
    const [cartMenu, setCartMenu] = useState(false);
    const [isMenu, setIsMenu] = useState(false);

    const login = async () => {
        if (!user) {
            const { user } = await signInWithPopup(firebaseAuth, provider);
            const { refreshToken, providerData } = user;

            localStorage.setItem("user", JSON.stringify(providerData[0]));

            dispatch({
                type: actionType.SET_USER,
                user: providerData[0],
            });

        }

        else {
            setIsMenu(!isMenu);
            setIsMobileMenu(false);
        }
        console.log(user);
    };

    const logout = () => {
        setIsMenu(false);
        setIsMobileMenu(false);

        localStorage.clear();

        navigate("/", { replace: true });

        dispatch({ type: actionType.SET_USER, user: null });
        dispatch({ type: actionType.SET_CART, cartItems: [] });
    };

    useState(() => { console.log(cartMenu); }, [cartMenu]);

    return (
        <div className="sticky top-0 w-full px-2 lg:px-8 py-2 flex items-center justify-center z-50 bg-white">
            {/* desktop menu */}
            <div className="w-full hidden lg:flex items-center">
                {/* user menu */}
                <div className=" mr-auto relative">
                    <motion.img
                        whileTap={{ scale: 0.8 }}
                        src={user ? user?.photoURL : Avatar}
                        className="w-14 h-14 cursor-pointer rounded-full shadow-xl"
                        alt=""
                        onClick={login}
                    />
                    {isMenu &&
                        (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.6 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.6 }}
                                className="w-40 bg-cardColor rounded-lg shadow-2xl absolute top-16 -left-2 z-30"
                            >

                                {user.email === "chengboon7@gmail.com" &&
                                    (
                                        <NavLink to={"/createItem"} onClick={() => setIsMenu(false)}>
                                            <p className="px-4 py-2 cursor-pointer hover:bg-slate-200 flex items-center gap-3">
                                                New Item <MdAdd />
                                            </p>
                                        </NavLink>
                                    )
                                }

                                <NavLink to={"/userProfile"} onClick={() => setIsMenu(false)}>
                                    <p className="px-4 py-2 cursor-pointer hover:bg-slate-200">
                                        My Profile
                                    </p>
                                </NavLink>

                                <p
                                    className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200"
                                    onClick={logout}
                                >
                                    Logout <MdLogout />
                                </p>

                            </motion.div>
                        )
                    }
                </div>

                {/* menu actions */}
                <div className="flex flex-row items-center">

                    <NavLink
                        to={"/menu"}
                        style={{ marginRight: "30px", marginLeft: "30px" }}
                        className={({ isActive }) => isActive ? isActiveStyles : isNotActiveStyles}
                    >
                        Menu
                    </NavLink>

                    <NavLink
                        to={"/order/chicken"}
                        style={{ marginRight: "30px", marginLeft: "30px" }}
                        className={({ isActive }) => isActive ? isActiveStyles : isNotActiveStyles}
                    >
                        Order
                    </NavLink>


                    <NavLink to={"/"}
                        className="spiderweb text-3xl font-bold text-green-700 hover:text-green-500"
                    >
                        <img src={Logo} className="w-40 mx-16" alt="" />
                    </NavLink>


                    <NavLink
                        to={"/YenNing/Gallery.html"}
                        onClick={() => {window.location.replace("/YenNing/Gallery.html");}}
                        style={{ marginRight: "30px", marginLeft: "30px" }}
                        className={({ isActive }) => isActive ? isActiveStyles : isNotActiveStyles}
                    >
                        Gallery
                    </NavLink>

                    <NavLink
                        to={"/YenNing/Blog.html"}
                        onClick={() => window.location.replace('/YenNing/Blog.html')}
                        className={({ isActive }) => isActive ? isActiveStyles : isNotActiveStyles}
                        style={{ marginRight: "30px", marginLeft: "30px" }}
                    >
                        Blog
                    </NavLink>


                </div>

                <motion.div
                    whileTap={{ scale: 0.8 }}
                    className="flex items-center gap-2 bg-black px-6 py-4 rounded-md ml-auto cursor-pointer relative"
                    onClick={() => setCartMenu(!cartMenu)}
                >
                    <MdShoppingCart className="text-xl text-white" />

                    <p className="text-base text-white font-semibold">My Cart</p>

                    {cartItems && cartItems.length > 1 && (
                        <div className="w-6 h-6 rounded-sm bg-yellow-500 absolute -top-3 right-2 border border-white flex items-center justify-center">
                            <p className="text-base font-semibold">{cartItems.length}</p>
                        </div>
                    )}
                </motion.div>
            </div>

            {/* mobile menu */}
            <div className="w-full flex lg:hidden items-center">
                {/* logo */}
                <NavLink to={"/"}>
                    <motion.img
                        whileTap={{ scale: 0.8 }}
                        src={Logo}
                        className="w-40"
                        alt=""
                    />
                </NavLink>

                {/* user menu */}

                <div className="relative ml-auto cursor-pointer ">
                    <motion.img
                        whileTap={{ scale: 0.8 }}
                        src={user ? user?.photoURL : Avatar}
                        className="w-14 h-14 rounded-full shadow-xl "
                        alt=""
                        onClick={() => setIsMobileMenu(!isMobileMenu)}
                    />

                    {isMobileMenu && (
                        <motion.div
                            initial={{ opacity: 0, y: -200, scale: 0.5 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -200, scale: 0.5 }}
                            className="w-[80vw] p-4 h-auto absolute right-2 top-16 bg-white flex flex-col items-center justify-center gap-8 z-50"
                        >
                            {!user && (
                                <motion.p
                                    whileTap={{ scale: 0.8 }}
                                    className="p-2 text-center text-xl bg-gray-200 font-semibold text-gray-700 border border-gray-200 rounded-md w-full"
                                    onClick={login}
                                >
                                    Login
                                </motion.p>
                            )}
                            {user && (
                                <>
                                    <NavLink
                                        to={"/createItem"}
                                        className={({ isActive }) =>
                                            isActive ? isActiveStyles : isNotActiveStyles
                                        }
                                        onClick={() => setIsMobileMenu(false)}
                                    >
                                        New Item
                                    </NavLink>

                                    <NavLink
                                        to={"/userProfile"}
                                        className={({ isActive }) =>
                                            isActive ? isActiveStyles : isNotActiveStyles
                                        }
                                        onClick={() => setIsMobileMenu(false)}
                                    >
                                        My Profile
                                    </NavLink>
                                </>
                            )}

                            <NavLink
                                to={"/menu"}
                                className={({ isActive }) =>
                                    isActive ? isActiveStyles : isNotActiveStyles
                                }
                                onClick={() => setIsMobileMenu(false)}
                            >
                                Menu
                            </NavLink>

                            <NavLink
                                to={"/order"}
                                className={({ isActive }) =>
                                    isActive ? isActiveStyles : isNotActiveStyles
                                }
                                onClick={() => setIsMobileMenu(false)}
                            >
                                Order
                            </NavLink>

                            <NavLink
                                to={"/contact"}
                                className={({ isActive }) =>
                                    isActive ? isActiveStyles : isNotActiveStyles
                                }
                                onClick={() => setIsMobileMenu(false)}
                            >
                                Contact
                            </NavLink>

                            <NavLink
                                to={"/about"}
                                className={({ isActive }) =>
                                    isActive ? isActiveStyles : isNotActiveStyles
                                }
                                onClick={() => setIsMobileMenu(false)}
                            >
                                About Us
                            </NavLink>

                            <motion.div
                                whileTap={{ scale: 0.8 }}
                                className="flex items-center gap-2 bg-black px-6 py-4 rounded-md cursor-pointer relative"
                                onClick={() => {
                                    setIsMobileMenu(false);
                                    setCartMenu(!cartMenu);
                                }}
                            >
                                <MdShoppingCart className="text-xl text-white" />
                                <p className="text-base text-white font-semibold">My Cart</p>
                                {cartItems && cartItems.length > 0 && (
                                    <div className="w-6 h-6 rounded-sm bg-yellow-500 absolute -top-3 right-2 border border-white flex items-center justify-center">
                                        <p className="text-base font-semibold">
                                            {cartItems.length}
                                        </p>
                                    </div>
                                )}
                            </motion.div>

                            {user && (
                                <motion.p
                                    whileTap={{ scale: 0.8 }}
                                    className="p-2 text-center text-xl bg-gray-200 font-semibold text-gray-700 border border-gray-200 rounded-md w-full"
                                    onClick={logout}
                                >
                                    Logout
                                </motion.p>
                            )}
                        </motion.div>
                    )}
                </div>
            </div>

            {cartMenu && (
                <motion.div
                    initial={{ opacity: 0, x: 200 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 200 }}
                    className="fixed top-0 right-0 z-50"
                >
                    <CheckOutContainer cartMenu={cartMenu} setCartMenu={setCartMenu} />
                </motion.div>
            )}
        </div>
    );
};

export default Header;
