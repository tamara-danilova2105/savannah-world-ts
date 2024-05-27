import { ReactNode } from "react";
import { RouteProps } from "react-router-dom";

export type AppRoutesProps = RouteProps & {
    path: string;
    element: ReactNode; 
    navlink?: string;
    adminOnly?: boolean;
}