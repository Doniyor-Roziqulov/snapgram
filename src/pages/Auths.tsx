import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../redux";

const Auths = () => {
    const token = useSelector((state: RootState) => state.auth.token);
    console.log(token);

    if (!token) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
};

export default Auths;
