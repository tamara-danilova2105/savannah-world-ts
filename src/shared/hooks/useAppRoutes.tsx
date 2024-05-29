import { useMemo } from "react"
import { AppRoutesProps } from "../type/router";
import { AppRouters } from "../const/router";

export const useAppRoutes = (
  routeConfig: Record<AppRouters, AppRoutesProps>,
  includeIcons = false
) => {
  return useMemo(() => {
    return Object.values(routeConfig)
      .filter(route => !route.adminOnly)
      .map(route => ({
        path: route.path,
        navlink: route.navlink,
        icon: includeIcons ? route.icon : null
      }));
  }, [routeConfig, includeIcons]);
};