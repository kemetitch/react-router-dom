import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Aside from "../Aside";

const LearnLayout = () => {
  return (
    <>
      <Navbar />
      <div className="flex items-center gap-16 ">
        <Aside />
        <Outlet />
      </div>
    </>
  );
};

export default LearnLayout;
