import { CatalogPage } from "@/pages/CatalogPage";
import { MainPage } from "@/pages/MainPage";
import { PetsPage } from "@/pages/PetsPage/ui/PetsPage";
import { catalogIcon, homeIcon, petsIcon } from "@/shared/assets/svg/navbarIcons";
import { AppRouters, getRouteCatalog, getRouteMain, getRoutePets } from "@/shared/const/router";
import { AppRoutesProps } from "@/shared/type/router";

export const routeConfig: Record<AppRouters, AppRoutesProps> = {
    [AppRouters.MAIN]: {
        path: getRouteMain(),
        element: <MainPage />,
        navlink: 'главная',
        icon: homeIcon()
    },
    [AppRouters.CATALOG]: {
        path: getRouteCatalog(),
        element: <CatalogPage />,
        navlink: 'котята',
        icon: catalogIcon(),
    },
    [AppRouters.PETS]: {
        path: getRoutePets(),
        element: <PetsPage />,
        navlink: 'питомцы',
        icon: petsIcon(),
    },
}