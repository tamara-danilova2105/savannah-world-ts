import { NavbarDesktop } from "@/features/Navbar";
import { BrowserView } from "react-device-detect";

export const HeaderMain = () => {
    return (
        <BrowserView>
            <NavbarDesktop />
        </BrowserView>
    );
};