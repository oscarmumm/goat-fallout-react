import MainBackground from "../components/MainBackground";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const LayoutPublic = () => {
    return (
        <>
            <MainBackground />
            <Outlet />
            <Navbar />
        </>
    );
};

export default LayoutPublic;
