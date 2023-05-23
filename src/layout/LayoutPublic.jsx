import MainBackground from "../components/MainBackground";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const LayoutPublic = () => {
    return (
        <>
            <MainBackground />
            <Outlet />
            <Footer />
        </>
    );
};

export default LayoutPublic;
