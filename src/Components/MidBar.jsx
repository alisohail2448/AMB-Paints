import React, { useEffect, useState } from "react";
import { Button, Navbar, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const MidBar = () => {
  const [close, setClose] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    setClose(true);
  }, []);
  return (
    <Navbar
      className={`bg-purple-500 py-1 border-none outline-none transition-all  ${
        close ? "flex" : "hidden"
      } `}
    >
      <div className="container text-center flex items-center justify-between mx-auto max-w-screen-xl py-4 px-4">
        <Typography className="font-[600] text-[16px] sm:text-[20px]">
          Our Speciality in Talk to us about your specialized requirements.
        </Typography>
        <Button
          onClick={()=> navigate('/contact')}
          variant="gradient"
          size="sm"
          className="hidden lg:inline-block hover:shadow-lg  hover:border hover:border-black hover:bg-transparent hover:text-[#ffffff] rounded-md transition-all text-md bg-[#4d3286] text-white outline-none border-none"
        >
          <span>Contact Us</span>
        </Button>
      </div>
    </Navbar>
  );
};

export default MidBar;
