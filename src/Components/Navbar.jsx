import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import logo from "../assets/amb.png";
import { Link, useNavigate } from "react-router-dom";

export default function NavbarContent() {
  const [openNav, setOpenNav] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 text-md uppercase font-[500] text-gray-800 hover:text-[#4d3286]"
      >
        <Link to="/" className="flex items-center">
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 text-md uppercase font-[500] text-gray-800 hover:text-black"
      >
        <Menu>
          <MenuHandler>
            <Link variant="gradient">Products </Link>
          </MenuHandler>
          <MenuList className="z-50 text-[17px] mt-[25px] border-none bg-gray-100 space-y-2 text-gray-800 hidden lg:flex lg:flex-col items-start">
            <Link to="products/conventional">
              <MenuItem className="hover:text-black hover:bg-slate-200 transition-all py-1 border-none">
                Conventional Coating
              </MenuItem>
            </Link>
            <Link to="products/decorative">
              <MenuItem className="hover:text-black hover:bg-slate-200 transition-all py-1 border-none">
                Decorative Coating
              </MenuItem>
            </Link>
            <Link to="products/industrial">
              <MenuItem className="hover:text-black hover:bg-slate-200 transition-all py-1 border-none">
                Industrial Coating
              </MenuItem>
            </Link>
            <Link to="products/customizable">
              <MenuItem className="hover:text-black hover:bg-slate-200 transition-all py-1 border-none">
                Customizable Coating
              </MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 text-md uppercase font-[500] text-gray-800 hover:text-black"
      >
        <Link to="/about" className="flex items-center">
          About Us
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 text-md uppercase font-[500] text-gray-800 hover:text-black"
      >
        <Link to="/contact" className="flex items-center">
          Contact Us
        </Link>
      </Typography>
    </ul>
  );

  const mobNav = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 text-md uppercase font-[500] text-gray-800 hover:text-[#4d3286]"
      >
        <Link to="/" className="flex items-center">
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 text-md uppercase font-[500] text-gray-800 hover:text-black"
      >
        <Menu>
          <MenuHandler>
            <Link variant="gradient">Products </Link>
          </MenuHandler>
          <MenuList className="z-50 text-[17px] ml-[120px] mt-[-30px] border-none bg-gray-100 space-y-2 text-gray-800">
            <Link to="products/conventional">
              <MenuItem className="hover:text-black hover:bg-slate-200 transition-all py-1 border-none">
                Conventional Coating
              </MenuItem>
            </Link>
            <Link to="products/decorative">
              <MenuItem className="hover:text-black hover:bg-slate-200 transition-all py-1 border-none">
                Decorative Coating
              </MenuItem>
            </Link>
            <Link to="products/industrial">
              <MenuItem className="hover:text-black hover:bg-slate-200 transition-all py-1 border-none">
                Industrial Coating
              </MenuItem>
            </Link>
            <Link to="products/customizable">
              <MenuItem className="hover:text-black hover:bg-slate-200 transition-all py-1 border-none">
                Customizable Coating
              </MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 text-md uppercase font-[500] text-gray-800 hover:text-black"
      >
        <Link to="/about" className="flex items-center">
          About Us
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 text-md uppercase font-[500] text-gray-800 hover:text-black"
      >
        <Link to="/contact" className="flex items-center">
          Contact Us
        </Link>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="bg-gray-100 p-0 shadow-none">
      <div className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4 ">
        <div className="container mx-auto flex items-center justify-between text-black">
          <Link to="/" className="flex items-center justify-between">
            <Typography
              as="a"
              href="#"
              variant="small"
              className="mr-4 cursor-pointer py-1.5 text-md uppercase font-[500] text-black"
            >
              <span className="flex items-center">
                <img src={logo} width={50} alt="" />{" "}
                <h2 className="text-2xl ml-2 uppercase font-bold body-font font-poppins text-[#4d3286]">
                  Paints
                </h2>
              </span>
            </Typography>
          </Link>
          <div className="hidden lg:block ">{navList}</div>
            <Button
             onClick={()=> navigate('/contact')}
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block hover:shadow-lg  hover:border hover:border-black hover:bg-transparent hover:text-[#4d3286] rounded-md transition-all text-md bg-[#4d3286] text-white outline-none border-none"
            >
              <span>Enquire Us</span>
            </Button>

          <Button
            variant="text"
            className="ml-auto h-[100%] w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden top-0"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6 unset"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </Button>
        </div>
        <MobileNav open={openNav}>
          <div className="container mx-auto">
            {mobNav}
            <Button
              onClick={()=> navigate('/contact')}
              variant="gradient"
              size="sm"
              fullWidth
              className="mb-2 hover:shadow-lg  hover:border hover:border-black hover:bg-transparent hover:text-[#4d3286] rounded-md transition-all bg-[#4d3286] text-white outline-none border-none text-md"
            >
              <span>Enquire Us</span>
            </Button>
          </div>
        </MobileNav>
      </div>
    </Navbar>
  );
}
