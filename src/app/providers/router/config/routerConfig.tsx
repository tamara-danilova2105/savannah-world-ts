import { AdminPanelPage } from "@/pages/AdminPanelPage";
import { CatalogPage } from "@/pages/CatalogPage";
import { MainPage } from "@/pages/MainPage";
import { AppRouters, getRouteAdminPanel, getRouteCatalog, getRouteMain } from "@/shared/const/router";
import { AppRoutesProps } from "@/shared/type/router";

export const routeConfig: Record<AppRouters, AppRoutesProps> = {
    [AppRouters.MAIN]: {
        path: getRouteMain(),
        element: <MainPage />,
    },
    [AppRouters.CATALOG]: {
        path: getRouteCatalog(),
        element: <CatalogPage />,
    },
    [AppRouters.ADMIN_PANEL]: {
        path: getRouteAdminPanel(),
        element: <AdminPanelPage />,
        adminOnly: true,
    },
}