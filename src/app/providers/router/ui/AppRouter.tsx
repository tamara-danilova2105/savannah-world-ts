import { Suspense, useCallback } from "react"
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from "../config/routerConfig";
import { RequireAdmin } from "./RequireAdmin";
import { AppRoutesProps } from "../../../../shared/type/router";

const AppRouter = () => {

    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const element = (
            <Suspense fallback='...'>
                {route.element}
            </Suspense>
        );

        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.adminOnly
                    ? <RequireAdmin admin={route.adminOnly}>
                        {element}
                    </RequireAdmin>
                    : element
                }
            />
        );
    }, []);

    return (
        <Routes>
            {Object.values(routeConfig).map(renderWithWrapper)}
        </Routes>
    );
};

export default AppRouter;