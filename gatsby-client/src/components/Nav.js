import { Link } from "gatsby";
import styled from 'styled-components';
import React, { useRef, useState, useLayoutEffect } from "react"


function Navbar() {
  const dropdownRef = useRef(null);
  const [shown, setShown] = useState(false);

  const toggleDropdown = () => setShown((prev) => !prev);

  useLayoutEffect(() => {
    if (!dropdownRef.current)
      return;

    const el = dropdownRef.current;
    requestAnimationFrame(() => {
      if (shown) {
        // el.style.display = "block";
        el.style.transition = "max-height 0.5s"
        el.style.maxHeight = "160px";
      } else {
        // el.style.display = "none"
        el.style.transition = "max-height .5s"
        el.style.maxHeight = "0px";
      }
    })
  })
  return (
    <Nav className="z-50 transform -translate-x-1/2 left-1/2 navbar px-10 py-4 bg-F7F5F2 hover:shadow-md">
      <div>
        <div className="grid grid-cols-11 gap-x-0">
          <div className="col-start-1 col-span-1">
            <Title>PANGCU</Title>
          </div>
          <div className="nav-collapse hidden lg:col-start-3 col-span-10 lg:grid grid-cols-7 gap-0 content-center text-center">
            <div className="a col-start-1 col-span-1 flex"><Link className="self-center text-center px-3 link" to="#1" href="#1">Home</Link></div>
            <div className="a col-start-2 col-span-1 flex"><Link className="self-center text-center px-3 link" to="#2" href="#2">Chat</Link></div>
            <div className="a col-start-3 col-span-1 flex"><Link className="self-center text-center px-3 link" to="#3" href="#3">Page 3</Link></div>
            <div className="a col-start-4 col-span-1 flex"><Link className="self-center text-center px-3 link" to="#4" href="#4">Page 4</Link></div>
            <div className="col-start-11 col-end-12 flex">
              <button className="focus:outline-none text-black bg-F9C74F focus:ring rounded-xl text-xs py-2 px-4 self-center Poppins mr-2">Sign up</button>
              <button className="focus:outline-none text-gray-450 border-gray-350 border focus:ring rounded-xl text-xs py-2 px-4 self-center Poppins">Sign in</button>
            </div>
          </div>
          <div className="relative text-left col-start-13 flex">
            <div className="flex self-center justify-self-aut">
              <button onClick={() => {
                toggleDropdown()
              }} type="button"
                className="
                            hidden self-center justify-self-auto min-w-8 p-2 h-full justify-center rounded-md 
                            border border-gray-300 shadow-sm bg-white text-sm font-medium text-gray-700 
                            hover:bg-gray-50 
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                id="options-menu" aria-expanded="true" aria-haspopup="true">
                <svg className="self-center justify-self-auto h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg>
              </button>
            </div>
          </div>
          {/* rounded-md ring-1 shadow-lg ring-black ring-opacity-5 */}
          <div ref={dropdownRef} id="dropdown-menu" className="max-h-screen overflow-y-hidden lg:inline origin-top-right right-0 mt-2 w-56 focus:outline-nonew" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <div className="py-1" role="none">
              <Link to="#1" onClick={toggleDropdown} href="#1" className="block px-4 py-2 text-sm text-gray-700 bg-gradient-to-r hover:from-gray-100 hover:to-transparent hover:text-gray-900 hover:border-l-4 border-yellow-300" role="menuitem">Home</Link>
              <Link to="#2" onClick={toggleDropdown} href="#2" className="block px-4 py-2 text-sm text-gray-700 bg-gradient-to-r hover:from-gray-100 hover:to-transparent hover:text-gray-900 hover:border-l-4 border-yellow-300" role="menuitem">Chat</Link>
              <Link to="#3" onClick={toggleDropdown} href="#3" className="block px-4 py-2 text-sm text-gray-700 bg-gradient-to-r hover:from-gray-100 hover:to-transparent hover:text-gray-900 hover:border-l-4 border-yellow-300" role="menuitem">License</Link>
              <Link to="#4" onClick={toggleDropdown} href="#4" className="block px-4 py-2 text-sm text-gray-700 bg-gradient-to-r hover:from-gray-100 hover:to-transparent hover:text-gray-900 hover:border-l-4 border-yellow-300" role="menuitem">Something else</Link>
            </div>
          </div>

        </div>
      </div>
    </Nav>
  );
}

export default Navbar;

const Title = styled.h1`
  font-family: Poppins;
  font-size: 30px;
  font-style: bold;
  font-weight: 900;
  letter-spacing: 0em;
  text-align: left;
`;

const Nav = styled.nav`
  display: block;
  position:fixed;
  margin-left: auto;
  margin-right: auto;
  margin:auto;
  width:100vw;
`;