import { Navigate, useLocation } from "react-router";
import { getRouteMain } from "../../../../shared/const/router";

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
