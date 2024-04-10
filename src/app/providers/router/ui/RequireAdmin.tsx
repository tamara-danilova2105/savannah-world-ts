import { getRouteMain } from "@/shared/const/router";
import { Navigate, useLocation } from "react-router";

interface RequireAdminProps {
    children: JSX.Element;
    admin: boolean;
}

export const RequireAdmin = ({ children, admin }: RequireAdminProps) => {
    const location = useLocation();

    if (!admin) {
        return <Navigate to={getRouteMain()} state={{ from: location }} replace />
    }

    return children;
}
