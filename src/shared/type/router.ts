import { ReactNode } from "react";

export type AppRoutesProps = {
    path: string;
    element?: ReactNode; 
    navlink?: string;
    adminOnly?: boolean;
    icon?: ReactNode;
}