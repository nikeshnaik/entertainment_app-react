import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { isLogin } from "../features/globalState/globalStateSlice";

function RequireAuth() {

    let isLoggedIn = useSelector(isLogin)
    let location = useLocation();

    if (!isLoggedIn) {
        return <Navigate to="/login" state={{ from: location }} />
    }

    return <Outlet />

}

export default RequireAuth;