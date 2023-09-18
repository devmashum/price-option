import { list } from "postcss";
import Link from "../link/link";
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdRestaurantMenu } from 'react-icons/md';
import { useState } from "react";

const NavBar = (route) => {
    const [open, setOpen] = useState(false);
    const routes = [
        { path: '/', id: 1, name: 'Home' },
        { path: '/about', id: 2, name: 'About' },
        { path: '/services', id: 3, name: 'Services' },
        { path: '/contact', id: 4, name: 'Contact' },
        { path: '/products', id: 5, name: 'Products' }
    ];

    return (
        <nav>
            <div className="md:hidden " onClick={() => setOpen(!open)}>
                {
                    open === true ? <MdRestaurantMenu className="text-3xl"></MdRestaurantMenu> : <GiHamburgerMenu className="text-3xl "></GiHamburgerMenu>
                }
            </div>
            <ul className={`md:flex absolute md:static p-7 bg-yellow-200 px-6 shadow-lg duration-1000 ${open ? 'top-7' : '-top-60'}`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;