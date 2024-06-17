import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";

const Navbar = ({handlelogin}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPostJobPage, setIsPostJobPage] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsPostJobPage(location.pathname === '/post-job');
  }, [location]);

  const handleMenuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { path: "/", title: "Home" },
    { path: "/my-job", title: "My Job" },
    { path: "/salary", title: "Salary Guide" },
    //{ path: isPostJobPage ? "/" : "/post-job", title: isPostJobPage ? "Find Job" : "Post a Job" },
  ];

  return (
    <header className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
      <nav className='flex justify-between items-center py-6'>
        <a href='/' className='flex items-center gap-2 text-2xl text-primary'>
          <svg
            fill="#40C057"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            width="30px"
            height="30px"
          >
            <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 
            23 17.597385 22.148986 19.322266 20.736328 L 25.292969 
            26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 
            19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 
            18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 
            17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z" />
          </svg>
          <span>
            Job Board
          </span>
        </a>

        {/* nav items for large devices */}
        <ul className='hidden md:flex gap-12'>
          {
            navItems.map(({ path, title }) => (
              <li key={path} className='text-sm md:text-base lg:text-lg text-primary'>
                <NavLink
                  to={path}
                  className={({ isActive }) => isActive ? "active" : ""}
                >
                  {title}
                </NavLink>
              </li>
            ))
          }
        </ul>
        {/*signup and login buttons*/}
        <div className='text-sm md:text-base lg:text-lg text-primary font-medium space-x-5 hidden md:block lg:block'>
          <Link to="/login" className='py-2 px-5 border rounded bg-green-800 text-white' onClick={handlelogin}>Login</Link>
          {/*<Link to="/signup" className='py-2 px-5 border rounded bg-green-800 text-white'>SignUp</Link>*/}
        </div>

        {/* mobile menu */}
        <div className='md:hidden block'>
          <button onClick={handleMenuToggler}>
            {
              isMenuOpen ? <FaXmark className='w-5 h-5 text-primary' /> : <FaBarsStaggered className='w-5 h-5 text-primary' />
            }
          </button>
        </div>
      </nav>

      {/*navItems for mobile */}
      <div className={`px-4 bg-green-100 py-rounded-sm ${isMenuOpen ? "" : "hidden"}`}>
        <ul>
          {
            navItems.map(({ path, title }) => (
              <li key={path} className='text-base text-primary first:text-primary py-1'>
                <NavLink
                  to={path}
                  className={({ isActive }) => isActive ? "active" : ""}
                  onClick={() => setIsMenuOpen(false)} // Close the menu after clicking a link
                >
                  {title}
                </NavLink>
              </li>
            ))
          }
          <li className='text-sm md:text-base lg:text-lg text-primary py-1'>
            <Link to="/login">Login</Link>
          </li>
          {/*<li className='text-sm md:text-base lg:text-lg text-primary py-1'>
            <Link to="/signup">SignUp</Link>
          </li>*/}
        </ul>
      </div>
    </header>
  );
}

export default Navbar;