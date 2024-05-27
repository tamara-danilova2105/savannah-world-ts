import { ReactNode } from "react";
import { RouteProps } from "react-router-dom";

export type AppRoutesProps = RouteProps & {
    element: ReactNode; 
    adminOnly?: boolean;
    navlink?: string;
}