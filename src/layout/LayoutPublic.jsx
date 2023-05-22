import MainBackground from "../components/MainBackground";
import { Outlet } from "react-router-dom";

const LayoutPublic = () => {
    return (
        <>
            <MainBackground />
            <Outlet />
        </>
    );
};

export default LayoutPublic;
