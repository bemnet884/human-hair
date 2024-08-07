import React from 'react';
import { Link } from 'react-router-dom';
import useCurrentPath from '../sections/useCurrentPath'; // Adjust the path as needed

const Navigation = () => {
  const currentPath = useCurrentPath();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/About-Us", label: "About Us" },
    {
      href: /* currentPath === "/" ? "#products" :*/ "/All-Products",
      label: "Products"
    },
    { href: "/Contact-Us", label: "Contact Us" },
  ];

  // const handleProductsClick = (event) => {
  //   if (currentPath === "/") {
  //     event.preventDefault();
  //     document.getElementById("products").scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  return (
   <header className='max-container padding-x py-2  z-10 w-full'>
    <nav className='flex justify-between items-center max-container'>
       <ul className='flex-1 flex justify-center items-center font-semibold gap-16 max-lg:hidden hover:cursor-pointer'>
        {navLinks.map((link, index) => (
          <li key={index} className='text-primary  hover:text-violet-400'>
            {link.href.startsWith("#") ? (
              <a
                href={link.href}
                className="text-lg font-semibold cursor-pointer"
                // onClick={handleProductsClick}
              >
                {link.label}
              </a>
            ) : (
              <Link
                to={link.href}
                className="text-lg max-sm:text-sm font-semibold"
              >
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
    </header>

  );
};

export default Navigation;
